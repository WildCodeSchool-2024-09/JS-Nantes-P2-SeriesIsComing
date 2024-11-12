import "../pages/About.css";
import "../components/ScrollToTopButton";
import profil from "../assets/profil";
import ScrollToTopButton from "../components/ScrollToTopButton";

function About() {
  return (
    <>
      <p className="a-propos">A propos</p>

      <h1>
        Les récits nous emportent vers d’autres horizons. Ils éveillent en nous
        des sentiments inédits, élargissent notre vision du monde et tissent des
        liens entre nous.
      </h1>

      <p className="welcome">
        Bienvenue sur Series is Coming, votre portail incontournable pour
        plonger dans le monde fascinant des séries ! Découvrez un univers où
        chaque histoire vous transporte dans des intrigues captivantes et des
        univers variés, peuplés de personnages attachants et complexes. Ici,
        chaque série est une aventure, et chaque personnage, un compagnon de
        voyage.
      </p>

      <h2>Découvrez l’équipe 🧑🏻‍💻</h2>

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
