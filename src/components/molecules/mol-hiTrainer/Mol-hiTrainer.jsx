import React from "react";
import '../mol-hiTrainer/mol-hiTrainer.css';
import ButtonTrainer from "../../atoms/atom-ButtonTrainer/Atom-ButtonTrainer";

function HiTrainer() {
  return (
    <div className="hiTrainerContainer">
        <div className="hiTrainerText">
            Hi, trainer!
        </div>
        <div className="hiTrainerButton">
            {/* Falta Link to (react router dom) */}
            <ButtonTrainer />
        </div>
    </div>
  )
}

export default HiTrainer;