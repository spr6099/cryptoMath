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
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
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

function Allocate_students() {
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
  const navigate = useNavigate();
  const location = useLocation();
  const [teacher, setTeacher] = useState([]);

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
        setId(result.regId._id);
      });
    fetch("http://localhost:4000/admin/viewStudents")
      .then((res) => res.json())
      .then((result) => {
        console.log("teacher", result);
        setTeacher(result);
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
    datas.append("id", id);

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

  const handleTeacherChange = (e) => {
    console.log("e", e.target.value);
    console.log("teacher", id);
  };
  return (
    <>
      <Header />

      <section style={{ backgroundColor: "#eee" }}>
        <MDBContainer className="py-5">
          <MDBRow>
            {/* <MDBCol>
              <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
                <MDBBreadcrumbItem>
                  <a href="#">Home</a>
                </MDBBreadcrumbItem>
                <MDBBreadcrumbItem>
                  <a href="/admin/viewTeacher">User</a>
                </MDBBreadcrumbItem>
                <MDBBreadcrumbItem active>User Profile:</MDBBreadcrumbItem>
              </MDBBreadcrumb>
            </MDBCol> */}

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
                  <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
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
                  <MDBCard className="mb-4"></MDBCard>
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
                      <MDBCardText className="text-muted">{name}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Email</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{email}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Phone</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{number}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
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
                        <option value="">Select a Teacher</option>
                        {teacher.map((item, index) => (
                          <option value={item._id}>
                            {item.studentRegID.name}
                          </option>
                        ))}
                      </select>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <Footer />
    </>
  );
}

export default Allocate_students;
