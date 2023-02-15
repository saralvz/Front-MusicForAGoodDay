import React from "react";
import '../atom-ButtonCoder/atom-ButtonCoder.css';
import CoderImg from '../../../assets/img/icons/coder.svg';

function ButtonCoder() {
  return (
    <button className="buttonCoder">
        <img id="buttonCoderImg"
            src={ CoderImg }
            alt="Logo"
        />
    </button>
  )
};

export default ButtonCoder;