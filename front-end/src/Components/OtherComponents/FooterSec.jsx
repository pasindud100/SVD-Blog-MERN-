import { Footer } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import {BsFacebook, BsGithub, BsInstagram, BsTwitter} from "react-icons/bs";

function FooterSec() {
  return (
    <Footer container className="border-t-4 border-b-2 border-blue-400">
      <div className=" w-full max-w-7xl mx-auto ">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className=" mt-4">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white no-underline"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-700 via-indigo-400 to-indigo-700 rounded-lg text-white">
                SVD
              </span>
              Blogs
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6  ">
            <div>
              <Footer.Title title="About" className="pl-8"/>
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.100jsprojects.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  100 js projects
                </Footer.Link>
                <Footer.Link
                  href="https://www.react.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SVD blogs
                </Footer.Link>
                <Footer.Link
                  href="https://www.w3school.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Funny blogs
                </Footer.Link>
              </Footer.LinkGroup>
            </div>

            <div>
              <Footer.Title title="Follow us" className="pl-8"/>
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.github.com/pasindud100"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Footer.Link>
                <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
                  Facebook
                </Footer.Link>
                <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
                  Twitter
                </Footer.Link>
              </Footer.LinkGroup>
            </div>

            <div>
              <Footer.Title title="Legal" className="pl-8" />
              <Footer.LinkGroup col className="text-black">
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider/><hr/>
        <div className=" justify-center text-center">
            <Footer.Copyright href="#" by="SVD's blogs" year={new Date().getFullYear()}/>
            <div className=" flex mt-3 sm:mt-5 gap-6 justify-center">
                <Footer.Icon href="#" icon={BsFacebook} />
                <Footer.Icon href="#" icon={BsGithub} />
                <Footer.Icon href="#" icon={BsTwitter} />
                <Footer.Icon href="#" icon={BsInstagram} />
            </div>
        </div>
      </div>
    </Footer>
  );
}

export default FooterSec;
