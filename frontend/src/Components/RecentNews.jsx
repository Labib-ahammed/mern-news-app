import React, { useEffect, useState } from "react";
import HrTag from "./HrTag";
import { Card } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import PopularNews from "./PopularNews";
const RecentNews = () => {
  const navigate = useNavigate();

  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(`https://newsnacterbackend.vercel.app/api/v1/news/getnews?order=desc`);
        if (!res.ok) {
          console.log(
            res.status,
            "Error white fetching news for recent news components"
          );
          return;
        }
        const data = await res.json();
        setNews(data);
      } catch (error) {
        console.log(
          error.message,
          "Error white fetching news for recent news components"
        );
      }
    };
    fetchNews();
  }, []);

  const handlePostClick = async (postId, slug) => {
    try {
      const res = await fetch(`https://newsnacterbackend.vercel.app/api/v1/news/view/${postId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        console.log("response error", res.status, res.statusText);
      }
      navigate(`/news/${slug}`);
    } catch (error) {
      console.log("response error", error);
    }
  };
  return (
    <div className="container mx-auto p-2 my-5">
      <h2 className="text-center text-3xl font-bold bg-gradient-to-r from-pink-700 to-purple-800 text-transparent bg-clip-text mx-auto w-40">
        News
      </h2>
      {/* hrtag */}
      <HrTag />
      <div className="min-h-screen mb-20 md:flex md:justify-between md:items-center md:gap-8 lg:justify-around">
        <div className="max-h-96 overflow-y-scroll no-scrollbar p-2 rounded-md lg:w-[500px]">
          <h2 className="text-center text-2xl font-bold bg-gradient-to-r from-pink-700 to-purple-800 text-transparent bg-clip-text mx-auto w-40">
            Recent News
          </h2>
          {/* hrtag */}
          <HrTag />
          {news.length > 0
            ? news.map((item) => (
                <Card
                  key={item._id}
                  className="flex shadow-lg shadow-gray-400 mb-7 mt-2"
                >
                  <div className="flex items-center justify-start">
                    <div className="flex-grow flex-2">
                      {/* Title */}
                      <span
                        onClick={() => handlePostClick(item._id, item.slug)}
                        className="text-[17px] font-semibold hover:underline cursor-pointer"
                      >
                        {item.title.charAt(0).toUpperCase() +
                          item.title.slice(1, 32)}
                        {item.title.length > 32 ? "..." : ""}
                      </span>

                      {/* Description */}
                      <div
                        className="text-gray-700 mt-2"
                        dangerouslySetInnerHTML={{
                          __html:
                            item.description.length > 40
                              ? item.description.substring(0, 40) + "..."
                              : item.description,
                        }}
                      ></div>

                      {/* Author, Category, and Date */}
                      <div className="flex gap-5 items-center mt-4 text-sm text-gray-500">
                        <p>
                          {item.author.substring(0, 5)}
                          {item.author.length > 5 ? "..." : ""}
                        </p>
                        <Link
                          to={`news/${item.category}`}
                          className="bg-gradient-to-r from-purple-600 to-pink-500 p-1 text-white rounded-sm"
                        >
                          {item.category}
                        </Link>
                        <p className="text-gray-400sm:hidden">
                          {new Date(item.createdAt).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }
                          )}
                        </p>
                      </div>
                    </div>

                    {/* Image */}
                    <div className="ml-8 w-20">
                      <img
                        src={item.imgUrl}
                        alt={item.title}
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                  </div>
                </Card>
              ))
            : "No News To Read"}
        </div>
        <div>
          <PopularNews />
        </div>
      </div>
    </div>
  );
};

export default RecentNews;
