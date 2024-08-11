"use client";
import React, { useEffect, useState } from "react";
import suspectService from "@/services/suspectService";
import SuspectCards from "./suspectCards";
import { Suspense } from "react";
import Button from "@/common/button";

const SuspectList = () => {
  const [suspectList, setSuspectList] = useState([]);
  useEffect(() => {
    async function getSuspectList() {
      try {
        const { data } = await suspectService.getSuspectListService();
        setSuspectList(data);
      } catch (error) {
        console.log(error);
      }
    }
    getSuspectList();
  }, []);
  return (
    <div>
      <Suspense fallback={<Button text={"Loading..."} />}>
        <SuspectCards suspectList={suspectList} />
      </Suspense>
    </div>
  );
};

export default SuspectList;
