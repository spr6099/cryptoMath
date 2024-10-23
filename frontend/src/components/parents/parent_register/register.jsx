import Footer from "./partials/Footer";
import Header from "./partials/Header";
import React, { useEffect, useState } from "react";

import "../../components.css";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [rpassword, setRpassword] = useState("");
  const [image, setImage] = useState();
  const [house, setHouse] = useState("");
  const [hnumber, setHnumber] = useState("");
  const [street, setStreet] = useState("");
  const [village, setVillage] = useState("");
  const [post, setPost] = useState("");
  const [district, setDistrict] = useState("");
  const [state, setState] = useState("");
  const [address, setAddress] = useState("");
  const [pin, setPin] = useState("");
  // const [post, setPost] = useState("");

  const navigate = useNavigate();

  const RegisterSubmit = (e) => {
    e.preventDefault();
    let datas = new FormData();
    datas.append("name", name);
    datas.append("email", email);
    datas.append("phone", phone);
    datas.append("password", password);
    datas.append("image", image);
    datas.append("house", house);
    datas.append("hnumber", hnumber);
    datas.append("street", street);
    datas.append("village", village);
    datas.append("post", post);
    datas.append("district", district);
    datas.append("state", state);
    datas.append("address", address);
    datas.append("pin", pin);

    console.log("1", datas);

    fetch("http://localhost:4000/parent/parentRegister", {
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
        navigate("/");
      });
  };

  return (
    <>
      <div className="container">
        <Header />
        <div>
          <div>
            <p>
              * Your Application is not confirmed until you have made the Online
              Payment Successfully & Downloaded your Application Form. *For each
              application you have to create separate username.
            </p>
            <p>
              For Support Please contact @ 0471-4010025/2447780 or 9567299650 or
              email @ helpdeskbst@gmail.com
            </p>
          </div>
          <div>
            <div className=" row  border border-2 border-dark p-2 m-5 p-5 ">
              <div className="col-6 bg-dark p-4">
                <div>
                  <h4>contact</h4>
                </div>
                {/*---------Name-------- */}

                <div class="row pb-4">
                  <div className=" col-12  ">
                    <label className="form-label" for="name">
                      name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="form-control form-control-lg bg-transparent"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    ></input>
                  </div>
                </div>
                {/* -----------Email&Ph------------- */}
                <div className="row pb-4">
                  <div className="col-6">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      id="emailAddress"
                      className="form-control form-control-lg bg-transparent"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                  <div className="col-6">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      className="form-control form-control-lg  bg-transparent"
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                      data-mdb-input
                    />
                  </div>
                </div>

                {/* --------Passsword---------- */}
                <div class="row pb-4 ">
                  <div className=" col-6  ">
                    <label className="form-label" for="name">
                      Password
                    </label>
                    <input
                      type="text"
                      id="password"
                      className="form-control form-control-lg  bg-transparent"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    ></input>
                  </div>
                  <div className=" col-6 ">
                    <label className="form-label" for="repeatPassword">
                      repeat password
                    </label>
                    <input
                      type="text"
                      id="repeatPassword"
                      className="form-control form-control-lg  bg-transparent"
                      onChange={(e) => {
                        setRpassword(e.target.value);
                      }}
                    ></input>
                  </div>
                </div>

                {/* --------Image------ */}
                <div class="row">
                  <div class="col-12">
                    <label className="form-label select-label" for="subject">
                      upload Image
                    </label>
                    <input
                      type="file"
                      className="form-control corm-control-lg bg-transparent"
                      onChange={(e) => {
                        setImage(e.target.files[0]);
                      }}
                    ></input>
                  </div>
                </div>
              </div>

              {/*------- col-2------------    */}

              <div className="col-6 bg-dark p-4">
                <div>
                  <h4>Address</h4>
                </div>
                {/* -----House Name----- */}
                <div class="row pb-4">
                  <div className=" col-12  ">
                    <label className="form-label" for="Hname">
                      House Name
                    </label>
                    <input
                      type="text"
                      id="Hname"
                      className="form-control form-control-lg bg-transparent"
                      onChange={(e) => {
                        setHouse(e.target.value);
                      }}
                    ></input>
                  </div>
                </div>

                {/*-------- House No. & street ---------*/}
                <div class="row pb-4 ">
                  <div className=" col-6  ">
                    <label className="form-label" for="name">
                      House Number
                    </label>
                    <input
                      type="text"
                      id="password"
                      className="form-control form-control-lg bg-transparent"
                      onChange={(e) => {
                        setHnumber(e.target.value);
                      }}
                    ></input>
                  </div>
                  <div className=" col-6 ">
                    <label className="form-label" for="repeatPassword">
                      street
                    </label>
                    <input
                      type="text"
                      id="repeatPassword"
                      className="form-control form-control-lg bg-transparent"
                      onChange={(e) => {
                        setStreet(e.target.value);
                      }}
                    ></input>
                  </div>
                </div>

                {/* --------Village & Post--------- */}
                <div className="row pb-4">
                  <div className="col-6 ">
                    <label class="form-label" for="emailAddress">
                      village
                    </label>
                    <input
                      type="email"
                      id="emailAddress"
                      class="form-control form-control-lg bg-transparent"
                      onChange={(e) => {
                        setVillage(e.target.value);
                      }}
                    />
                  </div>
                  <div className="col-6 ">
                    <label class="form-label" for="phoneNumber">
                      Post office
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      class="form-control form-control-lg bg-transparent"
                      onChange={(e) => {
                        setPost(e.target.value);
                      }}
                    />
                  </div>
                </div>

                {/* ------district & state----- */}
                <div className="row pb-4">
                  <div className="col-6 ">
                    <label class="form-label" for="emailAddress">
                      district
                    </label>
                    <input
                      type="email"
                      id="emailAddress"
                      class="form-control form-control-lg bg-transparent"
                      onChange={(e) => {
                        setDistrict(e.target.value);
                      }}
                    />
                  </div>
                  <div className="col-6 ">
                    <label class="form-label" for="phoneNumber">
                      State
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      class="form-control form-control-lg bg-transparent"
                      onChange={(e) => {
                        setState(e.target.value);
                      }}
                    />
                  </div>
                </div>
                {/* ------Address----- */}
                <div className="row pb-4">
                  <div className=" col-12  ">
                    <label className="form-label" for="address">
                      Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      className="form-control form-control-lg bg-transparent"
                      onChange={(e) => {
                        setAddress(e.target.value);
                      }}
                    ></input>
                  </div>
                </div>

                {/* -------pin & xxx------- */}
                <div className="row pb-4">
                  <div className="col-6 ">
                    <label class="form-label" for="pin">
                      Pin Code
                    </label>
                    <input
                      type="text"
                      id="pin"
                      class="form-control form-control-lg bg-transparent"
                      onChange={(e) => {
                        setPin(e.target.value);
                      }}
                    />
                  </div>
                  <div className="col-6 ">
                    <label class="form-label" for="phoneNumber">
                      xx
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      class="form-control form-control-lg bg-transparent"
                    />
                  </div>
                </div>
                <div className="text-end">
                <button className=" btn btn-outline-info m-2" onClick={RegisterSubmit}>
                  Register
                </button>
              </div>
              </div>
              
            </div>
          </div>
          {/* <div>
            <div className=" row  border border-2 border-dark p-2 m-5 p-5 ">
              <div className="col-6 bg-dark p-4">
                <div>
                  <h4>contact</h4>
                </div>
                <div class="row pb-4">
                  <div className=" col-12  ">
                    <div className=" form-outline border border-light rounded">
                      <input
                        type="text"
                        id="name"
                        className="form-control form-control-lg"
                      ></input>

                      <label className="form-label" for="name">
                        name
                      </label>
                    </div>
                  </div>
                </div>

             
                <div className="row pb-4">
                  <div className="col-6">
                    <div className="form-outline border rounded">
                      <input
                        type="email"
                        id="emailAddress"
                        className="form-control form-control-lg"
                        data-mdb-input
                      />
                      <label className="form-label" htmlFor="emailAddress">
                        Email
                      </label>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-outline border rounded">
                      <input
                        type="tel"
                        id="phoneNumber"
                        className="form-control form-control-lg"
                        data-mdb-input
                      />
                      <label className="form-label" htmlFor="phoneNumber">
                        Phone Number
                      </label>
                    </div>
                  </div>
                </div>

                <div class="row pb-4 ">
                  <div className=" col-6  ">
                    <div className=" form-outline border  rounded">
                      <input
                        type="text"
                        id="password"
                        className="form-control form-control-lg"
                      ></input>

                      <label className="form-label" for="name">
                        Password
                      </label>
                    </div>
                  </div>
                  <div className=" col-6 ">
                    <div className=" col-6 form-outline border rounded">
                      <input
                        type="text"
                        id="repeatPassword"
                        className="form-control form-control-lg"
                      ></input>
                      <label className="form-label" for="repeatPassword">
                        repeat password
                      </label>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <div className=" form-outline border  ">
                      <select  data-mdb-select-init
                        className="select form-control form-control-lg"
                        id="subject"
                      >
                        <option value="1">Choose option</option>
                        <option value="2">Subject 1</option>
                        <option value="3">Subject 2</option>
                        <option value="4">Subject 3</option>
                      </select>
                      <label className="form-label select-label" for="subject">
                        Choose option
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 bg-dark p-4">
                <div>
                  <h4>Address</h4>
                </div>
                <div class="row pb-4">
                  <div className=" col-12  ">
                    <div className=" form-outline border border-light rounded">
                      <input
                        type="text"
                        id="name"
                        className="form-control form-control-lg"
                      ></input>

                      <label className="form-label" for="name">
                        House Name
                      </label>
                    </div>
                  </div>
                </div>
                <div class="row pb-4 ">
                  <div className=" col-6  ">
                    <div className=" form-outline border  rounded">
                      <input
                        type="text"
                        id="password"
                        className="form-control form-control-lg"
                      ></input>

                      <label className="form-label" for="name">
                        House Number
                      </label>
                    </div>
                  </div>
                  <div className=" col-6 ">
                    <div className=" col-6 form-outline border rounded">
                      <input
                        type="text"
                        id="repeatPassword"
                        className="form-control form-control-lg"
                      ></input>
                      <label className="form-label" for="repeatPassword">
                        street
                      </label>
                    </div>
                  </div>
                </div>

                <div className="row pb-4">
                  <div className="col-6 ">
                    <div class="form-outline border rounded">
                      <input
                        type="email"
                        id="emailAddress"
                        class="form-control form-control-lg"
                      />
                      <label class="form-label" for="emailAddress">
                        village
                      </label>
                    </div>
                  </div>
                  <div className="col-6 ">
                    <div
                      data-mdb-input-init
                      class="form-outline border rounded"
                    >
                      <input
                        type="tel"
                        id="phoneNumber"
                        class="form-control form-control-lg"
                      />
                      <label class="form-label" for="phoneNumber">
                        Post office
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row pb-4">
                  <div className="col-6 ">
                    <div class="form-outline border rounded">
                      <input
                        type="email"
                        id="emailAddress"
                        class="form-control form-control-lg"
                      />
                      <label class="form-label" for="emailAddress">
                        district
                      </label>
                    </div>
                  </div>
                  <div className="col-6 ">
                    <div
                      data-mdb-input-init
                      class="form-outline border rounded"
                    >
                      <input
                        type="tel"
                        id="phoneNumber"
                        class="form-control form-control-lg"
                      />
                      <label class="form-label" for="phoneNumber">
                        State
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row pb-4">
                  <div className=" col-12  ">
                    <div className=" form-outline border border-light rounded">
                      <input
                        type="text"
                        id="name"
                        className="form-control form-control-lg"
                      ></input>

                      <label className="form-label" for="name">
                        Address
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row pb-4">
                  <div className="col-6 ">
                    <div class="form-outline border rounded">
                      <input
                        type="email"
                        id="emailAddress"
                        class="form-control form-control-lg"
                      />
                      <label class="form-label" for="emailAddress">
                        Pin Code
                      </label>
                    </div>
                  </div>
                  <div className="col-6 ">
                    <div
                      data-mdb-input-init
                      class="form-outline border rounded"
                    >
                      <input
                        type="tel"
                        id="phoneNumber"
                        class="form-control form-control-lg"
                      />
                      <label class="form-label" for="phoneNumber">
                        xx
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-end">
                <button className="m-2">Register</button>
              </div>
            </div>
          </div> */}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Register;
