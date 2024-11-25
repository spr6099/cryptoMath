import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../partials/Footer";
import Header from "../../partials/Header";
import "./viewTeacher.css";
import img from "./imgUrl";
import DeleteIcon from "@mui/icons-material/Delete";
import BorderColorTwoToneIcon from "@mui/icons-material/BorderColorTwoTone";

function ViewTeacher() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/admin/viewTeacher")
      .then((res) => res.json())
      .then((result) => {
        // console.log("viewTeacher", result);
        setData(result);
      });
  }, []);

  // --------------Delete----------------------

  const Delete = (delId) => {
    let id = {
      id: delId,
    };
    fetch("http://localhost:4000/admin/deleteTeacher", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(id),
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        window.location.reload();
      });
  };

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
        // console.log(result);
        window.location.reload();
      });
  };

  return (
    <>
      <Header />

      <div className="row ">
        {/*------------------ side bar------------------- */}
       <div className="col-1"></div>
        {/*------------------ View Page -----------------------*/}
        <div
          class="col-10 "
          // style={{ marginLeft: "80px" }}
        >
          <Link
            class=" btn text-light m-2"
            to="/admin/addTeacher"
            style={{ backgroundColor: "#FF4500" }}
          >
            Add
          </Link>
          <div className="row">
            {" "}
            {data.map((item, index) => (
              <div
                className=" col-3 card bg-secondary mx-3 mb-3"
                style={{ width: "18rem" }}
              >
                <img
                  className="card-img-top border m-auto mt-2 "
                  src={img + item.regId.image}
                  alt="Card image cap"
                  style={{ height: "10rem", width: "10rem" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.regId.name}</h5>
                  <h7 className="card-title">{item.regId.subject}</h7>

                  <p className="card-text"></p>
                  <a
                    href={`/admin/profile/${item._id}`}
                    className="btn btn-primary"
                  >
                    View profile
                  </a>
                  {/* <Link
                    to="/admin/allocate_students"
                    state={{ id: item._id }}
                    className="btn btn-primary mt-2"
                  >
                    allocate students
                  </Link> */}
                </div>
              </div>
            ))}
          </div>

          {/* <section className="">
            <Link
              class=" btn text-light m-2"
              to="/admin/addTeacher"
              style={{ backgroundColor: "#FF4500" }}
            >
              Add
            </Link>
            <table class="table">
              <thead class="">
                <th>name</th>
                <th>dob</th>
                <th>Gender</th>
                <th>email</th>
                <th>subject</th>
                <th>address</th>
                <th>phone</th>
                <th>Password</th>
                <th>image</th>
              </thead>

              {data.map((item, index) => (
                <>
                  <tr>
                    <td class="  ">{item.regId.name}</td>
                    <td>{item.regId.dob}</td>
                    <td>{item.regId.gender}</td>
                    <td>{item.email}</td>
                    <td>{item.regId.subject}</td>
                    <td>{item.regId.address}</td>
                    <td>{item.regId.number}</td>
                    <td>{item.password}</td>
                    <td>
                      <img
                        style={{ height: "100px", width: "100px" }}
                        src={img + item.regId.image}
                        // src={`http://localhost:2000/productImages/${items.image}`}
                      ></img>
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          Delete(item._id);
                        }}
                        class="btn  m-2"
                        style={{ color: "#FF0000" }}
                      >
                        <DeleteIcon />
                      </button>

                      <Link
                        to={"/admin/editTeacher"}
                        state={{ id: item._id }}
                        style={{ color: "#00FF00" }}
                      >
                        {" "}
                        <BorderColorTwoToneIcon />
                      </Link>
                    </td>
                  </tr>
                  <tr></tr>
                </>
              ))}
            </table>
          </section> */}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ViewTeacher;
