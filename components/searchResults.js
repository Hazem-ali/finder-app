import React, { Suspense } from "react";
import ContactCards from "./contactCards";
import { useSelector } from "react-redux";

export default function SearchResults({ show }) {
  const contacts = useSelector((state) => state.contacts.searchResults);

  let resultMessage = "";

  if (contacts.length === 0) {
    resultMessage = "No results";
  } else if (contacts.length === 1) {
    resultMessage = `Found ${contacts.length} contact`;
  } else {
    resultMessage = `Found ${contacts.length} contacts`;
  }

  return (
    show && (
      <div className="flex w-screen flex-col">
        <ContactCards contactList={contacts} resultMessage={resultMessage} />
      </div>
    )
  );
}
