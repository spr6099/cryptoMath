import React, { useState } from "react";

import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBRadio,
} from "mdb-react-ui-kit";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import { useNavigate } from "react-router-dom";

function Register() {
  const [parents, setParents] = useState(
    JSON.parse(localStorage.getItem("parents"))
  );
  // console.log("ppppp", parents._id);

  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [relation, setRelation] = useState("");
  const [gender, setGender] = useState("");
  const [pin, setPin] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate("");

  const SubmitForm = (e) => {
    e.preventDefault();
    let datas = new FormData();
    datas.append("name", name);
    datas.append("dob", dob);
    datas.append("relation", relation);
    datas.append("gender", gender);
    datas.append("pin", pin);
    datas.append("email", email);
    datas.append("course", course);
    datas.append("password", password);
    datas.append("parent_id", parents._id);
    fetch("http://localhost:4000/parent/studentRegister", {
      method: "post",
      // headers: {
      //   Accept: "application/json",
      //   "Content-Type": "application/json",
      // },
      body: datas,
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        navigate("/parents/home");
      });
  };

  return (
    <>
      <Header />
      <MDBContainer fluid className="bg-dark">
        <MDBRow className="d-flex justify-content-center align-items-center h-100">
          <MDBCol>
            <MDBCard className="my-4">
              <MDBRow className="g-0">
                <MDBCol md="6" className="d-none d-md-block">
                  <MDBCardImage
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                    alt="Sample photo"
                    className="rounded-start"
                    fluid
                  />
                </MDBCol>

                <MDBCol md="6">
                  <MDBCardBody className="text-black d-flex flex-column justify-content-center">
                    <h3 className="mb-5 text-uppercase fw-bold">
                      Student registration form
                    </h3>

                    <MDBRow>
                      <MDBCol md="6">
                        <MDBInput
                          wrapperClass="mb-4"
                          label="First Name"
                          size="lg"
                          id="form1"
                          type="text"
                          onChange={(e) => setName(e.target.value)}
                        />
                      </MDBCol>

                      <MDBCol md="6">
                        <MDBInput
                          wrapperClass="mb-4"
                          label="Last Name"
                          size="lg"
                          id="form2"
                          type="text"
                        />
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol md="6">
                        <MDBInput
                          wrapperClass="mb-4"
                          label="Birthday"
                          size="lg"
                          id="form3"
                          type="date"
                          onChange={(e) => setDob(e.target.value)}
                        />
                      </MDBCol>
                      <MDBCol md="6">
                        <select
                          className="form-select mb-4"
                          size="lg"
                          onChange={(e) => setRelation(e.target.value)}
                        >
                          <option value=" ">Relation to You</option>
                          <option value="son">Son</option>
                          <option value="daughter">daughter</option>
                          <option value="Guardian">Guardian</option>
                          <option value="Other">Other</option>
                        </select>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-md-flex ustify-content-start align-items-center mb-4">
                      <h6 class="fw-bold mb-0 me-4">Gender: </h6>
                      <MDBRadio
                        name="inlineRadio"
                        id="inlineRadio1"
                        value="female"
                        label="Female"
                        inline
                        onChange={(e) => setGender(e.target.value)}
                      />
                      <MDBRadio
                        name="inlineRadio"
                        id="inlineRadio2"
                        value="male"
                        label="Male"
                        onChange={(e) => setGender(e.target.value)}
                        inline
                      />
                      <MDBRadio
                        name="inlineRadio"
                        id="inlineRadio3"
                        value="other"
                        label="Other"
                        onChange={(e) => setGender(e.target.value)}
                        inline
                      />
                    </div>

                    <MDBRow>
                      <MDBCol md="6">
                        <select className="form-select mb-4" size="lg">
                          <option value="1">Relation</option>
                          <option value="2">father</option>
                          <option value="3">Mother</option>
                          <option value="4">Guardian</option>
                          <option value="4">Other</option>
                        </select>
                      </MDBCol>

                      <MDBCol md="6">
                        <select className="form-select mb-4" size="lg">
                          <option value="1">Relation</option>
                          <option value="2">father</option>
                          <option value="3">Mother</option>
                          <option value="4">Guardian</option>
                          <option value="4">Other</option>
                        </select>
                      </MDBCol>
                    </MDBRow>
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Pincode"
                      size="lg"
                      id="form4"
                      type="text"
                      onChange={(e) => setPin(e.target.value)}
                    />
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Course"
                      size="lg"
                      id="form5"
                      type="text"
                      onChange={(e) => setCourse(e.target.value)}
                    />
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Email ID"
                      size="lg"
                      id="form6"
                      type="text"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Password"
                      size="lg"
                      id="form7"
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />

                    <div className="d-flex justify-content-end pt-3">
                      <MDBBtn color="light" size="lg">
                        Reset all
                      </MDBBtn>
                      <MDBBtn
                        className="ms-2"
                        color="warning"
                        size="lg"
                        onClick={SubmitForm}
                      >
                        Submit form
                      </MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <Footer />
    </>
  );
}

export default Register;
