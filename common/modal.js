"use client";
import React from "react";
import Backdrop from "./backdrop";

export default function Modal({ show, onClose, children }) {
  return (
    <div>
      <Backdrop show={show} onClick={onClose}>
        <div
          onClick={(e) => e.stopPropagation()}
          className={`z-50 rounded-xl bg-white shadow transition-all ${show ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}
        >
          {children}
        </div>
      </Backdrop>
    </div>
  );
}
