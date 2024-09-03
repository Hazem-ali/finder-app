import React, { Suspense } from "react";
import ContactCards from "./contactCards";
import Button from "@/common/button";
import { useSelector } from "react-redux";

export default function SearchResults() {

  const contacts = useSelector((state) => state.contacts.searchResults)


  return (
    <div className="flex flex-col">
      <Suspense fallback={<Button text={"Loading..."} />}>
        <ContactCards contactList={contacts} fallback="" />
      </Suspense>
    </div>
  );
}
