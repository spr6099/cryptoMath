import * as React from "react";
import { useEffect, useState } from "react";
import Footer from "./partials/Footer";
import Header from "./partials/Header";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBTypography,
  MDBIcon,
} from "mdb-react-ui-kit";
import Img from "../admin/students/imgUrl";

function Home() {
  const [parents, setParents] = useState(
    JSON.parse(localStorage.getItem("parents"))
  );
  const [students, setStudents] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // --------------useEffect-----------------
  useEffect(() => {
    let datas = new FormData();
    datas.append("parent_id", parents._id);
    fetch("http://localhost:4000/parent/view_student_details", {
      method: "post",
      body: datas,
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log("result", result);
        setStudents(result);
      });
  }, []);

  return (
    <div>
      {}
      <Header />
      <section className=" " style={{ backgroundColor: "#f4f5f7" }}>
        <MDBContainer className="py-5 h-100 ">
          <MDBRow className="justify-content-center align-items-center h-100">
            {students.map((item, index) => (
              <MDBCol lg="6" className="mb-4 mb-lg-0">
                <MDBCard className="mb-3" style={{ borderRadius: ".5rem" }}>
                  <MDBRow className="g-0">
                    <MDBCol
                      md="4"
                      className="gradient-custom text-center text-white"
                      style={{
                        borderTopLeftRadius: ".5rem",
                        borderBottomLeftRadius: ".5rem",
                      }}
                    >
                      <MDBCardImage
                        src={Img + item.studentRegID.image}
                        alt="Avatar"
                        className="my-5"
                        style={{ width: "80px", height: "80px" }}
                        fluid
                      />
                      <MDBTypography tag="h5">
                        {item.studentRegID.name}
                      </MDBTypography>
                      <MDBCardText>Web Designer</MDBCardText>
                      <MDBIcon far icon="edit mb-5" Review />
                    </MDBCol>
                    <MDBCol md="8">
                      <MDBCardBody className="p-4 bg-secondary bg-gradient">
                        <MDBTypography tag="h6">Information</MDBTypography>
                        <hr className="mt-0 mb-4" />
                        <MDBRow className="pt-1">
                          <MDBCol size="6" className="mb-3">
                            <MDBTypography tag="h6">Score</MDBTypography>
                            <MDBCardText className="text-muted">
                              100
                            </MDBCardText>
                          </MDBCol>
                          <MDBCol size="6" className="mb-3">
                            <MDBTypography tag="h6">Phone</MDBTypography>
                            <MDBCardText className="text-muted">
                              123 456 789
                            </MDBCardText>
                          </MDBCol>
                        </MDBRow>

                        <MDBTypography tag="h6">Information</MDBTypography>
                        <hr className="mt-0 mb-4" />
                        <MDBRow className="pt-1">
                          <MDBCol size="6" className="mb-3">
                            <MDBTypography tag="h6">Performance</MDBTypography>
                            <MDBCardText className="text-muted">
                              Average
                            </MDBCardText>
                          </MDBCol>
                          <MDBCol size="6" className="mb-3">
                            <MDBTypography tag="h6">Total game</MDBTypography>
                            <MDBCardText className="text-muted">12</MDBCardText>
                          </MDBCol>
                        </MDBRow>

                        <div className="d-flex justify-content-start">
                          <a href="#!">
                            <MDBIcon fab icon="facebook me-3" size="lg" />
                          </a>
                          <a href="#!">
                            <MDBIcon fab icon="twitter me-3" size="lg" />
                          </a>
                          <a href="#!">
                            <MDBIcon fab icon="instagram me-3" size="lg" />
                          </a>
                        </div>
                      </MDBCardBody>
                    </MDBCol>
                  </MDBRow>
                </MDBCard>
              </MDBCol>
            ))}
          </MDBRow>
        </MDBContainer>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
