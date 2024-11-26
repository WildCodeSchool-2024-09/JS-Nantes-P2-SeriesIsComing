import { NavLink, useParams } from "react-router-dom";
import useUser from "../utils/useUser";

function NavBar() {
  const { user } = useUser();

  const { id } = useParams<string>();
  const logos = [
    {
      id: 1,
      image:
        "https://th.bing.com/th/id/R.ca8a3618d313baa5d52322bc4b437dad?rik=4Xq0pWjDTNTuDA&pid=ImgRaw&r=0",
    },
    {
      id: 2,
      image: "https://w7.pngwing.com/pngs/90/16/png",
    },
    {
      id: 3,
      image:
        "https://w7.pngwing.com/pngs/233/12/png-transparent-breaking-bad-hd-logo.png",
    },
    {
      id: 4,
      image:
        "https://img.favpng.com/25/15/22/logo-television-prison-break-race-font-image-png-favpng-gDAJHaVEnZ7yRdthJfgvzfmLn.jpg",
    },
  ];

  const imgpouet =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTc3D2DYtISOeLapFWUzqZKAOGAGQio5z684MKep5oZiu-Ck8_9tBUK09zmk1-PFFRAc&usqp=CAU";

  const logoSeries = logos.find((logo) => logo.id === Number(id));

  return (
    <nav>
      <NavLink to={"/"} className="NavLink-nav">
        <img
          src={logoSeries?.image ? logoSeries?.image : imgpouet}
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
