import React from "react";
import inputStyles from "@/styles/global/input.module.css";
import Message from "./message";

const Select = ({ name, error, options, onSelect }) => {
  return (
    <div className="flex flex-col items-start">
      <select
        className={`${inputStyles.select} ${error && "border-error"}`}
        onChange={(e) => onSelect(e.target.value)}
      >
        <option value={name} hidden>
          {name}
        </option>
        {options.map((item) => (
          <option
            key={item.value}
            value={item.value}
            className={`${inputStyles.option} rounded-full`}
          >
            {item.name}
          </option>
        ))}
      </select>
      {error && <Message type="error">{error}</Message>}
    </div>
  );
};

export default Select;
