import NewSuspectForm from "@/components/newSuspectForm";
import React from "react";

const NewSuspect = () => {
  return (
    <div className="mt-8 flex flex-col items-center">
      <h2 className="text-center text-3xl ">Add New Suspect</h2>
      <NewSuspectForm />
    </div>
  );
};

export default NewSuspect;
