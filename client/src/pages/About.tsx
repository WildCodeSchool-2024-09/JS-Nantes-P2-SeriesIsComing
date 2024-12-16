// Import Components
import ScrollToTopButton from "../components/ScrollToTopButton";

// Import Data
import profil from "../assets/data/profil";

// Import Style Sheet
import "../pages/About.css";

function About() {
  return (
    <>
      <p className="about">À propos</p>
      <h4 className="team-project">Découvrez l’équipe 🧑🏻‍💻</h4>

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
    </>
  );
}

export default About;
