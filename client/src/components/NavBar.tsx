import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <NavLink to={"/"} className="link-nav">
        <img
          src="https://th.bing.com/th/id/R.ca8a3618d313baa5d52322bc4b437dad?rik=4Xq0pWjDTNTuDA&pid=ImgRaw&r=0"
          alt="logo"
          id="logo"
        />
      </NavLink>
      <h1>Serie is Coming</h1>

      <ul>
        <li>
          <NavLink to={"/about"} className="link-nav">
            <h3> A propos</h3>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/contact"} className="link-nav">
            <h3>Nous contacter</h3>
          </NavLink>
        </li>
        <li className="dropdown">
          <h3>
            Plus de Série <span className="arrow">▼</span>
          </h3>

          <ul className="dropdown-content">
            <li>
              <NavLink to={"/series/1"} className="link-nav">
                Game of Thrones
              </NavLink>
            </li>
            <li>
              <NavLink to={"/series/2"} className="link-nav">
                The Walking Dead
              </NavLink>
            </li>
            <li>
              <NavLink to={"/series/3"} className="link-nav">
                Breaking Bad
              </NavLink>
            </li>
            <li>
              <NavLink to={"/series/4"} className="link-nav">
                Prison Break
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;
