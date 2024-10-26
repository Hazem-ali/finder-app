import React from "react";

export default function Detail({ title, data }) {
  return (
    <div>
      <h1 className="inline-block text-lg font-bold">{title}</h1>
      <span> {data}</span>
    </div>
  );
}
