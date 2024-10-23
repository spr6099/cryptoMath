import Header from "../../home/partials/Header";
import Footer from "../../home/partials/Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();



  const LoginSubmit = (e) => {
    e.preventDefault();

    let datas = {
      email: email,
      password: password,
    };
    // console.log(datas);
    fetch("http://localhost:4000/student/login", {
      method: "post",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datas),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("students", result);
        if (result.status === "student") {
          localStorage.setItem("student", JSON.stringify(result));
          navigate("/students/home");
          // window.location.reload();
        } else {
          console.log("incorrect userName and Password");
        }
      });
  };
  return (
    <>
      <Header />

      <section
        style={{
          backgroundImage: "url('/images/collage.jpg')",
          height: "100vh",
          marginTop: "-5px",
          marginBottom: "-55px",
          fontSize: "50px",
          backgroundSize: "cover",
          // objectFit:"contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          class="row d-flex justify-content-end align-items-center "
          style={{ marginTop: "5px", paddingTop: "30px" }}
        >
          <div
            style={{ width: "400px", backgroundColor: "" }}
            class="p-3 text-center"
          >
            <input
              type="text"
              className="form-control form-control-lg border-dark shadow m-1"
              style={{ width: "250px" }}
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input
              type="text"
              className="form-control form-control-lg border-dark shadow m-1"
              style={{ height: "50px", width: "250px" }}
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button
              type="submit"
              class="btn btn-outline-info"
              onClick={LoginSubmit}
            >
              Login
            </button>
            {/* <p style={{ fontSize: "40%" }}>
              Not a member? <a href="/parents/register">Register</a>
            </p> */}
          </div>
        </div>
      </section>

      {/* <div>
        <div
          style={{ width: "350px" }}
          className=" m-auto border border-2 border border-dark mt-5 p-5"
        >
          <h5 className="text-center">Parents Login</h5>
          <input
            type="text"
            className="form-control mb-2"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            type="password"
            className="form-control"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button
            type="submit"
            className="btn m-2 text-end"
            onClick={LoginSubmit}
          >
            Login
          </button>
        </div>
      </div> */}

      <Footer />
    </>
  );
}

export default Login;
