import React from "react";
import Divider from "@/common/divider";
import Button from "../../common/button";
import btnStyles from "@/styles/global/button.module.css";
import SuspectList from "../../components/suspectList";
export default function Suspects() {
  return (
    <div className="flex flex-col">
      <div className="m-5 flex justify-between">
        <h1 className="text-3xl">Add new suspect</h1>
        <Button
          text="New"
          customClasses={` ${btnStyles.btn} ${btnStyles.bgRed}`}
          href="/suspects/new"
        />
      </div>
      <Divider />
      <h1 className="m-5 text-3xl">Your suspects</h1>
      <SuspectList />
    </div>
  );
}
