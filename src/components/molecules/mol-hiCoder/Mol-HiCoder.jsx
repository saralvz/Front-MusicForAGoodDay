import React from "react";
import '../mol-hiCoder/mol-hiCoder.css';
import ButtonCoder from '../../atoms/atom-ButtonCoder/Atom-ButtonCoder';

function HiCoder() {
  return (
    <div className="hiCoderContainer">
        <div className="hiCoderText">
            Hi, coder!
        </div>
        <div className="hiCoderButton">
            {/* Falta Link to (react router dom) */}
            <ButtonCoder />
        </div>
    </div>
  )
}

export default HiCoder;