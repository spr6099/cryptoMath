import Footer from "./partials/Footer";
import Header from "./partials/Header";
import "./login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const FormSubmit = (e) => {
    e.preventDefault();
    let datas = {
      name: name,
      password: password,
    };
    fetch("http://localhost:4000/admin/login", {
      method: "post",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datas),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
          if (result === "success") {
            navigate("/admin");
        } else {
          // window.location.reload();
          console.log("incorrect Login");
        }
      });
  };

  return (
    <>
      <Header />
      <div>
        <section class="gradient-custom" style={{minHeight:'550px'}}>
          <div class="container py-1 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                <div
                  class="card bg-dark text-white m-5"
                  style={{ borderRadius: "1rem" }}
                >
                  <div class="card-body  text-center">
                    <div class="mb-md-5 mt-md-4 pb-1">
                      <h2 class="fw-bold mb-2 text-uppercase nabla">Login</h2>
                      <p class="text-white-50 mb-4  ">
                        Please enter your login and password!
                      </p>
                      <form onSubmit={FormSubmit}>
                        <div
                          data-mdb-input-init
                          class="form-outline form-white mb-3 "
                          style={{ marginLeft: "40px", marginRight: "40px" }}
                        >
                          <input
                            type="text"
                            placeholder=" Username"
                            required
                            class="form-control form-control-lg"
                            onChange={(e) => {
                              setName(e.target.value);
                            }}
                          />
                        </div>

                        <div
                          class="form-outline form-white mb-4"
                          style={{ marginLeft: "40px", marginRight: "40px" }}
                        >
                          <input
                            type="password"
                            placeholder="Password"
                            required
                            class="form-control form-control-lg"
                            onChange={(e) => {
                              setPassword(e.target.value);
                            }}
                          />
                        </div>

                        <button
                          class="btn btn-outline-light btn-lg px-5"
                          type="submit"
                        >
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
      </div>
      <Footer />
    </>
  );
}

export default Login;
