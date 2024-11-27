import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { logos } from "../assets/data/dataLogo";
import LogoHome from "../assets/images/LogoHome.png";
import useUser from "../utils/useUser";

function NavBar() {
  const { user } = useUser();
  const { id } = useParams<string>();

  const logoSeries = logos.find((logo) => logo.id === Number(id));
  return (
    <nav>
      <div className="logofit">
        <NavLink to={"/"} className="NavLink-nav">
          <img
            src={logoSeries?.image ? logoSeries?.image : LogoHome}
            alt="logo"
            className="logo"
          />
        </NavLink>
      </div>

      <h1 className="title">
        {user ? `Hello ${user.userFirstName}` : "Series is Coming"}
      </h1>
      <ul>
        <li>
          <NavLink to={"/Favorite"} className="link-nav">
            <h3 id="favorit-title">Favorite</h3>
            <img
              id="logo2"
              src="https://th.bing.com/th/id/R.16c5c695e3d4bbde7862ceb91e21770e?rik=zaHaF1R4zBlxGQ&pid=ImgRaw&r=0"
              alt="coeur qui represente les favorits"
            />
          </NavLink>
        </li>
        <li>
          <NavLink to={"/about"} className="NavLink-nav">
            <h3 id="about-title">À propos</h3>
            <img
              id="logo2"
              src="https://cdn-icons-png.flaticon.com/512/6229/6229050.png"
              alt="point d'interrogation"
            />
          </NavLink>
        </li>
        <li>
          <NavLink to={"/contact"} className="NavLink-nav">
            <h3 id="contact-title">Nous Contacter</h3>
            <img
              id="logo2"
              src="https://th.bing.com/th/id/R.74fef23e2e02b874f883b8fbd3847cc8?rik=3Vaj6GaDSb4VoQ&riu=http%3a%2f%2ficon-library.com%2fimages%2ftelephone-icon-png%2ftelephone-icon-png-1.jpg&ehk=Af6dFLM25381YRPy0lGgLzwUdSpzy%2bdyrILCDHig6fg%3d&risl=&pid=ImgRaw&r=0"
              alt="telephone portable"
            />
          </NavLink>
        </li>

        <li className="dropdown">
          <h3 id="series-title"> Plus de Séries</h3>
          <div className="arrow">▼</div>
          <img
            id="logo2"
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
