import Card from "@/common/card";
import { STATUS_MISSING } from "@/constants/config";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ImageDetailsCard = ({ suspect }) => {
  const statusBgColor =
    suspect.status === STATUS_MISSING
      ? "bg-yellow-300 shadow-yellow-100"
      : "bg-green-300 shadow-green-100";
  const cardBgColor =
    suspect.status === STATUS_MISSING ? "bg-yellow-50" : "bg-green-50";
  return (
    <Card
      height="h-full"
      width="w-full"
      customClasses={`m-5 max-w-96 hover:scale-105 duration-300 ${cardBgColor}`}
      key={suspect.id}
    >
      <Link href={`suspects/${suspect.id}`}>
        {/* Image Section */}
        <div className="relative h-96 w-full select-none">
          <Image
            src={suspect?.photo_details[0]?.photo}
            alt={`Image of ${suspect?.name}`}
            fill
            style={{ objectFit: "cover" }}
            priority
            unoptimized
          />
        </div>

        {/* Details Section */}
        <div className="mb-2 mt-5 flex flex-col items-center">
          <span
            className={`${statusBgColor} mb-2 select-none rounded-xl px-6 py-1 font-bold text-black shadow-lg`}
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
        </div>
      </Link>
    </Card>
  );
};

export default ImageDetailsCard;
