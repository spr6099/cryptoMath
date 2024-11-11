import Footer from "./partials/Footer";
import Header from "./partials/Header";
import Banner from "./partials/BannerImage";
import { Height } from "@mui/icons-material";
// import admin from "../admin/login/login";

function Home() {
  return (
    <div>
      <Header />
      <div>
        <div>
          <div>
            <div style={{ backgroundColor: "#e4f0d0" }}></div>
            <admin />
          </div>
        </div>
        <Banner />
        <div className="">
          <div className="row">
            <div className="col-3 ">
              <div
                className="bg-primary m-2 p-2"
                style={{ Height: "200px", width: "200px" }}
              >
                <a href="/student/games">
                <img
                  src="/images/rubix.jpg"
                  height={"200px"}
                  width={"100%"}
                  style={{ objectFit: "cover" }}
                ></img>
                <div>
                  <button className="w-100 " >Games</button>
                </div>
                </a>
              </div>
            </div>
            {/* <div className="col-3 ">
              <div
                className="bg-primary m-2 p-2"
                style={{ Height: "200px", width: "200px" }}
              >
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Animi dolor esse tempore consequuntur temporibus voluptatem
                  veniam ipsum neque minima libero debitis nemo deleniti
                  recusandae, iure eaque repellendus at magni odit?
                </p>
              </div>
            </div>
            <div className="col-3 ">
              <div
                className="bg-primary m-2 p-2"
                style={{ Height: "200px", width: "200px" }}
              >
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Animi dolor esse tempore consequuntur temporibus voluptatem
                  veniam ipsum neque minima libero debitis nemo deleniti
                  recusandae, iure eaque repellendus at magni odit?
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
