import React, { useState } from 'react'
import '../Styles/StreetView.css'
import ReactStreetview from "react-streetview";


const StreetView = () => {
    const googleMapsApiKey = "AIzaSyCuehentvdKyrrdg_LKj_e55s-9vL1Mz_s";
    const [positions, setpositions] = useState({
      lat: 21.2189225,
      lng: 81.3070933
    });
    const streetViewPanoramaOptions = {
      position: { lat: positions.lat, lng: positions.lng },
      pov: { heading: 100, pitch: 0 },
      zoom: 1,
      addressControl: true,
      showRoadLabels: true,
      zoomControl: true
    };
  
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundColor: "#eeeeee",
          filter: 'invert()'
        }}
      >
        <ReactStreetview
          apiKey={googleMapsApiKey}
          streetViewPanoramaOptions={streetViewPanoramaOptions}
        />
      </div>
    );
}

export default StreetView