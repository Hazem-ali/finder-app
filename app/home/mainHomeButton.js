"use client";
import React from "react";
import ProtectedComponent from "../../common/protectedComponent";
import Button from "@/common/button";
import btnStyles from "../../styles/global/button.module.css";
import Image from "next/image";
import PlusIcon from "../../icons/plusIcon";

export default function MainHomeButton() {
  return (
    <ProtectedComponent
      component={
        <div className="flex gap-5">
          <Button
            text={
              <div className="flex items-center justify-center">
                <span className="mr-2">
                  <Image
                    src="/images/search-icon.svg"
                    width="20"
                    height="20"
                    alt="Search Icon"
                  />
                </span>
                Find a contact
              </div>
            }
            href="/find"
            customClasses={`text-black z-20 ${btnStyles.bgRed} ${btnStyles.btn}`}
          />
          <Button
            text={
              <div className="flex items-center justify-center">
                <span className="mr-2">
                  <PlusIcon />
                </span>
                New contact
              </div>
            }
            href="/contacts/new"
            customClasses={`text-black z-20 ${btnStyles.bgRed} ${btnStyles.btn}`}
          />
        </div>
      }
      fallback={
        <Button
          text="Get Started"
          // customClasses={`text-black z-20 ${btnStyles.bgRed} ${btnStyles.btn}`}
          className={`z-20 ${btnStyles.bgRed} ${btnStyles.bigButton}`}
          href="/login"
        />
      }
    />
  );
}
