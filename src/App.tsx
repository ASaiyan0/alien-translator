import React, { useState } from "react";
import Start from "./Start.tsx";
import Instructions from "./Instructions.tsx";
import GamePC from "./GamePC.tsx";
import GameMbl from "./GameMbl.tsx";
import Win from "./Win.tsx";
import "./App.css";

function App() {
  const [state, setState] = useState<String>("Start");
  function handleNext(version: string): void {
    setState(version);
  }
  return (
    <>
      {state == "Start" && <Start onNext={handleNext} />}
      {state == "Instructions" && <Instructions onPlay={handleNext} />}
      {state == "GamePC" && <GamePC onResult={handleNext} />}
      {state == "GameMbl" && <GameMbl onResult={handleNext} />}
      {state == "Win" && <Win onRestart={handleNext} />}
    </>
  );
}

export default App;
