import {
  FaArrowDown,
  FaArrowLeft,
  FaArrowRight,
  FaArrowUp,
} from "react-icons/fa";
import { useEventListener, useInterval, useLocalStorage } from "usehooks-ts";
import "./index.css";
import { useEffect, useState } from "react";
import axios from "axios";

/**
 * Snake component
 * @prop {function} onGameEnd - callback function invoked when snake game ends
 * @returns {JSX.Element} - JSX element representing the snake game
 */
export const Snake = ({ onGameEnd }) => {
  const [score, setScore] = useState(0);
  //   console.log("score", score);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [started, setStarted] = useState(false);

  const [gameOver, setGameOver] = useState(false);

  const [foodPosition, setFoodPosition] = useState({
    x: Math.floor(Math.random() * 30) + 1,
    y: Math.floor(Math.random() * 30) + 1,
  });

  const [snakePosition, setSnakePosition] = useState({ x: 5, y: 5 });

  const [velocity, setVelocity] = useState({ x: 0, y: 0 });

  const [snakeBody, setSnakeBody] = useState([]);
  const [highScore, setHighScore] = useState();

  //   const [highScore, setHighScore] = useLocalStorage("highScore", 0);

  useEffect(() => {
    // Define the async function inside the effect
    const fetchData = async () => {
      try {
        const datas = {
          id: user._id,
          game: "snake_game",
        };
        const response = await axios.post(
          "http://localhost:4000/student/getScore",
          datas,
          { withCredentials: true }
        );
        const result = response.data;
        setHighScore(result.score);
        //   console.log("11", result.score);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    // Call the async function
    fetchData();
  }, []); // Empty dependency array means this runs once on mount

  function startGame() {
    setGameOver(false);

    setStarted(true);

    updateFoodPosition();

    setSnakePosition({ x: 5, y: 5 });

    setVelocity({ x: 0, y: 0 });

    setScore(0);

    setSnakeBody([]);
  }

    const saveGame = async () => {
      // console.log(datas);
      try {
        if (score <= highScore) {
          let datas = {
            score: highScore,
            id: user._id,
            game: "snake_game",
          };
          const res = await axios.post(
            "http://localhost:4000/student/score",
            datas,
            {
              withCredentials: true,
            }
          );
          const result = res.data;
          console.log("result", result);
          window.location.reload();
        } else {
          let datas = {
            score: score,
            id: user._id,
            game: "snake_game",
          };
          const res = await axios.post(
            "http://localhost:4000/student/score",
            datas,
            {
              withCredentials: true,
            }
          );
          const result = res.data;
          console.log("result", result);
          window.location.reload();
        }
      } catch (err) {
        console.log(err);
      }
    };


  const updateFoodPosition = () => {
    setFoodPosition({
      x: Math.floor(Math.random() * 30) + 1,
      y: Math.floor(Math.random() * 30) + 1,
    });
  };

  const handleGameOver = () => {
    setGameOver(true);

    onGameEnd?.({ score, highScore });

    // alert("Game Over! Press OK to replay...");
  };

  const changeDirection = (e) => {
    switch (e.key) {
      case "ArrowUp":
        if (velocity.y !== 1) {
          setVelocity({ x: 0, y: -1 });
        }
        break;
      case "ArrowDown":
        if (velocity.y !== -1) {
          setVelocity({ x: 0, y: 1 });
        }
        break;
      case "ArrowLeft":
        if (velocity.x !== 1) {
          setVelocity({ x: -1, y: 0 });
        }
        break;
      case "ArrowRight":
        if (velocity.x !== -1) {
          setVelocity({ x: 1, y: 0 });
        }
        break;
      default:
        break;
    }
  };

  function initGame() {
    if (
      snakePosition.x === foodPosition.x &&
      snakePosition.y === foodPosition.y
    ) {
      setSnakeBody((old) => [...old, [foodPosition.x, foodPosition.y]]); // Pushing food position to snake body array

      setScore((old) => old + 1);

      updateFoodPosition();
    }

    setSnakePosition(({ x, y }) => ({ x: x + velocity.x, y: y + velocity.y }));

    setSnakeBody((oldBody) => {
      const body = [...oldBody];

      for (let i = body.length - 1; i > 0; i--) {
        body[i] = body[i - 1];
      }

      body[0] = [snakePosition.x, snakePosition.y]; // Setting first element of snake body to current snake position

      return body;
    });
  }

  useEventListener("keyup", changeDirection);

  //   useEffect(() => {
  //     if (!started || gameOver) return;

  //     if (score <= highScore) return;

  //     setHighScore(score);
  //   }, [score]);

  useEffect(() => {
    if (!started || gameOver) return;

    // Checking if the snake's head is out of wall, if so setting gameOver to true
    if (
      snakePosition.x <= 0 ||
      snakePosition.x > 30 ||
      snakePosition.y <= 0 ||
      snakePosition.y > 30
    ) {
      handleGameOver();
    }
  }, [snakePosition]);

  useEffect(() => {
    if (!started || gameOver) return;

    for (let i = 0; i < snakeBody.length; i++) {
      // Checking if the snake head hit the body, if so set gameOver to true
      if (
        i !== 0 &&
        snakeBody[0][1] === snakeBody[i][1] &&
        snakeBody[0][0] === snakeBody[i][0]
      ) {
        handleGameOver();
        break;
      }
    }
  }, [snakeBody]);

  // Delay in milliseconds or null to stop it
  useInterval(initGame, started && !gameOver ? 450 : null);

  return (
    <div className="wrapper">
      {gameOver && (
        <div>
          Game Over <button onClick={startGame}>Restart</button>{" "}
          <button onClick={saveGame}>save</button>
        </div>
      )}

      <div>
        {!started && <button onClick={startGame}>start</button>}{" "}
        {<a href="/student/games">home</a>}
      </div>

      <div className="game-details">
        <span className="score">Score: {score}</span>
        <span className="high-score">High Score: {highScore}</span>
      </div>
      <div className="play-board">
        <div
          class="food"
          style={{ "grid-area": `${foodPosition.y} / ${foodPosition.x}` }}
        ></div>
        {snakeBody.map(([x, y]) => (
          <div className="head" style={{ "grid-area": `${y} / ${x}` }}></div>
        ))}
      </div>
      <div className="controls">
        <button onClick={() => changeDirection({ key: "ArrowLeft" })}>
          <FaArrowLeft />
        </button>
        <button onClick={() => changeDirection({ key: "ArrowUp" })}>
          <FaArrowUp />
        </button>
        <button onClick={() => changeDirection({ key: "ArrowRight" })}>
          <FaArrowRight />
        </button>
        <button onClick={() => changeDirection({ key: "ArrowDown" })}>
          <FaArrowDown />
        </button>
      </div>
    </div>
  );
};

export default Snake;
