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
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
  const [parents, setParents] = useState(
    JSON.parse(localStorage.getItem("parents"))
  );

  const [students, setStudents] = useState([]);
  console.log("students", students);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const [score, setScore] = useState("");
  // --------------useEffect-----------------
  useEffect(() => {
    let datas = new FormData();
    const getData = async () => {
      const res = await axios.post(
        "http://localhost:4000/student/getScore",
        datas,
        { withCredentials: true }
      );
      let result = res.data;
      setScore(result);
    };
    getData();

   
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

  const review = () => {
    alert("enter Review");
  };

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
                      <Link
                        className="nav-link"
                        to={`/parents/studentProfile/${item._id}`}
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
                      </Link>
                      <MDBIcon onClick={review} far icon="edit mb-5" Review />
                    </MDBCol>

                    <MDBCol md="8">
                      <MDBCardBody className="p-4 bg-secondary bg-gradient">
                        <MDBTypography tag="h6">Games</MDBTypography>
                        <hr className="mt-0 mb-4" />
                        <MDBRow className="">
                          <MDBCol size="6" className="mb-3">
                            <MDBTypography tag="h6">Fruit</MDBTypography>
                            <MDBCardText className="text-muted">
                              {
                                score.filter(
                                  (items) =>
                                    items.user === item._id &&
                                    items.game === "fruit"
                                ).length
                              }
                              :{" "}
                              {Math.max(
                                ...score
                                  .filter(
                                    (itemss) =>
                                      itemss.user === item._id &&
                                      itemss.game === "fruit"
                                  )
                                  .map((item) => parseInt(item.score))
                              )}
                            </MDBCardText>
                          </MDBCol>

                          <MDBCol size="6" className="mb-3 ">
                            <MDBTypography tag="h6">Typing</MDBTypography>
                            <MDBCardText className="text-muted">
                              {
                                score.filter(
                                  (items) =>
                                    items.user === item._id &&
                                    items.game === "typing"
                                ).length
                              }{" "}
                              :{" "}
                              {Math.max(
                                ...score
                                  .filter(
                                    (itemss) =>
                                      itemss.user === item._id &&
                                      itemss.game === "typing"
                                  )
                                  .map((item) => parseInt(item.score))
                              )}
                            </MDBCardText>
                          </MDBCol>
                          <MDBCol size="6" className="mb-3">
                            <MDBTypography tag="h6">Snake</MDBTypography>
                            <MDBCardText className="text-muted">
                              {
                                score.filter(
                                  (items) =>
                                    items.user === item._id &&
                                    items.game === "snake"
                                ).length
                              }{" "}
                              :
                              {Math.max(
                                ...score
                                  .filter(
                                    (itemss) =>
                                      itemss.user === item._id &&
                                      itemss.game === "snake"
                                  )
                                  .map((item) => parseInt(item.score))
                              )}
                            </MDBCardText>
                          </MDBCol>
                          <MDBCol size="6" className="mb-3">
                            <MDBTypography tag="h6">Guess</MDBTypography>
                            <MDBCardText className="text-muted">
                              {
                                score.filter(
                                  (items) =>
                                    items.user === item._id &&
                                    items.game === "guess"
                                ).length
                              }
                              :
                              {Math.max(
                                ...score
                                  .filter(
                                    (itemss) =>
                                      itemss.user === item._id &&
                                      itemss.game === "guess"
                                  )
                                  .map((item) => parseInt(item.score))
                              )}
                            </MDBCardText>
                          </MDBCol>
                        </MDBRow>

                        {/* <MDBTypography tag="h6">Information</MDBTypography> */}
                        <hr className="mt-0 mb-4" />
                        <MDBRow className="pt-1">
                          {/* <MDBCol size="6" className="mb-3">
                            <MDBTypography tag="h6">Performance</MDBTypography>
                            <MDBCardText className="text-muted">
                              Average
                            </MDBCardText>
                          </MDBCol> */}
                          <MDBCol size="6" className="mb-3">
                            <MDBTypography tag="h6">Total game</MDBTypography>
                            <MDBCardText className="text-muted">4</MDBCardText>
                          </MDBCol>
                        </MDBRow>

                        {/* <div className="d-flex justify-content-start">
                          <a href="#!">
                            <MDBIcon fab icon="facebook me-3" size="lg" />
                          </a>
                          <a href="#!">
                            <MDBIcon fab icon="twitter me-3" size="lg" />
                          </a>
                          <a href="#!">
                            <MDBIcon fab icon="instagram me-3" size="lg" />
                          </a>
                        </div> */}
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
