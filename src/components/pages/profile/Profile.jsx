import React from "react";
import '../profile/profile.css';
import ButtonTrainer from '../../atoms/atom-ButtonTrainer/Atom-ButtonTrainer';
import ButtonCoder from '../../atoms/atom-ButtonCoder/Atom-ButtonCoder';
import LogoCT from '../../../assets/img/logo.svg';

function Profile() {
  return (
    <div className="containerProfile">
        <div className="rowHeaderProfile">
            <img className="rowHeaderProfileLogo"
                src={ LogoCT }
                alt="Logo City Tech"
            />
        </div>

        <div className="rowUsersProfile">
            <div className="rowUserProfileTrainer">
                <ButtonTrainer />
                <h3 className="rowUserProfileTrainerText">
                    trainer
                </h3>
            </div>
            <div className="rowUserProfileCoder">
                <ButtonCoder />
                <h3 className="rowUserProfileCoderText">
                    coder
                </h3>
            </div>
        </div>

        <div className="rowFooter">
            <p className="rowFooterText">
                with ❤ by Code Tech
            </p>
        </div>
    </div>
  )
}

export default Profile;