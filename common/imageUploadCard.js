"use client";
import React, { useRef } from "react";
import Card from "./card";
import Button from "@/common/button";
import Image from "next/image";
import { DEFAULT_UPLOAD_IMAGE } from "@/constants/config";
import Message from "./message";

const ImageUploadCard = ({ image, imageName, onImageChange, error }) => {
  const inputRef = useRef();

  const handleUpload = () => {
    inputRef.current.click();
  };

  const imageUrl = image ? URL.createObjectURL(image) : DEFAULT_UPLOAD_IMAGE;
 

  return (
    <div className="flex flex-col items-start">
      <Card height="h-full" customClasses="min-w-96 bg-gray-200">
        <div
          className={`relative h-96 w-auto cursor-pointer`}
          onClick={handleUpload}
        >
          <Image
            src={imageUrl}
            alt="Example image"
            fill
            style={{ objectFit: "contain" }}
            quality={80}
            priority
          />
        </div>
        <div className="mb-10 flex flex-col items-center">
          {imageName && (
            <div className="my-2 text-sm text-gray-600">{imageName}</div>
          )}
          <div className="my-2 flex items-center">
            <Button text="Upload" onClick={handleUpload} type="button" />
            <h1 className="mx-3 text-2xl">an image </h1>
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
      {error && <Message type="error">{error}</Message>}
    </div>
  );
};

export default ImageUploadCard;
