import FavoriteBorderSharpIcon from "@mui/icons-material/FavoriteBorderSharp";
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";

import React from "react";

const Like = ({ liked, onLikeToggle }) => {
  const suitableIcon = liked ? (
    <FavoriteSharpIcon />
  ) : (
    <FavoriteBorderSharpIcon />
  );
  return (
    <div
      className="cursor-pointer transition-all duration-300 hover:scale-125"
      onClick={onLikeToggle}
    >
      {suitableIcon}
    </div>
  );
};

export default Like;
