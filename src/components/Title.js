import React from 'react';
import cycle from '../images/pattern-circles.svg';

const Title = () => {
  return (
    <div className="title">
      <img src={cycle} alt="" />
      <h1>Simple, traffic-based pricing</h1>
      <p>Sign-up for our 30-day trial. No credit card required.</p>
    </div>
  );
};

export default Title;
