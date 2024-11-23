import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
      <a className="navbar-brand ps-3" href="#">
        Game of Thrones
      </a>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/favs">
              Favs
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
