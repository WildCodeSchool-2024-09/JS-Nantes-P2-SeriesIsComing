import { useEffect, useState } from "react";
import "../components/ScrollToTop.scss";

const ScrollToTopButton = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  // Déclare une variable d'état pour suivre la progression du défilement
  const [isVisible, setIsVisible] = useState(false);
  // Déclare une variable d'état pour déterminer si le bouton doit être visible ou non
  // j'ai ajouter une fonction scrollToTop qui sera utilisée pour faire défiler la page vers le haut de manière fluide lorsqu'elle est appelée,

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const { scrollY } = window; //Position de défilement verticale actuelle
      const windowHeight = window.innerHeight; //Hauteur de la fenetre
      const bodyHeight = document.body.clientHeight; //Hauteur totale du corps de la page

      // Calcule de la progression du defilement
      const progress = (scrollY / (bodyHeight - windowHeight)) * 100;

      // setScrollProgress est une fonction qui permet de mettre à jour la valeur de scrollProgress plus tard.
      setScrollProgress(progress);

      if (scrollY > 100) {
        setIsVisible(true); //affiche le boutton
      } else {
        setIsVisible(false); //cache le boutton
      }
      // On crée ensuite une variable d'état appelée isVisible. Cette variable est destinée à suivre l'état de visibilité d'un bouton de retour en haut de la page.La valeur initiale de l'état est (false), indiquant que le bouton n'est pas visible initialement.
    };
    window.addEventListener("scroll", handleScroll); // j'utilise useEffect pour écouter le défilement de la page avec handleScroll.
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`scroll-to-top-button ${isVisible ? "show" : "hide"}`}>
      <div
        className="progress-circle"
        style={{
          borderImage: `conic-gradient(#75553f ${scrollProgress}%, transparent 0%) 1`,
        }}
      >
        <button onClick={scrollToTop} type="button">
          <div className="arrow-up" />
        </button>
      </div>
    </div>
  );
};

export default ScrollToTopButton;
