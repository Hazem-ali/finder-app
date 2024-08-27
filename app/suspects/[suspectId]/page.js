"use client";
import Card from "@/common/card";
import { STATUS_MISSING } from "@/constants/config";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import btnStyles from "@/styles/global/button.module.css";
import Button from "@/common/button";
const SuspectDetail = (props) => {
  const { suspectId } = props.params;

  // Get all suspects from Redux store
  const suspects = useSelector((state) => state.suspects);
  const suspect = suspects.find(
    (s) => s.id === Number(suspectId) || s.id === suspectId,
  );
  const statusBgColor =
    suspect.status === STATUS_MISSING
      ? "bg-yellow-300 shadow-yellow-100"
      : "bg-green-300 shadow-green-100";
  const cardBgColor =
    suspect.status === STATUS_MISSING ? "bg-yellow-50" : "bg-green-50";
  console.log(suspect);
  return (
    <div className="mt-5 flex justify-center">
      <Card
        height="h-full"
        width="w-2/3"
        customClasses={`  ${cardBgColor}`}
        key={suspect.id}
      >
        {/* Image Section */}
        <div className="m-5 flex h-full flex-col items-center md:flex-row md:items-stretch">
          <div className="relative m-2 h-96 w-3/4">
            <Image
              src={suspect?.photo_details[0]?.photo}
              alt={`Image of ${suspect?.name}`}
              fill
              style={{ objectFit: "contain" }}
              priority
              unoptimized
            />
          </div>

          {/* Details Section */}
          <div className="mx-5 my-2 flex w-1/3 flex-col justify-between">
            <div className="flex flex-col">
              <span
                className={`${statusBgColor} mb-2 mr-auto select-none rounded-xl px-6 py-1 font-bold text-black shadow-lg`}
              >
                {suspect.status}
              </span>
              <h2 className="text-lg font-bold">Name: {suspect.name}</h2>
              {suspect.national_id && (
                <p className="text-sm text-gray-600">
                  National ID: {suspect.national_id}
                </p>
              )}
              <p className="text-sm text-gray-600">
                Last Seen Address: {suspect.where}
              </p>
              <p className="text-sm text-gray-600">
                Informer: {suspect.informer}
              </p>
            </div>
            <div className="w-full">
              <Button
                text="Mark Resolved"
                className={` ${btnStyles.btn} ${btnStyles.bgSuccess}`}
              />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SuspectDetail;
