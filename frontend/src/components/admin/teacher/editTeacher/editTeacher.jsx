// useParams:allows you to access URL parameters in a component


import { useEffect, useState } from "react";
import Footer from "../../partials/Footer";
import Header from "../../partials/Header";
import "./editTeacher.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBInput,
  MDBTextArea,
  MDBFile,
  MDBRadio,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";
import img from "../viewTeacher/imgUrl";

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
  const [ids, setIds] = useState("");
  const navigate = useNavigate();

  const { id } = useParams();

  let updateId = {
    id: id,
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
        console.log("rr", result);
        setName(result.regId.name);
        setDOB(result.regId.dob);
        setEmail(result.email);
        setSubject(result.regId.subject);
        setImage(result.regId.image);
        setAddress(result.regId.address);
        setPassword(result.password);
        setNumber(result.regId.number);
        setGender(result.regId.gender);
        setIds(result.regId._id);
      });
  }, []);

  const FormSubmit = (e) => {
    e.preventDefault();

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
    datas.append("id", ids);

    // ---------add Datas---------------
    console.log("dat", datas);

    fetch("http://localhost:4000/admin/updateTeacher", {
      method: "post",
      body: datas,
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("rr", result);
        navigate("/admin/viewTeacher");
      });
  };

  return (
    <>
      <Header />

      <section style={{ backgroundColor: "#eee" }}>
        <MDBContainer className="py-5">
          <MDBRow>
            <MDBCol>
              <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
                <MDBBreadcrumbItem>
                  <a href="#">Home</a>
                </MDBBreadcrumbItem>
                <MDBBreadcrumbItem>
                  <a href="#">User</a>
                </MDBBreadcrumbItem>
                <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
              </MDBBreadcrumb>
            </MDBCol>
          </MDBRow>

          <MDBRow>
            <MDBCol lg="4">
              <MDBCard className="mb-4">
                <MDBCardBody className="text-center">
                  <MDBCardImage
                    src={img + image}
                    alt="avatar"
                    className="rounded-circle"
                    style={{ width: "150px" }}
                    fluid
                  />

                  <div className="d-flex justify-content-center mb-2">
                    <MDBFile
                      label="Choose file"
                      id="image"
                      className="mb-2"
                      onChange={(e) => {
                        setImage(e.target.files[0]);
                      }}
                      required
                    />
                  </div>
                </MDBCardBody>
              </MDBCard>

              <MDBCard className="mb-4 mb-lg-0">
                <MDBCardBody className="p-0">
                  <MDBCard className="mb-4">
                    <MDBCardBody>
                      <MDBRow>
                        <MDBCol sm="3">
                          <MDBCardText>Subject</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                          <MDBInput
                            label="Subject"
                            value={subject}
                            id="subject"
                            type="text"
                            onChange={(e) => {
                              setSubject(e.target.value);
                            }}
                            className=""
                            required
                          />
                        </MDBCol>
                      </MDBRow>
                      <hr />
                      <MDBRow>
                        <MDBCol sm="3">
                          <MDBCardText>Gender</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                          <div className="">
                            <MDBRadio
                              name="gender"
                              id="male"
                              label="Male"
                              value="male"
                              onChange={(e) => {
                                setGender(e.target.value);
                              }}
                              required
                            />
                            <MDBRadio
                              name="gender"
                              id="female"
                              label="Female"
                              value="female"
                              onChange={(e) => {
                                setGender(e.target.value);
                              }}
                              required
                            />
                            <MDBRadio
                              name="gender"
                              id="other"
                              label="Other"
                              value="other"
                              onChange={(e) => {
                                setGender(e.target.value);
                              }}
                              required
                            />
                          </div>
                        </MDBCol>
                      </MDBRow>
                      <hr />
                      <MDBRow>
                        <MDBCol sm="3">
                          <MDBCardText>Password</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                          <MDBInput
                            label="Password"
                            id="password"
                            type="text"
                            value={password}
                            onChange={(e) => {
                              setPassword(e.target.value);
                            }}
                            className=""
                            required
                          />
                        </MDBCol>
                      </MDBRow>
                      <hr />
                      <MDBRow>
                        <MDBCol sm="3">
                          <MDBCardText>Mobile</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                          <MDBCardText className="text-muted">
                            (098) 765-4321
                          </MDBCardText>
                        </MDBCol>
                      </MDBRow>
                      <hr />
                      <MDBRow>
                        <MDBCol sm="3">
                          <MDBCardText>Address</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                          <MDBCardText className="text-muted">
                            Bay Area, San Francisco, CA
                          </MDBCardText>
                        </MDBCol>
                      </MDBRow>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol lg="8">
              <MDBCard className="mb-4">
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Full Name</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBInput
                        label="Username"
                        id="username"
                        type="text"
                        value={name}
                        className=""
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                        required
                      />
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Email</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBInput
                        label="Email"
                        id="email"
                        value={email}
                        type="text"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        className=""
                        required
                      />
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Phone</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBInput
                        label="Phone"
                        id="phone"
                        value={number}
                        type="number"
                        className=""
                        onChange={(e) => {
                          setNumber(e.target.value);
                        }}
                        required
                      />
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>DOB</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBInput
                        label="Date of Birth"
                        id="dob"
                        value={dob}
                        type="date" // Date picker input
                        className=""
                        onChange={(e) => {
                          setDOB(e.target.value);
                        }}
                        required
                      />
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Address</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBTextArea
                        label="Address"
                        value={address}
                        id="address"
                        rows={4}
                        className=""
                        onChange={(e) => {
                          setAddress(e.target.value);
                        }}
                        required
                      />
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>

              <MDBRow>
                <MDBCol md="6">
                  <MDBCard className="mb-4 mb-md-0">
                    <MDBCardBody>
                      <MDBCardText className="mb-4">
                        <span className="text-primary font-italic me-1">
                          {/* assigment */}
                        </span>{" "}
                        Allocated Students
                      </MDBCardText>
                      <MDBCardText
                        className="mb-1"
                        style={{ fontSize: ".77rem" }}
                      >
                        Web Design
                      </MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar
                          width={80}
                          valuemin={0}
                          valuemax={100}
                        />
                      </MDBProgress>

                      <MDBCardText
                        className="mt-4 mb-1"
                        style={{ fontSize: ".77rem" }}
                      >
                        Website Markup
                      </MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar
                          width={72}
                          valuemin={0}
                          valuemax={100}
                        />
                      </MDBProgress>

                      <MDBCardText
                        className="mt-4 mb-1"
                        style={{ fontSize: ".77rem" }}
                      >
                        One Page
                      </MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar
                          width={89}
                          valuemin={0}
                          valuemax={100}
                        />
                      </MDBProgress>

                      <MDBCardText
                        className="mt-4 mb-1"
                        style={{ fontSize: ".77rem" }}
                      >
                        Mobile Template
                      </MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar
                          width={55}
                          valuemin={0}
                          valuemax={100}
                        />
                      </MDBProgress>

                      <MDBCardText
                        className="mt-4 mb-1"
                        style={{ fontSize: ".77rem" }}
                      >
                        Backend API
                      </MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar
                          width={66}
                          valuemin={0}
                          valuemax={100}
                        />
                      </MDBProgress>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>

                <MDBCol md="6">
                  <MDBCard className="mb-4 mb-md-0">
                    <MDBCardBody>
                      <MDBCardText className="mb-4">
                        <span className="text-primary font-italic me-1">
                          assigment
                        </span>{" "}
                        Project Status
                      </MDBCardText>
                      <MDBCardText
                        className="mb-1"
                        style={{ fontSize: ".77rem" }}
                      >
                        Web Design
                      </MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar
                          width={80}
                          valuemin={0}
                          valuemax={100}
                        />
                      </MDBProgress>

                      <MDBCardText
                        className="mt-4 mb-1"
                        style={{ fontSize: ".77rem" }}
                      >
                        Website Markup
                      </MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar
                          width={72}
                          valuemin={0}
                          valuemax={100}
                        />
                      </MDBProgress>

                      <MDBCardText
                        className="mt-4 mb-1"
                        style={{ fontSize: ".77rem" }}
                      >
                        One Page
                      </MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar
                          width={89}
                          valuemin={0}
                          valuemax={100}
                        />
                      </MDBProgress>

                      <MDBCardText
                        className="mt-4 mb-1"
                        style={{ fontSize: ".77rem" }}
                      >
                        Mobile Template
                      </MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar
                          width={55}
                          valuemin={0}
                          valuemax={100}
                        />
                      </MDBProgress>

                      <MDBCardText
                        className="mt-4 mb-1"
                        style={{ fontSize: ".77rem" }}
                      >
                        Backend API
                      </MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar
                          width={66}
                          valuemin={0}
                          valuemax={100}
                        />
                      </MDBProgress>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
          <MDBBtn color="primary" type="submit" onClick={FormSubmit}>
            Save
          </MDBBtn>
        </MDBContainer>
      </section>
      <Footer />
    </>
  );
}

export default EditTeacher;
