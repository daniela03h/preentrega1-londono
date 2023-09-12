import { Link } from "react-router-dom";
import CartWidge from "./CartWidget/CartWidget";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand" href="#">
          TuTienda.com
        </Link>
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
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/category/camisetas" className="nav-link">
                Camisetas
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/category/pantalones" className="nav-link">
                Pantalones
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/category/gorras" className="nav-link">
                Gorras
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/category/bolsos" className="nav-link" >
                Bolsos
              </Link>
            </li>
          </ul>
        </div>
        <CartWidge/>
      </div>
    </nav>
  );
}

export default Navbar;
