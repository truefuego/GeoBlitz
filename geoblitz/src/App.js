import React, {useState, useEffect} from "react";
import ReactStreetview from "react-streetview";
import { GoogleMap , Marker, useJsApiLoader} from '@react-google-maps/api';


const containerStyle = {
  width: '35vw',
  height: '30vh'
}

const center = {
  lat: 0,
  lng: 0
}

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


const MapsView = () => {
  const {isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: 'AIzaSyCuehentvdKyrrdg_LKj_e55s-9vL1Mz_s'
  })

  const [pinLoc, setPinLoc] = useState({ lat: null, lng: null });

  const handleMapClick = (event) => {
      setPinLoc({
          lat: event.latLng.lat(),
          lng: event.latLng.lng()
      });
  };

return (
  <div className='maps-view'>
      {isLoaded && (
          <GoogleMap 
              mapContainerStyle={containerStyle}
              center={center}
              zoom={2}
              onClick={handleMapClick}
              >
              {pinLoc.lat !== null && (<Marker position={{lat: pinLoc.lat, lng: pinLoc.lng}} />)}
          </GoogleMap>
      )}    
      {pinLoc.lat} - {pinLoc.lng}
  </div>
)
}

function App() {
  return (
    <div className="App">
      <MapsView />
      <StreetView />
    </div>
  );
}

export default App;
