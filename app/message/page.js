"use client";
import { useEffect } from "react";
import { useState } from "react";

const Message = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const storedData = sessionStorage.getItem("data");
    if (storedData) {
      setData(storedData);
      sessionStorage.removeItem("data"); // Optionally, clear the storage after use
    }
  }, []);
  return (
    <div>
      <h1>Message Page</h1>
      <p>Data passed: {data} </p>
    </div>
  );
};

export default Message;
