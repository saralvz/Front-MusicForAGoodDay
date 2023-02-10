import React from "react";
import '../atom-ButtonTrainer/atom-ButtonTrainer.css';
import TrainerImg from '../../../../src/assets/img/icons/trainer.svg';

function ButtonTrainer() {
  return (
    <button className="buttonTrainer">
        <img className="buttonTrainerImg"
            src={ TrainerImg }
            alt="Logo"
        />
    </button>
  )
};

export default ButtonTrainer;