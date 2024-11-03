import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="mt-20 min-h-screen">
      <div className="flex flex-col md:flex-row p-3 max-w-3xl mx-auto gap-5 md:items-center">
        {/* for left side */}
        <div className="flex-1">
          <Link
            to="/"
            className=" dark:text-white no-underline font-bold text-4xl"
          >
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-700 via-indigo-400 to-indigo-700 rounded-lg text-white">
              SVD
            </span>
            Blogs
          </Link>
          <p className="mt-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
            voluptas nemo laboriosam dolores, omnis possimus ducimus nesciunt
            voluptate ullam necessitatibus obcaecati hic ab enim odio.
          </p>
        </div>

        {/* for right side */}
        <div className="flex-1">
          <form className=" flex flex-col gap-4">
            <div>
              <Label value="Username" />
              <TextInput type="text" placeholder="username" id="username" />
            </div>
            <div>
              <Label value="Email" />
              <TextInput type="text" placeholder="kalana12@gmail.com" id="email" />
            </div>
            <div>
              <Label value="Password" />
              <TextInput type="text" placeholder="password" id="password" />
            </div>
            <Button className=" bg-gradient-to-r from-indigo-700 via-indigo-400 to-indigo-700 rounded-lg text-white">
              Sign Up
            </Button>
          </form>
          <div className="flex mt-3 gap-2 text-sm justify-center">
            <span>Do you have an account?</span>
            <Link to="/sign-in" className="text-blue-500">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
