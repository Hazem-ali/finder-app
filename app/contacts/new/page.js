import NewContactForm from "@/components/newContactForm";
import React from "react";

const NewContact = () => {
  return (
    <div className="mt-8 flex flex-col items-center">
      <h2 className="text-center text-3xl">Add New Contact</h2>
      <NewContactForm />
    </div>
  );
};

export default NewContact;
