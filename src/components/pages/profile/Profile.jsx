import React from "react";
import '../profile/profile.css';
import ButtonTrainer from '../../atoms/atom-ButtonTrainer/Atom-ButtonTrainer';
import ButtonCoder from '../../atoms/atom-ButtonCoder/Atom-ButtonCoder';
import LogoCT from '../../../assets/img/logo.svg';
import { Link } from "react-router-dom";
function Profile() {
  return (
    <div className="containerProfile">
        <div className="rowUsersProfile">
            <div className="rowUserProfileTrainer">
            <Link to="/trainer">
                <ButtonTrainer />
                <h3 className="rowUserProfileTrainerText">
                    trainer
                </h3>
            </Link>
            </div>
            <div className="rowUserProfileCoder">
            <Link to="/coder">
                <ButtonCoder />
                <h3 className="rowUserProfileCoderText">
                    coder
                </h3>
            </Link>     
            </div>
        </div>
    </div>
  )
}

export default Profile;