import React, { useState } from "react";
import { Button, Navbar, TextInput } from "flowbite-react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import HeadLine from "./HeadLine";
const Header = () => {
  const backend_url = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  const [searchTerm, setSearchTerm] = useState("");

  // State to manage dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropDown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm) {
      return;
    }
    navigate("/search-page", { state: { searchTerm } });
  };

  return (
    <>
      <Navbar fluid className="sticky top-0 z-30 px-3 border-b border-gray-300 lg:py-5 md:py-5">
        <Link to="/">
          News
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-2 rounded-lg text-white font-semibold">
            Nacter
          </span>
        </Link>
        <div>
          <form
            className="flex justify-between items-center relative"
            onSubmit={handleSearch}
          >
            <TextInput
              placeholder="Type to search..."
              className="md:w-60"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button
              className="absolute right-0 p-[5px]"
              gradientDuoTone="purpleToPink"
              type="submit"
            >
              <FaSearch />
            </Button>
          </form>
        </div>

        <Navbar.Toggle className="lg:hidden" />
        <Navbar.Collapse>
          <Navbar.Link active={pathname === "/"} as={"div"}>
            <Link to="/">Home</Link>
          </Navbar.Link>
          <Navbar.Link active={pathname === "/about"} as={"div"}>
            <Link to="/about">About us</Link>
          </Navbar.Link>
          <div className="relative">
            <div
              className="ml-3 text-[16px] text-gray-700 py-3 cursor-pointer flex items-center gap-1 md:p-0 md:m-0 md:text-[14px]"
              onClick={handleDropDown}
            >
              Genre
              <span>
                <RiArrowDropDownLine size="22px" className="mt-1" />
              </span>
            </div>
            {isDropdownOpen && (
              <div className="border-gray-500 bg-white rounded border p-4 absolute top-[55px] left-3 w-[200px] shadow-sm md:top-[45px] md:left-[-60px] z-20">
                <div className="flex flex-col gap-4">
                  <Link
                    to="/news/politics"
                    className="p-1 hover:text-teal-500 hover:ml-2 transition-all duration-500"
                  >
                    Politics
                  </Link>
                  <Link
                    to="/news/business"
                    className="p-1 hover:text-teal-500 hover:ml-2 transition-all duration-500"
                  >
                    Business
                  </Link>
                  <Link
                    to="/news/technology"
                    className="p-1 hover:text-teal-500 hover:ml-2 transition-all duration-500"
                  >
                    Technology
                  </Link>
                  <Link
                    to="/news/sports"
                    className="p-1 hover:text-teal-500 hover:ml-2 transition-all duration-500"
                  >
                    Sports
                  </Link>
                  <Link
                    to="/news/entertainment"
                    className="p-1 hover:text-teal-500 hover:ml-2 transition-all duration-500"
                  >
                    Entertainment
                  </Link>
                  <Link
                    to="/news/health"
                    className="p-1 hover:text-teal-500 hover:ml-2 transition-all duration-500"
                  >
                    Health
                  </Link>
                  <Link
                    to="/news/science"
                    className="p-1 hover:text-teal-500 hover:ml-2 transition-all duration-500"
                  >
                    Science
                  </Link>
                  <Link
                    to="/news/lifestyle"
                    className="p-1 hover:text-teal-500 hover:ml-2 transition-all duration-500"
                  >
                    Lifestyle
                  </Link>
                  <Link
                    to="/news/education"
                    className="p-1 hover:text-teal-500 hover:ml-2 transition-all duration-500"
                  >
                    Education
                  </Link>
                  <Link
                    to="/news/environment"
                    className="p-1 hover:text-teal-500 hover:ml-2 transition-all duration-500"
                  >
                    Environment
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Navbar.Link active={pathname === "/contact"} as={"div"}>
            <Link to="/contact">Contact us</Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      <HeadLine/>
    </>
  );
};

export default Header;
