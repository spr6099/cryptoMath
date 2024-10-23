import { Link } from "react-router-dom";

function Games() {
  return (
    <>
      <Link to="/games/tictac">
        <button>Tic Tac Toe</button>
      </Link>
      <Link to="/games/typing">
        <button>Typing</button>
      </Link>
    </>
  );
}

export default Games;
