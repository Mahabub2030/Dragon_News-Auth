
const NewsCard = (props ={}) => {
  const {news} = props || {};
  return (
    <div className="card w-full bg-base-100 shadow-lg rounded-lg p-5">
      <div className="flex items-center gap-3 mb-4">
        <img
          src={news.author.img}
          alt={news.author.name}
          className="w-10 h-10 rounded-full"
        />
        <div>
          <h4 className="text-lg font-semibold">{news.author.name}</h4>
          <p className="text-sm text-gray-500">{new Date(news.author.published_date).toLocaleDateString()}</p>
        </div>
      </div>

      <img
        src={news.image_url}
        alt="thumbnail"
        className="w-full  object-cover rounded-md mb-4 border-2 p-4"
      />

      <h3 className="text-xl font-bold mb-2">{news.title}</h3>
      <p className="text-gray-600 text-sm mb-4">
        {news.details.slice(0, 150)}... <span className="text-blue-500">Read More</span>
      </p>

      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-1">
          <span className="text-yellow-500">★</span>
          <span className="text-sm font-medium">{news.rating.number}</span>
          <span className="text-sm text-gray-500">({news.rating.badge})</span>
        </div>
        <div className="flex items-center gap-1 text-gray-500">
          <span>👁️</span>
          <span>{news.total_view || 0}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard
