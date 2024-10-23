import { useEffect, useState } from "react";
import Footer from "../../partials/Footer";
import Header from "../../partials/Header";
import "./editTeacher.css";
import { useLocation, useNavigate } from "react-router-dom";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

function EditTeacher() {
  const [name, setName] = useState("");
  const [dob, setDOB] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [image, setImage] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const [gender, setGender] = useState("");
  const [id, setId] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  let updateId = {
    id: location.state.id,
  };

  // console.log("id",id);

  useEffect(() => {
    fetch("http://localhost:4000/admin/editTeacher", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateId),
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        setName(result.regId.name);
        setDOB(result.regId.dob);
        setEmail(result.email);
        setSubject(result.regId.subject);
        setImage(result.regId.image);
        setAddress(result.regId.address);
        setPassword(result.password);
        setNumber(result.regId.number);
        setGender(result.regId.gender);
        setId(updateId.id);
      });

    // fetch("http://localhost:4000/admin/updateTeacher")
    //   .then((res) => res.json())
    //   .then((result) => {
    //     // console.log("Getproduct", result);
    //     setData(result);
    //   });
  }, []);

  const FormSubmit = (e) => {
    e.preventDefault();
    // let datas = {
    //   name: name,
    //   dob: dob,
    //   email: email,
    //   subject: subject,
    //   image: image,
    //   address: address,
    //   country: country,
    //   number: number,
    // };

    let datas = new FormData();
    datas.append("name", name);
    datas.append("dob", dob);
    datas.append("email", email);
    datas.append("subject", subject);
    datas.append("image", image);
    datas.append("address", address);
    datas.append("password", password);
    datas.append("number", number);
    datas.append("gender", gender);
    datas.append("id", id);

    // ---------add Datas---------------

    fetch("http://localhost:4000/admin/updateTeacher", {
      method: "post",

      body: datas,
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        navigate("/admin/viewTeacher");
      });
  };

  return (
    <>
      <Header />
      <div class="row ">
        {/* <div
          class="col-2"
          style={{
            width: "240px",
            // minHeight: "650px",
            backgroundColor: "#140485",
          }}
        >
          <div
            class="d-flex flex-column flex-shrink-0  p-3 "
            style={{
              width: "200px",
              // minHeight: "550px",
              height: "100%",
              backgroundColor: "#FFCFB3",
            }}
          >
            <a
              href="/"
              class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
            >
              <svg class="bi pe-none me-2" width="40" height="32">
              </svg>
              <span class="fs-4">Sidebar</span>
            </a>
            <ul class="nav nav-pills flex-column mb-auto">
              <li class="nav-item">
                <a href="/admin" class="nav-link link-secondary">
                  <svg class="bi pe-none me-2" width="16" height="16">
                  </svg>
                  Home
                </a>
              </li>
              <li>
                <a href="/admin/viewTeacher" class="nav-link link-secondary">
                  <svg class="bi pe-none me-2" width="16" height="16">
                  </svg>
                  View Teacher
                </a>
              </li>
              <li>
                <a href="" class="nav-link active" aria-current="page">
                  <svg class="bi pe-none me-2" width="16" height="16">
                  </svg>
                  Edit Teacher
                </a>
              </li>
              <li>
                <a href="#" class="nav-link link-secondary">
                  <svg class="bi pe-none me-2" width="16" height="16">
                  </svg>
                  Products
                </a>
              </li>
              <li>
                <a href="#" class="nav-link link-secondary">
                  <svg class="bi pe-none me-2" width="16" height="16">
                  </svg>
                  Customers
                </a>
              </li>
            </ul>
            <div class="dropdown">
              <a
                href="#"
                class="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle"
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
        </div> */}

        <div class="col-10  HeaderGradient-custom2">
          <section class="m-2 " style={{ minHeight: "550px" }}>
            <div class="container ">
              <div class="row d-flex justify-content-start align-items-center ">
                <div class="col-8 ">
                  <div
                    class="card card-registration card-registration-2 bg-secondary"
                    style={{ borderRdius: "15px" }}
                  >
                    <div class="card-body p-0 ">
                      <form class="row g-0" onSubmit={FormSubmit}>
                        <div class="col-lg-6">
                          <div class="p-2">
                            <h3
                              class="fw-normal mb-3"
                              //   style={{ color: "#4835d4" }}
                            >
                              General Infomation
                            </h3>

                            {/* <div class="mb-4 pb-2 border border-primary">
                              <select data-mdb-select-init>
                                <option value="1">Title</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                                <option value="4">Four</option>
                              </select>
                            </div> */}

                            <div class=" mb-4 pb-1 ">
                              <div data-mdb-input-init>
                                <input
                                  type="text"
                                  value={name}
                                  class="form-control form-control-lg border border-white "
                                  placeholder="Name"
                                  onChange={(e) => {
                                    setName(e.target.value);
                                  }}
                                />
                              </div>
                            </div>

                            <div class="mb-4 pb-2">
                              <div data-mdb-input-init class="form-outline">
                                <input
                                  value={dob}
                                  type="date"
                                  class="form-control form-control-lg"
                                  placeholder=""
                                  onChange={(e) => {
                                    setDOB(e.target.value);
                                  }}
                                />
                              </div>
                            </div>

                            <div class="mb-4 pb-2">
                              <div data-mdb-input-init class="form-outline">
                                <input
                                  value={subject}
                                  type="text"
                                  class="form-control form-control-lg"
                                  placeholder="Subject"
                                  onChange={(e) => {
                                    setSubject(e.target.value);
                                  }}
                                />
                              </div>
                            </div>
                            <div class="mb-4 pb-2">
                              <div data-mdb-input-init class="form-outline">
                                <input
                                  type="file"
                                  class="form-control form-control-lg"
                                  placeholder=""
                                  onChange={(e) => {
                                    setImage(e.target.files[0]);
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-6 bg-indigo text-white">
                          <div class="p-3">
                            <h3 class="fw-normal mb-3">Contact Details</h3>

                            <div class="mb-3 pb-2">
                              <div
                                data-mdb-input-init
                                class="form-outline form-white"
                              >
                                <textarea
                                  value={address}
                                  class="form-control form-control-lg"
                                  placeholder="Address"
                                  onChange={(e) => {
                                    setAddress(e.target.value);
                                  }}
                                ></textarea>
                              </div>
                            </div>

                            <div class="mb-4 pb-2">
                              <div
                                data-mdb-input-init
                                class="form-outline form-white"
                              >
                                <input
                                  value={password}
                                  type="text"
                                  placeholder="Password"
                                  class="form-control form-control-lg"
                                  onChange={(e) => {
                                    setPassword(e.target.value);
                                  }}
                                />
                              </div>
                            </div>

                            <div class="mb-3">
                              <div
                                data-mdb-input-init
                                class="form-outline form-white"
                              >
                                <input
                                  value={number}
                                  type="number"
                                  placeholder="Phone Number"
                                  class="form-control form-control-lg"
                                  onChange={(e) => {
                                    setNumber(e.target.value);
                                  }}
                                />
                              </div>
                            </div>

                            <div class="mb-4">
                              <div
                                data-mdb-input-init
                                class="form-outline form-white"
                              >
                                <input
                                  value={email}
                                  type="text"
                                  placeholder="Your Email"
                                  class="form-control form-control-lg"
                                  onChange={(e) => {
                                    setEmail(e.target.value);
                                  }}
                                />
                              </div>
                            </div>

                            {/* <div class="form-check d-flex justify-content-start mb-4 pb-3">
                              <input
                                class="form-check-input me-3"
                                type="checkbox"
                                value=""
                                id="form2Example3c"
                              />
                              <label
                                class="form-check-label text-white"
                                for="form2Example3"
                              >
                                I do accept the{" "}
                                <a href="#!" class="text-white">
                                  <u>Terms and Conditions</u>
                                </a>{" "}
                                of your site.
                              </label>
                            </div> */}

                            <button
                              type="submit"
                              // data-mdb-button-init
                              // data-mdb-ripple-init
                              class="btn btn-light btn-lg"
                              // data-mdb-ripple-color="dark"
                            >
                              Update
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default EditTeacher;
