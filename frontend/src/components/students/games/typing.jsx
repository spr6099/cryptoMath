import { useParams } from "react-router-dom";
import Footer from "../partials/Footer";
import Header from "../partials/Header";
import { useEffect, useMemo } from "react";
import axios from "axios";

function Typing() {
  const { id } = useParams();
  const typingUrl = `/games/typing/index.html`;
  const searchParams = new URLSearchParams({ id }).toString();
  const typing = `${typingUrl}?${searchParams}`;

  const onMessage = useMemo(
    () => async (e) => {
      if (!e.data?.score) return;
      let datas = {
        user: e?.data.user.id,
        score: e?.data.score,
        game: "typing",
      };
      try {
        const res = await axios.post(
          "http://localhost:4000/student/score",
          datas,
          { withCredentials: true }
        );
        console.log("data  from child==>", res.data);
      } catch (err) {
        console.log(err);
      }

      //   gameOver();
    },
    []
  );

  useEffect(() => {
    window.addEventListener("message", onMessage);

    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <>
      
      <iframe
        src={typing}
        style={{ height: "500px", width: "900px" }}
        className=" m-auto"
        title="Typing Game"
      ></iframe>
     
    </>
  );
}

export default Typing;
