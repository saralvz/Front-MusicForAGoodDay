import React from "react";
import '../button-trainer/buttontrainer.css';
import trainerImg from '../../../assets/img/icons/trainer.svg';
//falta añadir react-router-dom 

const ButtonTrainer = () => (
    <div className="containerButtonTrainer">
        <button className="buttonTrainer">
            <div className="buttonTrainerCircle">
                <img className="buttonTrainerImg"
                    src={ trainerImg }
                    alt="icon from trainer button"
                />
            </div>
        </button>
    </div>
);

export default ButtonTrainer;