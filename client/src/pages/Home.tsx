import "./Home.css";
import { useState } from "react";
import { Link } from "react-router-dom";

interface Article {
  image: string;
  altText: string;
  link: string;
}

const Home: React.FC = () => {
  const articles: Article[] = [
    {
      image:
        "https://th.bing.com/th/id/R.0130ebbdd9706106e8c6904611e87765?rik=%2bU1w5z%2f10v6CkQ&pid=ImgRaw&r=0",
      altText: "Article 1",
      link: "https://youtu.be/KPLWWIOCOOQ",
    },
    {
      image:
        "https://th.bing.com/th/id/OIP.DvMkNmw3ZHi8X2E9Fqi4wgHaHa?rs=1&pid=ImgDetMain",
      altText: "Article 2",
      link: "#",
    },
    {
      image:
        "https://th.bing.com/th/id/OIP.KrsIyNANssJxIHjmS2r-mQHaKR?rs=1&pid=ImgDetMain",
      altText: "Article 3",
      link: "#",
    },
    {
      image:
        "https://m.media-amazon.com/images/M/MV5BMGU2NjZhMmUtNTYzYS00OTMyLTkzZDAtMTkzNDIwNWFkM2I0XkEyXkFqcGdeQXVyMTY3NTgwODk5._V1_.jpg",
      altText: "Article 4",
      link: "#",
    },
  ];

  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  const showNextCard = () => {
    if (visibleCards.length < articles.length) {
      setVisibleCards((prev) => [...prev, prev.length]);
    }
  };

  return (
    <main>
      <section id="recent-articles">
        {articles.map((article, index) => (
          <Link
            to={article.link}
            key={article.link}
            className={`clickable-card ${visibleCards.includes(index) ? "visible" : ""}`}
          >
            <img src={article.image} alt={article.altText} />
          </Link>
        ))}
      </section>
      <button type="button" onClick={showNextCard}>
        Afficher la carte suivante
      </button>
    </main>
  );
};

export default Home;
