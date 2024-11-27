import { Link, useNavigate } from "react-router-dom";
// import "../../components.css";
import { useState } from "react";

function Header() {
  const [parents, setParents] = useState(
    JSON.parse(localStorage.getItem("parents"))
  );
  const navigate = useNavigate();
  const Logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <nav class="navbar navbar-expand-lg sticky-top bg-body-tertiary">
        <div class="container">
          <Link class="navbar-brand" to="/">
            CryptoMath
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link
                  class="nav-link active"
                  aria-current="page"
                  to="/parents/home"
                >
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/parents/student_register">
                  Add Student
                </Link>
              </li>
            </ul>

            <div
              style={
                parents?.status === "parent"
                  ? { display: "" }
                  : { display: "none" }
              }
            >
              <div class="dropdown drop-lg-start pe-sm-0 pe-lg-2 ">
                <a
                  href="#"
                  class="d-block text-decoration-none dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://github.com/mdo.png"
                    alt="mdo"
                    width="25"
                    height="25"
                    class="rounded-circle"
                  />
                </a>
                <ul class="dropdown-menu text-small">
                  <li>
                    <a class="dropdown-item" href="#">
                      Parents{" "}
                    </a>
                    <sub className="text-primary p-2">{parents.email}</sub>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Settings
                    </a>
                  </li>
                  {/* <li>
                    <a class="dropdown-item" href="#">
                      Profile
                    </a>
                  </li> */}
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
      </nav>
    </>
  );
}

export default Header;
