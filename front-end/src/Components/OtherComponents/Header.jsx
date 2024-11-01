import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import "./Header.css"

function Header() {
  const path = useLocation().pathname;
  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white no-underline"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-700 via-indigo-400 to-indigo-700 rounded-lg text-white">
          SVD
        </span>
        Blogs
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>
      <Button className=" lg:hidden" color="gray" pill>
        <AiOutlineSearch className="w-4 h-4" />
      </Button>
      <div className="flex gap-2 md:order-2">
        <Button className=" hidden sm:inline" color="gray" pill>
          <FaMoon />
        </Button>
        <Link to="/sign-in">
          <Button className="bg-gradient-to-r from-indigo-900 via-indigo-600 to-indigo-900 text-white">
            Sign In
          </Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="">
        
          <Navbar.Link active={path === "/"} as={"div"}>
            <Link className="nlink" to="/">Home</Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/about"} as={"div"}>
            <Link className="nlink" to="/about">About</Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/projects"} as={"div"}>
            <Link className="nlink" to="/projects">Projects</Link>
          </Navbar.Link>
     
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
