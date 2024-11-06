import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../../redux/user/userSlice";

export default function Signin() {
  const [formData, setFormData] = useState({});
  // const [errorMessage, setErrorMessage] = useState(null);//we use these lines before work with redux
  // const [loading, setLoading] = useState(false);
  const {loading, error : errorMessage} = useSelector((state) => state.user);//after redux
  const dispatch = useDispatch(); //after redux

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
    //   return setErrorMessage("Please fill all fields...");
      return dispatch(signInFailure("Please fill all fields..."));
    }
    try {
      // setLoading(true);
      // setErrorMessage(null); //we use these lines before worewith redux
      dispatch(signInStart()); //this from redux ..we di these code in useSlice.js
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        // return setErrorMessage(data.message); //we use these lines before worewith redux
        dispatch(signInFailure(data.message)); //this from redux ..we di these code in useSlice.js
      }
      // setLoading(false);
      if (res.ok) {
        dispatch(signInSuccess(data)); //this from redux ..we di these code in useSlice.js
        navigate("/");
      }
    } catch (error) {
      // setErrorMessage(error.message);
      dispatch(signInFailure(error.message)); //this from redux 
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
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
            Sign in with your email and password to continue to your dashboard.
          </p>
        </div>
        {/* for right side */}

        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value="Email" />
              <TextInput
                type="email"
                placeholder="kamal12@gmail.com"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Password" />
              <TextInput
                type="password"
                placeholder="*********"
                id="password"
                onChange={handleChange}
              />
            </div>
            <Button
              className=" bg-gradient-to-r from-indigo-700 via-indigo-400 to-indigo-700 rounded-lg text-white"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size="sm" />
                  <span className="pl-3">Loading...</span>
                </>
              ) : (
                "Sign In"
              )}
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-4">
            <span>If you don't have an account,?</span>
            <Link to="/sign-Up" className="text-blue-500">
              Sign Up
            </Link>
          </div>
          {errorMessage && (
            <Alert className="mt-3" color="failure">
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}
