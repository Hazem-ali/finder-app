"use client";
import React, { useState } from "react";
import Radio from "../common/radio";
import ImageUploadCard from "@/common/imageUploadCard";
import { SEARCH_IMAGE, SEARCH_NAME_OR_NATIONALID } from "@/constants/config";
import Input from "@/common/input";
import Button from "@/common/button";
import btnStyles from "@/styles/global/button.module.css";
import Image from "next/image";
import Divider from "../common/divider";
import SearchResults from "./searchResults";
import searchService from "@/services/searchService";
import { useDispatch } from "react-redux";
import { setSearchResult } from "@/redux/features/contacts/contactsSlice";

const searchOptions = [SEARCH_IMAGE, SEARCH_NAME_OR_NATIONALID];

export default function SearchContact() {
  const [searchChoice, setSearchChoice] = useState(SEARCH_IMAGE);
  const [searchInput, setSearchInput] = useState();
  const [image, setImage] = useState();
  const [imageName, setImageName] = useState("");


  const dispatch = useDispatch();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImageName(file.name);
    }
    return;
  };

  const handleSelect = (choice) => {
    setSearchChoice(choice);
  };

  const handleSearch = async () => {
    if (searchChoice === SEARCH_IMAGE) {
      // Send the image to the ML Search to retrieve results
      const response = await searchService.findByImage(image);
      if (response?.data) {
        dispatch(setSearchResult({ data: response.data }));
      }
    } else {
      const response = await searchService.findByNameOrNationalId(searchInput);
      if (response?.data) {
        dispatch(setSearchResult({ data: response.data }));
      }
    }
  };

  const handleKeyPress = (event) => {
    // look for the `Enter` keyCode
    if (event.keyCode === 13 || event.which === 13) {
      handleSearch();
    }
  };

  const searchContent =
    searchChoice === SEARCH_IMAGE ? (
      <ImageUploadCard
        image={image}
        imageName={imageName}
        onImageChange={handleImageChange}
      />
    ) : (
      <Input
        placeholder={`Enter ${searchChoice.toLowerCase()}`}
        changeHandler={setSearchInput}
        onKeyPress={handleKeyPress}
      />
    );

  const searchButton = (
    <Button
      text={
        <div className="flex items-center justify-center">
          Search
          <span className="ml-2">
            <Image
              src="/images/search-icon.svg"
              width="20"
              height="20"
              alt="Search Icon"
            />
          </span>
        </div>
      }
      onClick={handleSearch}
      customClasses={`text-black z-20 ${btnStyles.bgRed} ${btnStyles.btn}`}
    />
  );

  return (
    <div>
      <div className="flex flex-col items-center">
        <h1 className="my-2 text-center text-2xl text-fuschia"> Search by</h1>
        <Radio
          horizontal
          choices={searchOptions}
          onChange={handleSelect}
          defaultValue={searchChoice}
        />

        <div className="mb-5">{searchContent}</div>

        {searchButton}
      </div>

      <Divider />

      <SearchResults />
    </div>
  );
}
