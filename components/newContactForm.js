"use client";
import React, { useEffect, useState } from "react";
import Button from "@/common/button";
import btnStyles from "@/styles/global/button.module.css";
import ImageUploadCard from "@/common/imageUploadCard";
import Input from "@/common/input";
import Select from "@/common/select";
import contactService from "@/services/contactService";
import { GENDERS, STATUS_OPTIONS } from "@/constants/config";
import { createContactSchema } from "@/validations/createContactSchema";
import DatePicker from "@/common/datePicker";
import Toast from "@/common/toast/toast";
import {
  addContactIfNotExists,
  getContactById,
  modifyContact,
  clearSearchResult,
} from "@/redux/features/contacts/contactsSlice";
import { useDispatch, useSelector } from "react-redux";
import { urlToFile } from "@/utils/imageUtils";
import { useRouter } from "next/navigation";
import Spinner from "@/common/spinner/spinner";
import ModalMessage from "@/common/modalMessage";

const NewContactForm = ({ contactId }) => {
  const [name, setName] = useState();
  const [national_id, setNationalId] = useState();
  const [father, setFather] = useState(null);
  const [mother, setMother] = useState(null);
  const [image, setImage] = useState();
  const [imageName, setImageName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("NORMAL");

  const [showModal, setShowModal] = useState(false);
  const [popupMessage, setPopupMessage] = useState({});

  const [errors, setErrors] = useState({});

  const [showSpinner, setShowSpinner] = useState(false);

  const [toastShow, setToastShow] = useState();
  const [toastType, setToastType] = useState("info");
  const [toastMessage, setToastMessage] = useState();

  // In case modifying existing contact, getting contact from redux store
  let fetchedContact = useSelector((state) => getContactById(state, contactId));

  const router = useRouter();
  const dispatch = useDispatch();

  const clearForm = () => {
    setName("");
    setNationalId("");
    setFather("");
    setMother("");
    setDob("");
    setGender("");
    setImage("");
    setImageName("");
  };

  const showModalMessage = (popupMessage) => {
    setPopupMessage(popupMessage);
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  const preloadForm = async () => {
    // Preload contact data in case of modifying contact
    if (contactId) {
      if (!fetchedContact) {
        const { data } = await contactService.getContact(contactId);
        fetchedContact = data;
      }
      setName(fetchedContact.name);
      setNationalId(fetchedContact.national_id);
      setFather(fetchedContact.father?.national_id);
      setMother(fetchedContact.mother?.national_id);
      setDob(fetchedContact.dob);
      setGender(fetchedContact.gender);
      if (fetchedContact.image) {
        setImage(await urlToFile(fetchedContact.image));
      }
      setStatus(fetchedContact.status);
    }
  };

  const showToast = (type, message) => {
    setToastType(type);
    setToastMessage(message);
    setToastShow(true);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImageName(file.name);
    }
    return;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    const dataToValidate = {
      image,
      name,
      national_id,
      gender,
      dob,
    };
    const { error } = createContactSchema.validate(dataToValidate, {
      abortEarly: false,
    });

    if (error) {
      const errorMessages = {};
      error.details.forEach(
        (err) => (errorMessages[err.context.key] = err.message),
      );
      showToast("error", "Please complete the form");
      setErrors(errorMessages);
      return;
    }

    setShowSpinner(true);

    // Preparing data for sending to backend
    const formData = new FormData();
    formData.append("name", name);
    formData.append("national_id", national_id);
    formData.append("father", father);
    formData.append("mother", mother);
    formData.append("image", image);
    formData.append("dob", dob);
    formData.append("gender", gender);
    formData.append("status", status);

    // Sending data to backend and updating Redux
    try {
      if (contactId) {
        const res = await contactService.modifyContact(contactId, formData);

        dispatch(modifyContact(res.data));
        dispatch(clearSearchResult());

        showToast("success", "Contact Modified successfully");

        router.push("/contacts");
      } else {
        const res = await contactService.createContact(formData);

        dispatch(addContactIfNotExists(res.data));

        showToast("success", "Contact Added successfully");

        clearForm();
      }
    } catch (error) {
      console.log("showing error, ", error);
      if (error.response) {
        const errorMessages = {};
        for (const [key, value] of Object.entries(error.response.data)) {
          errorMessages[key] = value;
          if (key === "detail" || key === "message") {
            showToast("error", value);
          }
        }
        setErrors(errorMessages);
      } else {
        showToast("error", "An error occurred");
        console.error("An error occurred:", error.message);
      }
    } finally {
      setShowSpinner(false);
    }
  };

  const submitButton = showSpinner ? (
    <Spinner color="fuschia" />
  ) : (
    <Button
      text="Submit"
      customClasses={`${btnStyles.bigButton} ${btnStyles.bgSuccess}`}
    />
  );

  useEffect(() => {
    preloadForm();
  }, []);

  return (
    <form
      className="flex flex-col items-center"
      onSubmit={handleSubmit}
      encType="multipart/form-data"
    >
      <div className="m-10 flex flex-col items-center justify-center gap-5 md:flex-row">
        <ImageUploadCard
          image={image}
          imageName={imageName}
          onImageChange={handleImageChange}
          error={errors.image}
        />
        <div className="flex max-h-fit flex-col gap-5">
          <Input
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            error={errors.name}
            value={name}
          />

          <Input
            placeholder="National ID"
            onChange={(e) => setNationalId(e.target.value)}
            error={errors.national_id}
            value={national_id}
          />

          <Select
            options={GENDERS}
            onSelect={(item) => setGender(item)}
            name="Select Gender"
            error={errors.gender}
            value={gender}
          />

          <DatePicker
            placeholder="Date of birth"
            changeHandler={setDob}
            format="Y-m-d"
            error={errors.dob}
            value={dob}
          />

          <Input
            placeholder="Father National ID"
            onChange={(e) => setFather(e.target.value)}
            value={father}
          />
          <Input
            placeholder="Mother National ID"
            onChange={(e) => setMother(e.target.value)}
            value={mother}
          />
          {contactId && (
            <Select
              options={STATUS_OPTIONS}
              onSelect={(item) => setStatus(item)}
              name="Status"
              value={status}
            />
          )}
        </div>
      </div>
      <div className="my-5">
        
      {submitButton}
      </div>

      <Toast
        show={toastShow}
        type={toastType}
        message={toastMessage}
        onClose={() => setToastShow(false)}
      />
      <ModalMessage
        show={showModal}
        message={popupMessage.message}
        title={popupMessage.title}
        type={popupMessage.type}
        onClose={closeModal}
      />
    </form>
  );
};

export default NewContactForm;
