"use client";
import React, { useState } from "react";
import Radio from "../common/radio";
import ImageUploadCard from "@/common/imageUploadCard";
import { SEARCH_IMAGE, SEARCH_NAME_OR_NATIONALID } from "@/constants/config";
import Input from "@/common/input";
import Button from "@/common/button";
import btnStyles from "@/styles/global/button.module.css";
import Image from "next/image";
import SearchResults from "./searchResults";
import searchService from "@/services/searchService";
import { useDispatch } from "react-redux";
import { setSearchResult } from "@/redux/features/contacts/contactsSlice";
import Spinner from "../common/spinner/spinner";
import ModalMessage from "../common/modalMessage";

const searchOptions = [SEARCH_IMAGE, SEARCH_NAME_OR_NATIONALID];

export default function SearchContact() {
  const [searchChoice, setSearchChoice] = useState(SEARCH_IMAGE);
  const [searchInput, setSearchInput] = useState();
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState("");
  const [showSpinner, setShowSpinner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [popupMessage, setPopupMessage] = useState({});

  const dispatch = useDispatch();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImageName(file.name);
    }
    return;
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const showModalMessage = (popupMessage) => {
    setPopupMessage(popupMessage);
    setShowModal(true);
  };

  const handleSelect = (choice) => {
    setSearchChoice(choice);
  };

  const handleSearch = async () => {


    if (searchChoice === SEARCH_IMAGE) {
      if (!image) {
        showModalMessage({
          type: "error",
          title: "error",
          message: "You must provide an image to search",
        });
        return;
      }
      setShowSpinner(true);

      const formData = new FormData();
      formData.append("image", image);
      try {
        const { data } = await searchService.findByImage(formData);
        if (data) {
          dispatch(setSearchResult({ data }));
          setShowSpinner(false);
          setShowSearchResults(true);
        } else {
          dispatch(setSearchResult({ data: [] }));
        }
      } catch (error) {
        setPopupMessage({
          type: "error",
          title: "error",
          message: error.response.data.detail,
        });
        setShowSpinner(false);
        setShowModal(true);
      }
      
      setShowSpinner(false);
    } else {
      if (!searchInput) {
        showModalMessage({
          type: "error",
          title: "error",
          message: "You must provide a Name or National ID",
        });
        return;
      }
      
      setShowSpinner(true);
      try {
        const { data } =
        await searchService.findByNameOrNationalId(searchInput);
        if (data) {
          console.log(data)
          dispatch(setSearchResult({ data }));
          setShowSpinner(false);
          setShowSearchResults(true);
        }
      } catch (error) {
        setPopupMessage({
          type: "error",
          title: "error",
          message: error.response.data.detail,
        });
        setShowSpinner(false);
        setShowModal(true);
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
        onChange={(e) => setSearchInput(e.target.value)}
        onKeyPress={handleKeyPress}
      />
    );

  const searchButton = showSpinner ? (
    <Spinner color="fuschia" />
  ) : (
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
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-center text-2xl text-fuschia"> Search by</h1>

        <Radio
          horizontal
          choices={searchOptions}
          onChange={handleSelect}
          defaultValue={searchChoice}
        />

        <div className="mb-5">{searchContent}</div>
        <div className="mb-8">{searchButton}</div>
        <SearchResults show={showSearchResults} />
      </div>

      {/* Modal */}
      <ModalMessage
        show={showModal}
        message={popupMessage.message}
        title={popupMessage.title}
        type={popupMessage.type}
        onClose={closeModal}
      />
    </div>
  );
}
