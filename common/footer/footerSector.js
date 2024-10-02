import React from "react";

export default function FooterSector({ Links, title }) {
  return (
    <ul>
      <h1 className="mb-1 font-semibold">{title}</h1>
      {Links.map((link) => (
        <li key={link.name}>
          <a
            className="cursor-pointer text-sm leading-6 text-gray-400 duration-300 hover:text-teal-400"
            href={link.link}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
}
