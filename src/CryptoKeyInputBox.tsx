import React, { ChangeEvent } from "react";
import "./CryptoKeyInputBox.css";

function CryptoKeyInputBox(props: {
  ansValue: string;
  onChange: (guess: string) => void;
  value: string;
}) {
  let style = {
    backgroundColor: "#fff",
  };

  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    props.onChange(e.target.value);
  }

  if (props.value.toUpperCase() == props.ansValue) {
    style = { backgroundColor: "#2cca3f" };
  } else if (props.value == "?" || props.value == "") {
    style = { backgroundColor: "#fff" };
  } else {
    style = { backgroundColor: "#eb6b48" };
  }

  return (
    <>
      <input
        className="CryptoKey-inputBox"
        type="text"
        maxLength="1"
        onChange={handleChange}
        style={style}
        placeholder="?"
        value={props.value}
      />
    </>
  );
}

export default CryptoKeyInputBox;
