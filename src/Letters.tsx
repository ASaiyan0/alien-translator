import React from "react";

function Letters(props: { letter: string; guess: string }) {
  const regex = /^[a-zA-Z]$/;
  let style = {
    fontFamily: "Dandy",
  };

  if (regex.test(props.letter) == false) {
    style = { fontFamily: "SF Pro", minWidth: "0.5ch" };
  } else if (props.letter == props.guess.toUpperCase()) {
    style = { fontFamily: "SF Pro" };
  } else {
    style = { fontFamily: "Dandy" };
  }

  console.log(props.letter);
  return (
    <>
      <span style={style}>{props.letter}</span>
    </>
  );
}

export default Letters;
