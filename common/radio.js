"use client";
import React from "react";

export default function Radio({
  defaultValue,
  choices,
  onChange,
  horizontal = false,
}) {
  return (
    <div className={`flex flex-col my-5 ${horizontal && "md:flex-row"}`}>
      {choices.map((choice) => {
        return (
          <div key={choice}>
            <div className="relative m-3 min-w-40">
              <input
                type="radio"
                name="choice"
                id={choice}
                className="peer hidden"
                defaultChecked={choice === defaultValue}
                onChange={() => {
                  onChange(choice);
                }}
              />
              <label
                htmlFor={choice}
                className="flex min-w-fit cursor-pointer items-center gap-4 rounded-xl bg-rose-50 p-4 pr-16 shadow-xl transition hover:bg-rose-200 peer-checked:bg-rose-500 peer-checked:text-white"
              >
                <div>
                  <h6 className="text-base">{choice}</h6>
                </div>
              </label>
              <div className="absolute bottom-0 right-4 top-0 my-auto flex h-7 w-7 scale-0 rounded-full bg-rose-700 transition delay-100 peer-checked:scale-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="mx-auto my-auto w-5 text-white"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
