import "../pages/About.css";
import "../components/ScrollToTopButton";
import profil from "../assets/data/profil";
import ScrollToTopButton from "../components/ScrollToTopButton";

function About() {
  return (
    <>
      <section id="sec-about">
        <p className="about">À propos</p>
        <h4 className="teamproject">Découvrez l’équipe 🧑🏻‍💻</h4>

        <section className="profil">
          {profil.map((elem) => (
            <section key={elem.id} id={elem.id} className="profil-item">
              <img className="pic" src={elem.src} alt={elem.alt} />
              <p className="post">{elem.post}</p>
              <p className="role">{elem.role}</p>
            </section>
          ))}
        </section>
        <ScrollToTopButton />
      </section>
    </>
  );
}

export default About;
