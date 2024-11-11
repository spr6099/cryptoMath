import "./style.css";
import { Helmet } from "react-helmet";

function Typing() {
  return (
    <>
      <div className="wrapper">
        <input type="text" className="input-field" />
        <div className="content-box">
          <div className="typing-text">
            <p></p>
          </div>
          <div className="content">
            <ul className="result-details">
              <li className="time">
                <p>Time Left:</p>
                <span>
                  <b>60</b>s
                </span>
              </li>
              <li className="mistake">
                <p>Mistakes:</p>
                <span>0</span>
              </li>
              <li className="wpm">
                <p>WPM:</p>
                <span>0</span>
              </li>
              <li className="cpm">
                <p>CPM:</p>
                <span>0</span>
              </li>
            </ul>
            <button>Try Again</button>
          </div>
        </div>
      </div>
      <Helmet>
        {" "}
        <script
          src="/games/scripts/typing/paragraphs.js"
          type="text/javascript"
        ></script>
        <script
          src="/games/scripts/typing/script.js"
          type="text/javascript"
        ></script>
      </Helmet>
    </>
  );
}
export default Typing;
