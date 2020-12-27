import React from "react";
import MemeCls from "./Meme.module.css";

function Meme(props) {
  console.log(props, "In MEME.jsx");
  return (
    <div className={MemeCls.meme}>
      <img src={props.randomImg.url} alt="MemeImage" />
      <h1 className={MemeCls.topText}>{props.topText}</h1>
      <h1 className={MemeCls.bottomText}>{props.bottomText}</h1>
    </div>
  );
}

export default Meme;
