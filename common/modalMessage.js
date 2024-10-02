import React from "react";
import Modal from "./modal";
import ErrorIcon from "../icons/error_circle";
import SuccessIcon from "@/icons/success_circle";
import Button from "./button";

export default function ModalMessage({ type, title, message, show, onClose }) {
  const icons = {
    error: <ErrorIcon />,
    success: <SuccessIcon />,
  };

  return (
    <Modal show={show} >
      <div className="m-10 flex max-w-lg flex-col items-center rounded-xl bg-white p-8 text-center">
        {/* Icon area */}
        {icons[type]}

        {/* Title area */}
        <h2 className="my-5 text-2xl font-bold uppercase tracking-wider">
          {title}
        </h2>

        {/* Message area */}
        <p className="text-lg">{message}</p>

        {/* Button Area */}
        <div className="mt-5">
          <Button text="OK" onClick={onClose} />
        </div>
      </div>
    </Modal>
  );
}
