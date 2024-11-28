import { useState } from "react";
import Footer from "./partials/Footer";
import Header from "./partials/Header";
// import "./TeacherHome.css";
function Home() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  console.log(user._id);

  return (
    <>
      <Header />
      <div class="row " style={{ backgroundColor: "#EAE7DC" }}>
        <div className="col-2" style={{ backgroundColor: "#FFF5CD" }}>
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
                <a
                  href={`/teacher/students/${user._id}`}
                  className="nav-link link-active"
                >
                  <svg className="bi pe-none me-2" width="16" height="16">
                    {/* <use xlink:href="#table"/> */}
                  </svg>
                  Students
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
          </div>{" "}
        </div>
        <div class="col-10  ">
          <h2>Home</h2>
        </div>
      </div>
      <Footer /> 
    </>
  );
}

export default Home;
