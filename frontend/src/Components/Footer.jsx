import { Footer } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitterX } from "react-icons/bs";

const items = [
  {
    name: "Facebook",
    link: "https://www.facebook.com/profile.php?id=61552721692137&mibextid=kFxxJD",
    _id: 1,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/grandlineadventurer?igsh=MTE0MHNiMGJtZXUyYw==",
    _id: 2,
  },
  {
    name: "X",
    link: "https://www.x.com/",
    _id: 3,
  },
];

const FooterComp = () => {
  return (
    <Footer container className="botder border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5 mb-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg">
                News
              </span>
              Nacter
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm: mt-4 sm:grid-cols-2 sm:gap-6">
            <div>
              <Footer.Title title="FOLLOW" />
              <Footer.LinkGroup col>
                {items.map((item) => (
                  <Footer.Link
                    key={item.id}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.name}
                  </Footer.Link>
                ))}
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="legal" />
              <Footer.LinkGroup col>
                <Footer.Link>
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright by="NewsNacter - Labib Ahammed" year={new Date().getFullYear()} />

          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon
              href={items[0].link}
              icon={BsFacebook}
            />
            <Footer.Icon
              href={items[1].link}
              icon={BsInstagram}
            />
            <Footer.Icon
              href={items[2].link}
              icon={BsTwitterX}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterComp;
