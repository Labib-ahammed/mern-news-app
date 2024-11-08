import { Card } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const TopCategoryNews = () => {
  const navigate = useNavigate();
  const [politics, setPolitics] = useState([]);
  const [business, setBusiness] = useState([]);
  const [technology, setTechnology] = useState([]);
  const [sports, setSports] = useState([]);
  const [entertainment, setEntertainment] = useState([]);
  const [health, setHealth] = useState([]);
  const [science, setScience] = useState([]);
  const [lifeStyle, setLifeStyle] = useState([]);
  const [education, setEducation] = useState([]);
  const [environment, setEnvironment] = useState([]);

  // Fetching data from backend API
  // politics
  useEffect(() => {
    const fetchPolitics = async () => {
      try {
        const res = await fetch(
          `https://newsnacterbackend.vercel.app/api/v1/news/getnews?limit=3&category=politics`
        );
        if (!res.ok) {
          console.log("Error while fetching politics news");
        }
        const data = await res.json();
        setPolitics(data);
        console.log(politics);
      } catch (error) {
        console.error("Error while fetching politics news", error);
      }
    };
    const fetchBusiness = async () => {
      try {
        const res = await fetch(
          `https://newsnacterbackend.vercel.app/api/v1/news/getnews?limit=3&category=business`
        );
        if (!res.ok) {
          console.log("Error while fetching business news");
        }
        const data = await res.json();
        setBusiness(data);
      } catch (error) {
        console.error("Error while fetching politics news", error);
      }
    };
    const fetchTechnology = async () => {
      try {
        const res = await fetch(
          `https://newsnacterbackend.vercel.app/api/v1/news/getnews?limit=3&category=technology`
        );
        if (!res.ok) {
          console.log("Error while fetching technology news");
        }
        const data = await res.json();
        setTechnology(data);
      } catch (error) {
        console.error("Error while fetching politics news", error);
      }
    };
    const fetchSports = async () => {
      try {
        const res = await fetch(
          `https://newsnacterbackend.vercel.app/api/v1/news/getnews?limit=3&category=sports`
        );
        if (!res.ok) {
          console.log("Error while fetching sports news");
        }
        const data = await res.json();
        setSports(data);
      } catch (error) {
        console.error("Error while fetching politics news", error);
      }
    };
    const fetchEntertainment = async () => {
      try {
        const res = await fetch(
          `https://newsnacterbackend.vercel.app/api/v1/news/getnews?limit=3&category=entertainment`
        );
        if (!res.ok) {
          console.log("Error while fetching sports news");
        }
        const data = await res.json();
        setEntertainment(data);
      } catch (error) {
        console.error("Error while fetching entertainment news", error);
      }
    };
    const fetchHealth = async () => {
      try {
        const res = await fetch(
          `https://newsnacterbackend.vercel.app/api/v1/news/getnews?limit=3&category=health`
        );
        if (!res.ok) {
          console.log("Error while fetching health news");
        }
        const data = await res.json();
        setHealth(data);
      } catch (error) {
        console.error("Error while fetching health news", error);
      }
    };
    const fetchScience = async () => {
      try {
        const res = await fetch(
          `https://newsnacterbackend.vercel.app/api/v1/news/getnews?limit=3&category=science`
        );
        if (!res.ok) {
          console.log("Error while fetching science news");
        }
        const data = await res.json();
        setScience(data);
      } catch (error) {
        console.error("Error while fetching science news", error);
      }
    };
    const fetchLifeStyle = async () => {
      try {
        const res = await fetch(
          `https://newsnacterbackend.vercel.app/api/v1/news/getnews?limit=3&category=lifestyle`
        );
        if (!res.ok) {
          console.log("Error while fetching lifestyle news");
        }
        const data = await res.json();
        setLifeStyle(data);
      } catch (error) {
        console.error("Error while fetching lifestyle news", error);
      }
    };
    const fetchEducation = async () => {
      try {
        const res = await fetch(
          `https://newsnacterbackend.vercel.app/api/v1/news/getnews?limit=3&category=education`
        );
        if (!res.ok) {
          console.log("Error while fetching education news");
        }
        const data = await res.json();
        setEducation(data);
      } catch (error) {
        console.error("Error while fetching education news", error);
      }
    };
    const fetchEnvironment = async () => {
      try {
        const res = await fetch(
          `https://newsnacterbackend.vercel.app/api/v1/news/getnews?limit=3&category=environment`
        );
        if (!res.ok) {
          console.log("Error while fetching environment news");
        }
        const data = await res.json();
        setEnvironment(data);
      } catch (error) {
        console.error("Error while fetching environment news", error);
      }
    };
    fetchPolitics();
    fetchBusiness();
    fetchTechnology();
    fetchSports();
    fetchEntertainment();
    fetchHealth();
    fetchScience();
    fetchLifeStyle();
    fetchEducation();
    fetchEnvironment();
  }, []);

  const handlePostClick = async (postId, slug) => {
    try {
      const res = await fetch(
        `https://newsnacterbackend.vercel.app/api/v1/news/view/${postId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!res.ok) {
        console.log("response error", res.status, res.statusText);
      }
      navigate(`/news/${slug}`);
    } catch (error) {
      console.log("response error", error);
    }
  };
  return (
    <>
      <section className="p-3">
        <div className="mb-8 mt-4">
          <Link
            to={`/news/politics`}
            className="text-2xl font-semibold text-purple-950"
          >
            Politics
          </Link>
          <hr className="border-1 border-gray-700 w-[86px] mt-1 rounded-full mb-10" />
          <div className="flex flex-wrap justify-center gap-8">
            {politics.length > 0
              ? politics.map((item) => (
                  <Card
                    className="max-w-sm"
                    imgAlt={item.title}
                    imgSrc={item.imgUrl}
                  >
                    <p
                      onClick={() => handlePostClick(item._id, item.slug)}
                      className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white cursor-pointer"
                    >
                      {item.title.charAt(0).toUpperCase() +
                        item.title.slice(1, 30)}{" "}
                      {item.title.length > 25 ? "..." : ""}
                    </p>
                    <p
                      dangerouslySetInnerHTML={{
                        __html:
                          item.description.length > 40
                            ? item.description.substring(0, 40) + "..."
                            : item.description,
                      }}
                      className="font-normal text-gray-700 dark:text-gray-400"
                    ></p>
                    <p className="text-gray-400 sm:hidden">
                      {new Date(item.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </Card>
                ))
              : "No news available"}
          </div>
        </div>
        <div className="mb-8 mt-4">
          <Link
            to={`/news/business`}
            className="text-2xl font-semibold text-purple-950"
          >
            Business
          </Link>
          <hr className="border-1 border-gray-700 w-[94px] mt-1 rounded-full mb-10" />
          <div className="flex flex-wrap justify-center gap-8">
            {business.length > 0
              ? business.map((item) => (
                  <Card
                    className="max-w-sm"
                    imgAlt={item.title}
                    imgSrc={item.imgUrl}
                  >
                    <p
                      onClick={() => handlePostClick(item._id, item.slug)}
                      className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white cursor-pointer"
                    >
                      {item.title.charAt(0).toUpperCase() +
                        item.title.slice(1, 30)}{" "}
                      {item.title.length > 25 ? "..." : ""}
                    </p>
                    <p
                      dangerouslySetInnerHTML={{
                        __html:
                          item.description.length > 40
                            ? item.description.substring(0, 40) + "..."
                            : item.description,
                      }}
                      className="font-normal text-gray-700 dark:text-gray-400"
                    ></p>
                    <p className="text-gray-400 sm:hidden">
                      {new Date(item.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </Card>
                ))
              : "No news available"}
          </div>
        </div>
        <div className="mb-8 mt-4">
          <Link
            to={`/news/technology`}
            className="text-2xl font-semibold text-purple-950"
          >
            Technology
          </Link>
          <hr className="border-1 border-gray-700 w-[130px] mt-1 rounded-full mb-10" />
          <div className="flex flex-wrap justify-center gap-8">
            {technology.length > 0
              ? technology.map((item) => (
                  <Card
                    className="max-w-sm"
                    imgAlt={item.title}
                    imgSrc={item.imgUrl}
                  >
                    <p
                      onClick={() => handlePostClick(item._id, item.slug)}
                      className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white cursor-pointer"
                    >
                      {item.title.charAt(0).toUpperCase() +
                        item.title.slice(1, 30)}{" "}
                      {item.title.length > 25 ? "..." : ""}
                    </p>
                    <p
                      dangerouslySetInnerHTML={{
                        __html:
                          item.description.length > 40
                            ? item.description.substring(0, 40) + "..."
                            : item.description,
                      }}
                      className="font-normal text-gray-700 dark:text-gray-400"
                    ></p>
                    <p className="text-gray-400 sm:hidden">
                      {new Date(item.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </Card>
                ))
              : "No news available"}
          </div>
        </div>
        <div className="mb-8 mt-4">
          <Link
            to={`/news/sports`}
            className="text-2xl font-semibold text-purple-950"
          >
            Sports
          </Link>
          <hr className="border-1 border-gray-700 w-[82px] mt-1 rounded-full mb-10" />
          <div className="flex flex-wrap justify-center gap-8">
            {sports.length > 0
              ? sports.map((item) => (
                  <Card
                    className="max-w-sm"
                    imgAlt={item.title}
                    imgSrc={item.imgUrl}
                  >
                    <p
                      onClick={() => handlePostClick(item._id, item.slug)}
                      className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white cursor-pointer"
                    >
                      {item.title.charAt(0).toUpperCase() +
                        item.title.slice(1, 30)}{" "}
                      {item.title.length > 25 ? "..." : ""}
                    </p>
                    <p
                      dangerouslySetInnerHTML={{
                        __html:
                          item.description.length > 40
                            ? item.description.substring(0, 40) + "..."
                            : item.description,
                      }}
                      className="font-normal text-gray-700 dark:text-gray-400"
                    ></p>
                    <p className="text-gray-400 sm:hidden">
                      {new Date(item.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </Card>
                ))
              : "No news available"}
          </div>
        </div>
        <div className="mb-8 mt-4">
          <Link
            to={`/news/entertainment`}
            className="text-2xl font-semibold text-purple-950"
          >
            Entertainment
          </Link>
          <hr className="border-1 border-gray-700 w-[82px] mt-1 rounded-full mb-10" />
          <div className="flex flex-wrap justify-center gap-8">
            {entertainment.length > 0
              ? entertainment.map((item) => (
                  <Card
                    className="max-w-sm"
                    imgAlt={item.title}
                    imgSrc={item.imgUrl}
                  >
                    <p
                      onClick={() => handlePostClick(item._id, item.slug)}
                      className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white cursor-pointer"
                    >
                      {item.title.charAt(0).toUpperCase() +
                        item.title.slice(1, 30)}{" "}
                      {item.title.length > 25 ? "..." : ""}
                    </p>
                    <p
                      dangerouslySetInnerHTML={{
                        __html:
                          item.description.length > 40
                            ? item.description.substring(0, 40) + "..."
                            : item.description,
                      }}
                      className="font-normal text-gray-700 dark:text-gray-400"
                    ></p>
                    <p className="text-gray-400 sm:hidden">
                      {new Date(item.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </Card>
                ))
              : "No news available"}
          </div>
        </div>
        <div className="mb-8 mt-4">
          <Link
            to={`/news/health`}
            className="text-2xl font-semibold text-purple-950"
          >
            Health
          </Link>
          <hr className="border-1 border-gray-700 w-[82px] mt-1 rounded-full mb-10" />
          <div className="flex flex-wrap justify-center gap-8">
            {health.length > 0
              ? health.map((item) => (
                  <Card
                    className="max-w-sm"
                    imgAlt={item.title}
                    imgSrc={item.imgUrl}
                  >
                    <p
                      onClick={() => handlePostClick(item._id, item.slug)}
                      className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white cursor-pointer"
                    >
                      {item.title.charAt(0).toUpperCase() +
                        item.title.slice(1, 30)}{" "}
                      {item.title.length > 25 ? "..." : ""}
                    </p>
                    <p
                      dangerouslySetInnerHTML={{
                        __html:
                          item.description.length > 40
                            ? item.description.substring(0, 40) + "..."
                            : item.description,
                      }}
                      className="font-normal text-gray-700 dark:text-gray-400"
                    ></p>
                    <p className="text-gray-400 sm:hidden">
                      {new Date(item.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </Card>
                ))
              : "No news available"}
          </div>
        </div>
        <div className="mb-8 mt-4">
          <Link
            to={`/news/science`}
            className="text-2xl font-semibold text-purple-950"
          >
            Science
          </Link>
          <hr className="border-1 border-gray-700 w-[82px] mt-1 rounded-full mb-10" />
          <div className="flex flex-wrap justify-center gap-8">
            {science.length > 0
              ? science.map((item) => (
                  <Card
                    className="max-w-sm"
                    imgAlt={item.title}
                    imgSrc={item.imgUrl}
                  >
                    <p
                      onClick={() => handlePostClick(item._id, item.slug)}
                      className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white cursor-pointer"
                    >
                      {item.title.charAt(0).toUpperCase() +
                        item.title.slice(1, 30)}{" "}
                      {item.title.length > 25 ? "..." : ""}
                    </p>
                    <p
                      dangerouslySetInnerHTML={{
                        __html:
                          item.description.length > 40
                            ? item.description.substring(0, 40) + "..."
                            : item.description,
                      }}
                      className="font-normal text-gray-700 dark:text-gray-400"
                    ></p>
                    <p className="text-gray-400 sm:hidden">
                      {new Date(item.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </Card>
                ))
              : "No news available"}
          </div>
        </div>
        <div className="mb-8 mt-4">
          <Link
            to={`/news/lifestyle`}
            className="text-2xl font-semibold text-purple-950"
          >
            Lifestyle
          </Link>
          <hr className="border-1 border-gray-700 w-[82px] mt-1 rounded-full mb-10" />
          <div className="flex flex-wrap justify-center gap-8">
            {lifeStyle.length > 0
              ? lifeStyle.map((item) => (
                  <Card
                    className="max-w-sm"
                    imgAlt={item.title}
                    imgSrc={item.imgUrl}
                  >
                    <p
                      onClick={() => handlePostClick(item._id, item.slug)}
                      className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white cursor-pointer"
                    >
                      {item.title.charAt(0).toUpperCase() +
                        item.title.slice(1, 30)}{" "}
                      {item.title.length > 25 ? "..." : ""}
                    </p>
                    <p
                      dangerouslySetInnerHTML={{
                        __html:
                          item.description.length > 40
                            ? item.description.substring(0, 40) + "..."
                            : item.description,
                      }}
                      className="font-normal text-gray-700 dark:text-gray-400"
                    ></p>
                    <p className="text-gray-400 sm:hidden">
                      {new Date(item.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </Card>
                ))
              : "No news available"}
          </div>
        </div>
        <div className="mb-8 mt-4">
          <Link
            to={`/news/education`}
            className="text-2xl font-semibold text-purple-950"
          >
            Education
          </Link>
          <hr className="border-1 border-gray-700 w-[82px] mt-1 rounded-full mb-10" />
          <div className="flex flex-wrap justify-center gap-8">
            {education.length > 0
              ? education.map((item) => (
                  <Card
                    className="max-w-sm"
                    imgAlt={item.title}
                    imgSrc={item.imgUrl}
                  >
                    <p
                      onClick={() => handlePostClick(item._id, item.slug)}
                      className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white cursor-pointer"
                    >
                      {item.title.charAt(0).toUpperCase() +
                        item.title.slice(1, 30)}{" "}
                      {item.title.length > 25 ? "..." : ""}
                    </p>
                    <p
                      dangerouslySetInnerHTML={{
                        __html:
                          item.description.length > 40
                            ? item.description.substring(0, 40) + "..."
                            : item.description,
                      }}
                      className="font-normal text-gray-700 dark:text-gray-400"
                    ></p>
                    <p className="text-gray-400 sm:hidden">
                      {new Date(item.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </Card>
                ))
              : "No news available"}
          </div>
        </div>
        <div className="mb-8 mt-4">
          <Link
            to={`/news/environment`}
            className="text-2xl font-semibold text-purple-950"
          >
            Environment
          </Link>
          <hr className="border-1 border-gray-700 w-[82px] mt-1 rounded-full mb-10" />
          <div className="flex flex-wrap justify-center gap-8">
            {environment.length > 0
              ? environment.map((item) => (
                  <Card
                    className="max-w-sm"
                    imgAlt={item.title}
                    imgSrc={item.imgUrl}
                  >
                    <p
                      onClick={() => handlePostClick(item._id, item.slug)}
                      className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white cursor-pointer"
                    >
                      {item.title.charAt(0).toUpperCase() +
                        item.title.slice(1, 30)}{" "}
                      {item.title.length > 25 ? "..." : ""}
                    </p>
                    <p
                      dangerouslySetInnerHTML={{
                        __html:
                          item.description.length > 40
                            ? item.description.substring(0, 40) + "..."
                            : item.description,
                      }}
                      className="font-normal text-gray-700 dark:text-gray-400"
                    ></p>
                    <p className="text-gray-400 sm:hidden">
                      {new Date(item.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </Card>
                ))
              : "No news available"}
          </div>
        </div>
      </section>
    </>
  );
};

export default TopCategoryNews;
