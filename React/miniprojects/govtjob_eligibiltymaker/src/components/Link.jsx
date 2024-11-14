// Link.jsx
import React, { useState } from 'react';
import Input from './Input';
import Height from './Height';

const Link = () => {
  const [isAgeEligible, setIsAgeEligible] = useState(false);
  const [isHeightEligible, setIsHeightEligible] = useState(false);

  const handleAgeCheck = (status) => setIsAgeEligible(status);
  const handleHeightCheck = (status) => setIsHeightEligible(status);

  return (
    <div>
      <h2>Eligibility Check</h2>
      <Input onAgeCheck={handleAgeCheck} />
      <Height onHeightCheck={handleHeightCheck} />
      <h3>
        Final Eligibility: <span className={isAgeEligible && isHeightEligible ? "eligible" : "not-eligible"}>
          {isAgeEligible && isHeightEligible ? 'Eligible' : 'Not Eligible'}
        </span>
      </h3>
    </div>
  );
};

export default Link;
