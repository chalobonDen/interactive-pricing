import React, { useState } from 'react';
import Slider from './Slider';
import iconCheck from '../images/icon-check.svg';

const CardContent = () => {
  const [price, setPrice] = useState(16);
  const [bill, setBill] = useState(false);

  const handleVolume = (e) => {
    const value = e.target.value;
    setPrice(value);
  };

  const handleSwitch = () => {
    setBill(bill === false ? true : false);
    console.log(bill);
  };

  return (
    <main className="main-content">
      <div className="content">
        <div className="content-sub">
          <div className="top">
            <div>
              <span>100K Pageviews</span>
            </div>
            <div className="top-right">
              <h1>${parseFloat(price).toFixed(2)} </h1>
              <p> / month</p>
            </div>
          </div>
          <div className="volume">
            <Slider
              min="0"
              max="32"
              step="1"
              value={price}
              onChange={handleVolume}
              className="volume-slider"
            />
          </div>

          <div className="bill">
            <div>
              <span>Monthly Billing</span>
            </div>
            <label className="switch">
              <input type="checkbox" value={bill} onChange={handleSwitch} />
              <span className="switch-slider green"></span>
            </label>
            <div>
              <span>Yearly Billing</span>
            </div>
            <div className="tag">
              <span>25% discount</span>
            </div>
          </div>
        </div>

        <div className="footer">
          <div>
            <p>
              <img src={iconCheck} alt="" />
              Unlimited websites
            </p>
            <p>
              <img src={iconCheck} alt="" />
              100% data ownership
            </p>
            <p>
              <img src={iconCheck} alt="" />
              Email reports
            </p>
          </div>
          <button>Start my trial</button>
        </div>
      </div>
    </main>
  );
};

export default CardContent;
