import React from "react";
import { NavLink } from "react-router-dom";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

const Login = () => {
  const [password, setPasswordValue] = React.useState("password");

  const toggle = () => {
    if (password === "password") {
      setPasswordValue("text");
      return;
    }
    setPasswordValue("password");
  };
  return (
    <div>
      <div className=" flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 animate-slideup">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white dark:text-black font-['poppins']">
              Log in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-300 dark:text-gray-500">
              Do not have an account?{" "}
              <NavLink
                to="/Signup"
                className="font-medium text-orange-600 hover:text-orange-500"
              >
                sign up
              </NavLink>
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div className="relative">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type={password}
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm"
                  placeholder="Password"
                />
                {password === "password" ? (
                  <BsFillEyeSlashFill
                    className="absolute z-10 text-gray-500  w-7 h-7 cursor-pointer  right-6 top-2 sm:top-1   pl-2"
                    onClick={toggle}
                  />
                ) : (
                  <BsFillEyeFill
                    className="absolute z-10 text-gray-500  w-7 h-7 cursor-pointer  right-6 top-2 sm:top-1   pl-2"
                    onClick={toggle}
                  />
                )}
              </div>
            </div>

            <div className="flex items-center justify-between ">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  defaultChecked
                  className="accent-[#f97f10]  h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-300 dark:text-gray-500"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <NavLink
                  to="/ForgetPassword"
                  className="font-medium text-orange-600 hover:text-orange-500"
                >
                  Forgot your password?
                </NavLink>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-orange-600 py-2 px-4 text-sm font-medium text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
