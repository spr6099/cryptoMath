import Footer from "./partials/Footer";
import Header from "./partials/Header";
import Banner from "./partials/BannerImage"
// import admin from "../admin/login/login";

function Home() {
  return (
    <div>
      <Header />
      {}
      <div>
        <div>
          <div>
            <div style={{ backgroundColor: "#e4f0d0" }}></div>
            <admin />
          </div>
        </div>
        <Banner/>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
