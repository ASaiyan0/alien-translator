import React, { useState } from "react";
import "./GuessTheNamePC.css";

function getTime() {
  let now = new Date();
  let currentTime = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return currentTime;
}

function GuessTheNamePC(props) {
  const [userInput, setUserInput] = useState("");
  const [resultText, setResultText] = useState("Guess My Name");
  function handleUserInput(e) {
    setUserInput(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (userInput.toUpperCase() == "YOSUKE") {
      setUserInput("");
      setResultText("Correct. You win!");
      setTimeout(() => props.onResult("Win"), 3000);
    } else {
      setUserInput("");
      setResultText("Incorrect guess.");
    }
  }
  return (
    <>
      <div className="Name-PC-container">
        <main className="Name-PC-grid">
          <div className="Name-PC-alien">👽</div>
          <div className="Name-PC-text">
            <b>{resultText}</b>
          </div>
          <div className="Name-PC-time">{getTime()}</div>
          <div className="Name-PC-input">
            <form className="Name-PC-guessBox" id="form">
              <input
                className="Name-PC-inputBox"
                type="text"
                id="inputBox"
                name="inputBox"
                onChange={handleUserInput}
                value={userInput}
              />
              <br />
              <br />
              <center>
                <button
                  className="Name-PC-submit"
                  id="submit"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </center>
            </form>
          </div>
        </main>
      </div>
    </>
  );
}

export default GuessTheNamePC;
