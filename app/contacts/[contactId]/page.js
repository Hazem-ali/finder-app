"use client";
import Card from "@/common/card";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import btnStyles from "@/styles/global/button.module.css";
import Button from "@/common/button";
import { PLACEHOLDER_IMAGE } from "@/constants/config";
import { getContactById } from "@/redux/features/contacts/contactsSlice";
import contactService from "@/services/contactService";
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
    // handle when contactid is not in redux, to fetch from backend

    fetchContact(contactId);
  }, []);

  return (
    <div className="mt-5 flex justify-center">
      <Card height="h-full" width="w-2/3" key={contact?.id}>
        {/* Image Section */}
        <div className="m-5 flex h-full flex-col  items-center md:flex-row md:items-stretch">
          <div className="relative m-2 h-96 w-96 ">
            <Image
              src={contact?.image || PLACEHOLDER_IMAGE}
              alt={`Image of ${contact?.name}`}
              fill
              style={{ objectFit: "cover", borderRadius:"100rem" }}
              priority
              unoptimized
              onClick={openModal}
            />
          </div>

          {/* Details Section */}
          <div className="mx-5 my-2 flex w-1/3 flex-col justify-between">
            <div className="flex flex-col">
              <h2 className="text-lg font-bold">Name: {contact?.name}</h2>
              {contact?.national_id && (
                <p className="text-sm text-gray-600">
                  National ID: {contact?.national_id}
                </p>
              )}
            </div>
            <div className="w-full">
              <Button
                text="Edit"
                className={` ${btnStyles.btn} ${btnStyles.bgSuccess}`}
                href={`/contacts/${contactId}/edit`}
              />
            </div>
          </div>
        </div>
      </Card>
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={closeModal}
        >
          <div className="relative p-5 bg-white rounded-lg">
            <Image
              src={contact?.image || PLACEHOLDER_IMAGE}
              alt={`Full-size image of ${contact?.name}`}
              width={500} // or any size you prefer
              height={500} // or any size you prefer
              style={{ objectFit: "contain" }}
              priority
              unoptimized
            />
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white bg-black rounded-full p-2"
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactDetail;
