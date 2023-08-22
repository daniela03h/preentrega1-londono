import CartWidge from "./CartWidget/CartWidget";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          TuTienda.com
        </a>
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
              <a className="nav-link active" aria-current="page" href="#">
                Camisetas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pantalones
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Gorras
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">
                Bolsos
              </a>
            </li>
          </ul>
        </div>
        <CartWidge/>
      </div>
    </nav>
  );
}

export default Navbar;
