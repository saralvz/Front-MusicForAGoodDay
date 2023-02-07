import React from "react";
import '../button-coder/buttoncoder.css';
import coderImg from '../../../assets/img/icons/coder.svg';
//falta añadir react-router-dom 

const ButtonCoder = () => (
    <div className="containerButtonCoder">
        <button className="buttonCoder">
            <div className="buttonCoderCircle">
                <img className="buttonCoderImg"
                    src={ coderImg }
                    alt="icon from coder button"
                />
            </div>
        </button>
    </div>
);

export default ButtonCoder;