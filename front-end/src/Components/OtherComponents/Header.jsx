import { Button, Navbar, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Navbar className="border-b-2 flex items-center justify-between">
      {/* Logo */}
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold text-black no-underline dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-700 via-indigo-500 to-indigo-700 text-white rounded-full">
          SVD's
        </span>
        Blogs
      </Link>

      {/* Search function with input field for large screens */}
      <form className="hidden lg:inline-block">
        <TextInput
          type="text"
          placeholder="search blogs..."
          className="text-sm"
        />
      </form>

      {/* Search icon on small screens */}
      <Button className="w-12 h-10 lg:hidden" color="gray" pill>
        <AiOutlineSearch className="w-6 h-6" />
      </Button>

      <div className="flex items-center gap-2 ml-auto">
        {/* Dark mode button for large screens */}
        <Button className="hidden lg:inline" color="gray" pill>
          <FaMoon className="w-4 h-4" />
        </Button>

        {/* Sign In button */}
        <Link to="/sign-in">
          <Button className="bg-gradient-to-r from-indigo-700 via-indigo-500 to-indigo-700 text-white rounded-xl">
            Sign In
          </Button>
        </Link>

        {/* Toggler button only on small screens */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen}>
            <Navbar.Toggle />
          </button>
        </div>
      </div>

      {/* Navbar links collapse only on small screens */}
      <Navbar.Collapse
        className={`lg:flex lg:items-center lg:justify-between ${
          isOpen ? "block" : "hidden"
        } lg:block`}
      >
        <div className="flex flex-col lg:flex-row lg:space-x-4 lg:gap-4 p-4 lg:p-0">
          <Navbar.Link>
            <Link
              to="/"
              className="text-gray-900 dark:text-white no-underline hover:text-indigo-700"
            >
              Home
            </Link>
          </Navbar.Link>
          <Navbar.Link>
            <Link
              to="/about"
              className="text-gray-900 dark:text-white no-underline hover:text-indigo-700"
            >
              About
            </Link>
          </Navbar.Link>
          <Navbar.Link>
            <Link
              to="/projects"
              className="text-gray-900 dark:text-white no-underline hover:text-indigo-700"
            >
              Projects
            </Link>
          </Navbar.Link>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
