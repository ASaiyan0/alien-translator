import React, { useState } from "react";
import "./GameMbl.css";
import icons from "./IconsMbl.png";
import GuessTheNameMbl from "./GuessTheNameMbl.tsx";
import CryptoKeyMbl from "./CryptoKeyMbl.tsx";
import Messages from "./Messages.tsx";
import { ansObject } from "./ansObject.ts";

function getTime(): string {
  let now: Date = new Date();
  let currentTime: string = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return currentTime;
}

function GameMbl(props: { onResult: (input: string) => void }) {
  const ansArray: string[] = Object.keys(ansObject);
  const [userGuess, setUserGuess] = useState(new Array(26).fill(""));

  function handleResult(result): void {
    props.onResult(result);
  }

  function handleGuess(index: number, guess: string): void {
    if (userGuess[index] == guess) {
      return;
    } else {
      let newArray = [...userGuess];
      newArray[index] = guess;
      setUserGuess(newArray);
    }
  }
  return (
    <>
      <div className="GameMbl-container">
        <main className="GameMbl-grid">
          <div className="GameMbl-top">
            <div className="GameMbl-top-time">
              <b>{getTime()}</b>
            </div>
            <div className="GameMbl-top-icons">
              <img src={icons} />
            </div>
          </div>
          <div className="GameMbl-name">
            <GuessTheNameMbl onResult={handleResult} />
          </div>
          <div className="GameMbl-messages">
            <Messages userGuess={userGuess} />
          </div>
          <div className="GameMbl-cryptokey">
            <CryptoKeyMbl
              answer={ansArray}
              onGuess={handleGuess}
              userGuess={userGuess}
            />
          </div>
        </main>
      </div>
    </>
  );
}

export default GameMbl;
