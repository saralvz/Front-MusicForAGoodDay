import React from "react";
import OrganismContainer from "../../organisms/OrganismContainer";
import { Link } from "react-router-dom";
import HiCoder from "../../molecules/mol-hiCoder/Mol-HiCoder";


function Coder() {
    return (
      <div>
          <Link to="/Profile">
            <HiCoder />
          </Link>
         <OrganismContainer />
      </div>
    );
  }
  
  export default Coder;