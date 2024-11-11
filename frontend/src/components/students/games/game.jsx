import { TicTacToe } from "./tic_tac/index";
function Games() {
  return (
    <>
      <div className="">
        <div className="row ms-5 m-3 ">
          <div className="col-3 m-3 ">
            <div
              className="bg-primary   p-2"
              style={{ Height: "200px", width: "200px" }}
            >
              <a
                href={`${process.env.PUBLIC_URL}/games/tic-tac.html`}
                target="_blank"
                rel="noopener noreferrer"
                // className=" bg-secondary"
              >
                <img
                  src="/images/ticTac.webp"
                  height={"200px"}
                  width={"100%"}
                  style={{ objectFit: "cover" }}
                ></img>
                <div>
                  <button className="w-100 ">TIC-TAC-TOE</button>
                </div>
              </a>
            </div>
          </div>
          <div className="col-3 m-3 ">
            <div
              className="bg-primary   p-2"
              style={{ Height: "200px", width: "200px" }}
            >
              <a href="/student/games/ticTac">
                <img
                  src="/images/ticTac.webp"
                  height={"200px"}
                  width={"100%"}
                  style={{ objectFit: "cover" }}
                ></img>
                <div>
                  <button className="w-100 ">TIC-TAC-react</button>
                </div>
              </a>
            </div>
          </div>
          <div className="col-3 m-3 ">
            <div
              className="bg-primary  p-2"
              style={{ Height: "200px", width: "200px" }}
            >
              <a
                href={`${process.env.PUBLIC_URL}/games/snake/index.html`}
                target="_blank"
                rel="noopener noreferrer"
                // className=" bg-secondary"
              >
                <img
                  src="/images/snake.jpg"
                  height={"200px"}
                  width={"100%"}
                  style={{ objectFit: "cover" }}
                ></img>
                <div>
                  <button className="w-100 ">Snake</button>
                </div>
              </a>
            </div>
          </div>
          <div className="col-3 m-3 ">
            <div
              className="bg-primary  p-2"
              style={{ Height: "200px", width: "200px" }}
            >
              <a
                href={`${process.env.PUBLIC_URL}/games/typing/index.html`}
                target="_blank"
                rel="noopener noreferrer"
                // className=" bg-secondary"
              >
                <img
                  src="/images/typingg.jpg"
                  height={"200px"}
                  width={"100%"}
                  style={{ objectFit: "cover" }}
                ></img>
                <div>
                  <button className="w-100 ">Typing</button>
                </div>
              </a>
            </div>
          </div>
          <div className="col-3 m-3">
            <div
              className="bg-primary  p-2"
              style={{ Height: "200px", width: "200px" }}
            >
              <a
                href={`${process.env.PUBLIC_URL}/games/numberGuessing/index.html`}
                target="_blank"
                rel="noopener noreferrer"
                // className=" bg-secondary"
              >
                <img
                  src="/images/guess.jpg"
                  height={"200px"}
                  width={"100%"}
                  style={{ objectFit: "cover" }}
                ></img>
                <div>
                  <button className="w-100 ">guess</button>
                </div>
              </a>
            </div>
          </div>
          <div className="col-3 m-3">
            <div
              className="bg-primary  p-2"
              style={{ Height: "200px", width: "200px" }}
            >
              <a
                href={`${process.env.PUBLIC_URL}/games/fruitSlicer/index.html`}
                target="_blank"
                rel="noopener noreferrer"
                // className=" bg-secondary"
              >
                <img
                  src="/images/slicer.jpg"
                  height={"200px"}
                  width={"100%"}
                  style={{ objectFit: "cover" }}
                ></img>
                <div>
                  <button className="w-100 ">Fruit Slicer</button>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Games;
