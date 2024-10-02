import React from "react";
import ImageDetailsCard from "./imageDetailsCard";

const ContactCards = ({ contactList, resultMessage = "No results" }) => {
  return (
    <div>
      <div className="text-center text-2xl font-bold">{resultMessage}</div>

      <div className="m-5 grid grid-cols-1 items-center justify-items-center gap-10 md:grid-cols-2 lg:grid-cols-3">
        {contactList.map((contact) => (
          <ImageDetailsCard key={contact.id} item={contact} />
        ))}
      </div>
    </div>
  );s
};

export default ContactCards;
