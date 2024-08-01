"use client";
import React, { useRef } from "react";
import Card from "./card";
import Button from "@/common/button";
import Image from "next/image";
import { DEFAULT_UPLOAD_IMAGE } from "@/constants/config";

const ImageUploadCard = ({ image,imageName, onImageChange }) => {
  const inputRef = useRef();

  const handleUpload = () => {
    inputRef.current.click();
  };

  const imageUrl = image ? URL.createObjectURL(image) : DEFAULT_UPLOAD_IMAGE;
  return (
    <Card height="h-[55vh]" width="w-1/3">
      <div
        className={`relative w-auto h-96 cursor-pointer `}
        onClick={handleUpload}
      >
        <Image
          src={imageUrl}
          alt="Example image"
          layout="fill"
          objectFit="contain"
          quality={80}
        />
      </div>
      <div className="flex flex-col items-center  ">
          {imageName && (
            <div className="my-2 text-sm text-gray-600">
              {imageName}
            </div>
          )}
        <div className="flex  items-center my-2">
          <Button text="Upload" onClick={handleUpload} />
          <h1 className="text-2xl mx-3">an image </h1>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            ref={inputRef}
            onChange={onImageChange}
          />
        </div>
      </div>
    </Card>
  );
};

export default ImageUploadCard;
