import React, { useEffect, useState } from "react";
import './styling/detailsMonitor.css';
import batteryCase from './assets/batteryCase.jpg';
import schematic from './assets/schematic.jpeg';
import ReportBox from "../components/ReportBox";

function LeftMonitor() {
  const [batteryData, setBatteryData] = useState(null);

  useEffect(() => {
    const handleMessage = (event) => {
        console.log("Handlemessage")
        console.log("Event origin:", event.origin);
        console.log(event.data);
        console.log(event.data.batteryData);
      if (event.data && event.data.batteryData) {
        console.log("setting data");
        setBatteryData(event.data.batteryData);
      }
    };

    console.log("Adding evenlistner");
    window.addEventListener("message", handleMessage);

    return () => {
      console.log("Removing eventlistener...");
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  if (!batteryData) {
    return <p>Loading...</p>;
  }

  return (
    <div>

      <div id="mainDetailsWrapper" className="mainWrapper">

      <div className="outerBox">

      <div className="reportTitle">
      <h1>Overzicht accu: {batteryData["Battery ID"]}</h1>
      <button className="btn-green">Rapport Maken</button>
      </div>

      <div className="batterySchematicBox">
        <img src={schematic} alt="Battery Schematic"></img>
      </div>



      <div className="splitter">

      
     <ReportBox />



      <div className="batteryInfobox">

        <div className="batteryInfoImageWrapper">
          <img src={batteryCase} alt="BatteryCase"></img>
        </div>

      <p><strong>Battery ID:</strong> {batteryData["Battery ID"]}</p>
      <p><strong>Merk:</strong> {batteryData.Merk}</p>
      <p><strong>Type:</strong> {batteryData.Type}</p>
      <p><strong>Bouwjaar:</strong> {batteryData.Bouwjaar}</p>
      <p><strong>Aanleiding:</strong> {batteryData.Aanleiding}</p>
      <p><strong>Datum:</strong> {batteryData.Datum}</p>

      </div>


      </div>

    </div>

    </div>

    </div>
  );
}

export default LeftMonitor;
