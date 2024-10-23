import Header from "../partials/Header";
import Footer from "../partials/Footer";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import BorderColorTwoToneIcon from "@mui/icons-material/BorderColorTwoTone";
import Img from "./imgUrl"
import "../../components.css";

function ViewParents() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/admin/viewParents")
      .then((res) => res.json())
      .then((result) => {
        console.log("parents", result);
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
              <h4 className="text-center">Parents</h4>
              <table class="table">
                <thead class="">
                  <th>name</th>
                  <th>Phone No.</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>State</th>
                  <th>Pin Code</th>
                  <th>image</th>
                </thead>

                {data.map((item, index) => (
                  <>
                    <tr key={item._id}>
                      <td>{item.parentRegID.name}</td>
                      <td>{item.parentRegID.phone}</td>
                      <td>{item.email}</td>
                      <td>{item.parentRegID.address}</td>
                      <td>{item.parentRegID.state}</td>
                      <td>{item.parentRegID.pin}</td>

                      <td>
                        <img
                          style={{ height: "100px", width: "100px" }}
                          src={Img + item.parentRegID.image}
                          // src={`http://localhost:4000/parents/${item.parentRegID.image}`}
                        ></img>
                      </td>
                      <td>
                        <button class="btn  m-2" style={{ color: "#FF0000" }}>
                          <DeleteIcon />
                        </button>

                        <Link style={{ color: "#00FF00" }}>
                          {" "}
                          <BorderColorTwoToneIcon />
                        </Link>
                      </td>
                    </tr>
                    <tr></tr>
                  </>
                ))}
              </table>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ViewParents;
