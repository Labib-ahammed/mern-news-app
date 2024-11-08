import React from "react";
import NewsSlider from "./NewsSlider";
import RecentNews from "./RecentNews";
import TopCategoryNews from "./TopCategoryNews";
import { Helmet } from "react-helmet";
const Home = () => {
  return (
    <main>
      <Helmet>
        <title>Home - NewsNacter</title>
        <meta
          name="description"
          content="Stay informed with the latest news from around the globe. OUr comperhensive coverage includes breaking news, in-depth analysis, and expert opinions on politics, technology, health, and more. Join us for real-time updates and insightful articles that keep you connected to the world."
        />
        <meta
          name="keywords"
          content="news, latest news, breaking news, headlines, current events, world news, local news, national news, international news, politics, economy, sports, entertainment, technology, health, environment, science, business, education, lifestyle"
        />
      </Helmet>
      <NewsSlider />
      <RecentNews />
      <TopCategoryNews />
    </main>
  );
};

export default Home;
