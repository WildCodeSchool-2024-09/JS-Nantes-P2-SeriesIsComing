import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  const articles = [
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
        "https://th.bing.com/th/id/OIP.KrsIyNANssJxIHjmS2r-mQHaKR?rs=1&pid=ImgDetMain",
      altText: "/series/3",
      link: "#",
    },
    {
      image:
        "https://m.media-amazon.com/images/M/MV5BMGU2NjZhMmUtNTYzYS00OTMyLTkzZDAtMTkzNDIwNWFkM2I0XkEyXkFqcGdeQXVyMTY3NTgwODk5._V1_.jpg",
      altText: "/series/4",
      link: "#",
    },
  ];

  return (
    <main>
      <section id="recent-articles">
        {articles.map((article) => {
          return (
            <Link
              to={article.link}
              key={article.link}
              className="clickable-card"
            >
              <img src={article.image} alt={article.altText} />
            </Link>
          );
        })}
      </section>
    </main>
  );
}

export default Home;
