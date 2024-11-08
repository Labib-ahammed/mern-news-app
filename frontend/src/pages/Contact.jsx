import React from "react";
import { Helmet } from "react-helmet";
const Contact = () => {
  return (
    <div className="container mx-auto p-6">
      <Helmet>
        <title>Contact - NewsNacter</title>
        <meta
          name="description"
          content="We'd love to hear from you! Whether you have questions, feedback, or
          just want to say hello, feel free to reach out to us."
        />
        <meta name="keywords" content="news, latest news, breaking news, headlines, current events, world news, local news, national news, international news, politics, economy, sports, entertainment, technology, health, environment, science, business, education, lifestyle" />
      </Helmet>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-700 mb-4">
          We'd love to hear from you! Whether you have questions, feedback, or
          just want to say hello, feel free to reach out to us.
        </p>
        <div>
          Email:
          <a
            href="mailto:contact@newsnacter.com"
            className="text-blue-500 hover:underline"
          >
            {" "}
            contact@newsnacter.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
