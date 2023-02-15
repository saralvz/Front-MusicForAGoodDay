import React from "react";
import "./atom-songBox.css";
import DeleteButton from "../atom-DeleteButton/Atom-DeleteButton.jsx";
import UpdateButton from "../atom-updateButton/Atom-UpdateButton.jsx";
import heart from "../../../assets/img/icons/heart.svg";
import PlayButton from "../atom-playButton/atom-PlayButton";
import ApiConsum from "../../../services/ApiConsum.jsx";



const SongBox = () => {
  const dataSongs = ApiConsum();

  return (
  dataSongs.map((data) => (
 
    <div className="songContainer">
      <div className="cover">
        <img src={data.img} alt="cover"></img>
      </div>
      <div className="text">
        <p className="songName">{data.songName}Name</p>
        <p className="artistName">{data.artist}Artist</p>
        <p className="gender">{data.gender}Gender</p>
      </div>
      <div className="coder">
        <p>
          Proposed with <img src={heart} alt="heart" width="15px" /> by{" "}
          {data.yourName} coder
        </p>
      </div>
      <div className="play">
        <PlayButton src={data.youTube}/>
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
  )));
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
