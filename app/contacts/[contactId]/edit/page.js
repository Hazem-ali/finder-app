import NewContactForm from "@/components/newContactForm";
import React from "react";

export default function EditContact({ params }) {
  return (
    <div className="mt-8 flex flex-col items-center">
      <h2 className="text-center text-3xl">Edit Contact</h2>
      <NewContactForm contactId={params.contactId} />
    </div>
  );
}
