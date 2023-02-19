import React from "react";
import '../atom-Header/atom-Header.css';
import LogoCT from '../../../assets/img/logo.svg';

function Header() {
    return (
        <div className="containerHeader">
            <img id="logoHeader"
                src={ LogoCT }
                alt="Logo"
            />
        </div>
    )
};

export default Header;