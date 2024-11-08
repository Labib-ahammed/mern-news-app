import React from "react";
import { Helmet } from "react-helmet";
const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto p-6">
      <Helmet>
        <title>Privacy Policy - NewsNacter</title>
        <meta
          name="description"
          content="At NewsNacter, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you visit our website."
        />
        <meta name="keywords" content="news, latest news, breaking news, headlines, current events, world news, local news, national news, international news, politics, economy, sports, entertainment, technology, health, environment, science, business, education, lifestyle" />
      </Helmet>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-gray-700 mb-4">
          At NewsNacter, we value your privacy and are committed to protecting
          your personal information. This Privacy Policy outlines how we
          collect, use, and safeguard your data when you visit our website.
        </p>
        <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
        <p className="text-gray-700 mb-4">
          We do not require any sign-in or sign-up, so we do not collect
          personal information such as your name, email address, or phone
          number. However, we may collect non-personal information such as your
          IP address, browser type, and usage data to improve our services.
        </p>
        <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
        <p className="text-gray-700 mb-4">
          The information we collect is used to enhance your experience on our
          website, analyze site usage, and improve our content and services. We
          do not sell, trade, or otherwise transfer your information to outside
          parties.
        </p>
        <h2 className="text-2xl font-bold mb-4">Cookies</h2>
        <p className="text-gray-700 mb-4">
          We may use cookies to understand and save your preferences for future
          visits and compile aggregate data about site traffic and site
          interactions. You can choose to disable cookies through your browser
          settings.
        </p>
        <h2 className="text-2xl font-bold mb-4">Third-Party Links</h2>
        <p className="text-gray-700 mb-4">
          Our website may contain links to third-party sites. These sites have
          separate and independent privacy policies. We have no responsibility
          or liability for the content and activities of these linked sites.
        </p>
        <h2 className="text-2xl font-bold mb-4">
          Changes to Our Privacy Policy
        </h2>
        <p className="text-gray-700 mb-4">
          We may update our Privacy Policy from time to time. Any changes will
          be posted on this page, and the date of the latest update will be
          indicated at the top of the policy.
        </p>
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-700 mb-4">
          If you have any questions or concerns about our Privacy Policy, please
          contact us at{" "}
          <a
            href="mailto:contact@newsnacter.com"
            className="text-blue-500 hover:underline"
          >
            contact@newsnacter.com
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
