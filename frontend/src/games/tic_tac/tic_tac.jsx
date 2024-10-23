import React, { useEffect } from "react";
import "./style.css";

function Tic_tac() {

  // Use useEffect to load the script after the component mounts
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/games/scripts/tic_tac_script.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Clean up script on unmount
    };
  }, []); // Empty dependency array ensures this runs only once after mount

  return (
    <>
      {/* <!-- select box --> */}
      <div className="select-box">
        <h4>Tic Tac Toe</h4>
        <div className="content">
          <div className="title">Select which you want to be?</div>
          <div className="options">
            <button className="playerX">Player (X)</button>
            <button className="playerO">Player (O)</button>
          </div>
          <div className="credit">
            Created By{" "}
            <a href="https://www.youtube.com/codingnepal">CodingNepal</a>
          </div>
        </div>
      </div>

      {/* <!-- playboard section --> */}
      <div className="play-board">
        <div className="details">
          <div className="players">
            <span className="Xturn">X's Turn</span>
            <span className="Oturn">O's Turn</span>
            <div className="slider"></div>
          </div>
        </div>
        <div className="play-area">
          <section>
            <span className="box1"></span>
            <span className="box2"></span>
            <span className="box3"></span>
          </section>
          <section>
            <span className="box4"></span>
            <span className="box5"></span>
            <span className="box6"></span>
          </section>
          <section>
            <span className="box7"></span>
            <span className="box8"></span>
            <span className="box9"></span>
          </section>
        </div>
      </div>

      {/* <!-- result box --> */}
      <div className="result-box">
        <div className="won-text"></div>
        <div className="btn">
          <button>Replay</button>
        </div>
      </div>
    </>
  );
}

export default Tic_tac;
