import React, { useEffect, useState } from "react";
import './styling/imageMonitor.css';
import Dropdown from "../components/DropDown";
import toolBar from './assets/toolbar.png';
import CornerstoneViewer from "../components/CornerstoneViewer";

function RightMonitor() {
  const [batteryData, setBatteryData] = useState(null);

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data && event.data.batteryData) {
        setBatteryData(event.data.batteryData);
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  if (!batteryData) {
    return <p>Loading...</p>;
  }

  return (


    <div className="mainWrapper" id="mainImageMonitorWrapper">
    <div className="toolBar">
      <img src={toolBar} alt="ToolBar"></img>
      </div>

      <div className="splitter">

      <div className="previewBox">

        <div className="previewFilter">
        <Dropdown options={['Laag 1', 'Laag 2', 'Laag 3']} placeholder="Kies laag" />
        </div>

        <div className="previewImages">

      {batteryData.photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Afbeelding ${index + 1}`}
            style={{ margin: "10px", width: "200px" }}
          />
        ))}
        </div>


      </div>

      <div className="viewBox">

      {batteryData.photos.length > 0 && (
  <CornerstoneViewer imageId={toolBar} />
    )}

      {/* {batteryData.photos.slice(0, 4).map((photo, index) => (
        <div className="viewImageWrapper">
        <img
          key={index}
          src={photo}
          alt={`Afbeelding ${index + 1}`}
          style={{ margin: "10px"}}
        />
        </div>
      ))} */}
      
      </div>
      </div>
      </div>
      
  );
}

export default RightMonitor;
