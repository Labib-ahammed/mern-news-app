import React, { useState, useEffect } from "react";
import { Card } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import HrTag from "./HrTag";

const PopularNews = () => {
  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPopularNews = async () => {
      try {
        const res = await fetch(`https://newsnacterbackend.vercel.app/api/v1/news/getnews?type=popular`);
        if (!res.ok) {
          console.log("response is not ok while fetching popular posts");
        }
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchPopularNews();
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
    <div className="mt-6 max-h-96 overflow-y-scroll p-2 no-scrollbar border border-gray-800 rounded-md lg:w-[500px] md:mt-0">
      <h2 className="text-center text-2xl font-bold bg-gradient-to-r from-pink-700 to-purple-800 text-transparent bg-clip-text mx-auto w-40 ">
        Popular News
      </h2>
      {/* hrtag */}
      <HrTag />
      {posts.length > 0
        ? posts.map((post) => (
            <Card key={post._id} className="my-8 shadow-md shadow-gray-300">
              <div>
                <h3
                  className="cursor-pointer font-semibold"
                  onClick={() => handlePostClick(post._id, post.slug)}
                >
                  {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
                </h3>
                <div className="text-xs text-gray-600 flex justify-between mt-2">
                  <p>{post.author}</p>
                  <p className="text-gray-400 sm:hidden">
                    {new Date(post.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </Card>
          ))
        : "No Popular Post Available"}
    </div>
  );
};

export default PopularNews;
