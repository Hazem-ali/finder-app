"use client";
import React from "react";
import "./toast.css";
const toastConfig = {
  info: {
    icon: (
      <svg
        className="size-4 shrink-0 text-blue-500"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"></path>
      </svg>
    ),
    colorClass: "text-gray-700",
    bgColorClass: "bg-blue-50",
  },
  success: {
    icon: (
      <svg
        className="size-4 shrink-0 text-teal-500"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
      </svg>
    ),
    colorClass: "text-gray-700",
    bgColorClass: "bg-teal-50",
  },
  error: {
    icon: (
      <svg
        className="size-4 shrink-0 text-red-500"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
      </svg>
    ),
    colorClass: "text-red-500",
    bgColorClass: "bg-red-50",
  },
  warning: {
    icon: (
      <svg
        className="size-4 shrink-0 text-yellow-500"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
      </svg>
    ),
    colorClass: "text-gray-700",
    bgColorClass: "bg-yellow-50",
  },
};

const Toast = ({ show, type, message, onClose }) => {
  const { icon, colorClass, bgColorClass } =
    toastConfig[type] || toastConfig.info;

  return (
    show && (
      <div className="space-y-3">
        <div
          className={`fixed right-0 top-24 mx-4 max-w-5xl z-10 rounded-xl border border-gray-200 ${bgColorClass} toastSlideIin shadow-lg`}
          role="alert"
          tabIndex="-1"
        >
          <div className="flex items-center justify-center p-4">
            <div className="shrink-0">{icon}</div>
            <div className={`ms-3 ${colorClass}`}>
              <p className="text-sm font-bold pr-7">
                {message || "Default message"}
              </p>
            </div>
            <div className="ms-auto">
              <button
                type="button"
                className="inline-flex size-5 shrink-0 items-center justify-center rounded-lg text-gray-800 opacity-50 hover:opacity-100 focus:opacity-100 focus:outline-none"
                aria-label="Close"
                onClick={onClose}
              >
                <span className="sr-only">Close</span>
                <svg
                  className="size-4 shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 -3 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Toast;
