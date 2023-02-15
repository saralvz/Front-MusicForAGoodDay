import React from "react";
import Form from "../molecules/form/Form"
import Filter from "../molecules/molecule-filter/Filter";
import SongBox from "../atoms/atom-songBox/atom-SongBox";
import "../organisms/organismContainer.css"

const OrganismContainer = () => {
    return (
      <div className="organism-container">
        <Form />
        <SongBox/>
        <Filter />
      </div>
    );
  };
  
  export default OrganismContainer;