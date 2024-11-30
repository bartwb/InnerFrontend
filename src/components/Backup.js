import React, { useEffect, useRef, useState } from "react";
import * as cornerstone from "cornerstone-core";
import * as cornerstoneTools from "cornerstone-tools";
import * as cornerstoneMath from "cornerstone-math";
import Hammer from "hammerjs";
import cornerstoneWebImageLoader from "cornerstone-web-image-loader";

// Set up external dependencies
cornerstoneTools.external.cornerstone = cornerstone;
cornerstoneTools.external.cornerstoneMath = cornerstoneMath;
cornerstoneTools.external.Hammer = Hammer;
cornerstoneWebImageLoader.external.cornerstone = cornerstone;

const CornerstoneViewer = ({ imagePath }) => {
  const viewportRef = useRef(null);
  const [activeTool, setActiveTool] = useState("Pan");

  useEffect(() => {
    const element = viewportRef.current;

    if (!element) {
      console.error("Viewport element is not available.");
      return;
    }

    cornerstone.enable(element);

    const imageId = imagePath.startsWith("http")
      ? imagePath
      : `${window.location.origin}${imagePath}`;

    cornerstone
      .loadImage(imageId)
      .then((image) => {
        cornerstone.displayImage(element, image);

        // Initialize tools
        cornerstoneTools.init();

        // Add tools
        cornerstoneTools.addTool(cornerstoneTools.LengthTool);
        cornerstoneTools.addTool(cornerstoneTools.PanTool);
        cornerstoneTools.addTool(cornerstoneTools.ZoomTool);
        cornerstoneTools.addTool(cornerstoneTools.ArrowAnnotateTool);

        // Set default active tool
        cornerstoneTools.setToolActive("Pan", { mouseButtonMask: 1 });
      })
      .catch((err) => {
        console.error("Error loading image:", err);
      });

    return () => {
      cornerstone.disable(element);
    };
  }, [imagePath]);

  // Function to handle tool activation
  const activateTool = (toolName) => {
    console.log(`Activating tool: ${toolName}`);
    setActiveTool(toolName);
    cornerstoneTools.setToolActive(toolName, { mouseButtonMask: 1 });
  };

  return (
    <div style={{ position: "relative", width: "512px", height: "600px" }}>
      {/* Toolbar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          background: "#333",
          color: "#fff",
          padding: "10px",
        }}
      >
        <button
          onClick={() => activateTool("Pan")}
          style={{
            background: activeTool === "Pan" ? "#555" : "#333",
            color: "white",
            border: "none",
            padding: "10px",
            cursor: "pointer",
          }}
        >
          Pan
        </button>
        <button
          onClick={() => activateTool("Zoom")}
          style={{
            background: activeTool === "Zoom" ? "#555" : "#333",
            color: "white",
            border: "none",
            padding: "10px",
            cursor: "pointer",
          }}
        >
          Zoom
        </button>
        <button
          onClick={() => activateTool("Length")}
          style={{
            background: activeTool === "Length" ? "#555" : "#333",
            color: "white",
            border: "none",
            padding: "10px",
            cursor: "pointer",
          }}
        >
          Measure
        </button>
        <button
          onClick={() => activateTool("ArrowAnnotate")}
          style={{
            background: activeTool === "ArrowAnnotate" ? "#555" : "#333",
            color: "white",
            border: "none",
            padding: "10px",
            cursor: "pointer",
          }}
        >
          Annotate
        </button>
      </div>

      {/* Viewer */}
      <div
        ref={viewportRef}
        style={{
          width: "512px",
          height: "512px",
          background: "black",
          border: "1px solid white",
        }}
      ></div>
    </div>
  );
};

export default CornerstoneViewer;
