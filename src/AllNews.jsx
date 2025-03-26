import React from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import { FaRegEye, FaStar } from "react-icons/fa";

const AllNews = () => {
  const data = useLoaderData();

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white shadow-lg rounded-lg">
         <h1 className="font-extrabold text-3xl">Dragon News</h1>
      {data?.data?.map((news) => (
        <div key={news._id} className="border p-4 rounded-lg">
          {/* Author Section */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <img
                src={news.author.img}
                alt={news.author.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-semibold">{news.author.name}</p>
               <p className="text-gray-500 text-sm">
                    {news?.author?.published_date
                        ? news.author.published_date.split(" ")[0]
                        : "N/A"}
                    </p>
              </div>
            </div>
            <div className="flex gap-2 text-gray-500 text-xl">
              <span>🔗</span> {/* Placeholder for share & bookmark icons */}
              <span>📌</span>
            </div>
          </div>

          {/* Title */}
          <h2 className="font-bold text-lg mb-2">{news.title}</h2>

          {/* Thumbnail */}
          <img
            src={news.image_url}
            alt={news.title}
            className="w-full h-52 object-cover rounded-lg"
          />

          {/* Description */}
          <p className="text-gray-600 text-sm my-2">
            {news.details.slice(0, 150)}...
          </p>
          <NavLink to={`/news/${news._id}`} className="text-orange-500 font-semibold">
            Read More
          </NavLink>

          {/* Ratings & Views */}
          <div className="flex justify-between items-center mt-3 text-gray-700">
            <div className="flex items-center gap-1 text-orange-500">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={i < Math.round(news.rating.number) ? "text-orange-500" : "text-gray-300"} />
              ))}
              <span className="text-black">{news.rating.number}</span>
            </div>
            <div className="flex items-center gap-1">
              <FaRegEye />
              <span>{news.total_view}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllNews;
