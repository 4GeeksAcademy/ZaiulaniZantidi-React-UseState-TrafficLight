import React, { useState } from 'react';

const TrafficLight = () => {
  
  const [color, setColor] = useState('red');

  const [showOutline, setShowOutline] = useState(false);


  const cycleColors = () => {
    setColor((prevColor) => {
      switch (prevColor) {
        case 'red':
          return 'yellow';
        case 'yellow':
          return 'green';
        case 'green':
          return 'red';
        default:
          return 'red'; 
      }
    });
  };

  const toggleOutline = () => {
    setShowOutline((prevOutline) => !prevOutline);
  };

  return (
    <div className="traffic-light-page-container">

	<h1 className={`glowing-title ${color}-glow`}>Traffic Light Simulator</h1>

      <div className={`traffic-light-frame ${showOutline ? 'outline-purple' : ''}`}>
        <div className={`light-circle red ${color === 'red' ? 'active' : ''}`}></div>
        <div className={`light-circle yellow ${color === 'yellow' ? 'active' : ''}`}></div>
        <div className={`light-circle green ${color === 'green' ? 'active' : ''}`}></div>
      </div>

      <div className="button-container">
        <button className="control-button cycle-btn" onClick={cycleColors}>
          Cycle Colors
        </button>
        <button className="control-button outline-btn" onClick={toggleOutline}>
          Illuminate
        </button>
      </div>
    </div>
  );
};

export default TrafficLight;
