import React, { useState } from "react";
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
      <div className="filter-artist">
        <img id="filter-artist"
          src={filterNameArtist}
          alt="Expand filter options"
          onClick={handleClick}
        />
        {!isOpen && <p>Artist name</p>}
        {isOpen && (
          <div className="filter-options">
            <input
              type="text"
              placeholder="Search by artist"
              className="filter-input"
            />
          </div>
        )}
      </div>

      <div className="filter-played">
        <input
          type="checkbox"
          checked={isPlayedChecked}
          onChange={handlePlayedCheck}
          className="checkbox"
          id="played"
        />
        <label className="checkbox-label">Played songs</label>
      </div>

      <div className="filter-unplayed">
        <input
          type="checkbox"
          checked={isUnplayedChecked}
          onChange={handleUnplayedCheck}
          className="checkbox"
          id="unplayed"
        />
        <label className="checkbox-label">Unplayed songs</label>
      </div>
    </div>
  );
};

export default Filter;
