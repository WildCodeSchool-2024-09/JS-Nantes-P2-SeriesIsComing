import "../components/Footer.css";

function Footer() {
  return (
    <>
      <footer>
        <p className="logo1">&copy;CopyRight</p>
        <section className="logo-insta">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://www.clipartmax.com/png/middle/4-41427_instagram-png-icon-instagram-logo-transparent.png"
              alt="logo-instagram"
            />
          </a>
        </section>
        <section className="logo-fb">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://e7.pngegg.com/pngimages/339/980/png-clipart-social-media-computer-icons-facebook-graphics-social-media-blue-text.png"
              alt="logo-facebook"
            />
          </a>
        </section>
        <section className="logo-X">
          <a
            href="https://x.com/Accueil"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://i.pinimg.com/736x/69/a6/2a/69a62a5edc08d755dd8a4ef017e14c63.jpg"
              alt="logo-twitter"
            />
          </a>
        </section>
        <section className="logo-gh">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="logo-github"
            />
          </a>
        </section>

        <p className="logo1">CGU</p>
      </footer>
    </>
  );
}

export default Footer;
