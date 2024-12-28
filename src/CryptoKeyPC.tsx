import React, { useState, JSX } from "react";
import "./CryptoKeyPC.css";
import CryptoKeyInputBox from "./CryptoKeyInputBox.tsx";

function CryptoKeyPC(props: {
  answer: string[];
  onGuess: (index: number, guess: string) => void;
  userGuess: string[];
}) {
  const [hintCount, setHintCount] = useState<Number>(0);
  function createInputs(a: number, b: number): JSX.Element[] {
    let jsxArray: JSX.Element[] = [];
    for (let i = a; i <= b; i++) {
      jsxArray.push(
        <CryptoKeyInputBox
          ansValue={props.answer[i]}
          onChange={(guess: string) => props.onGuess(i, guess)}
          value={props.userGuess[i]}
        />
      );
    }
    return jsxArray;
  }
  function handleHint(): void {
    switch (hintCount) {
      case 0:
        alert("The alien's name is contained in their first message.");
        setHintCount(hintCount + 1);
        break;
      case 1:
        alert("The first letter is H.");
        setHintCount(hintCount + 1);
        break;
      case 2:
        alert("The last letter is S.");
        setHintCount(hintCount + 1);
        break;
      case 3:
        alert("What US landmark does the alien want to visit?");
        setHintCount(hintCount + 1);
        break;
      case 4:
        alert("How does the alien end the conversation?");
        setHintCount(hintCount + 1);
        break;
      case 5:
        alert("Do you know the famous line from the alien's favorite movie?");
        setHintCount(hintCount + 1);
        break;
      case 6:
        alert(
          "The alien is speaking a human language other than English, and has indicated which one. Can you spot it?"
        );
        break;
    }
  }
  return (
    <>
      <div className="CryptoKey-PC-container">
        <main className="CryptoKey-PC-grid">
          <div className="CryptoKey-PC-letters" id="let-1">
            H C B E T D K R A F
          </div>
          <div className="CryptoKey-PC-letters" id="let-2">
            Z N O Y G U X Q P V
          </div>
          <div className="CryptoKey-PC-letters" id="let-3">
            W M J L I S
          </div>
          <div className="CryptoKey-PC-guesses" id="guess-1">
            <form className="CryptoKey-PC-guessBox" id="form-1">
              {createInputs(0, 9)}
            </form>
          </div>
          <div className="CryptoKey-PC-guesses" id="guess-2">
            <form className="CryptoKey-PC-guessBox" id="form-2">
              {createInputs(10, 19)}
            </form>
          </div>
          <div className="CryptoKey-PC-guesses" id="guess-3">
            <form className="CryptoKey-PC-guessBox" id="form-3">
              {createInputs(20, 25)}
            </form>
          </div>
        </main>
      </div>
    </>
  );
}

export default CryptoKeyPC;
