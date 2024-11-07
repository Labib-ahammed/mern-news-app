import React from "react";

const About = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-gray-700 mb-4">
          Welcome to NewsNacter! We are dedicated to providing you with
          the latest news from around the world, all for free and without the
          need for sign-in or sign-up.
        </p>
        <p className="text-gray-700 mb-4">
          Our mission is to make news accessible to everyone, ensuring that you
          stay informed about the events that matter most. We cover a wide range
          of topics, including politics, technology, entertainment, sports, and
          more.
        </p>
        <p className="text-gray-700 mb-4">
          Thank you for visiting our site. We hope you find our content
          informative and engaging. If you have any questions or feedback, feel
          free to reach out to us.
        </p>
      </div>
    </div>
  );
};

export default About;
