import { Link, useNavigate } from "react-router-dom";
import "../../components.css";

function Header() {
  const navigate = useNavigate();
  const Signout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
     <nav class="navbar navbar-expand-lg sticky-top bg-body-tertiary">
        <div class="container">
          <Link class="navbar-brand" to="/">CryptoMath</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/student/home">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link">Dropdown</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link">Dropdown</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link">Dropdown</Link>
              </li>
            </ul>
            
            <div class="dropdown  pb-2 m-2">
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
                    New project...
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
                  <a class="dropdown-item" onClick={Signout}>
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
