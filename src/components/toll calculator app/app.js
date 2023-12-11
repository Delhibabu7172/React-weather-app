// App.js
import React, { useState } from 'react';
import Header from './Header';
import Form from './Form';
import Result from './Result';
import "./Style.css"

const Application = () => {
  const [distance, setDistance] = useState(0);
  const [vehicleType, setVehicleType] = useState('');
  const [toll, setToll] = useState(0);

  // Function to calculate toll based on distance and vehicle type
  const calculateToll = () => {
    // Simple logic to calculate toll (adjust this as per your requirements)
    let tollFee = 0;
    if (vehicleType === 'car') {
      tollFee = distance * 0.1; // $0.10 per mile for cars
    } else if (vehicleType === 'truck') {
      tollFee = distance * 0.2; // $0.20 per mile for trucks
    }
    setToll(tollFee.toFixed(2)); // Set toll fee in state
  };

  return (
    <div className="App">
      <Header />
      <Form
        distance={distance}
        setDistance={setDistance}
        vehicleType={vehicleType}
        setVehicleType={setVehicleType}
        calculateToll={calculateToll}
      />
      <Result toll={toll} />
    </div>
  );
};

export default Application;
