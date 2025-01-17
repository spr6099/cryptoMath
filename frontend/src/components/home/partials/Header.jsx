import "../../components.css";

function Header() {
  return (
    <>
      <div style={{ position: "sticky", top: "0" }}>
        <div class=" bg-light" style={{ height: "70px" }}>
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start ">
            <h5
              class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0  lobster-regular p-2 m-2"
              style={{ color: "#8E8D8A" }}
            >
              CryptoMath
            </h5>
            <a
              href="#"
              class="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none"
            ></a>

            <h2
              class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0  text-dark"
              // style={{ color: "#8E8D8A" }}
            >Home</h2>

            
          </div>
        </div>
        <div>
          <div style={{ backgroundColor: "#245501", height: "50px" }}>
            <div class="dropdown">
              <button class="dropbtn btn text-light m-2">
                <a href="/">Home</a>
              </button>
            </div>
            <div class="dropdown">
              <button class="dropbtn btn text-light">Dropdown</button>
              <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
            <div class="dropdown">
              <button class="dropbtn btn text-light">Dropdown</button>
              <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>

            <div class="dropdown">
              <button class="dropbtn btn text-light">Dropdown</button>
              <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
            {/* -----------Register----------- */}

            <div class="dropdown">
              <button class="dropbtn btn text-light">Register</button>
              <div class="dropdown-content">
                <a href="/parents/register">parents Register</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
            {/* -----------Login--------- */}

            <div class="dropdown">
              <button class="dropbtn btn text-light">Login</button>
              <div class="dropdown-content">
                <a href="/admin/login">admin</a>
                <a href="/parents/login">Parents </a>
                <a href="/teacher/login">Teacher </a>
                <a href="/student/login">students</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div>
        <div>
          <img
            src="/images/collage.jpg"
            height={"350px"}
            width={"100%"}
            style={{ objectFit: "cover" }}
          ></img>
        </div>
        <div>
          <div style={{ backgroundColor: "#245501", height: "40px" }}></div>
        </div>
      </div> */}
    </>
  );
}

export default Header;
