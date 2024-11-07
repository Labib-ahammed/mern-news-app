import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { useNavigate } from "react-router-dom";
const HeadLine = () => {
  const navigate = useNavigate();
  const backend_url = import.meta.env.VITE_BACKEND_URL;
  const [headLine, setHeadLine] = useState([]);
  useEffect(() => {
    const fetchHeadLine = async () => {
      try {
        const res = await fetch(`${backend_url}/news/getnews`);

        if (!res.ok) {
          console.log(res.status, res.message);
          return;
        }
        const data = await res.json();
        setHeadLine(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchHeadLine();
  }, []);

  const handlePostClick = async (postId, slug) => {
    try {
      const res = await fetch(`${backend_url}/news/view/${postId}`, {
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
    <div className="flex items-center w-full h-12 text-black px-1 bg-custom-color">
      <div className="p-3 w-36 rounded-r-lg">
        <span className="font-bold text-xs">HEAD LINES</span>
      </div>
      <Marquee>
        {headLine.map((headlines, idx) => (
          <p
            onClick={() => handlePostClick(headlines._id, headlines.slug)}
            key={idx}
            className="pr-20 font-semibold cursor-pointer"
          >
            {headlines.title.charAt(0).toUpperCase() + headlines.title.slice(1)}
          </p>
        ))}
      </Marquee>
    </div>
  );
};

export default HeadLine;
