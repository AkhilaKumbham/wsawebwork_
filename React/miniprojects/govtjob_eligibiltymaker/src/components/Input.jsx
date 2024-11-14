// Input.jsx
import React, { useState } from 'react';

const Input = ({ onAgeCheck }) => {
  const [age, setAge] = useState('');

  const handleAgeChange = (e) => {
    const newAge = e.target.value;
    setAge(newAge);
    if (newAge >= 21 && newAge < 60) {
      onAgeCheck(true);
    } else {
      onAgeCheck(false);
    }
  };

  return (
    <div className="input-group">
      <label>Enter Age:</label>
      <input
        type="number"
        value={age}
        onChange={handleAgeChange}
        placeholder="Enter your age"
      />
      {age && (
        <p className={age >= 21 && age < 60 ? "eligible" : "not-eligible"}>
          {age >= 21 && age < 60 ? 'Eligible' : 'Not Eligible'}
        </p>
      )}
    </div>
  );
};

export default Input;
