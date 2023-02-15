import React from "react";
import Filter from "../molecules/molecule-filter/Filter";
import SongBox from "../atoms/atom-songBox/atom-SongBox";
import "../organisms/organismContainer.css"
import ValidationForm from "../molecules/form/ValidationForm";

const OrganismContainer = () => {
    return (
      <div className="organism-container">
        <ValidationForm/>
        <SongBox/>
        <Filter />
      </div>
    );
  };
  
  export default OrganismContainer;