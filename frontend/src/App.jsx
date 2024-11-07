import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import SearchPage from "./pages/SearchPage";
import NewsPage from "./pages/NewsPage";
import Education from "./pages/categoryPages/Education";
import Share from "./Components/Share";
import Politics from "./pages/categoryPages/Politics";
import Business from "./pages/categoryPages/Business";
import Technology from "./pages/categoryPages/Technology";
import Sports from "./pages/categoryPages/Sports";
import Entertainment from "./pages/categoryPages/Entertainment";
import Health from "./pages/categoryPages/Health";
import Science from "./pages/categoryPages/Science";
import LifeStyle from "./pages/categoryPages/LifeStyle";
import Environment from "./pages/categoryPages/Environment";
import PrivacyPolicy from "./pages/Privacy";
const App = () => {
  return (
    <div className="min-h-screen no-scrollbar">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/search-page" element={<SearchPage />} />
        <Route path="/news/:slug" element={<NewsPage />} />
        <Route path="/news/politics" element={<Politics />} />

        <Route path="/news/business" element={<Business />} />

        <Route path="/news/technology" element={<Technology />} />

        <Route path="/news/sports" element={<Sports />} />

        <Route path="/news/entertainment" element={<Entertainment />} />

        <Route path="/news/health" element={<Health />} />

        <Route path="/news/science" element={<Science />} />

        <Route path="/news/lifestyle" element={<LifeStyle />} />

        <Route path="/news/education" element={<Education />} />

        <Route path="/news/environment" element={<Environment />} />
      </Routes>
      <Share />
      <Footer />
    </div>
  );
};

export default App;
