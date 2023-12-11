// Form.js
import React from 'react';

const Form = ({ distance, setDistance, vehicleType, setVehicleType, calculateToll }) => {
  return (
    <div>
      <label>
        Distance (miles):
        <input
          type="number"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
        />
      </label>
      <label>
        Vehicle Type:
        <select value={vehicleType} onChange={(e) => setVehicleType(e.target.value)}>
          <option value="">Select</option>
          <option value="car">Car</option>
          <option value="truck">Truck</option>
        </select>
      </label>
      <button onClick={calculateToll}>Calculate Toll</button>
    </div>
  );
};

export default Form;
