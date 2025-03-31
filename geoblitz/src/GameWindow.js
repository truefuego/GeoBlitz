import React, {useState, useEffect} from "react";
import { GoogleMap , Marker, useJsApiLoader} from '@react-google-maps/api';
import './App.css'
import ReactPlayer from 'react-player/youtube'
import useGameStore from "./Stores/gameStore";
import Cover_Image from './image_coverpage.jpg'
import ProgressBar from '@ramonak/react-progress-bar'
import useMaxScore from "./Stores/maxScore";
import Homepage from "./Pages/Homepage";

const GameWindow = () => {
    const [score,setScore] = useState(0);
    const [distance,setDistance] = useState(0);

    const [screenSize, setScreenSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    const markLocation = useGameStore((state) => state.markLocation)
    const guessedLocation = useGameStore((state) => state.guessedLocation)
    const correctLocation = useGameStore((state) => state.correctLocation)
    const refresh = useGameStore((state) => state.refresh)
    const addRound = useGameStore((state) => state.addRound)
    const rounds = useGameStore((state) => state.rounds)
    const addScore = useGameStore((state) => state.addScore)
    const userScore = useGameStore((state) => state.userScore)
    const gameMode = useGameStore((state) => state.gameMode)
    const setGameMode = useGameStore((state) => state.setGameMode)
    const endGame = useGameStore((state) => state.endGame)
    const resetGame = useGameStore((state) => state.resetGame)
    const restartGame = useGameStore((state) => state.restartGame)

    const updateMaxScore = useMaxScore((state) => state.updateMaxScore)
    const mxScore = useMaxScore((state) => state.mxScore)
    

    const cover_card = {
        zIndex: '11',
        position: 'absolute',
        left: '0',
        bottom: '0',
        height: '100vh',
        width: '100%',
        transition: '500ms',
    }

    const cover_card_close = {
        zIndex: '11',
        position: 'absolute',
        left: '0',
        bottom: '0',
        height: '0',
        width: '100%',
        background: 'black',
        transition: '500ms',
    }

    // <------ GOOGLEMAPS ----->
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
        googleMapsApiKey: process.env.REACT_APP_API_KEY
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
        var mx = 8000;
        if(gameMode === 1) {
            mx = 1500;
        }
        else if(gameMode === 2) {
            mx = 2500;
        }
        if(dist <= 1000) {
            return 100
        }
        const res = Math.max((mx * 1000 - dist) / (mx * 10),0);
        return Math.floor(res)
    }

    const handleGuessButtonClick = () => {
        const res = calculateDistance(correctLocation.lat,correctLocation.lng,guessedLocation.lat,guessedLocation.lng);
        setDistance(res);
        const scre = calculateScore(res);
        setScore(scre)
    }

    const [pinLoc, setPinLoc] = useState({ lat: null, lng: null });
  
    const handleMapClick = (event) => {
        if(distance !== 0) {
            return;
        }
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

    // <------>

    const handleNextButtonClick = () => {
        refresh();
        setDistance(0);
        setPinLoc({ lat: null, lng: null });
        addRound();
        addScore(score);
        if(rounds === 5) {
            endGame()
        }
    }

    // <------ VideoPlayer ------>
    const [seconds, setSeconds] = useState(0);
    const [timerActive, setTimerActive] = useState(false);

    useEffect(() => {
        let interval;
        if (timerActive) {
          interval = setInterval(() => {
            setSeconds(prevSeconds => Math.min(prevSeconds+1,60));
          }, 1000);
        } else {
          clearInterval(interval); // Clear interval if timer is not active
        }
        // Clean up the interval when component unmounts or when timer is stopped
        return () => clearInterval(interval);
    }, [timerActive]); // Depend on timerActive to start or stop the timer

    const startTimer = () => {
        setSeconds(0); // Reset seconds to 0
        setTimerActive(true); // Start the timer
    };
    const stopTimer = () => {
        setTimerActive(false); // Stop the timer
    };

    useEffect(() => {
        const handleResize = () => {
          setScreenSize({
            width: window.innerWidth,
            height: window.innerHeight
          });
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, []);

    const [showHint, setShowHint] = useState(false);
    const handleHintClick = () => {
        setShowHint(!showHint);
    }

    // <------>
    
    return (
    <div className="App">
        <div style={gameMode !== null ? cover_card_close : cover_card}> 
            <img style={{width: screenSize.width <= 1490 ? '' : '100%',height: screenSize.width <= 1490 ? '100%' : '',objectFit: 'center',objectPosition: 'center center',position: 'absolute'}} src={Cover_Image} alt="background"/>
            {gameMode === null && <Homepage gameMode={gameMode} mxScore={mxScore} refresh={refresh} restartGame={restartGame} rounds={rounds} screenSize={screenSize} setGameMode={setGameMode} startTimer={startTimer} updateMaxScore={updateMaxScore} userScore={userScore}/>}
        </div>
        {seconds >= 60 && (
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',top:'0',left:'0',width: '100vw',height: '110vh',background: 'black',zIndex:'17 !important'}}>
                <p style={{fontSize:'48px',color:'white',fontStyle:'italic',fontWeight:'700'}}>TIMES UP!</p>
            </div>)
        }
        {gameMode !== null && (
            <>
                <div className="street-view-container">
                    <ReactPlayer url={correctLocation.video} config={{ youtube: { playerVars: { disablekb: 1 } } }} width={screenSize.width} height={screenSize.height} playing={true} volume={0} controls={false} loop={true} pip={false}/>
                </div>
                <div className="score-card-container">
                    <div style={{fontSize:'24px',background: '#bf40bf', height: '42px',width: 'fit-content',color:'white',borderRadius: '12px 0px 0px 12px'}}>
                        <div style={{padding: '4px 18px'}}>
                            Round: {rounds} / 5 | {userScore} / {(rounds-1)*100}
                        </div>
                    </div>
                </div>
                <div className="timer-container">
                    <div style={{width: '100%',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                        <div style={{fontSize:'24px',background: '#bf40bf', height: 'fit-content',width: 'fit-content',padding: '4px',color:'white',borderRadius: '12px 12px 12px 12px'}}>
                            <div style={{padding: '4px 18px'}}>
                                {seconds} sec
                            </div>
                        </div>
                    </div>
                </div>
                <div className="button-container">
                    {distance !== 0 && (
                    <div className='containerResult'>
                        <div style={{color:'#0f0'}}>{score}/100 Points</div>Your guess was <div style={{color: 'rgb(70,0,0)'}}>{distance > 1000 ? Math.floor(distance/1000) : Math.floor(distance)} {distance > 1000 ? 'Km' : 'm'}</div> away from correct location
                        <div className="button" onClick={() => {handleNextButtonClick();startTimer()}}>
                            Next {`>>`}
                        </div>
                    </div>)}
                </div>
                <div className="guess-button-container">
                    {pinLoc.lat !== null && distance === 0 && (<div className="button" onClick={() => {handleGuessButtonClick();updateMaxScore(userScore)}}>
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
                {showHint ? (
                    <div className="hint-button">
                        <div style={{ width: '100%', maxWidth: '300px', height: 'fit-content'}}>
                            <div style={{ height: '20px', width: '20px', cursor: 'pointer', borderRadius: '12px', backgroundColor: 'slateblue', position: 'absolute', top: -13, right: -6, textAlign: 'center' }} onClick={handleHintClick}>
                                x
                            </div>
                        </div>
                        <p>This is you Hint</p>
                    </div>)
                     : (
                    <div className="hint-button" style={{ cursor: 'pointer'}} onClick={handleHintClick}>Hint?</div>
                )}
            </>
        )}
    </div>
  );
}

export default GameWindow;
