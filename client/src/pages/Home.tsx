import "./Home.css";
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
      altText: "First series : Game of Thrones",
      link: "/series/1",
    },
    {
      image:
        "https://th.bing.com/th/id/OIP.DvMkNmw3ZHi8X2E9Fqi4wgHaHa?rs=1&pid=ImgDetMain",
      altText: "Second series : The Walking Dead",
      link: "/series/2",
    },
    {
      image:
        "https://lasa9ni.shop/cdn/shop/files/7A0177BB-2FB1-4F00-BC18-19BDE0DC2350.jpg?v=1708208390",
      altText: "Third series : Breaking Bad",
      link: "/series/3",
    },
    {
      image: "https://karoo.me/site/assets/files/19358/prison-break.jpg",
      altText: "Fourth series : Prison Break",
      link: "/series/4",
    },
  ];

  return (
    <main>
      <section id="recent-articles">
        {articles.map((article) => (
          <Link to={article.link} key={article.link} className="clickable-card">
            <img src={article.image} alt={article.altText} />
          </Link>
        ))}
      </section>
    </main>
  );
};

export default Home;
