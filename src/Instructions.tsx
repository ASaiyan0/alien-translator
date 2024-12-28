import React from "react";
import "./Instructions.css";

function isMobile(): boolean {
  if (window.innerWidth <= 990) {
    return true;
  } else {
    return false;
  }
}
function Instructions(props: { onPlay: (input: string) => void }) {
  function handlePlay(): void {
    if (isMobile()) {
      props.onPlay("GameMbl");
    } else {
      props.onPlay("GamePC");
    }
  }

  return (
    <>
      <div className="Instructions">
        <div className="Instructions-container">
          <header className="Instructions-header">Instructions</header>
          <main className="Instructions-text">
            <p>
              A researcher has made first contact via text with an alien
              lifeform. It turns out they use iMessage too! The alien does not
              speak English, but they do understand emojis.
            </p>
            <p>
              On the next screen, you will see a text message conversation
              between the researcher and the alien. The researcher asked the
              alien's opinion on various subjects by using emojis, and the alien
              responded in their own language. Your task is to figure out which
              strange alien symbol corresponds to which letter of the Latin
              alphabet.
            </p>
            <p>
              When you have a guess, input a letter in the guess box next to the
              corresponding alien symbol. If you're wrong, the box will turn
              red; if you're right, the box will turn green, and every instance
              of that symbol in the text message chain will be replaced with the
              Latin letter. With enough luck and logic, you'll be able to decode
              the whole conversation and achieve your ultimate goal - guessing
              the alien's name in the box next to the 👽 icon.
            </p>
            <p>
              Once you correctly guess the alien's name and click Submit, you
              win! If you get stuck, try pressing the Hint button, and an alert
              box with additional information will appear in your browser. Good
              luck!
            </p>
          </main>
          <nav className="Instructions-nav">
            <button id="play-button" onClick={handlePlay}>
              Begin
            </button>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Instructions;
