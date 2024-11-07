import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentSection from "../Components/CommentSection";

const NewsPage = () => {
  const backend_url = import.meta.env.VITE_BACKEND_URL;

  const { slug } = useParams();

  const [news, setNews] = useState([]);
  const [postId, setPostId] = useState("");

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(`${backend_url}/news/getnews?slug=${slug}`);
        if (!res.ok) {
          console.log("response error", res.status, res.statusText);
        }
        const data = await res.json();
        setNews(data);
        setPostId(data[0]._id);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchNews();
  }, [slug]);
  return (
    <main className="min-h-screen mb-20">
      {news.map((newsItem) => (
        <div
          className="container mx-auto p-5 bg-white shadow-lg rounded-lg my-5"
          key={newsItem._id}
        >
          <div className="flex flex-col items-center">
            <img
              src={newsItem.imgUrl}
              alt={newsItem.title}
              className="rounded-md w-full h-auto object-contain lg:h-96 lg:object-cover mb-4 lg:w-[800px]"
            />
            <h1 className="text-2xl font-bold text-gray-800 my-4">
              {newsItem.title}
            </h1>
          </div>
          <div className="text-gray-700">
            <div
              dangerouslySetInnerHTML={{ __html: newsItem.description }}
              className="prose prose-sm"
            ></div>
          </div>
        </div>
      ))}
      <CommentSection postId={postId}/>
    </main>
  );
};

export default NewsPage;