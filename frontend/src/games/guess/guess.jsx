import { Helmet } from "react-helmet";
import "./styles.css";

function Guess() {
  return (
    <>
      <div className="body">
        <div className="wrapper">
          <header>Guess a number from 1 to 100</header>
          <p className="guess"></p>
          <div className="input-field">
            <input type="number" />
            <button>Check</button>
          </div>
          <p> 
            You have <span className="chances">10</span> chances
          </p>
        </div>
        {/* <Helmet>
          <script src="/games/scripts/guess.js"></script>
        </Helmet> */}
      </div>
    </>
  );
}

export default Guess;
