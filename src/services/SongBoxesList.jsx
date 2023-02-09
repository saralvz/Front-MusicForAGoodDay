import React, { useState } from "react";
import ShowSongBox from "./ShowSongBox";

function SongBoxesList() {
    const [inputValuesList, setInputValuesList] = useState([]);
   
    return (
      <div>
        {inputValuesList.map((inputValues, index) => (
          <ShowSongBox key={index} inputValues={inputValues} />
        ))}
      </div>
    );
  }

  export default SongBoxesList();