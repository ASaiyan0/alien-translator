import React, { useState, JSX } from "react";
import "./CryptoKeyMbl.css";
import CryptoKeyInputBox from "./CryptoKeyInputBox.tsx";

function CryptoKeyMbl(props: {
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
      <div className="CryptoKey-Mbl-container">
        <main className="CryptoKey-Mbl-grid">
          <div className="CryptoKey-Mbl-letters" id="let-1">
            H C B E T D
          </div>
          <div className="CryptoKey-Mbl-letters" id="let-2">
            K R A F Z N
          </div>
          <div className="CryptoKey-Mbl-letters" id="let-3">
            O Y G U X Q
          </div>
          <div className="CryptoKey-Mbl-letters" id="let-4">
            P V W M J L
          </div>
          <div className="CryptoKey-Mbl-letters" id="let-5">
            I S{" "}
            <button className="CryptoKey-Mbl-Hint" onClick={handleHint}>
              Hint
            </button>
          </div>
          <div className="CryptoKey-Mbl-guesses" id="guess-1">
            <form className="CryptoKey-Mbl-guessBox" id="form-1">
              {createInputs(0, 5)}
            </form>
          </div>
          <div className="CryptoKey-Mbl-guesses" id="guess-2">
            <form className="CryptoKey-Mbl-guessBox" id="form-2">
              {createInputs(6, 11)}
            </form>
          </div>
          <div className="CryptoKey-Mbl-guesses" id="guess-3">
            <form className="CryptoKey-Mbl-guessBox" id="form-3">
              {createInputs(12, 17)}
            </form>
          </div>
          <div className="CryptoKey-Mbl-guesses" id="guess-4">
            <form className="CryptoKey-Mbl-guessBox" id="form-4">
              {createInputs(18, 23)}
            </form>
          </div>
          <div className="CryptoKey-Mbl-guesses" id="guess-5">
            <form className="CryptoKey-Mbl-guessBox" id="form-5">
              {createInputs(24, 25)}
            </form>
          </div>
        </main>
      </div>
    </>
  );
}

export default CryptoKeyMbl;
