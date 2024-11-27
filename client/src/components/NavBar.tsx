import { NavLink } from "react-router-dom";
import useUser from "../utils/useUser";

function NavBar() {
  const { user } = useUser();

  return (
    <nav>
      <NavLink to={"/"} className="NavLink-nav">
        <img
          src="https://th.bing.com/th/id/R.ca8a3618d313baa5d52322bc4b437dad?rik=4Xq0pWjDTNTuDA&pid=ImgRaw&r=0"
          alt="logo"
          className="logo"
        />
      </NavLink>
      <h1 className="title">
        {user ? `Hello ${user.userFirstName}` : "Series is Coming"}
      </h1>
      <ul>
        <li>
          <NavLink to={"/about"} className="NavLink-nav">
            {" "}
            <h3 className="h3-text">À propos</h3>
            <img
              className="logo2"
              src="https://cdn-icons-png.flaticon.com/512/6229/6229050.png"
              alt="point d'interrogation"
            />
          </NavLink>
        </li>
        <li>
          <NavLink to={"/contact"} className="NavLink-nav">
            {" "}
            <h3 className="h3-text">Nous contacter</h3>
            <img
              className="logo2"
              src="https://th.bing.com/th/id/R.74fef23e2e02b874f883b8fbd3847cc8?rik=3Vaj6GaDSb4VoQ&riu=http%3a%2f%2ficon-library.com%2fimages%2ftelephone-icon-png%2ftelephone-icon-png-1.jpg&ehk=Af6dFLM25381YRPy0lGgLzwUdSpzy%2bdyrILCDHig6fg%3d&risl=&pid=ImgRaw&r=0"
              alt="telephone portable"
            />
          </NavLink>
        </li>

        <li className="dropdown">
          {" "}
          <h3 className="h3-text"> Plus de Séries</h3>
          <div className="arrow">▼</div>
          <img
            className="logo2"
            src="https://cdn-icons-png.flaticon.com/512/275/275201.png"
            alt="telephone portable"
          />
          <ul className="dropdown-content">
            <li>
              <NavLink to={"/series/1"} className="NavLink-nav">
                Game of Thrones
              </NavLink>
            </li>
            <li>
              <NavLink to={"/series/2"} className="NavLink-nav">
                The Walking Dead
              </NavLink>
            </li>
            <li>
              <NavLink to={"/series/3"} className="NavLink-nav">
                Breaking Bad
              </NavLink>
            </li>
            <li>
              <NavLink to={"/series/4"} className="NavLink-nav">
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
