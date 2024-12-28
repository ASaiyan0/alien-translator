import React from "react";
import "./Start.css";

function Start(props: { onNext: (input: string) => void }) {
  function handleInstructions(): void {
    props.onNext("Instructions");
  }
  return (
    <>
      <div className="Start">
        <div className="Start-container">
          <header className="Start-header">
            <div className="Start-title">🕵️ E.T. P.I: Alien Translator</div>
            <div className="Start-subtitle">UCHUJIN TANTEI SAN</div>
          </header>
          <br />
          <br />
          <br />
          <br />
          <nav className="Start-nav">
            <div className="Start-instructions">
              <button id="instructions-button" onClick={handleInstructions}>
                How to Play
              </button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Start;
