import React from "react";
import {useState, useEffect } from "react";
import "./atom-songBox.css";
import DeleteButton from "../atom-DeleteButton/Atom-DeleteButton.jsx";
import UpdateButton from "../atom-updateButton/Atom-UpdateButton.jsx";
import heart from "../../../assets/img/icons/heart.svg";
import PlayButton from "../atom-playButton/atom-PlayButton";
import ApiConsum from "../../../services/ApiConsum.jsx";

const dataSongs = ApiConsum();

const SongBox = (props) => {
  return (
    <div className="songContainer">
      <div className="cover">
        <img src={props.image} alt="cover"></img>
      </div>
      <div className="text">
        <p className="songName">{props.songName}Name</p>
        <p className="artistName">{props.artistName}Artist</p>
        <p className="gender">{props.songGender}Gender</p>
      </div>
      <div className="coder">
        <p>
          Proposed with <img src={heart} alt="heart" width="15px" /> by{" "}
          {props.coderName} coder
        </p>
      </div>
      <div className="play">
        <PlayButton src={props.play}/>
      </div>
      <div className="optionsContainer">
        <div className="delete">
          <DeleteButton />
        </div>
        <div className="update">
          <UpdateButton />
        </div>
      </div>
    </div>
  );
};

export default SongBox;

// Para llamar a este componente cumplimentando los props, sería:
// <SongBox
// image=""
// songName=""
// artistName=""
// songGender=""
// coderName=""
// />
