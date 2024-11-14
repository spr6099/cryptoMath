import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../partials/Footer";
import Header from "../../partials/Header";
import "./viewTeacher.css";
import img from "./imgUrl";
import DeleteIcon from "@mui/icons-material/Delete";
import BorderColorTwoToneIcon from "@mui/icons-material/BorderColorTwoTone";
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
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";

function ProfilePage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/admin/viewTeacher")
      .then((res) => res.json())
      .then((result) => {
        console.log("Getproduct", result);
        setData(result);
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

  // -----------Edit----------------------------
  const Edit = (editId) => {
    let id = {
      id: editId,
    };
    fetch("http://localhost:4000/admin/editTeacher", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(id),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        window.location.reload();
      });
  };

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
                <a href="/admin/viewTeacher" className="nav-link link-active">
                  <svg className="bi pe-none me-2" width="16" height="16">
                    {/* <use xlink:href="#table"/> */}
                  </svg>
                  Teachers
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
          {data.map((item, index) => (
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
                          src={img + item.regId.image}
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
                                  {item.regId.subject}
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
                                  {item.regId.dob}
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
                                  {item.regId.gender}
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
                              {item.regId.name}
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
                              {item.email}
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
                              {item.regId.number}
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
                              {item.regId.address}
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
              </MDBContainer>
            </section>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProfilePage;
