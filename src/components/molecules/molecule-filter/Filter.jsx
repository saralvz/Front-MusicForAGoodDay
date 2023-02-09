import React, { useState } from 'react';
import "../molecule-filter/filter.css";
import filterNameArtist from "../../../assets/img/icons/filter-name-artist.svg";


const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlayedChecked, setIsPlayedChecked] = useState(false);
  const [isUnplayedChecked, setIsUnplayedChecked] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handlePlayedCheck = () => {
    setIsPlayedChecked(!isPlayedChecked);
  };

  const handleUnplayedCheck = () => {
    setIsUnplayedChecked(!isUnplayedChecked);
  };

  return (
    <div className="filter-container">
      <input
        type="text"
        placeholder="Search by artist name"
        className="filter-input"
      />
      <img src={filterNameArtist} alt="Expand filter options" onClick={handleClick} />
      {isOpen && (
        <div className="filter-options">
          <div className="played-checkbox-container">
            <input
              type="checkbox"
              checked={isPlayedChecked}
              onChange={handlePlayedCheck}
              className="checkbox"
            />
            <label className="checkbox-label">Played songs</label>
          </div>
          <div className="unplayed-checkbox-container">
            <input
              type="checkbox"
              checked={isUnplayedChecked}
              onChange={handleUnplayedCheck}
              className="checkbox"
            />
            <label className="checkbox-label">Unplayed songs</label>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;