import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const NewsSlider = () => {
  const backend_url = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();

  const [newsSlider, setNewsSlider] = useState([]);
  const [slide, setSlide] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);
  const autoSlideInterval = 3000;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(`${backend_url}/news/getnews?order=desc`);
        if (!res.ok) {
          console.log(res.status, res.message);
          return;
        }
        const data = await res.json();
        setNewsSlider(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchNews();
  }, []);

  const nextSlide = () => {
    setSlide((slide) => (slide === newsSlider.length - 1 ? 0 : slide + 1));
  };
  const prevSlide = () => {
    setSlide((slide) => (slide === 0 ? newsSlider.length - 1 : slide - 1));
  };

  useEffect(() => {
    if (autoSlide) {
      const slideInterval = setInterval(nextSlide, autoSlideInterval);
      return () => clearInterval(slideInterval);
    }
  }, [nextSlide]);

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
    <div className="flex justify-center items-center">
      {newsSlider && newsSlider.length > 0 && (
        <div className="flex justify-center items-center w-[800px] h-[400px] relative p-6">
          <BsArrowLeftCircleFill
            className="absolute w-8 z-10 h-8 text-gray-300 left-7 hover:cursor-pointer drop-shadow-md sm:left-7"
            onClick={prevSlide}
          />
          {newsSlider.map((item, idx) => {
            return (
              <div
                className={
                  slide === idx
                    ? "rounded-lg shadow-md w-full h-full relative"
                    : "hidden"
                }
                key={item._id}
              >
                <p
                  onClick={() => handlePostClick(item._id, item.slug)}
                  className={
                    slide === idx
                      ? "rounded-lg shadow-md w-full h-full cursor-pointer"
                      : "hidden"
                  }
                >
                  <img
                    src={item.imgUrl}
                    alt={idx.slug}
                    className={
                      slide === idx
                        ? "rounded-lg shadow-md w-full h-full"
                        : "hidden"
                    }
                  />
                </p>
                <p onClick={() => handlePostClick(item._id, item.slug)} className="cursor-pointer">
                  <h3 className="absolute bottom-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-fit  bg-custom-black text-white p-3 rounded-md font-medium">
                    {item.title.charAt(0).toUpperCase() + item.title.slice(1)}
                  </h3>
                </p>
              </div>
            );
          })}
          <BsArrowRightCircleFill
            className="absolute w-8 h-8 text-gray-300 right-7 hover:cursor-pointer drop-shadow-md sm:right-7"
            onClick={nextSlide}
          />
          <span className="flex absolute bottom-7">
            {newsSlider.map((_, idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => setSlide(idx)}
                  className={
                    slide === idx
                      ? "bg-white h-2 w-2 rounded-full border-none outline-none shadow-md m-1 cursor-pointer"
                      : "h-2 w-2 rounded-full border-none outline-none shadow-md m-1 cursor-pointer bg-gray-500"
                  }
                ></button>
              );
            })}
          </span>
        </div>
      )}
    </div>
  );
};

export default NewsSlider;
