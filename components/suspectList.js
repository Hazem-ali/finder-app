"use client";
import React, { useEffect } from "react";
import suspectService from "@/services/suspectService";
import { useDispatch, useSelector } from "react-redux";
import { setSuspects } from "@/redux/features/suspects/suspectsSlice";
import SuspectCards from "./suspectCards";
import { Suspense } from "react";
import Button from "@/common/button";

const SuspectList = () => {
  const dispatch = useDispatch();
  const suspects = useSelector((state) => state.suspects);
  useEffect(() => {
    async function getSuspectList() {
      if (suspects.length === 0) {
        console.log("Fetching...")
        try {
          const { data } = await suspectService.getSuspectListService();
          dispatch(setSuspects({ data }));
        } catch (error) {
          console.log(error);
        }
      }
    }
    getSuspectList();
  }, [dispatch, suspects]);
  return (
    <div>
      <Suspense fallback={<Button text={"Loading..."} />}>
        <SuspectCards suspectList={suspects} />
      </Suspense>
    </div>
  );
};

export default SuspectList;
