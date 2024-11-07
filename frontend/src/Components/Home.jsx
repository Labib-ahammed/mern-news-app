import React from "react";
import NewsSlider from "./NewsSlider";
import RecentNews from "./RecentNews";
import TopCategoryNews from "./TopCategoryNews";

const Home = () => {
  return (
    <main>
      <NewsSlider />
      <RecentNews />
      <TopCategoryNews />
    </main>
  );
};

export default Home;
