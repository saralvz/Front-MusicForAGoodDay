import React, { useState } from 'react';
import "../molecule-filter/filter.css";

const Filter = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="filter-container">
      <input
        type="text"
        placeholder="Search by artist name"
        className="filter-input"
      />
      <div className="played-checkbox-container">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          className="checkbox"
          id = "played"        />
        <label className="checkbox-label">Played songs</label>
      </div>
      <div className="unplayed-checkbox-container">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          className="checkbox"
          id = "unplayed"
        />
        <label className="checkbox-label">Unplayed songs</label>
      </div>
    </div>
  );
};

export default Filter;