import React from "react";
import Divider from "@/common/divider";
import Button from "../../common/button";
import btnStyles from "@/styles/global/button.module.css";

export default function Suspects() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between m-5">
        <h1 className=" text-3xl ">Add new suspect</h1>
        <Button
          text="New"
          customClasses={`w-full grid ${btnStyles.btn} ${btnStyles.bgRed}`}
          href='/suspects/new'
        />
      </div>
      <Divider />
      <h1 className=" text-3xl m-5">Your suspects</h1>
    </div>
  );
}
