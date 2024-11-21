import { useParams } from "react-router-dom";
import Footer from "../partials/Footer";
import Header from "../partials/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import Img from "../../admin/students/imgUrl";

function Students() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const teacher_id = {
    id: id,
  };
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.post(
        "http://localhost:4000/teacher/students",
        teacher_id,
        { withCredentials: true }
      );
      const result = res.data;
      setData(result);
      console.log("//", result);
    };
    fetchData();
  }, []);
  return (
    <>
      <Header />
      <div className="row">
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
                <a href="" className="nav-link link-active">
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
        <div className="col-6">
          <div className="row">
            {" "}
            {data.map((item, index) => (
              <div
                className=" col-3 card bg-secondary mx-3 mb-3"
                style={{ width: "18rem" }}
              >
                <img
                  className="card-img-top border m-auto mt-2 "
                  src={Img + item.studentRegID.image}
                  alt="Card image cap"
                  style={{ height: "10rem", width: "10rem" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.studentRegID.name}</h5>
                  {/* <h7 className="card-title">{item.studentRegID.subject}</h7>  */}

                  <p className="card-text"></p>
                  <a
                    // href={`/admin/profile/${item._id}`}
                    className="btn btn-primary"
                  >
                    dashboard{" "}
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
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Students;
