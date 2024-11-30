import React, { useState } from "react";
import './styling/reportBox.css';

function ReportBox() {
  const [measurements, setMeasurements] = useState([]); 
  const [defects, setDefects] = useState([]); 

  const [isMeasureBoxOpen, setIsMeasureBoxOpen] = useState(true); 
  const [isDefectBoxOpen, setIsDefectBoxOpen] = useState(true); 

  const addMeasurement = () => {
    const newMeasurement = prompt("Enter a measurement:");
    if (newMeasurement) setMeasurements([...measurements, newMeasurement]);
  };

  const removeMeasurement = (index) => {
    setMeasurements(measurements.filter((_, i) => i !== index));
  };

  const addDefect = () => {
    const newDefect = prompt("Enter a defect:");
    if (newDefect) setDefects([...defects, newDefect]);
  };

  const removeDefect = (index) => {
    setDefects(defects.filter((_, i) => i !== index));
  };

  return (
    <div className="reportBox">

      <div className="measureBox">
        <div
          className="boxHeader"
          onClick={() => setIsMeasureBoxOpen(!isMeasureBoxOpen)}
        >
          <h3>Metingen</h3>
          <button>{isMeasureBoxOpen ? "▲" : "▼"}</button>
        </div>
        {isMeasureBoxOpen && (
          <div className="boxContent">
            <button className="btn-green" onClick={addMeasurement}>Meting noteren</button>
            <ul>
              {measurements.map((measurement, index) => (
                <li key={index}>
                  {measurement}
                  <button className="btn-red" onClick={() => removeMeasurement(index)}>Verwijderen</button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="defectBox">
        <div
          className="boxHeader"
          onClick={() => setIsDefectBoxOpen(!isDefectBoxOpen)}
        >
          <h3>Defecten</h3>
          <button>{isDefectBoxOpen ? "▲" : "▼"}</button>
        </div>
        {isDefectBoxOpen && (
          <div className="boxContent">
            <button  className="btn-green" onClick={addDefect}>Defect noteren</button>
            <ul>
              {defects.map((defect, index) => (
                <li key={index}>
                  {defect}
                  <button className="btn-red"  onClick={() => removeDefect(index)}>Verwijderen</button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default ReportBox;
