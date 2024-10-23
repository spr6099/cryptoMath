import * as React from "react";

import { useState } from "react";
import Footer from "../../partials/Footer";
import Header from "../../partials/Header";
import "./addTeacher.css";
import { useNavigate } from "react-router-dom";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

function AddTeacher() {
  const [name, setName] = useState("");
  const [dob, setDOB] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [image, setImage] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const [gender, setGender] = useState("");

  const navigate = useNavigate();
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

    console.log(datas);
    
    // ---------add Datas---------------

    fetch("http://localhost:4000/admin/teacher", {
      method: "post",
      // headers: {
      //   Accept: "application/json",
      //   "Content-Type": "application/json",
      // },
      body: datas,
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        navigate("/admin/viewTeacher");
      });
  };

  return (
    <>
      <Header />
      <div class="row ">
       

        <div class="col-10  HeaderGradient-custom2">
          <section class="m-2 ">
            <div class="container ">
              <div class="row d-flex justify-content-start align-items-center ">
                <div class="col-8 ">
                  <div
                    class=" card-registration card-registration-2 bg-secondary"
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
                                  label="Name"
                                  class="form-control form-control-lg border border-white "
                                  placeholder="Name"
                                  onChange={(e) => {
                                    setName(e.target.value);
                                  }}
                                  required
                                />
                              </div>
                            </div>

                            {/* <div class="col-md-6 mb-4 pb-2">
                                <div data-mdb-input-init class="form-outline">
                                  <input
                                    type="text"
                                    class="form-control form-control-lg border border-primary"
                                    placeholder="Last name"
                                  />
                                </div>
                              </div> */}

                            {/* <div class="mb-4 pb-2 border border-primary ">
                              <select data-mdb-select-init>
                                <option value="1">Position</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                                <option value="4">Four</option>
                              </select>
                            </div> */}

                            <div class="mb-4 pb-2">
                            
                              <FormControl>
                                <FormLabel id="demo-row-radio-buttons-group-label">
                                  Gender
                                </FormLabel>
                                <RadioGroup
                                  row
                                  aria-labelledby="demo-row-radio-buttons-group-label"
                                  name="row-radio-buttons-group"
                                >
                                  <FormControlLabel
                                    value="female"
                                    control={<Radio />}
                                    label="Female"
                                    color="red"
                                    backgroundColor="red"
                                    onChange={(e) => {
                                      setGender(e.target.value);
                                    }}
                                    required
                                  />
                                  <FormControlLabel
                                    value="male"
                                    control={<Radio />}
                                    label="Male"
                                    onChange={(e) => {
                                      setGender(e.target.value);
                                    }}
                                    required
                                  />
                                </RadioGroup>
                              </FormControl>
                            </div>

                            <div class="mb-4 pb-2">
                              <div data-mdb-input-init class="form-outline">
                                <input
                                  type="date"
                                  class="form-control form-control-lg"
                                  placeholder=""
                                  onChange={(e) => {
                                    setDOB(e.target.value);
                                  }}
                                  required
                                />
                              </div>
                            </div>

                            <div class="mb-4 pb-2">
                              <div data-mdb-input-init class="form-outline">
                                <input
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
                                  required
                                />
                              </div>
                            </div>
                            {/* <div class="row">
                              <div class="col-md-6 mb-4 pb-2 mb-md-0 pb-md-0">
                                <div data-mdb-input-init class="form-outline">
                                  <input
                                    type="text"
                                    id="form3Examplev5"
                                    class="form-control form-control-lg"
                                    placeholder=" Bussines Arena"
                                  />
                                </div>
                              </div>
                              <div class="col-md-6 border border-primary ">
                                <select data-mdb-select-init>
                                  <option value="1">Employees</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                  <option value="4">Four</option>
                                </select>
                              </div>
                            </div> */}
                          </div>
                        </div>
                        <div class="col-lg-6 bg-indigo text-white">
                          <div class="p-3">
                            <h3 class="fw-normal mb-3">Contact Details</h3>

                            {/* <div class="mb-4 pb-2">
                              <div
                                data-mdb-input-init
                                class="form-outline form-white"
                              >
                                <input
                                  type="text"
                                  placeholder="Street + Nr"
                                  class="form-control form-control-lg"
                                />
                              </div>
                            </div>

                            <div class="mb-4 pb-2">
                              <div
                                data-mdb-input-init
                                class="form-outline form-white"
                              >
                                <input
                                  type="text"
                                  placeholder="Additional Information"
                                  class="form-control form-control-lg"
                                />
                              </div>
                            </div> */}

                            {/* <div class="row">
                              <div class="col-md-5 mb-4 pb-2">
                                <div
                                  data-mdb-input-init
                                  class="form-outline form-white"
                                >
                                  <input
                                    type="text"
                                    placeholder="Zip Code"
                                    class="form-control form-control-lg"
                                  />
                                </div>
                              </div>
                              <div class="col-md-7 mb-4 pb-2">
                                <div
                                  data-mdb-input-init
                                  class="form-outline form-white"
                                >
                                  <input
                                    type="text"
                                    placeholder="Place"
                                    class="form-control form-control-lg"
                                  />
                                </div>
                              </div>
                            </div> */}
                            <div class="mb-3 pb-2">
                              <div
                                data-mdb-input-init
                                class="form-outline form-white"
                              >
                                <textarea
                                  class="form-control form-control-lg"
                                  placeholder="Address"
                                  onChange={(e) => {
                                    setAddress(e.target.value);
                                  }}
                                  required
                                ></textarea>
                              </div>
                            </div>

                            <div class="mb-4 pb-2">
                              <div
                                data-mdb-input-init
                                class="form-outline form-white"
                              >
                                <input
                                  type="text"
                                  placeholder="Password"
                                  class="form-control form-control-lg"
                                  onChange={(e) => {
                                    setPassword(e.target.value);
                                  }}
                                  required
                                />
                              </div>
                            </div>

                            <div class="mb-3">
                              <div
                                data-mdb-input-init
                                class="form-outline form-white"
                              >
                                <input
                                  type="number"
                                  placeholder="Phone Number"
                                  class="form-control form-control-lg"
                                  onChange={(e) => {
                                    setNumber(e.target.value);
                                  }}
                                  required
                                />
                              </div>
                            </div>

                            {/* <div class="row">
                              <div class="col-md-5 mb-4 pb-2">
                                <div
                                  data-mdb-input-init
                                  class="form-outline form-white"
                                >
                                  <input
                                    type="text"
                                    placeholder="Code +"
                                    class="form-control form-control-lg"
                                  />
                                </div>
                              </div>
                              <div class="col-md-7 mb-4 pb-2">
                                <div
                                  data-mdb-input-init
                                  class="form-outline form-white"
                                >
                                  <input
                                    type="text"
                                    placeholder="Phone Number"
                                    class="form-control form-control-lg"
                                  />
                                </div>
                              </div>
                            </div> */}

                            <div class="mb-4">
                              <div
                                data-mdb-input-init
                                class="form-outline form-white"
                              >
                                <input
                                  type="text"
                                  placeholder="Your Email"
                                  class="form-control form-control-lg"
                                  onChange={(e) => {
                                    setEmail(e.target.value);
                                  }}
                                  required
                                />
                              </div>
                            </div>

                            <div class="form-check d-flex justify-content-start mb-4 pb-3">
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
                            </div>

                            <button
                              type="submit"
                              // data-mdb-button-init
                              // data-mdb-ripple-init
                              class="btn btn-light btn-lg"
                              // data-mdb-ripple-color="dark"
                            >
                              Register
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

export default AddTeacher;
