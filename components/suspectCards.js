import React from "react";
import ImageDetailsCard from "./imageDetailsCard";

const SuspectCards = ({ suspectList }) => {
  return suspectList ? (
    <div className="m-5 grid grid-cols-1 items-center justify-center justify-items-center gap-10 md:grid-cols-2 lg:grid-cols-3">
      {suspectList.map((suspect) => (
        <ImageDetailsCard key={suspect.id} suspect={suspect} />
      ))}
    </div>
  ) : (
    <div className="flex justify-center">No items</div>
  );
};

export default SuspectCards;
