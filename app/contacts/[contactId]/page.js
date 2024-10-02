"use client";
import Card from "@/common/card";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import btnStyles from "@/styles/global/button.module.css";
import Button from "@/common/button";
import {
  PLACEHOLDER_IMAGE,
  STATUS_FOUND,
  STATUS_MISSING,
} from "@/constants/config";
import {
  addContactIfNotExists,
  getContactById,
} from "@/redux/features/contacts/contactsSlice";
import contactService from "@/services/contactService";
import Modal from "../../../common/modal";
import searchService from "@/services/searchService";
import { useRouter } from "next/navigation";
import Label from "@/common/label";
import Status from "@/components/Status";
const ContactDetail = (props) => {
  const { contactId } = props.params;

  const reduxContact = useSelector((state) => getContactById(state, contactId));
  const [contact, setContact] = useState(reduxContact);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const router = useRouter();
  const dispatch = useDispatch();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const fetchContact = async (contactId) => {
    if (contactId && !reduxContact) {
      try {
        const { data } = await contactService.getContact(contactId);
        setContact(data);
      } catch (error) {
        console.error("Failed to fetch contact:", error);
      }
    }
  };

  const getParentByNationalId = async (national_id) => {
    const { data } = await searchService.findByNameOrNationalId(national_id);
    return data[0];
  };

  const goToParentPage = async (national_id) => {
    const parent = await getParentByNationalId(national_id);
    console.log(parent);
    dispatch(addContactIfNotExists(parent));
    router.push(`/contacts/${parent.id}`);
  };

  useEffect(() => {
    fetchContact(contactId);
  }, []);

  return (
    <div className="mt-5 flex justify-center">
      <Card
        height="h-3/4"
        width="w-3/4"
        key={contact?.id}
        customClasses="bg-rose-100 my-10"
      >
        {/* Image Section */}
        <div className="flex h-full w-full flex-col items-center md:flex-row md:items-stretch">
          <div className="relative m-8 min-h-32 min-w-32 cursor-pointer rounded-full">
            <Image
              src={contact?.image || PLACEHOLDER_IMAGE}
              alt={`Image of ${contact?.name}`}
              width={300}
              height={300}
              style={{ objectFit: "cover", borderRadius: "100rem" }}
              priority
              unoptimized
              onClick={openModal}
            />
          </div>

          {/* Details Section */}
          <div className="my-8 flex w-2/3 flex-col justify-between text-center md:text-left">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-bold">{contact?.full_name}</h2>
              {contact?.national_id && (
                <p>National ID: {contact.national_id}</p>
              )}
              {contact?.father && (
                <p onClick={() => goToParentPage(contact.father)}>
                  Father: {contact.father}
                </p>
              )}
              {contact?.mother && (
                <p onClick={() => goToParentPage(contact.mother)}>
                  Mother: {contact.mother}
                </p>
              )}
              {contact?.gender && (
                <p>Gender: {contact.gender === "m" ? "Male" : "Female"}</p>
              )}
              {contact?.dob && <p>Date of Birth: {contact.dob}</p>}

              {contact?.status && <Status status={contact?.status} />}
            </div>
          </div>
        </div>
        <div className="my-5 flex w-full min-w-fit flex-col items-center justify-center gap-2 md:flex-row">
          <Button
            text="Edit Contact"
            className={` ${btnStyles.btn} ${btnStyles.bgPrimary}`}
            href={`/contacts/${contactId}/edit`}
          />
        </div>
      </Card>

      <Modal show={isModalOpen} onClose={closeModal}>
        <Image
          src={contact?.image || PLACEHOLDER_IMAGE}
          alt={`Full-size image of ${contact?.name}`}
          width={500}
          height={500}
          style={{ objectFit: "contain" }}
          priority
          unoptimized
        />
      </Modal>
    </div>
  );
};

export default ContactDetail;
