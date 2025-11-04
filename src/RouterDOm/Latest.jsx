import { useEffect, useState } from "react";
import NewsItems from "./NewsItems";
const Latest = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {

    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url)
      .then(response => response.json())
      .then(data => setArticles(data.articles));
  }, []);

  return (
    <div className="text-center">
      <h2>
        <span className="badge bg-danger">Latest News</span>
      </h2>
      {articles.map((news,index)=>{
        return <NewsItems key={index} 
        title={news.title}
        description={news.description}
        src={news.src}
        url={news.url}
        />
      })}
    </div>
  );
};

export default Latest;