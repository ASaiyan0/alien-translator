import React, { JSX } from "react";
import { ansObject } from "./ansObject.ts";
import Letters from "./Letters.tsx";
import "./Msg.css";

function Msg(props: { userGuess: string[] }) {
  function alienText(str: string): JSX.Element[] {
    let msg = str;
    let jsxArray: JSX.Element[] = [];
    for (let i = 0; i <= msg.length; i++) {
      let gss = ansObject[msg[i]];
      jsxArray.push(<Letters letter={msg[i]} guess={props.userGuess[gss]} />);
    }
    return jsxArray;
  }

  return (
    <>
      <div className="Msg-grid">
        <div className="Msg-blue">👽???</div>
        <div className="Msg-gray">
          {alienText("HAJIMEMASHITE. NAMAE WA YOSUKE DESU. YOROSHIKU")} 🙇
        </div>
      </div>
      <br />
      <br />
      <div className="Msg-grid">
        <div className="Msg-blue">🌎???</div>
        <div className="Msg-gray">
          {alienText("KONNO SEKAI WA SUGOI DESU. ISSHONI ASOBU!")} 🤝
        </div>
      </div>
      <br />
      <br />
      <div className="Msg-grid">
        <div className="Msg-blue">🇺🇸???</div>
        <div className="Msg-gray">
          {alienText("AMERIKA GA SUKI DESU. LIBERTY ZO NI IKITAI.")} 🗽
        </div>
      </div>
      <br />
      <br />
      <div className="Msg-grid">
        <div className="Msg-blue">🇬🇧???</div>
        <div className="Msg-gray">
          {alienText("IGIRISU WA OK DESU. AME SUKI JA NAI DESU.")} 🚫☔
        </div>
      </div>
      <br />
      <br />
      <div className="Msg-grid">
        <div className="Msg-blue">🇯🇵???</div>
        <div className="Msg-gray">
          {alienText("NIHON GA DAI SUKI! NIHONGO O HANASU KA?")} 🗣️
        </div>
      </div>
      <br />
      <br />
      <div className="Msg-grid">
        <div className="Msg-blue">🦎🐦🐻?</div>
        <div className="Msg-gray">
          {alienText("DOUBUTSU GA SUKI DESU. ICHIBAN NO WA:")} 🐶
        </div>
      </div>
      <br />
      <br />
      <div className="Msg-grid">
        <div className="Msg-blue">🐶???</div>
        <div className="Msg-gray">
          {alienText("INU GA DAI SUKI! KAWAII NE! WAN WAN!")} 😍
        </div>
      </div>
      <br />
      <br />
      <div className="Msg-grid">
        <div className="Msg-blue">🐱???</div>
        <div className="Msg-gray">
          {alienText("EH, NEKO SUKI JA NAI DESU")} 😐
        </div>
      </div>
      <br />
      <br />
      <div className="Msg-grid">
        <div className="Msg-blue">📽️???</div>
        <div className="Msg-gray">
          😎🦾{alienText("GA SUKI DESU. `I'LL BE BACK!`")}
        </div>
      </div>
      <br />
      <br />
      <div className="Msg-grid">
        <div className="Msg-blue">👋!!</div>
        <div className="Msg-gray">{alienText("DE WA, BYE BYE!!")} 👋</div>
      </div>
    </>
  );
}

export default Msg;
