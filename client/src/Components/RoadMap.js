import React from "react";

export default function Roadmap(texttitle, text) {
  if (text instanceof Array) {
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
          <div className="roadmap-textbox-child-first">
            {text.map((index) => {
              return (
                <div className="roadmap-child">
                  <div className="circleLine-child">
                    <div className="circle-child"></div>
                    <div className="line-child"></div>
                  </div>
                  <div className="roadmap-textbox-child">
                    <div className="roadmap-textbox-title index-htwo">
                      <h2>{index.school || index.company}</h2>
                    </div>
                    <div className="roadmap-textbox index-p">
                      <p className="role">{index.role}</p>
                      <p>{index.yearAttended || index.duration}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  } else {
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
}
