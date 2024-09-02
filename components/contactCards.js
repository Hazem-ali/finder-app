import React from "react";
import ImageDetailsCard from "./imageDetailsCard";

const ContactCards = ({ contactList, fallback="No items" }) => {
  return contactList ? (
    <div className="m-5 grid grid-cols-1 items-center justify-center justify-items-center gap-10 md:grid-cols-2 lg:grid-cols-3">
      {contactList.map((contact) => (
        <ImageDetailsCard key={contact.id} item={contact} />
      ))}
    </div>
  ) : (
    <div className="flex justify-center">{fallback}</div>
  );
};

export default ContactCards;
