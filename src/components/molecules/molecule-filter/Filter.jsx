import React, { useState } from 'react';

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
      <div className="checkbox-container">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          className="checkbox"
        />
        <label className="checkbox-label">Listened</label>
      </div>
    </div>
  );
};

export default Filter;