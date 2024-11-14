// Height.jsx
import React, { useState } from 'react';

const Height = ({ onHeightCheck }) => {
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState('');

  const handleGenderChange = (e) => {
    setGender(e.target.value);
    onHeightCheck(false);  // reset eligibility if gender changes
  };

  const handleHeightChange = (e) => {
    const newHeight = e.target.value;
    setHeight(newHeight);

    if (
      (gender === 'female' && newHeight >= 1.57) ||
      (gender === 'male' && newHeight >= 1.70)
    ) {
      onHeightCheck(true);
    } else {
      onHeightCheck(false);
    }
  };

  return (
    <div className="height-group">
      <label>Select Gender:</label>
      <div className="radio-group">
        <label>
          <input
            type="radio"
            value="female"
            checked={gender === 'female'}
            onChange={handleGenderChange}
          /> Female
        </label>
        <label>
          <input
            type="radio"
            value="male"
            checked={gender === 'male'}
            onChange={handleGenderChange}
          /> Male
        </label>
      </div>
      <label>Enter Height (in meters):</label>
      <input
        type="number"
        step="0.01"
        value={height}
        onChange={handleHeightChange}
        placeholder="Enter your height"
      />
      {height && (
        <p className={(gender === 'female' && height >= 1.57) || (gender === 'male' && height >= 1.70) ? "eligible" : "not-eligible"}>
          {(gender === 'female' && height >= 1.57) || (gender === 'male' && height >= 1.70) ? 'Eligible' : 'Not Eligible'}
        </p>
      )}
    </div>
  );
};

export default Height;
