import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to={"/"} className="link-nav">
        <img
          src="https://th.bing.com/th/id/R.ca8a3618d313baa5d52322bc4b437dad?rik=4Xq0pWjDTNTuDA&pid=ImgRaw&r=0"
          alt="logo"
          id="logo"
        />
      </Link>
      <h1>Serie is Comming</h1>

      <ul>
        <li>
          <Link to={"/about"} className="link-nav">
            A propos
          </Link>
        </li>
        <li>
          <Link to={"/contact"} className="link-nav">
            Nous contacter
          </Link>
        </li>
        <li className="dropdown">
          <h3>
            Plus de Série <span className="arrow">▼</span>
          </h3>

          <ul className="dropdown-content">
            <li>
              <Link to={"/series/1"} className="link-nav">
                Game of Thrones
              </Link>
            </li>
            <li>
              <Link to={"/series/2"} className="link-nav">
                Série 2
              </Link>
            </li>
            <li>
              <Link to={"/series/3"} className="link-nav">
                Série 3
              </Link>
            </li>
            <li>
              <Link to={"/series/4"} className="link-nav">
                Série 4
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;
