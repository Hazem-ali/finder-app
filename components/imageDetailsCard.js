import Card from "@/common/card";
import { PLACEHOLDER_IMAGE } from "@/constants/config";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Status from "./Status";
import Label from "@/common/label";

const ImageDetailsCard = ({ item }) => {
  return (
    <Card
      height="h-full"
      width="w-full"
      customClasses={`m-5 max-w-96 hover:scale-105 duration-300 bg-white `}
      key={item.id}
    >
      <Link href={`contacts/${item.id}`}>
        {/* Image Section */}

        <div className="relative h-96 w-full select-none">
          <Image
            src={item?.image || PLACEHOLDER_IMAGE}
            alt={`Image of ${item?.name}`}
            fill
            style={{ objectFit: "cover" }}
            priority
            unoptimized
          />
        </div>

        {/* Details Section */}
        <div className="mb-2 mt-5 flex flex-col items-center">
          <h2 className="text-lg font-bold">Name: {item.full_name}</h2>
          {item.national_id && (
            <p className=" my-2 text-sm text-gray-600">
              National ID: {item.national_id}
            </p>
          )}
          
          {item.status && <Status status={item.status} />}
          {item.confidence && (
            <div className="my-2">
              <Label text={`Confidence: ${item.confidence} %`}/>
            </div>
          )
          }

        </div>
      </Link>
    </Card>
  );
};

export default ImageDetailsCard;
