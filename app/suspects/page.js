//  TODO convert into serverside element
"use client";
import React, { useEffect, useState } from "react";
import Divider from "@/common/divider";
import Button from "../../common/button";
import btnStyles from "@/styles/global/button.module.css";
import SuspectCard from "@/components/suspectCard";

import suspectService from "@/services/suspectService";
export default function Suspects() {
  const [suspectList, setSuspectList] = useState([]);
  useEffect(() => {
    const response = suspectService
      .getSuspectListService()
      .then((response) => {
        console.log(response);
        setSuspectList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex justify-between m-5">
        <h1 className=" text-3xl ">Add new suspect</h1>
        <Button
          text="New"
          customClasses={`w-full grid ${btnStyles.btn} ${btnStyles.bgRed}`}
          href="/suspects/new"
        />
      </div>
      <Divider />
      <h1 className=" text-3xl m-5">Your suspects</h1>

      <div className="m-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 items-center justify-items-center">
        {suspectList &&
          suspectList.map &&
          suspectList.map((suspect) => (
            <SuspectCard key={suspect._id} suspect={suspect} />
          ))}

        {/* <SuspectCard></SuspectCard>
        <SuspectCard></SuspectCard>
        <SuspectCard></SuspectCard>
        <SuspectCard></SuspectCard>
        <SuspectCard></SuspectCard>
        <SuspectCard></SuspectCard>
        <SuspectCard></SuspectCard>
        <SuspectCard></SuspectCard>
        <SuspectCard></SuspectCard> */}
      </div>
    </div>
  );
}
