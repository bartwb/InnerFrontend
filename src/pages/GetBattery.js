import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styling/menu.css";
import logo from './assets/logo.svg';
import { fetchBatteries } from "../dataSource/Battery.js";

function GetBattery() {

  const [batteries, setBatteries] = useState([]);

  // Fetch batteries on page load
  useEffect(() => {
    const getBatteries = async () => {
      try {
        const data = await fetchBatteries();
        setBatteries(data);
      } catch (error) {
        console.error("Failed to fetch batteries:", error);
      }
    };

    getBatteries();
  }, []);

  return (

    <div className='mainWrapper' id="mainMenuWrapper">

      <div className="outerBox" id="menuBox">

      {batteries.length > 0 ? (
          batteries.map((battery) => (
            <div key={battery.id} className="battery">
              <p><strong>ID:</strong> {battery.id}</p>
              <p><strong>Status:</strong> {battery.status}</p>
              <p><strong>Type:</strong> {battery.type}</p>
            </div>
          ))
        ) : (
          <p>Loading batteries...</p>
        )}

      </div>

    </div>
  );
}

export default GetBattery;
