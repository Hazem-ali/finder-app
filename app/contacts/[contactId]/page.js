"use client";
import Card from "@/common/card";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import btnStyles from "@/styles/global/button.module.css";
import Button from "@/common/button";
import { GENDERS, PLACEHOLDER_IMAGE } from "@/constants/config";
import { getContactById } from "@/redux/features/contacts/contactsSlice";
import contactService from "@/services/contactService";
import Modal from "../../../common/modal";
const ContactDetail = (props) => {
  const { contactId } = props.params;

  const reduxContact = useSelector((state) => getContactById(state, contactId));
  const [contact, setContact] = useState(reduxContact);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    fetchContact(contactId);
  }, []);

  return (
    <div className="mt-5 flex justify-center">
      <Card
        height="h-full"
        width="w-3/4"
        key={contact?.id}
        customClasses="bg-rose-100"
      >
        {/* Image Section */}
        <div className="flex h-full w-full flex-col items-center md:flex-row md:items-stretch">
          <div className="relative m-8 min-h-32 min-w-32 cursor-pointer rounded-full">
            <Image
              src={contact?.image || PLACEHOLDER_IMAGE}
              alt={`Image of ${contact?.name}`}
              width={300}
              height={300}
              style={{ objectFit: "cover", borderRadius:"100rem" }}
              priority
              unoptimized
              onClick={openModal}
            />
          </div>

          {/* Details Section */}
          <div className="my-8 flex w-2/3 flex-col justify-between text-center md:text-left">
            <div className="flex flex-col gap-1">
              <h2 className="text-xl font-bold">{contact?.name}</h2>
              {contact?.national_id && (
                <p>
                  National ID: {contact.national_id}
                </p>
              )}
              {contact?.father && (
                <p>
                  Father: {contact.father}
                </p>
              )}
              {contact?.mother && (
                <p>
                  Mother: {contact.mother}
                </p>
              )}
              {contact?.gender && (
                <p>
                  Gender: {contact.gender === "m" ? "Male" : "Female"}
                </p>
              )}
              {contact?.dob && (
                <p>
                  Date of Birth: {contact.dob}
                </p>
              )}
            </div>
          </div>
        </div>
            <div className="my-5 flex w-full min-w-fit flex-col items-center justify-center gap-2 md:flex-row">
              <Button
                text="Edit Contact"
                className={` ${btnStyles.btn} ${btnStyles.bgPrimary}`}
                href={`/contacts/${contactId}/edit`}
              />
              <Button
                text="Mark Missing"
                className={` ${btnStyles.btn} ${btnStyles.bgPrimary}`}
                href={`/contacts/${contactId}/edit`}
              />
              <Button
                text="Mark Found"
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
