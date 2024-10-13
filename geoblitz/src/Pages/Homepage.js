import ProgressBar from '@ramonak/react-progress-bar'
import React from 'react'
import Cover_Image from '../image_coverpage.jpg'
import CustonImageButton from '../components/CustonImageButton'
import IndiaImage from '.././assets/cardbuttons/india.jpg'
import WorldImage from '.././assets/cardbuttons/world.jpg'
import USAImage from '.././assets/cardbuttons/usa.jpg'

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

const Homepage = ({gameMode, screenSize, userScore, mxScore, rounds,updateMaxScore,restartGame,setGameMode,refresh,startTimer}) => {
  return (
    <div style={gameMode !== null ? cover_card_close : cover_card}> 
            <img style={{width: screenSize.width <= 1490 ? '' : '100%',height: screenSize.width <= 1490 ? '100%' : '',objectFit: 'center',objectPosition: 'center center',position: 'absolute'}} src={Cover_Image} alt="background"/>
            {gameMode === null && (
            <div style={{zIndex: '11',position: 'absolute',height:'100%',width:'100%',background: 'rgba(0, 0, 0, 0.3)',display: 'flex',flexDirection:'column',alignItems: 'center',justifyContent: 'center'}}>
                <p style={{fontSize: '54px',color: 'white',margin: '30px 10px'}}>Geo Explorer</p>
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
                    <CustonImageButton handleClick={() => {setGameMode(0);refresh();startTimer()}} title="World" image={WorldImage}/>
                    <CustonImageButton handleClick={() => {setGameMode(1);refresh();startTimer()}} title="India" image={IndiaImage}/>
                    <CustonImageButton handleClick={() => {setGameMode(2);refresh();startTimer()}} title="USA" image={USAImage}/>
                </div>)
                }
            </div>)}
        </div>
  )
}

export default Homepage