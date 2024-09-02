"use client";
import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setContacts } from "@/redux/features/contacts/contactsSlice";
import ContactCards from "./contactCards";
import { Suspense } from "react";
import Button from "@/common/button";
import contactService from "@/services/contactService";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);
  useEffect(() => {
    async function getContactList() {
      if (contacts.length === 0) {
        console.log("Fetching...");
        try {
          const { data } = await contactService.getContactList();
          dispatch(setContacts({ data }));
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      }
    }
    getContactList();
  }, [dispatch]);
  return (
    <div>
      <Suspense fallback={<Button text={"Loading..."} />}>
        <ContactCards contactList={contacts} />
      </Suspense>
    </div>
  );
};

export default ContactList;
