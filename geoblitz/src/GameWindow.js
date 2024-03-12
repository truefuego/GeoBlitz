import React, {useState, useEffect} from "react";
import { GoogleMap , Marker, useJsApiLoader} from '@react-google-maps/api';
import './App.css'
import ReactPlayer from 'react-player/youtube'
import useGameStore from "./Stores/gameStore";
import Cover_Image from './image_coverpage.jpg'
import ProgressBar from '@ramonak/react-progress-bar'
import useMaxScore from "./Stores/maxScore";

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

    // <------>
    
    return (
    <div className="App">
        <div style={gameMode !== null ? cover_card_close : cover_card}> 
            <img style={{width: screenSize.width <= 1490 ? '' : '100%',height: screenSize.width <= 1490 ? '100%' : '',objectFit: 'center',objectPosition: 'center center',position: 'absolute'}} src={Cover_Image} alt="background"/>
            {gameMode === null && (<div style={{zIndex: '11',position: 'absolute',height:'100%',width:'100%',background: 'rgba(0, 0, 0, 0.3)',display: 'flex',flexDirection:'column',alignItems: 'center',justifyContent: 'center'}}>
                <p style={{fontSize: '54px',color: 'white',margin: '30px 10px'}}>GeoBlitz</p>
                {userScore !== 0 ? 
                (<div style={{display: 'flex',flexDirection:'column',alignItems: 'center',maxWidth:'360px',width: '80vw',background: '#6a1b9a',padding: '20px',borderRadius:'8px'}}>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="2" d="M12,22 C12,22 4,16 4,10 C4,5 8,2 12,2 C16,2 20,5 20,10 C20,16 12,22 12,22 Z M12,13 C13.657,13 15,11.657 15,10 C15,8.343 13.657,7 12,7 C10.343,7 9,8.343 9,10 C9,11.657 10.343,13 12,13 L12,13 Z"></path></svg>
                    <p style={{color: 'white'}}>Final Result</p>
                    <p style={{color:'#ff0'}}>Your total was {userScore} points / 500</p>
                    <ProgressBar completed={Math.floor(userScore/rounds)} width="320px" customLabel={userScore} bgColor="#0cb"/>
                    <p  style={{color: 'white'}}>Max Score: {Math.max(mxScore,userScore)}</p>
                    <div style={{background: '#4c4',color:'white',textShadow:'2px 2px 4px rgba(0,0,0,.5)',borderRadius:'32px',padding:'8px 16px',margin:'10px',cursor:'pointer'}} onClick={() => {updateMaxScore(userScore);restartGame()}}>
                        Play Again
                    </div>
                </div>) 
                :
                (<div style={{display: 'flex',flexDirection: screenSize.width < 1000? 'column' : 'row',gap: '12px'}}>
                    <button style={{cursor: 'pointer',fontSize: '20px',padding:'14px',border:'none',borderRadius:'8px',fontWeight:'600',fontFamily:'"Exo 2",sans serif',fontStyle:'italic',color:'white',background:'black'}} onClick={() => {setGameMode(0);refresh();startTimer()}}>
                        World
                    </button>
                    <button style={{cursor: 'pointer',fontSize: '20px',padding:'14px',border:'none',borderRadius:'8px',fontWeight:'600',fontFamily:'"Exo 2",sans serif',fontStyle:'italic',color:'white',background:'black'}} onClick={() => {setGameMode(1);refresh();startTimer()}}>
                        India
                    </button>
                    <button style={{cursor: 'pointer',fontSize: '20px',padding:'14px',border:'none',borderRadius:'8px',fontWeight:'600',fontFamily:'"Exo 2",sans serif',fontStyle:'italic',color:'white',background:'black'}} onClick={() => {setGameMode(2);refresh();startTimer()}}>
                        USA
                    </button>
                </div>)
                }
            </div>)}
        </div>
        {seconds >= 60 && (
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',top:'0',left:'0',width: '100vw',height: '110vh',background: 'black',zIndex:'17 !important'}}>
                <p style={{fontSize:'48px',color:'white',fontStyle:'italic',fontWeight:'700'}}>TIMES UP!</p>
            </div>)
        }
        {gameMode !== null && (
            <div className="street-view-container">
                <ReactPlayer url={correctLocation.video} config={{ youtube: { playerVars: { disablekb: 1 } } }} width={screenSize.width} height={screenSize.height} playing={true} volume={0} controls={false} loop={true} pip={false}/>
            </div>
        )}
        {gameMode !== null && (
            <div className="score-card-container">
                <div style={{fontSize:'24px',background: '#bf40bf', height: '42px',width: 'fit-content',color:'white',borderRadius: '12px 0px 0px 12px'}}>
                    <div style={{padding: '4px 18px'}}>
                        Round: {rounds} / 5 | {userScore} / {(rounds-1)*100}
                    </div>
                </div>
            </div>
        )}
        {gameMode !== null && (
            <div className="timer-container">
                <div style={{width: '100%',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <div style={{fontSize:'24px',background: '#bf40bf', height: 'fit-content',width: 'fit-content',padding: '4px',color:'white',borderRadius: '12px 12px 12px 12px'}}>
                        <div style={{padding: '4px 18px'}}>
                            {seconds} sec
                        </div>
                    </div>
                </div>
            </div>
        )}
        {gameMode !== null && (
            <div className="button-container">
                {distance !== 0 && (
                <div className='containerResult'>
                    <div style={{color:'#0f0'}}>{score}/100 Points</div>Your guess was <div style={{color: 'red'}}>{distance > 1000 ? Math.floor(distance/1000) : Math.floor(distance)} {distance > 1000 ? 'Km' : 'm'}</div> away from correct location
                    <div className="button" onClick={() => {handleNextButtonClick();startTimer()}}>
                        Next {`>>`}
                    </div>
                </div>) }{pinLoc.lat !== null && distance === 0 && (<div className="button" onClick={() => {handleGuessButtonClick();updateMaxScore(userScore)}}>
                    Guess {`>>`}
                </div>)}
            </div>
        )}
        {gameMode !== null && (
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
        )}
        
      
        
        
    </div>
  );
}

export default GameWindow;
