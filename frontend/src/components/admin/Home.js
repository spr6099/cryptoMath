import Footer from "./partials/Footer";
import Header from "./partials/Header";
// import "../main.css";
function Home() {
  return (
    <>
      <Header />
      <div className="row " style={{ backgroundColor: "#FFF5CD" }}>
        <div className="col-2">
          <div
            className="d-flex flex-column flex-shrink-0 p-3   "
            style={{
              // width: "200px",
              minHeight: "550px",
              // backgroundColor: "#150485",
            }}
          >
            <a
              href="/"
              className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
            ></a>
            <ul className="nav nav-pills flex-column mb-auto">
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link link-secondary "
                  aria-current="page"
                >
                  <svg className="bi pe-none me-2" width="16" height="16"></svg>
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="nav-link link-secondary">
                  <svg className="bi pe-none me-2" width="16" height="16"></svg>
                  Dashboard
                </a>
              </li>
              <li>
                <a href="/admin/viewTeacher" className="nav-link link-secondary">
                  <svg className="bi pe-none me-2" width="16" height="16">
                    {/* <use xlink:href="#table"/> */}
                  </svg>
                  Teacher
                </a>
              </li>
              <li>
                <a href="#" className="nav-link link-secondary">
                  <svg className="bi pe-none me-2" width="16" height="16">
                    {/* <use xlink:href="#grid"/> */}
                  </svg>
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="nav-link link-secondary">
                  <svg className="bi pe-none me-2" width="16" height="16">
                    {/* <use xlink:href="#people-circle"/> */}
                  </svg>
                  Customers
                </a>
              </li>
            </ul>
            {/* <hr> */}
            <div className="dropdown">
              <a
                href="#"
                className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle text-light"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://github.com/mdo.png"
                  alt=""
                  width="32"
                  height="32"
                  className="rounded-circle me-2"
                />
                <strong className="text-light">mdo</strong>
              </a>
              <ul className="dropdown-menu text-small shadow">
                <li>
                  <a className="dropdown-item" href="#">
                    New project...
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Profile
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
            {/* </div>{" "} */}
          </div>{" "}
        </div>

        <div className="col-10 ">
          <h2>Home</h2>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
