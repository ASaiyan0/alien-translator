import React from "react";
import "./Win.css";

function Win(props) {
  function handleRestart() {
    props.onRestart("Start");
  }

  return (
    <>
      <div className="Win">
        <div className="Win-container">
          <header className="Win-header">
            <div className="Win-title">Congratulations!! 🎉</div>
            <div className="Win-subtitle">OMEDETOU GOZAIMASU!!</div>
          </header>
          <br />
          <nav className="Win-nav">
            <div className="Win-restart">
              <button id="restart-button" onClick={handleRestart}>
                Restart
              </button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Win;
