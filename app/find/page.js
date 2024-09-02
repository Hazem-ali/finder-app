import React from "react";
import SearchContact from "../../components/searchContact";
import Divider from "../../common/divider";
import { ReduxProvider } from "@/redux/provider";

export default function Find() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-500">
      <h1 className="my-6 text-center text-3xl font-bold">Find a contact</h1>

      <Divider />
      
      <ReduxProvider>
        <SearchContact />
      </ReduxProvider>
    </div>
  );
}
