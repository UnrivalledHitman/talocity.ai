import logo from "../../assets/navigation-bar/logo_full_horizontal_white.png";
import "./navigation-bar.styles.scss";

const Navigation = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src={logo}
              alt="Logo"
              width="auto"
              height="30"
              className="d-inline-block align-text-top"
            />
          </a>

          {/* Hamburger menu button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            {/* Links align horizontally for both mobile and larger screens */}
            <div className="ms-auto d-flex justify-content-center justify-content-lg-end flex-wrap">
              <a className="nav-link text-white text-center mx-2" href="#">
                Products
              </a>
              <a className="nav-link text-white text-center mx-2" href="#">
                Clients
              </a>
              <a className="nav-link text-white text-center mx-2" href="#">
                Company
              </a>
              <a className="nav-link text-white text-center mx-2" href="#">
                Resources
              </a>
              <a className="nav-link text-white text-center mx-2" href="#">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
