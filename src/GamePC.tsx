import React, { useState } from "react";
import "./GamePC.css";
import icons from "./IconsPC.png";
import GuessTheNamePC from "./GuessTheNamePC.tsx";
import CryptoKeyPC from "./CryptoKeyPC.tsx";
import Messages from "./Messages.tsx";
import { ansObject } from "./ansObject.ts";

function GamePC(props: { onResult: (input: string) => void }) {
  const ansArray: string[] = Object.keys(ansObject);
  const [userGuess, setUserGuess] = useState(new Array(26).fill(""));

  function handleResult(result: string): void {
    props.onResult(result);
  }

  function handleGuess(index: number, guess: string): void {
    if (userGuess[index] == guess) {
      return;
    } else {
      let newArray: string[] = [...userGuess];
      newArray[index] = guess;
      setUserGuess(newArray);
    }
  }

  return (
    <>
      <div className="GamePC-container">
        <main className="GamePC-grid">
          <div className="GamePC-top">
            <img src={icons} />
          </div>
          <div className="GamePC-name">
            <GuessTheNamePC onResult={handleResult} />
          </div>
          <div className="GamePC-cryptokey">
            <CryptoKeyPC
              answer={ansArray}
              onGuess={handleGuess}
              userGuess={userGuess}
            />
          </div>
          <div className="GamePC-messages">
            <Messages userGuess={userGuess} />
          </div>
        </main>
      </div>
    </>
  );
}

export default GamePC;
