import React from 'react';
import deleteBut from '../../../assets/img/icons/delete.svg';
import './atom-deleteButton.css'


const DeleteButton = () => {
    return <button className="deleteButton"><img src={deleteBut} alt="eliminar" className="imgButton"></img></button>
}

export default DeleteButton;