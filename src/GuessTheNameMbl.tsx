import React, { useState } from "react";
import "./GuessTheNameMbl.css";

function GuessTheNameMbl(props) {
  const [userInput, setUserInput] = useState("");
  const [resultText, setResultText] = useState("Guess My Name >");
  function handleUserInput(e) {
    setUserInput(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (userInput.toUpperCase() == "YOSUKE") {
      setUserInput("");
      setResultText("Correct. You win >");
      setTimeout(() => props.onResult("Win"), 3000);
    } else {
      setUserInput("");
      setResultText("Incorrect guess >");
    }
  }
  return (
    <>
      <div className="Name-Mbl-container">
        <main className="Name-Mbl-grid">
          <div className="Name-Mbl-alien">👽</div>
          <div className="Name-Mbl-text">{resultText}</div>
          <div className="Name-Mbl-input">
            <form className="Name-Mbl-guessBox" id="form">
              <input
                className="Name-Mbl-inputBox"
                type="text"
                id="inputBox"
                name="inputBox"
                onChange={handleUserInput}
                value={userInput}
              />{" "}
              &nbsp;
              <button
                className="Name-Mbl-submit"
                id="submit"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </form>
          </div>
        </main>
      </div>
    </>
  );
}

export default GuessTheNameMbl;
