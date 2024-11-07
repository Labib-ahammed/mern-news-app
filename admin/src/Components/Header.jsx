import React from "react";
import { Navbar } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
const Header = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <Navbar className="flex justify-between items-center p-3 border-b-2 border-gray-300">
      <Link to="/" className="text-2xl font-bold">
        NewsNectar
      </Link>
      <div className="flex gap-4 justify-between items-center list-none font-semibold">
        <Navbar.Link active={pathname === "/create"} as={"div"}>
          <Link to="/create">POST</Link>
        </Navbar.Link>

        <Navbar.Link active={pathname === "/manage"} as={"div"}>
          <Link to="/manage">MANAGE</Link>
        </Navbar.Link>
      </div>
    </Navbar>
  );
};

export default Header;
