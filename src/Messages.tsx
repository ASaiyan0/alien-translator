import React from "react";
import Msg from "./Msg.tsx";
import "./Messages.css";

function Messages(props: { userGuess: string[] }) {
  return (
    <>
      <main className="Messages-Container">
        <Msg userGuess={props.userGuess} />
        <br />
      </main>
    </>
  );
}

export default Messages;
