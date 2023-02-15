import React from "react";
import Form from "../molecules/form/Form"
import Filter from "../molecules/molecule-filter/Filter";
import SongBox from "../atoms/atom-songBox/atom-SongBox";
import "../organisms/organismContainer.css"
import ValidationForm from "../molecules/form/ValidationForm";

const OrganismContainer = () => {
    return (
      <div className="organism-container">
        <div className="content-wrapper">
          <h2 id="form-title">
            UPLOAD YOUR OWN SONGS
          </h2>
          <ValidationForm/>
          <Filter />
          <SongBox/>
        </div>
      </div>
    );
  };
  
  export default OrganismContainer;