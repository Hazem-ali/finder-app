"use client";
import React, { useState } from "react";
import Button from "@/common/button";
import btnStyles from "@/styles/global/button.module.css";
import ImageUploadCard from "../../../common/imageUploadCard";
import Input from "../../../common/input";
import Textarea from "@/common/textarea";

const NewSuspect = () => {
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      setImageName(file.name);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex md:flex-row flex-col m-10 gap-5 justify-center items-center  ">
        <ImageUploadCard
          image={image}
          imageName={imageName}
          onImageChange={handleImageChange}
        />
        <div className="flex flex-col gap-5 max-h-fit">
          <Input placeholder="Name" error={"Email already"} />
          <Input placeholder="Status" />
          <Textarea placeholder="Where did you find?" />
          <Textarea placeholder="Notes...." />
        </div>
      </div>
    </div>
  );
};

export default NewSuspect;
