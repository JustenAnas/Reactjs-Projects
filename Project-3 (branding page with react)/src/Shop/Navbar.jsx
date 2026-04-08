import { Link } from "react-router-dom";
import Button from "../Components/Button";
import "remixicon/fonts/remixicon.css";
import { useState } from "react";

const Navbar = ({ setCategory }) => {
  const [search, setSearch] = useState("");

  const submitHandler = (e) => {
    setCategory(search)
    setSearch("")
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      submitHandler();
    }
  };
  return (
    <div className="flex items-center justify-between px-20 py-4 bg-white shadow-md">
      {/* Logo */}
      <Link to="/">
        <img src="./brand_logo.png" alt="" />
      </Link>

      {/* Links */}
      <div>
        <ul className="flex gap-6 font-semibold text-lg">
          <li>
            <Link
              to="#"
              onClick={(e) => {
                e.preventDefault();
                setCategory("Men");
              }}
              className="hover:text-blue-600"
            >
              Men's
            </Link>
          </li>
          <li>
            <Link
              to="#"
              onClick={(e) => {
                e.preventDefault();
                setCategory("Women");
              }}
              className="hover:text-blue-600"
            >
              Women's
            </Link>
          </li>
          <li>
            <Link
              to="#"
              onClick={(e) => {
                e.preventDefault();
                setCategory("Children");
              }}
              className="hover:text-blue-600"
            >
              Children
            </Link>
          </li>
          <li>
            <Link
              to="#"
              onClick={(e) => {
                e.preventDefault();
                setCategory("Sports");
              }}
              className="hover:text-blue-600"
            >
              Sports
            </Link>
          </li>
        </ul>
      </div>

      {/* Search + Button */}
      <div className="flex items-center gap-4">
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyDown}
            className=" pl-2 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-400 w-full"
          />
          <i
           onClick={submitHandler}
            className="ri-search-line absolute right-3 text-gray-400 text-lg cursor-pointer"
          ></i>
        </div>
        <Button />
      </div>
    </div>
  );
};

export default Navbar;
