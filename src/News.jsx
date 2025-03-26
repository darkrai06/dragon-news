import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Right from "./Right";

const NewsDetails = () => {
  const news = useLoaderData();

  return (
    <div className="flex gap-24 mx-[150px]">
    <div>
    <h1 className="font-extrabold text-3xl text-center p-8">Dragon News</h1>
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* News Image */}
      <img 
        src={news.image_url} 
        alt={news.title} 
        className="w-full h-64 object-cover rounded-lg mb-4"
      />

      {/* Title */}
      <h1 className="text-2xl font-extrabold mb-2">{news.title}</h1>

      {/* Author Info */}
      <div className="flex items-center gap-3 mb-4">
        <img 
          src={news.author.img} 
          alt={news.author.name} 
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="text-gray-700 font-semibold">{news.author.name}</p>
          <p className="text-gray-500 text-sm">
            {news.author.published_date.split(" ")[0]}
          </p>
        </div>
      </div>

      {/* News Content */}
      <p className="text-gray-600 leading-relaxed mb-6">{news.details}</p>

      {/* Back Button */}
      <Link to={'/category/0'} className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-md w-max">
        <FaArrowLeft />
        All news in this category
      </Link>
    </div>
    </div>
    <div  className="w-1/6 py-12"><Right></Right></div>
    </div>
  );
};

export default NewsDetails;
