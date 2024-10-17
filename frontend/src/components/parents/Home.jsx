import Footer from "./partials/Footer";
import Header from "./partials/Header";

function Home() {
  return (
    <div>
      <Header />
      {/* <section
        style={{
          backgroundImage: "url('/images/collage.jpg')",
          height: "100vh",
          marginTop: "-5px",
          marginBottom: "-55px",
          fontSize: "50px",
          backgroundSize: "cover",
          // objectFit:"contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          class="row d-flex justify-content-end align-items-center "
          style={{ marginTop: "5px", paddingTop: "30px" }}
        >
          <div
            style={{ width: "400px", backgroundColor: "" }}
            class="p-3 text-center"
          >
            <input
              type="text"
              class="form-control form-control-lg border-dark shadow m-1"
              style={{ width: "250px" }}
            ></input>
            <input
              type="text"
              class="form-control form-control-lg border-dark shadow m-1"
              style={{ height: "50px", width: "250px" }}
            ></input>
            <button type="submit" class="btn btn-outline-info">
              Login
            </button>
            <p style={{ fontSize: "40%" }}>
              Not a member? <a href="#!">Register</a>
            </p>
          </div>
        </div>
      </section> */}
      <Footer />
    </div>
  );
}

export default Home;
