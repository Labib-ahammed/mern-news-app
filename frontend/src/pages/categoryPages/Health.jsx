import { Pagination, Card } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // Make sure Link is imported
import { Helmet } from "react-helmet";
const Health = () => {
  const backend_url = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();
  const [health, setHealth] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // Adjust this number as needed

  // Calculate current news items for display
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = searchResults.slice(indexOfFirstItem, indexOfLastItem);

  // Change page handler
  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const fetchEducation = async () => {
      try {
        const response = await fetch(
          `${backend_url}/news/getnews?category=health&limit=10000`
        );
        const data = await response.json();
        setHealth(data);
        setSearchResults(data); // Set search results to fetched education data
      } catch (error) {
        console.error(error);
      }
    };
    fetchEducation();
  }, [backend_url]);

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
    <div>
      <Helmet>
        <title>Health - NewsNacter</title>
        <meta
          name="description"
          content="Explore health news, wellness tips, and medical insights."
        />
        <meta name="keywords" content="news, latest news, breaking news, headlines, current events, world news, local news, national news, international news, politics, economy, sports, entertainment, technology, health, environment, science, business, education, lifestyle" />
      </Helmet>
      <h1 className="text-center my-5 text-2xl font-medium">Health</h1>
      {/* Render search results */}
      <div className="p-4 md:flex md:flex-wrap md:gap-4 lg:justify-center">
        {currentItems.length === 0 ? (
          <p className="text-center font-semibold">No news to show</p>
        ) : (
          currentItems.map((result) => (
            <Card
              key={result._id}
              className="mb-4 rounded-lg shadow-lg shadow-gray-400 md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]" // Adjust width for md and lg
            >
              <h2 className="text-xl font-medium md:text-[18px]">
                <p
                  onClick={() => handlePostClick(result._id, result.slug)}
                  className="cursor-pointer"
                >
                  {result.title.substring(0, 38)}{" "}
                  {result.title.length > 38 ? "..." : ""}
                </p>
              </h2>
              <div className="flex justify-between items-center text-gray-400">
                <p className="md:text-xs">By {result.author}</p>
                <Link
                  className="bg-gradient-to-r from-purple-500 to-pink-500 p-[5px] rounded text-white font-semibold md:text-[14px]"
                  to={`/news/${result.category}`}
                >
                  {result.category}
                </Link>
              </div>
              <p className="text-xs md:text-[10px]">
                Published:{" "}
                {new Date(result.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </Card>
          ))
        )}
      </div>
      {/* Pagination Component */}
      {searchResults.length > 0 && (
        <div className="flex justify-center mt-4">
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(searchResults.length / itemsPerPage)}
            onPageChange={onPageChange}
            showIcons
          />
        </div>
      )}
    </div>
  );
};

export default Health;
