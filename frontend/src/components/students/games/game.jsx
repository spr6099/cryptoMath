// import { Link } from "react-router-dom";

// function Games() {
//   return (
//     <>
//       <iframe src="{`${process.env.PUBLIC_URL}/games/tic_tac.html">
//         <button>Tic Tac Toe</button>
//       </iframe>
//       <Link to="/games/typing">
//         <button>Typing</button>
//       </Link>
//     </>
//   );
// }

// export default Games;

import React, { useState } from "react";
import { Link } from "react-router-dom";

function Games() {
  const [showIframe, setShowIframe] = useState(false);

  const handleButtonClick = () => {
    return(
    <iframe
      src={`${process.env.PUBLIC_URL}/games/tic_tac.html`}
      width="600"
      height="400"
      style={{ border: "none", marginTop: "10px" }}
      title="Tic Tac Toe Game"
    />)
  };

  return (
    <>
      <button onClick={handleButtonClick}>Tic Tac Toe</button>
    </>
  );
}

export default Games;
