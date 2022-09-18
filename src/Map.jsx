import React, { useEffect, useRef } from "react";
import { loadModules } from "esri-loader";
// rfce or rfc-> to create react function component

function Map() {
  const MapELE = useRef(null);

  useEffect(() => {
    let view;
    loadModules(
      ["esri/views/MapView", "esri/WebMap", "esri/widgets/AreaMeasurement2D"],
      {
        css: true,
      }
    ).then(([MapView, WebMap]) => {
      const webmap = new WebMap({
        basemap: "topo-vector",
      });
      view = new MapView({
        map: webmap,
        center: [0, 0],
        zoom: 3,
        // useRef as a container
        container: MapELE.current,
      });
    });
    return () => {
      // close map view
      if (!!view) {
        view.destroy();
        view = null;
      }
    };
  });

  return <div style={{ height: 700, width: 1550 }} ref={MapELE}></div>;
}

export default Map;

// host web page on github
