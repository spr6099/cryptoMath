function Footer() {
  return (
    <>
      <footer
        class="d-flex flex-wrap justify-content-between align-items-center py-3  border-top background2"
        // style={{ backgroundColor: "#0F0F0F" }}
      >
        <div class="col-md-4 d-flex align-items-center">
          <a
            href="/"
            class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
          >
            <svg class="bi" width="30" height="24"></svg>
          </a>
          <span class="mb-3 mb-md-0 text-light">&copy; 2024 Company, Inc</span>
        </div>

        <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li class="ms-3">
            <a class="text-light" href="#">
              <svg class="bi" width="24" height="24">
                x
              </svg>
            </a>
          </li>
          <li class="ms-3">
            <a class="text-light" href="#">
              <svg class="bi" width="24" height="24">
                x
              </svg>
            </a>
          </li>
          <li class="ms-3">
            <a class="text-light" href="#">
              <svg class="bi" width="24" height="24">
                x
              </svg>
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}
export default Footer;
