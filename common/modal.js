"use client";
import React from "react";
import Backdrop from "./backdrop";

export default function Modal({ show, onClose = null, children }) {
  return (
    <div>
      <Backdrop show={show} onClick={onClose}>
        <div
          onClick={(e) => e.stopPropagation()}
          className={`z-50 transition-all ${show ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}
        >
          {children}
        </div>
      </Backdrop>
    </div>
  );
}
