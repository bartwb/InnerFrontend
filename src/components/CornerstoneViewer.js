import React, { useEffect, useRef, useState } from "react";
import * as cornerstone from "cornerstone-core";
import * as cornerstoneTools from "cornerstone-tools";
import * as cornerstoneMath from "cornerstone-math";
import Hammer from "hammerjs";
import * as cornerstoneWebImageLoader from "cornerstone-web-image-loader";

// Set up external dependencies
cornerstoneTools.external.cornerstone = cornerstone;
cornerstoneTools.external.cornerstoneMath = cornerstoneMath;
cornerstoneTools.external.Hammer = Hammer;
cornerstoneWebImageLoader.external.cornerstone = cornerstone;

const CornerstoneViewer = ({ imageId }) => {
  const viewportRef = useRef(null);
  const [viewport, setViewport] = useState(null);

  useEffect(() => {
    const element = viewportRef.current;

    if (!element) {
      console.error("Viewport element is not available.");
      return;
    }

    console.log("Enabling Cornerstone on element.");
    cornerstone.enable(element);

    cornerstone
      .loadImage(imageId)
      .then((image) => {
        console.log("Image loaded successfully:", image);
        cornerstone.displayImage(element, image);

        console.log("Adding tools and configuring.");
        cornerstoneTools.init();
        cornerstoneTools.addTool(cornerstoneTools.PanTool);
        cornerstoneTools.addTool(cornerstoneTools.ZoomTool);
        cornerstoneTools.addTool(cornerstoneTools.LengthTool);
        cornerstoneTools.addTool(cornerstoneTools.ArrowAnnotateTool);

        cornerstoneTools.mouseInput.enable(element);
        cornerstoneTools.mouseWheelInput.enable(element);

        cornerstoneTools.setToolActive("Pan", { mouseButtonMask: 1 }); // Left-click for Pan
        cornerstoneTools.setToolActive("Zoom", { mouseButtonMask: 4 }); // Right-click for Zoom

        element.addEventListener("cornerstoneimagerendered", onImageRendered);
        window.addEventListener("resize", handleResize);

        // Initial resize
        cornerstone.resize(element, true);
      })
      .catch((err) => console.error("Error loading image:", err));

    const onImageRendered = () => {
      const viewport = cornerstone.getViewport(element);
      setViewport(viewport);
      console.log("Viewport updated:", viewport);
    };

    const handleResize = () => {
      console.log("Resizing canvas to fit new dimensions.");
      cornerstone.resize(element, true);
    };

    return () => {
      console.log("Disabling Cornerstone on element.");
      element.removeEventListener("cornerstoneimagerendered", onImageRendered);
      window.removeEventListener("resize", handleResize);
      cornerstone.disable(element);
    };
  }, [imageId]);

  return (
    <div style={{ position: "relative", width: "512px", height: "512px" }}>
      <div
        ref={viewportRef}
        style={{
          width: "100%",
          height: "100%",
          background: "black",
          position: "relative",
        }}
      ></div>
      <div style={{ position: "absolute", bottom: "5px", left: "5px", color: "white" }}>
        Zoom: {viewport.scale.toFixed(2)}
      </div>
      <div style={{ position: "absolute", bottom: "5px", right: "5px", color: "white" }}>
        WW/WC: {viewport.voi.windowWidth.toFixed(0)} / {viewport.voi.windowCenter.toFixed(0)}
      </div>
    </div>
  );
};

export default CornerstoneViewer;
