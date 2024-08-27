import React from "react";

const ProfileCard = ({ name, role, imageUrl, bio }) => {
  return (
    <div className="max-w-sm overflow-hidden rounded bg-white shadow-lg">
      <img className="w-full" src={imageUrl} alt="Profile" />
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">{name}</div>
        <p className="text-base text-gray-700">{role}</p>
        <p className="text-base text-gray-700">{bio}</p>
      </div>
      <div className="px-6 pb-2 pt-4">
        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
          #profile
        </span>
        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
          #developer
        </span>
        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
          #react
        </span>
      </div>
    </div>
  );
};

export default ProfileCard;
