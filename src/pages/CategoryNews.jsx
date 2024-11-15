
import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";


const CategoryNews = () => {

  const {data: news} = useLoaderData();
  console.log(news);

  return (
    <div>
      <h2 className="text-xl font-semibold">Dragon News Home</h2>
      <p className="text-gray-400 text-sm">{news.length} new foun in the category</p>
      <div>
        {
          news.map((singalNews) =>(
            <NewsCard key={singalNews._id} news={singalNews} />
          ))
             
        }
      </div>
    </div>
  );
};

export default CategoryNews;
