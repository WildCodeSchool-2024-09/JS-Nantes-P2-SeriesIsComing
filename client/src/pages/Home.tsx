// Import React Modules
import { Link } from "react-router-dom";

// Import Data
import { mainSeriesCards } from "../assets/data/mainSeriesCards";

// Import Style Sheet
import "./Home.css";

function Home() {
  return (
    <main>
      <section id="main-series-cards">
        {mainSeriesCards.map((card) => (
          <Link to={card.link} key={card.link} className="clickable-card">
            <img src={card.image} alt={card.altText} />
          </Link>
        ))}
      </section>
    </main>
  );
}

export default Home;
