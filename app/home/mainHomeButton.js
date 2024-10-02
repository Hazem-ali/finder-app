"use client";
import React from "react";
import ProtectedComponent from "../../common/protectedComponent";
import Button from "@/common/button";
import btnStyles from "../../styles/global/button.module.css";

export default function MainHomeButton() {
  return (
    <ProtectedComponent
      component={
        <Button
          text="Your Added Contacts"
          className={`z-20 ${btnStyles.bgRed} ${btnStyles.bigButton}`}
          href="/contacts"
        />
      }
      fallback={
        <Button
          text="Get Started"
          className={`z-20 ${btnStyles.bgRed} ${btnStyles.bigButton}`}
          href="/login"
        />
      }
    />
  );
}
