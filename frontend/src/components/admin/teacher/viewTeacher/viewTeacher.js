import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../partials/Footer";
import Header from "../../partials/Header";
import "./viewTeacher.css";
import img from "./imgUrl";

function ViewTeacher() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/admin/viewTeacher")
      .then((res) => res.json())
      .then((result) => {
        // console.log("Getproduct", result);
        setData(result);
      });
  }, []);

  // console.log("1", data);

  function Delete(e) {
    return console.log(e);
  }

  return (
    <>
      <Header />

      <div class="row ">
        <div
          class=" col-2 "
          style={{
            // width: "200px",
            // minHeight: "550px",
            backgroundColor: "#140485",
          }}
        >
          <div
            class="d-flex flex-column flex-shrink-0 p-3   "
            style={{
              width: "200px",
              minHeight: "550px",
              backgroundColor: "#140485",
            }}
          >
            <a
              href="/"
              class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
            >
              <svg class="bi pe-none me-2" width="40" height="32">
                {/* <use xlink:href="#bootstrap"/> */}
              </svg>
              {/* <span class="fs-4">Sidebar</span> */}
            </a>
            {/* <hr> */}
            <ul class="nav nav-pills flex-column mb-auto">
              <li class="nav-item">
                <a href="/admin" class="nav-link link-light">
                  <svg class="bi pe-none me-2" width="16" height="16">
                    {/* <use xlink:href="#home"/> */}
                  </svg>
                  Home
                </a>
              </li>
              <li>
                <a href="#" class="nav-link link-light">
                  <svg class="bi pe-none me-2" width="16" height="16">
                    {/* <use xlink:href="#speedometer2"/> */}
                  </svg>
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="/admin/viewTeacher"
                  class="nav-link active"
                  aria-current="page"
                >
                  <svg class="bi pe-none me-2" width="16" height="16">
                    {/* <use xlink:href="#table"/> */}
                  </svg>
                  Teacher
                </a>
              </li>
              <li>
                <a href="#" class="nav-link link-light">
                  <svg class="bi pe-none me-2" width="16" height="16">
                    {/* <use xlink:href="#grid"/> */}
                  </svg>
                  Products
                </a>
              </li>
              <li>
                <a href="#" class="nav-link link-light">
                  <svg class="bi pe-none me-2" width="16" height="16">
                    {/* <use xlink:href="#people-circle"/> */}
                  </svg>
                  Customers
                </a>
              </li>
            </ul>
            {/* <hr> */}
            <div class="dropdown">
              <a
                href="#"
                class="d-flex align-items-center link-light text-decoration-none dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://github.com/mdo.png"
                  alt=""
                  width="32"
                  height="32"
                  class="rounded-circle me-2"
                />
                <strong>mdo</strong>
              </a>
              <ul class="dropdown-menu text-small shadow">
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
                  <a class="dropdown-item" href="#">
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>{" "}
        </div>

        <div
          class="col-10 HeaderGradient-custom"
          // style={{ marginLeft: "80px" }}
        >
          <section class="">
            <Link class="text-light" to="/admin/addTeacher">
              Add
            </Link>
            <table class="table">
              <thead class="">
                <th>name</th>
                <th>dob</th>
                <th>email</th>
                <th>subject</th>
                <th>address</th>
                <th>phone</th>
                <th>country</th>
                <th>image</th>
              </thead>

              {data.map((item, index) => (
                <tr class="text-light ">
                  <td>{item.name}</td>
                  <td>{item.dob}</td>
                  <td>{item.email}</td>
                  <td>{item.subject}</td>
                  <td>{item.address}</td>
                  <td>{item.number}</td>
                  <td>{item.country}</td>
                  <td>
                    <img
                      style={{ height: "100px", width: "100px" }}
                      src={img + item.image}
                      // src={`http://localhost:2000/productImages/${items.image}`}
                    ></img>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        Delete(item._id);
                      }}
                      class="btn btn-primary"
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))}
            </table>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ViewTeacher;
