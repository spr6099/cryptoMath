import { useNavigate } from "react-router-dom";
import "../../components.css";
import { useState } from "react";

function Header() {
  const navigate = useNavigate();
  const [user, setUser] = useState(localStorage.getItem("user"));

  const Logout = () => {
    localStorage.clear();
    // window.location.reload();
    navigate("/");
  };

  return (
    <>
      <div style={{ position: "sticky", top: "0" }}>
        <div class=" bg-light" style={{ height: "70px" }}>
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start ">
            <h5
              class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0  lobster-regular p-2 m-2"
              style={{ color: "#8E8D8A" }}
            >
              CryptoMath
            </h5>
            <a
              href="#"
              class="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none"
            ></a>

            <h2
              class=" nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 "
              style={{ color: "#8E8D8A" }}
            ></h2>
          </div>
        </div>
        <div>
          <div
            className="d-flex justify-content-between "
            style={{ backgroundColor: "#245501", height: "50px" }}
          >
            <div>
              <div class="dropdown">
                <button className="dropbtn btn text-light m-2 ">
                  <a className="links" href="/">
                    Home
                  </a>
                </button>
              </div>

              <div class="dropdown">
                <button class="dropbtn btn text-light">Teacher</button>
                <div class="dropdown-content">
                  <a href="/admin/viewTeacher">View Teacher</a>
                  <a href="/admin/addTeacher"> Add teacher</a>
                  <a href="#">Link 3</a>
                </div>
              </div>

              {/* ---------Parents--------- */}

              <div class="dropdown">
                <button class="dropbtn btn text-light">Parents</button>
                <div class="dropdown-content">
                  <a href="/admin/viewParents">View Parents</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>

              {/* ------Students------ */}

              <div class="dropdown">
                <button class="dropbtn btn text-light">students</button>
                <div class="dropdown-content">
                  <a href="/admin/viewStudent">view Students</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>
            </div>
            <div
              style={
                user === "admin" ? { display: "" } : { display: "none" }
              }
            >
              {" "}
              <div class="dropdown text-end">
                <a
                  href="#"
                  class="d-block link-dark text-decoration-none dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://github.com/mdo.png"
                    alt="mdo"
                    width="32"
                    height="32"
                    class="rounded-circle"
                  />
                </a>
                <ul class="dropdown-menu text-small">
                  <li>
                    <a class="dropdown-item" href="#">
                      Admin
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Profile
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" onClick={Logout}>
                      Signout
                      {/* <sub className="text-dark p-2">admin</sub> */}
                    </a>
                  </li>
                </ul>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
