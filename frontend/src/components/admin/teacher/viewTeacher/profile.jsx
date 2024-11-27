import { useEffect, useState } from "react";
import Footer from "../../partials/Footer";
import Header from "../../partials/Header";
import "./viewTeacher.css";
import img from "./imgUrl";
import ImgStudent from "../../students/imgUrl";

import React from "react";
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
  MDBIcon,
  MDBNavbarLink,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";
import {  Link, useParams } from "react-router-dom";
import { Card } from "react-bootstrap";

function ProfilePage() {
  const [student, setStudent] = useState([]);
  const [name, setName] = useState("");
  const [dob, setDOB] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [image, setImage] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const [gender, setGender] = useState("");
  const { id } = useParams();
  const [std, setStd] = useState([]);

  // console.log(id);
  let uid = {
    id: id,
  };
  useEffect(() => {
    fetch("http://localhost:4000/admin/viewStudents")
      .then((res) => res.json())
      .then((result) => {
        console.log("studentsss", result);
        setStudent(result);
      });
    fetch("http://localhost:4000/admin/teacher_profile", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(uid),
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
        setStd(result.students);
        // setTid(result._id);
      });
  }, []);

  // --------------Delete----------------------

  //   const Delete = (delId) => {
  //     let id = {
  //       id: delId,
  //     };
  //     fetch("http://localhost:4000/admin/deleteTeacher", {
  //       method: "post",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(id),
  //     })
  //       .then((res) => res.json())
  //       .then((result) => {
  //         console.log(result);
  //         window.location.reload();
  //       });
  //   };

  return (
    <>
      <Header />

      <div className="row ">
        {/*------------------ side bar------------------- */}
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
                  href={`/admin/teacher/students/${id}`}
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
        {/*------------------ View Page -----------------------*/}
        <div className="col-10">
          {/* {data.map((item, index) => ( */}
          <section style={{ backgroundColor: "#eee" }}>
            <MDBContainer className="py-5">
              <MDBRow>
                <MDBCol>
                  <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
                    <MDBBreadcrumbItem>
                      <a href="#">Home</a>
                    </MDBBreadcrumbItem>
                    <MDBBreadcrumbItem>
                      <a href="/admin/viewTeacher">User</a>
                    </MDBBreadcrumbItem>
                    <MDBBreadcrumbItem active>User Profile:</MDBBreadcrumbItem>
                  </MDBBreadcrumb>
                </MDBCol>
                <MDBCol>
                  <MDBBtn className="me-2">delete</MDBBtn>
                  <a href={`/admin/editTeacher/${id}`}>
                    <MDBBtn className="me-2">Edit</MDBBtn>
                  </a>
                </MDBCol>
                {/* <MDBNavbarLink href="/">Home</MDBNavbarLink> */}
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
                      <p className="text-muted mb-1">Full Stack Developer</p>
                      <p className="text-muted mb-4">
                        Bay Area, San Francisco, CA
                      </p>
                      <div className="d-flex justify-content-center mb-2">
                        <MDBBtn>Follow</MDBBtn>
                        <MDBBtn outline className="ms-1">
                          Message
                        </MDBBtn>
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
                              <MDBCardText className="text-muted">
                                {subject}
                              </MDBCardText>
                            </MDBCol>
                          </MDBRow>
                          <hr />
                          <MDBRow>
                            <MDBCol sm="3">
                              <MDBCardText>DOB</MDBCardText>
                            </MDBCol>
                            <MDBCol sm="9">
                              <MDBCardText className="text-muted">
                                {dob}
                              </MDBCardText>
                            </MDBCol>
                          </MDBRow>
                          <hr />
                          <MDBRow>
                            <MDBCol sm="3">
                              <MDBCardText>Gender</MDBCardText>
                            </MDBCol>
                            <MDBCol sm="9">
                              <MDBCardText className="text-muted">
                                {gender}
                              </MDBCardText>
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
                          <MDBCardText className="text-muted">
                            {name}
                          </MDBCardText>
                        </MDBCol>
                      </MDBRow>
                      <hr />
                      <MDBRow>
                        <MDBCol sm="3">
                          <MDBCardText>Email</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                          <MDBCardText className="text-muted">
                            {email}
                          </MDBCardText>
                        </MDBCol>
                      </MDBRow>
                      <hr />
                      <MDBRow>
                        <MDBCol sm="3">
                          <MDBCardText>Phone</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                          <MDBCardText className="text-muted">
                            {number}
                          </MDBCardText>
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
                            {address}
                          </MDBCardText>
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
                          {/* {std} */}
                          {student
                            .filter((item) => item.teacher === id)
                            .map((item, index) => (
                              <Card className="col-2" style={{ width: "18rem" }}>
                      <Link
                        to="/admin/student_profile"
                        state={{ id: item._id }}
                        className="text-reset"
                      >
                        <Card.Body>
                          <Card.Img
                            variant="top"
                            src={ImgStudent + item.studentRegID.image}
                            style={{ height: "100px", width: "100px" }}
                          />
                          <Card.Title>{item.studentRegID.name}</Card.Title>
                          {/* <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text> */}
                          
                        </Card.Body>
                      </Link>{" "}
                    </Card>
                            ))}
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>

                    <MDBCol md="6">
                      <MDBCard className="mb-4 mb-md-0">
                        <MDBCardBody>
                          <MDBCardText className="mb-4">
                            <span className="text-primary font-italic me-1">
                              Allocate
                            </span>{" "}
                            Students
                          </MDBCardText>

                          {/* <button className="btn">submit</button> */}
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>
          {/* ))} */}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProfilePage;
