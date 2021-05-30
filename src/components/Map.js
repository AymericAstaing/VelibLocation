import "mapbox-gl/dist/mapbox-gl.css";
import './../App.css';
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import React, { useState, useRef } from "react";
import MapGL, { Marker } from "react-map-gl";
import DeckGL, { GeoJsonLayer } from "deck.gl";
import Geocoder from "react-map-gl-geocoder";

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN

function Map() {

  const [viewport, setViewport] = useState({
    latitude: 48.855715146561884,
    longitude: 2.3461731519849285,
    zoom: 11.5
  });

  let [markerChanged, setMarkerChanged] = useState(true);
  const [searchResultLayer, setSearchResultsLayer] = useState(null);
  const mapRef = useRef();

  const handleViewportChange = newViewport => {
    setViewport({ ...viewport, ...newViewport });
  };

  const handleGeocoderViewportChange = viewport => {
    const geocoderDefaultOverrides = { transitionDuration: 1000 };

    return handleViewportChange({
      ...viewport,
      ...geocoderDefaultOverrides
    });
  };

  React.useEffect(() => {
    console.log("ICI")
    return (
      <Marker className="marker" longitude={2.343119920702086} latitude={48.89965188971135}>
        <div>Csqsqss</div>
      </Marker>
    );
  }, [markerChanged]);

  let loadMarkers = (coordinates) => {
    console.log(coordinates)
    fetch(`http://127.0.0.1:5000/getVelibArround?location=${coordinates}`)
    .then(res => res.json())
    .then((result) => {
      console.log(result)
      return (
        <Marker className="marker" longitude={2.343119920702086} latitude={48.89965188971135}>
          <div>Csqsqss</div>
        </Marker>
      );
    })
    .catch(console.log)
  }

  const handleOnResult = event => {
    loadMarkers(event.result.geometry.coordinates)
  
    setSearchResultsLayer(
      new GeoJsonLayer({
        id: "search-result",
        data: event.result.geometry,
        getFillColor: [255, 0, 0, 128],
        getRadius: 1000,
        pointRadiusMinPixels: 10,
        pointRadiusMaxPixels: 10
      })
    );
  };

  return (
    <div style={{ height: "100vh" }}>
      <MapGL
        ref={mapRef}
        {...viewport}
        width="100%"
        height="100%"
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={handleViewportChange}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
        <Marker className="marker" longitude={2.3619490275102644} latitude={48.899218133245135}>
        </Marker>
        <Geocoder
          mapRef={mapRef}
          onResult={handleOnResult}
          onViewportChange={handleGeocoderViewportChange}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          position="top-left"
        />
        <DeckGL {...viewport} layers={[searchResultLayer]}/>
      </MapGL>
    </div>
  );
}

export default Map;
