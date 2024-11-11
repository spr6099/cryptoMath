import Header from "../../home/partials/Header";
import Footer from "../../home/partials/Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const FormSubmit = async (e) => {
    e.preventDefault();
    let datas = {
      name: name,
      password: password,
    };
    // console.log("datas", datas);

    try {
      const res = await axios.post("http://localhost:4000/admin/login", datas, {
        withCredentials: true,
      });
      const result = res.data;
      // console.log("11", result);
      // localStorage.setItem("user", JSON.stringify(result));
      localStorage.setItem("user", result);

      navigate("/admin/home");
      window.location.reload();
    } catch (err) {
      console.log("error", err);
    }

    // fetch("http://localhost:4000/admin/login", {
    //   method: "post",
    //   headers: {
    //     accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(datas),
    // })
    //   .then((res) => res.json())
    //   .then((result) => {
    //     console.log(result);
    //     if (result !== "invalid password" || "invalid userName") {
    //       localStorage.setItem("admin", JSON.stringify(result));
    //       navigate("/admin/home");
    //       window.location.reload();
    //       // console.log(localStorage);
    //     } else {
    //       console.log("incorrect userName and Password");
    //     }
    //   });
  };

  return (
    <>
      <Header />

      <section
        style={{
          backgroundImage: "url('/images/collage.jpg')",
          height: "100vh",
          // marginTop: "-5px",
          // marginBottom: "-55px",
          fontSize: "50px",
          backgroundSize: "cover",
          // objectFit:"contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div class=" py-1  ">
          <div
            class="row d-flex justify-content-end align-items-center "
            style={{ marginTop: "50px" }}
          >
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
              <div class="m-5" style={{ borderRadius: "1rem" }}>
                <div
                  className=" text-center"
                  style={{
                    width: "400px",
                    background: "transparent",
                    border: "2px solid rgba(255, 255, 255, .2)",
                    backdropFilter: " blur(5px)",
                    color: "#fff",
                    borderRadius: "12px",
                    padding: "10px 20px",
                  }}
                >
                  <div class="mb-md-5 mt-md-4 pb-1 ">
                    <h2 class="fw-bold mb-2 text-uppercase ">Login</h2>
                    {/* <p class="text-dark-50 mb-4  ">
                      Please enter your login and password!
                    </p> */}
                    <form onSubmit={FormSubmit}>
                      <div
                        style={{
                          marginLeft: "40px",
                          marginRight: "40px",
                          paddingBottom: "20px",
                        }}

                        // data-mdb-input-init
                      >
                        <input
                          type="text"
                          placeholder=" Username"
                          required
                          className="form-control form-control-lg  border-dark shadow"
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                        />
                      </div>

                      <div
                        // class="form-outline mb-4"
                        style={{ marginLeft: "40px", marginRight: "40px" }}
                      >
                        <input
                          type="password"
                          placeholder="Password"
                          required
                          className="form-control form-control-lg  border-dark shadow"
                          // style={{ background: "none" }}
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                        />
                      </div>

                      <button class="btn btn-info btn-lg px-5" type="submit">
                        Login
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Login;
