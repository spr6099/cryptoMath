import { useLocation } from "react-router-dom";
import Footer from "../partials/Footer";
import Header from "../partials/Header";
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
import { useEffect, useState } from "react";
import axios from "axios";
import Img from "./imgUrl";

function Student_profile() {
  const location = useLocation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDOB] = useState("");
  const [image, setImage] = useState("");
  const [tid, setTid] = useState("");
  const [teacher, setTeacher] = useState([]);
  const [teach, setTeach] = useState("");

  let student_id = {
    id: location.state.id,
  };

  useEffect(() => {
    fetch("http://localhost:4000/admin/selectTeacher")
      .then((res) => res.json())
      .then((result) => {
        console.log("teacher", result);
        setTeacher(result);
      });
    const Fetchstd = async () => {
      const res = await axios.post(
        "http://localhost:4000/admin/student_profile",
        student_id,
        {
          withCredentials: true,
        }
      );
      const result = res.data;
      setName(result.studentRegID.name);
      setEmail(result.email);
      setDOB(result.studentRegID.dob);
      setImage(result.studentRegID.image);
      setTid(result._id);
      setTeach(result.teacher);
    };
    Fetchstd();
  }, []);

  const handleTeacherChange = async (e) => {
    e.preventDefault();
    const datas = {
      id: tid,
      teacher_id: e.target.value,
    };
    try {
      const res = await axios.post(
        "http://localhost:4000/admin/allocate_teacher",
        datas,
        {
          withCredentials: true,
        }
      );
      const result = res.data;
      console.log(result);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Header />
      <div className="row ">
        {/*------------------ View Page -----------------------*/}
        <div className="col-10">
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
                  {/* <a href={`/admin/editTeacher/${id}`}>
                    <MDBBtn className="me-2">Edit</MDBBtn>
                  </a> */}
                </MDBCol>
                {/* <MDBNavbarLink href="/">Home</MDBNavbarLink> */}
              </MDBRow>

              <MDBRow>
                <MDBCol lg="4">
                  <MDBCard className="mb-4">
                    <MDBCardBody className="text-center">
                      <MDBCardImage
                        src={Img + image}
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
                                {/* {name} */}
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
                                {/* {gender} */}
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
                          <MDBCardText className="text-muted"></MDBCardText>
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
                          <MDBCardText className="text-muted"></MDBCardText>
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
                              Allocated{" "}
                            </span>{" "}
                            Teacher{" "}
                          </MDBCardText>
                          {teach}
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
                          <select
                            // value={selectedTeacher}
                            onChange={handleTeacherChange}
                            className="form-select"
                          >
                            {" "}
                            {/* {students.length === 0 ? (
                          <option value="">No students available</option> // This will show when there are no students
                        ) : ( <option value="">Select Student</option>
                        ) */}
                            <option value="">Select Teacher</option>
                            {teacher.map((item, index) => (
                              <option value={item._id}>
                                {item.regId.name}
                              </option>
                            ))}
                          </select>{" "}
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

export default Student_profile;
