"use client";
import Card from "@/common/card";
import Image from "next/image";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import btnStyles from "@/styles/global/button.module.css";
import Button from "@/common/button";
import { PLACEHOLDER_IMAGE } from "@/constants/config";
const ContactDetail = (props) => {
  const { contactId } = props.params;

  // Get all contacts from Redux store
  const contacts = useSelector((state) => state.contacts);
  const searchResults = useSelector((state) => state.searchResults);

  let contact;
  if (contacts) {
    contact = contacts.find(
      (c) => c.id === Number(contactId) || c.id === contactId,
    );
  }

  if (searchResults) {
    contact = searchResults.find(
      (c) => c.id === Number(contactId) || c.id === contactId,
    );
  }

  useEffect(() => {
    // handle when contactid is not in redux, to fetch from backend
    
  }, [])
  

  return (
    <div className="mt-5 flex justify-center">
      <Card height="h-full" width="w-2/3" key={contact?.id}>
        {/* Image Section */}
        <div className="m-5 flex h-full flex-col items-center md:flex-row md:items-stretch">
          <div className="relative m-2 h-96 w-3/4">
            <Image
              src={contact?.image || PLACEHOLDER_IMAGE}
              alt={`Image of ${contact?.name}`}
              fill
              style={{ objectFit: "contain" }}
              priority
              unoptimized
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
    </div>
  );
};

export default ContactDetail;
