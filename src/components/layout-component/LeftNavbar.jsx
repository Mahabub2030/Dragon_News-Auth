
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNavbar = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
      .then((res) => res.json())
      .then(data => setCategories(data.data.news_category))


  }, [])
  return (
    <div className="mb-3 ">
      <h2 className="text-xl">All Categorys : ({categories.length})</h2>
      <div className=" flex flex-col gap-2 mt-5 ">
        {
          categories.map(category =>
             <NavLink to={`/category/${category.category_id}`} className="btn" key={category.id}>{category.category_name}
             </NavLink>)
        }
      </div>
    </div>
  );
};

export default LeftNavbar;