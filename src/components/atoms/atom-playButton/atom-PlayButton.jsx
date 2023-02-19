import React from "react";
import "../atom-playButton/atom-playButton.css";
import Play from "../../../assets/img/icons/play.svg";

const PlayButton = () => {
  return (
    <button className="playButton">
      <img src={Play} className="imgPlay" alt="Play Button" />
    </button>
  );
};

export default PlayButton;
