import React, {useState, useEffect} from "react";
import './App.css'
import GameWindow from "./GameWindow";
import useGameStore from "./Stores/gameStore";

function App() {
  const {randomizeLocation,correctLocation,refresh,addRound} = useGameStore((state) => ({addRound:state.addRound,randomizeLocation: state.randomizeLocation,correctLocation: state.correctLocation,refresh: state.refresh}))

  useEffect(() => {
    randomizeLocation()
  },[refresh])

  return (
    <GameWindow/>
  );
}

export default App;
