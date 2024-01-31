import React from "react";

export default function Roadmap(texttitle, text) {
  return (
    <div className="roadmap">
      <div className="circleLine">
        <div className="circle"></div>
        <div className="line"></div>
      </div>
      <div className="">
        <div className="roadmap-textbox-title">
          <h2>{texttitle}</h2>
        </div>
        <div className="roadmap-textbox">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}
