"use client";
import React, { useState } from "react";
import Button from "@/common/button";
import btnStyles from "@/styles/global/button.module.css";
import ImageUploadCard from "@/common/imageUploadCard";
import Input from "@/common/input";
import Textarea from "@/common/textarea";
import Select from "@/common/select";
import suspectService from "@/services/suspectService";
import { STATUS_OPTIONS } from "@/constants/config";
import { createSuspectSchema } from "@/validations/createSuspectSchema";
import DatePicker from "@/common/datePicker";

const NewSuspect = () => {
  const [image, setImage] = useState();
  const [imageName, setImageName] = useState("");

  const [name, setName] = useState();
  const [national_id, setNationalId] = useState();
  const [time, setTime] = useState();
  const [status, setStatus] = useState();
  const [where, setWhere] = useState();
  const [notes, setNotes] = useState();
  const [errors, setErrors] = useState({});

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImageName(file.name);
    }
    return
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    const inputData = {
      image,
      name,
      time,
      national_id,
      status,
      where,
      notes,
    };

    const { error } = createSuspectSchema.validate(inputData, {
      abortEarly: false,
    });

    if (error) {
      const errorMessages = {};
      error.details.forEach((err) => {
        errorMessages[err.context.key] = err.message;
      });
      setErrors(errorMessages);
      return;
    }

    const formData = new FormData();
    formData.append("photos", image);
    formData.append("name", name);
    formData.append("status", status);
    formData.append("where", where);
    formData.append("notes", notes);
    formData.append("national_id", national_id);
    formData.append("time", time);

    try {
      const res = await suspectService.createSuspectService(formData);
      console.log("Form submitted successfully", res.data);
    } catch (error) {
      if (error.response) {
        console.error("Form submission failed", error.response.data);
      } else {
        console.error("An error occurred:", error.message);
      }
    }
  };

  return (
    <form
      className="flex flex-col items-center"
      onSubmit={handleSubmit}
      encType="multipart/form-data"
    >
      <div className="flex md:flex-row flex-col m-10 gap-5 justify-center items-center">
        <ImageUploadCard
          image={image}
          imageName={imageName}
          onImageChange={handleImageChange}
          error={errors.image}
        />
        <div className="flex flex-col gap-5 max-h-fit">
          <Select
            name="Status"
            options={STATUS_OPTIONS}
            onSelect={setStatus}
            error={errors.status}
          />
          <Input 
            placeholder="Name"
            changeHandler={setName}
            error={errors.name}
          />
          
          <DatePicker
            placeholder="Time found / Last seen time"
            time={true}
            changeHandler={setTime}
            error={errors.time}
          />

          <Input
            placeholder="National ID"
            changeHandler={setNationalId}
            error={errors.national_id}
          />
          <Textarea
            placeholder="Last seen address"
            changeHandler={setWhere}
            error={errors.where}
          />
          <Textarea
            placeholder="Notes...."
            changeHandler={setNotes}
            error={errors.notes}
          />
        </div>
      </div>
      <Button
        text="Submit"
        customClasses={`${btnStyles.bigButton} ${btnStyles.bgSuccess}`}
        // onClick={handleSubmit}
      />
    </form>
  );
};

export default NewSuspect;
