import "../components/Footer.css";

function Footer() {
  return (
    <>
      <footer>
        <a href="/">&copy;CopyRight</a>
        <section className="logo">
          <a id="logo-insta" href="/">
            {" "}
            <img
              src="https://cdn-icons-png.flaticon.com/512/87/87390.png"
              alt="logo-instagram"
            />{" "}
          </a>
          <a id="logo-fb" href="/">
            {" "}
            <img
              src="https://cdn-icons-png.flaticon.com/512/59/59439.png"
              alt="logo-facebook"
            />{" "}
          </a>
          <a id="logo-gh" href="/">
            {" "}
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="logo-github"
            />{" "}
          </a>
        </section>
        <a href="/">CGU</a>
      </footer>
    </>
  );
}

export default Footer;
