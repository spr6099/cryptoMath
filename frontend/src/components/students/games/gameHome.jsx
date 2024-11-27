import { useEffect, useState } from "react";
import Footer from "../partials/Footer";
import Header from "../partials/Header";
import { Link } from "react-router-dom";
import axios from "axios";

function Games() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [guess, setGuess] = useState([]);
  const [snake, setSnake] = useState([]);
  const [fruit, setFruit] = useState([]);
  const [typing, setTyping] = useState([]);

  let id = user._id;

  useEffect(() => {
    const getData = async () => {
      let data = {
        id: id,
      };
      try {
        const res = await axios.post(
          "http://localhost:4000/student/getGuessScore",
          data,
          { withCredentials: true }
        );
        let guess = res.data;
        setGuess(guess);

        const res2 = await axios.post(
          "http://localhost:4000/student/getSnakeScore",
          data,
          { withCredentials: true }
        );
        let snake = res2.data;
        setSnake(snake);

        const res3 = await axios.post(
          "http://localhost:4000/student/getTypingScore",
          data,
          { withCredentials: true }
        );
        let typing = res3.data;
        setTyping(typing);

        const res4 = await axios.post(
          "http://localhost:4000/student/getFruitScore",
          data,
          { withCredentials: true }
        );
        let fruit = res4.data;
        setFruit(fruit);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  // console.log("qqj", typing);

  const guesSscores = guess.map((item) => parseInt(item.score));
  const snakeScores = snake.map((item) => parseInt(item.score));
  const fruitScores = fruit.map((item) => parseInt(item.score));
  const typingScores = typing.map((item) => parseInt(item.score));
 

  return (
    <>
      <Header />
      <div className="">
        <div className="row ms-5 m-3 ">
          <div className="col-3 m-3 ">
            <div
              className="bg-primary  p-2"
              style={{ Height: "200px", width: "200px" }}
            >
              <Link to={`/student/typing/${id}`}>
                <img
                  src="/images/typingg.jpg"
                  height={"200px"}
                  width={"100%"}
                  style={{ objectFit: "cover" }}
                ></img>
                <div>
                  <button className="w-100 ">Typingg</button>
                </div>
              </Link>
              <div>
                <h7 className="text-dark">
                  HighScore:{Math.max(...typingScores)}
                </h7>
                <br />
                <h8 className="text-dark">TotalPlay:{typingScores.length}</h8>
              </div>
            </div>
          </div>

          <div className="col-3 m-3 ">
            <div
              className="bg-primary  p-2"
              style={{ Height: "200px", width: "200px" }}
            >
              <Link to={`/student/guess/${id}`}>
                <img
                  src="/images/guess.jpg"
                  height={"200px"}
                  width={"100%"}
                  style={{ objectFit: "cover" }}
                ></img>
                <div>
                  <button className="w-100 ">guess</button>
                </div>
              </Link>
              <div>
                <h7 className="text-dark">
                  HighScore:{Math.max(...guesSscores)}
                </h7>
                <br />
                <h8 className="text-dark">TotalPlay:{guess.length}</h8>
              </div>
            </div>
          </div>

          <div className="col-3 m-3 ">
            <div
              className="bg-primary  p-2"
              style={{ Height: "200px", width: "200px" }}
            >
              <Link to={`/student/fruit/${id}`}>
                <img
                  src="/images/slicer.jpg"
                  height={"200px"}
                  width={"100%"}
                  style={{ objectFit: "cover" }}
                ></img>
                <div>
                  <button className="w-100 ">Fruit Slicer</button>
                </div>
              </Link>
              <div>
                <h7 className="text-dark">
                  HighScore:{Math.max(...fruitScores)}
                </h7>
                <br />
                <h8 className="text-dark">TotalPlay:{fruitScores.length}</h8>
              </div>
            </div>
          </div>

          <div className="col-3 m-3">
            <div
              className="bg-primary  p-2"
              style={{ Height: "200px", width: "200px" }}
            >
              <a href="/student/games/snake">
                <img
                  src="/images/snake.jpg"
                  height={"200px"}
                  width={"100%"}
                  style={{ objectFit: "cover" }}
                ></img>
                <div>
                  <button className="w-100 ">snake react</button>
                </div>
                <div>
                  <h7 className="text-dark">
                    HighScore:{Math.max(...snakeScores)}
                  </h7>
                  <br />
                  <h8 className="text-dark">TotalPlay:{snakeScores.length}</h8>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Games;
