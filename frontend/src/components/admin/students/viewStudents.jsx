import Header from "../partials/Header";
import Footer from "../partials/Footer";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import BorderColorTwoToneIcon from "@mui/icons-material/BorderColorTwoTone";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Img from "./imgUrl";
import "../../components.css";
import { Height } from "@mui/icons-material";

function ViewStudents() {
  const [data, setData] = useState([]);
 
  useEffect(() => {
    fetch("http://localhost:4000/admin/viewStudents")
      .then((res) => res.json())
      .then((result) => {
        console.log("studentsss", result);
        setData(result);
      });
   
  }, []);

 

  return (
    <>
      <Header />
      <div>
        <div class="row ">
          {/*------------------ side bar------------------- */}

          {/*------------------ View Page -----------------------*/}
          <div
            class="col-10 "
            // style={{ marginLeft: "80px" }}
          >
            <section className="m-2 p-2">
              <h4 className="text-center">Students</h4>
              <div className="row">
                {data.map((item, index) => (
                  <>
                    <Card className="col-2" style={{ width: "18rem" }}>
                      <Card.Body>
                        <Card.Img
                          variant="top"
                          src={Img + item.studentRegID.image}
                          style={{ height: "100px", width: "100px" }}
                        />

                        <Card.Title>{item.studentRegID.name}</Card.Title>
                        {/* <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text> */}
                        <p>Teacher:</p>

                       
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ViewStudents;
