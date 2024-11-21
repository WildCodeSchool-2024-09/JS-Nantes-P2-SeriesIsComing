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
            <span className="h3-text"> A propos</span>
            <img
              className="logo2"
              src="https://cdn-icons-png.flaticon.com/512/6229/6229050.png"
              alt="point d'interrogation"
            />
          </NavLink>
        </li>
        <li>
          <NavLink to={"/contact"} className="link-nav">
            <span className="h3-text">Nous contacter</span>
            <img
              className="logo2"
              src="https://th.bing.com/th/id/R.74fef23e2e02b874f883b8fbd3847cc8?rik=3Vaj6GaDSb4VoQ&riu=http%3a%2f%2ficon-library.com%2fimages%2ftelephone-icon-png%2ftelephone-icon-png-1.jpg&ehk=Af6dFLM25381YRPy0lGgLzwUdSpzy%2bdyrILCDHig6fg%3d&risl=&pid=ImgRaw&r=0"
              alt="telephone portable"
            />
          </NavLink>
        </li>

        <li className="dropdown">
          <span className="h3-text">
            Plus de Série <span className="arrow">▼</span>
          </span>
          <img
            className="logo2"
            src="https://cdn-icons-png.flaticon.com/512/275/275201.png"
            alt="telephone portable"
          />
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
