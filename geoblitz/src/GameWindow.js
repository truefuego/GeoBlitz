import React, {useState, useEffect} from "react";
import { GoogleMap , Marker, useJsApiLoader} from '@react-google-maps/api';
import './App.css'
import ReactPlayer from 'react-player/youtube'
import useGameStore from "./Stores/gameStore";

const GameWindow = () => {
    const [score,setScore] = useState(0);
    const [distance,setDistance] = useState(0);


    // <------ GOOGLEMAPS ----->

    const markLocation = useGameStore((state) => state.markLocation)
    const guessedLocation = useGameStore((state) => state.guessedLocation)
    const correctLocation = useGameStore((state) => state.correctLocation)
    const refresh = useGameStore((state) => state.refresh)
    const addRound = useGameStore((state) => state.addRound)
    const rounds = useGameStore((state) => state.rounds)
    const addScore = useGameStore((state) => state.addScore)
    const userScore = useGameStore((state) => state.userScore)

    const containerStyle = {
        width: '25vw',
        height: '30vh',
        borderRadius: '12px',
        transition: '500ms',
        draggingCursor: "crosshair",
        draggableCursor: "crosshair"
    }

    const containerStyleBig = {
        width: '45vw',
        height: '50vh',
        borderRadius: '16px',
        transition: '500ms',
        draggingCursor: "crosshair",
        draggableCursor: "crosshair"
    }

    const containerMobile = {
        width: '84vw',
        height: '30vh',
        borderRadius: '16px'
    }

    const [center,setCenter] = useState({
        lat: 0,
        lng: 0
    })

    const [isHovering,setIsHovering] = useState(false)
    const {isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.API_KEY
    })
    
    const defaultMapOptions = {
        fullscreenControl: false,
        zoomControl: false,
        scaleControl: true,
        streetViewControl: false
    };

    function deg2rad(deg) {
        return deg * (Math.PI / 180);
    }

    function calculateDistance(lat1, lon1, lat2, lon2) {
        const R = 6371 * 1000; // Earth's radius in meters
        const dLat = deg2rad(lat2 - lat1);
        const dLon = deg2rad(lon2 - lon1);
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                 Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
                 Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = R * c;
        return distance;
    }

    const calculateScore = (dist) => {
        const mx = 3000;
        if(dist <= 1000) {
            return 100
        }
        const res = (mx * 1000 - dist) / (mx * 10);
        return Math.floor(res)
    }

    const handleGuessButtonClick = () => {
        const res = calculateDistance(correctLocation.lat,correctLocation.lng,guessedLocation.lat,guessedLocation.lng);
        setDistance(res);
        setPath([{lat: correctLocation.lat,lng: correctLocation.lng},{lat: guessedLocation.lat,lng: guessedLocation.lng}])
        const scre = calculateScore(res);
        addScore(scre);
        addRound()
        setScore(scre)
        console.log(res)
    }

    const [pinLoc, setPinLoc] = useState({ lat: null, lng: null });
  
    const handleMapClick = (event) => {
        setPinLoc({
            lat: event.latLng.lat(),
            lng: event.latLng.lng()
        });
        setCenter({
            lat:event.latLng.lat(),
            lng: event.latLng.lng()
        });
        markLocation(event.latLng.lat(),event.latLng.lng())
    };

    const [path,setPath] = useState([]);


    // <------>


    // <------ VideoPlayer ------>
    
    const [screenSize, setScreenSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        const handleResize = () => {
          setScreenSize({
            width: window.innerWidth,
            height: window.innerHeight
          });
        };
    
        window.addEventListener('resize', handleResize);
    
        // Clean up the event listener
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    // <------>
    return (
    <div className="App">
        <div className="street-view-container">
            <ReactPlayer url={correctLocation.video} config={{ youtube: { playerVars: { disablekb: 1 } } }} width={screenSize.width} height={screenSize.height} playing={true} volume={0} controls={false} loop={true} pip={false}/>
        </div>
        <div className="score-card-container">
            <div style={{fontSize:'24px',background: '#bf40bf', height: '42px',width: '350px',color:'white',borderRadius: '12px 0px 0px 12px'}}>
                <div style={{padding: '4px 18px'}}>
                    Round: {rounds} | {userScore} / {(rounds-1)*100}
                </div>
            </div>
        </div>
      
        <div className="button-container">
            {distance !== 0 && (
            <div className='containerResult'>
                <div style={{color:'#0f0'}}>{score}/100 Points</div>Your guess was <div style={{color: 'red'}}>{distance > 1000 ? Math.floor(distance/1000) : Math.floor(distance)} {distance > 1000 ? 'Km' : 'm'}</div> away from correct location
                <div className="button" onClick={() => {refresh();setDistance(0);setPinLoc({ lat: null, lng: null })}}>
                    Next {`>>`}
                </div>
            </div>) }{pinLoc.lat !== null && distance === 0 && (<div className="button" onClick={() => handleGuessButtonClick()}>
                Guess {`>>`}
            </div>)}
        </div>
        <div className="map-view-container">
            
        <div className='maps-view' onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
            {isLoaded && (
                <GoogleMap 
                    mapContainerStyle={window.innerWidth <= 500 ? containerMobile : isHovering ? containerStyleBig : containerStyle}
                    center={center}
                    zoom={2}
                    onClick={handleMapClick}
                    options= {defaultMapOptions}
                    >
                    {distance !== 0 && (<Marker position={{lat: correctLocation.lat, lng: correctLocation.lng}} icon={{url: "http://maps.google.com/mapfiles/kml/paddle/red-blank.png"}}/>)}
                    {pinLoc.lat !== null && (<Marker position={{lat: pinLoc.lat, lng: pinLoc.lng}} />)}
                </GoogleMap>
            )}
        </div>
      </div>
    </div>
  );
}

export default GameWindow;
