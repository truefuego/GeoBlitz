import React, { useEffect} from "react";
import './App.css'
import GameWindow from "./GameWindow";
import useGameStore from "./Stores/gameStore";

function App() {
  const {randomizeLocation,refresh} = useGameStore((state) => ({randomizeLocation: state.randomizeLocation,refresh: state.refresh}))

  return (
    <GameWindow/>
  );
}

export default App;
