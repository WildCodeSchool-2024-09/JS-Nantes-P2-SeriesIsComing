import { useEffect, useState } from "react";
import "../components/ScrollToTop.scss";

const ScrollToTopButton = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const handleScroll = () => {
      const { scrollY } = window;
      const windowHeight = window.innerHeight;
      const bodyHeight = document.body.clientHeight;

      const progress = (scrollY / (bodyHeight - windowHeight)) * 100;

      setScrollProgress(progress);
      if (scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
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
