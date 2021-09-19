import React from 'react';
import { useState } from 'react';

const CardContent = () => {
  const [price, setPrice] = useState(16);

  const handleVolume = (e) => {
    const value = e.target.value;
    setPrice(value);
  };

  return (
    <main className="main-content">
      <div className="content">
        <div className="top">
          <span>Pageviews</span>
          <h1>${price}</h1>
          <p>/month</p>
        </div>
        <div className="volume">
          <input
            type="range"
            defaultValue={price}
            min="0"
            max="32"
            onChange={handleVolume}
            step="1"
          />
        </div>
      </div>
    </main>
  );
};

export default CardContent;
