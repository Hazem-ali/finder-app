import Card from "@/common/card";
import Image from "next/image";
import React from "react";

const SuspectCard = ({suspect}) => {


  return (
    <Card
      height="h-full"
      width="w-full "
      customClasses="m-5 max-w-96 bg-yellow-50 hover:scale-105 duration-300"
    >
      <div className={`relative w-full h-96 `}>
        <Image
          src={suspect?.photos[0]}
          alt="Example image"
          fill
          style={{ objectFit: "cover" }}
          quality={80}
          priority
        />
      </div>
      <div className="flex flex-col items-center mt-5">
        <div className="flex flex-col items-center my-2">
          <span className="bg-yellow-300 text-black font-bold rounded-3xl px-6 py-1 mb-2 shadow-lg shadow-yellow-100 select-none">
            {suspect.status}
          </span>
          <h2 className="text-lg font-bold">Name: {suspect.name}</h2>
          <p className="text-sm text-gray-600">National ID: {suspect.national_id}</p>
          <p className="text-sm text-gray-600">
            Last Seen Address: {suspect.where}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default SuspectCard;
