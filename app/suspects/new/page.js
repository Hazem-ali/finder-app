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

  const [name, setName] = useState(null);
  const [status, setStatus] = useState(null);
  const [where, setWhere] = useState(null);
  const [notes, setNotes] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImageName(file.name);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", name);
    formData.append("status", status);
    formData.append("where", where);
    formData.append("notes", notes);

    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
    // try {
    //   const res = await fetch("/api/submit-suspect", {
    //     method: "POST",
    //     body: formData,
    //   });
    //   if (res.ok) {
    //     console.log("Form submitted successfully");
    //   } else {
    //     console.error("Form submission failed");
    //   }
    // } catch (error) {
    //   console.error("An error occurred:", error);
    // }
  };

  return (
    <form
      className="flex flex-col items-center"
      onSubmit={handleSubmit}
      encType="multipart/form-data"
    >
      <div className="flex md:flex-row flex-col m-10 gap-5 justify-center items-center">
        <ImageUploadCard
          image={image}
          imageName={imageName}
          onImageChange={handleImageChange}
        />
        <div className="flex flex-col gap-5 max-h-fit">
          <Input placeholder="Name" changeHandler={setName} />
          <Input placeholder="Status" changeHandler={setStatus} />
          <Textarea
            placeholder="Where did you find?"
            changeHandler={setWhere}
          />
          <Textarea placeholder="Notes...." changeHandler={setNotes} />
        </div>
      </div>
      <Button
        text="Submit"
        customClasses={`${btnStyles.bigButton} ${btnStyles.bgSuccess}`}
      />
    </form>
  );
};

export default NewSuspect;
