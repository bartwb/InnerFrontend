import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./styling/reportScreen.css";
import arrowBack from "./assets/arrow-left.svg";

import rontgen1 from "./assets/rontgen/1.png";
import rontgen2 from "./assets/rontgen/2.png";
import rontgen3 from "./assets/rontgen/3.png";
import rontgen4 from "./assets/rontgen/4.png";
import rontgen5 from "./assets/rontgen/5.png";
import rontgen6 from "./assets/rontgen/6.png";
import rontgen7 from "./assets/rontgen/7.png";
import rontgen8 from "./assets/rontgen/8.png";
import rontgen9 from "./assets/rontgen/9.png";
import rontgen10 from "./assets/rontgen/10.png";
import rontgen11 from "./assets/rontgen/11.png";
import rontgen12 from "./assets/rontgen/12.png";

// Dummy data
const demoBatteryData = {
  "Battery ID": "BAT013",
  Datum: "2024-11-20",
  Aanleiding: "Ongeval",
  Merk: "Audi",
  Type: "E-Tron",
  Bouwjaar: 2020,
  measurements: [
    {
      name: "Meting X",
      photo: "https://via.placeholder.com/150?text=Meting+X",
    },
    {
      name: "Meting Y",
      photo: "https://via.placeholder.com/150?text=Meting+Y",
    },
    {
      name: "Meting Z",
      photo: "https://via.placeholder.com/150?text=Meting+Z",
    },
  ],
  defects: [
    {
      name: "Defect A",
      photo: "https://via.placeholder.com/150?text=Defect+A",
    },
    {
      name: "Defect B",
      photo: "https://via.placeholder.com/150?text=Defect+B",
    },
    {
      name: "Defect C",
      photo: "https://via.placeholder.com/150?text=Defect+C",
    },
  ],
  photos: [
    rontgen1,
    rontgen2,
    rontgen3,
    rontgen4,
    rontgen5,
    rontgen6,
    rontgen7,
    rontgen8,
    rontgen9,
    rontgen10,
    rontgen11,
    rontgen12,
  ],
};

function ReportScreen() {
  const { batteryId } = useParams();
  const [batteryData, setBatteryData] = useState(null);
  const [leftWindow, setLeftWindow] = useState(null);
  const [rightWindow, setRightWindow] = useState(null);

  useEffect(() => {
    const fetchBatteryData = () => {
      if (batteryId === demoBatteryData["Battery ID"]) {
        setBatteryData(demoBatteryData);
      } else {
        setBatteryData(null);
      }
    };

    fetchBatteryData();
  }, [batteryId]);

  const openWindows = () => {
    const leftWin = window.open(
      "/detailsmonitor",
      "Details Monitor",
      "width=800,height=600,left=0,top=0"
    );
    const rightWin = window.open(
      "/imagemonitor",
      "Image Monitor",
      "width=1200,height=800,left=850,top=0"
    );

    // Ensure windows are ready before passing data
    const interval = setInterval(() => {
      console.log("cheking for complete...");

      if (
        leftWin &&
        leftWin.document.readyState === "complete" &&
        rightWin &&
        rightWin.document.readyState === "complete"
      ) {
        // Send data using postMessage
        console.log("Sending message...");
        setTimeout(() => {
          leftWin.postMessage({ batteryData }, "*");
          rightWin.postMessage({ batteryData }, "*");
        }, 500);
        clearInterval(interval);
      }
    }, 100);

    setLeftWindow(leftWin);
    setRightWindow(rightWin);
  };

  if (!batteryData) {
    return <p>Geen gegevens gevonden voor batterij met ID {batteryId}</p>;
  }

  return (
    <div className="mainWrapper" id="mainReportWrapper">
      <div className="outerBox report-screen">
        <div className="backToMenu">
          <Link to="/worklists">
            <p>
              <img src={arrowBack} alt=""></img> Terug naar Menu
            </p>
          </Link>
        </div>

        <h1>
          Rapport voor {batteryData.Merk} {batteryData.Type}
        </h1>
        <button onClick={openWindows}>Open in Twee Schermen</button>
      </div>
    </div>
  );
}

export default ReportScreen;
