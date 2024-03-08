import React, {useState, useEffect} from "react";
import ReactStreetview from "react-streetview";
import { GoogleMap , Marker, useJsApiLoader} from '@react-google-maps/api';
import './App.css'

const containerStyle = {
  width: '25vw',
  height: '30vh',
  borderRadius: '12px',
  transition: '500ms'
}

const containerStyleBig = {
  width: '45vw',
  height: '50vh',
  borderRadius: '16px',
  transition: '500ms'
}

const center = {
  lat: 0,
  lng: 0
}

const famousPlacesIndia = [
  {
    lat: 27.1719538,
    lng: 78.0421016
  },
  {
    lat: 28.6560397,
    lng: 77.2368063
  },
  {
    lat: 26.924022,
    lng: 75.827195
  },
  {
    lat: 21.8380254,
    lng: 73.7208998
  },
  {
    lat: 28.5247738,
    lng: 77.185088
  },
  {
    lat: 30.7348881,
    lng: 79.06702
  },
  {
    lat: 21.2479995,
    lng: 81.6035124
  },
  {
    lat: 18.9224679,
    lng: 72.8344565
  },
]

const StreetView = () => {
  const googleMapsApiKey = "";
  const [positions, setpositions] = useState({
    lat: famousPlacesIndia[5].lat,
    lng: famousPlacesIndia[5].lng
  });
  const streetViewPanoramaOptions = {
    position: { lat: positions.lat, lng: positions.lng },
    pov: { heading: 100, pitch: 0 },
    zoom: 1,
    addressControl: true,
    showRoadLabels: false,
    addressControl:false,
    zoomControl: false,
    fullscreenControl: false,
    panControl: false
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
};

const defaultMapOptions = {
    fullscreenControl: false,
    zoomControl: false,
    scaleControl: true,
    streetViewControl: false
};

const MapsView = () => {
  const [isHovering,setIsHovering] = useState(false)
  const {isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: ''
  })

  const [pinLoc, setPinLoc] = useState({ lat: null, lng: null });

  const handleMapClick = (event) => {
      setPinLoc({
          lat: event.latLng.lat(),
          lng: event.latLng.lng()
      });
  };

return (
  <div className='maps-view' onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
      {isLoaded && (
          <GoogleMap 
              mapContainerStyle={isHovering ? containerStyleBig : containerStyle}
              center={center}
              zoom={2}
              onClick={handleMapClick}
              options= {defaultMapOptions}
              >
                <Marker position={{lat: famousPlacesIndia[0].lat, lng: famousPlacesIndia[0].lng}} />
              {pinLoc.lat !== null && (<Marker position={{lat: pinLoc.lat, lng: pinLoc.lng}} />)}
          </GoogleMap>
        )}
      </div>
    )
}

const ButtonNext = () => {
  return (
    <div className="button">
      Next ⏩
    </div>
  )
}

function GameWindow() {
  const score = 25000;
  return (
    <div className="App">
      <div className="street-view-container">
        <StreetView />
      </div>
      <div className="score-card-container">
        <div style={{fontSize:'24px',background: '#bf40bf', height: '42px',width: '280px',color:'white',borderRadius: '12px 0px 0px 12px'}}>
          <div style={{padding: '4px 18px'}}>
            Score: {score}/25000
          </div>
        </div>
      </div>
      
      <div className="button-container">
        <ButtonNext /> 
      </div>
      <div className="map-view-container">
        <MapsView />
      </div>
    </div>
  );
}

export default GameWindow;
