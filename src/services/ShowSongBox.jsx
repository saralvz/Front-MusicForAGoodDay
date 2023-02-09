import React from "react";
import SongBox from "../components/atoms/atom-songBox/atom-SongBox";

function ShowSongBox({ inputValues }) {
  return (
    <SongBox 
    image={register.img}
    songName={register.songName}
    artistName={register.artist}
    songGender={register.gender}
    coderName={register.yourName}
    play={register.youtube}/>
  );
}

export default ShowSongBox;