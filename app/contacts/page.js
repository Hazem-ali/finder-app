import React from "react";
import Divider from "@/common/divider";
import Button from "../../common/button";
import btnStyles from "@/styles/global/button.module.css";
import ContactList from "../../components/contactList";

export default function Contacts() {
  return (
    <div className="flex flex-col">
      <div className="m-5 flex justify-between">
        <h1 className="text-3xl">Add new contact</h1>
        <Button
          text="New"
          customClasses={` ${btnStyles.btn} ${btnStyles.bgRed}`}
          href="/contacts/new"
        />
      </div>
      <Divider />
      <h1 className="m-5 text-3xl">Your contacts</h1>
      <ContactList />
    </div>
  );
}
