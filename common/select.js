import React from "react";
import inputStyles from "@/styles/global/input.module.css";

const Select = ({ name, options, onSelect }) => {
  return (
    <select
      className={inputStyles.input}
      onChange={(e) => onSelect(e.target.value)}
    >
      <option value="Gender" hidden>
        {name}
      </option>
      {options.map((item) => (
        <option key={item.value} value={item.value}>
          {item.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
