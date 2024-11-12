function NavBar() {
  return (
    <nav>
      <img
        src="https://th.bing.com/th/id/R.ca8a3618d313baa5d52322bc4b437dad?rik=4Xq0pWjDTNTuDA&pid=ImgRaw&r=0"
        alt="logo"
      />

      <h1>Serie is Comming</h1>

      <ul>
        <li>
          <a href="/about">
            <h3>A propos</h3>
          </a>
        </li>
        <li>
          <a href="/contact">
            <h3>Nous contacter</h3>
          </a>
        </li>
        <li className="dropdown">
          <a href="/">
            <h3>
              Plus de Série <span className="arrow">▼</span>
            </h3>
          </a>
          <ul className="dropdown-content">
            <li>
              <a href="/series/1">Game of Thrones</a>
            </li>
            <li>
              <a href="/series/2">Série 2</a>
            </li>
            <li>
              <a href="/series/3">Série 3</a>
            </li>
            <li>
              <a href="/series/4">Série 4</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;
