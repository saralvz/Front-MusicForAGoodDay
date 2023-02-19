import React from 'react';
import updateBut from '../../../assets/img/icons/update.svg';
import './atom-updateButton.css'


const UpdateButton = () => {
    return <button className="updateButton"><img src={updateBut} alt="modificar" className="imgButton"></img></button>
}

export default UpdateButton;