import React, { useEffect, useState } from 'react'
import { GoogleMap , Marker, useJsApiLoader} from '@react-google-maps/api';

import '../Styles/MapView.css'

const containerStyle = {
    width: '35vw',
    height: '30vh'
}

const center = {
    lat: 0,
    lng: 0
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

export default MapsView