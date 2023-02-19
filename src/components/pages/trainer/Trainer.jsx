import React from "react";
import OrganismContainer from "../../organisms/OrganismContainer";
import { Link } from "react-router-dom";
import HiTrainer from "../../molecules/mol-hiTrainer/Mol-hiTrainer";


function Trainer() {
    return (
      <div>
          <Link to="/Profile">
            <HiTrainer />
          </Link>
          <OrganismContainer/>
      </div>
    );
  }
  
  export default Trainer;
  