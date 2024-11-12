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
      link: "/series/1",
    },
    {
      image:
        "https://th.bing.com/th/id/OIP.DvMkNmw3ZHi8X2E9Fqi4wgHaHa?rs=1&pid=ImgDetMain",
      altText: "Article 2",
      link: "/series/2",
    },
    {
      image:
        "https://lasa9ni.shop/cdn/shop/files/7A0177BB-2FB1-4F00-BC18-19BDE0DC2350.jpg?v=1708208390",
      altText: "/series/3",
      link: "#",
    },
    {
      image: "https://karoo.me/site/assets/files/19358/prison-break.jpg",
      altText: "/series/4",
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
