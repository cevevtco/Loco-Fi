import React from "react";
import { NavLink } from "react-router-dom";

const ForgetPassword = () => {
  return (
    <div>
      <div className=" flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 animate-slideup">
        <div className="w-full max-w-md space-y-8">
          <div className="flex items-center justify-center flex-col">
            <svg
              width="30"
              height="30"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM5.49634 6.03271H6.32082C6.45889 6.03271 6.56868 5.92013 6.58723 5.78331C6.67618 5.12718 7.1265 4.64893 7.92922 4.64893C8.61477 4.64893 9.24318 4.9917 9.24318 5.81689C9.24318 6.45166 8.86867 6.74365 8.27834 7.18799C7.60549 7.67676 7.07229 8.24805 7.11037 9.1748L7.11334 9.39161C7.11521 9.52833 7.22658 9.63818 7.36332 9.63818H8.17434C8.31241 9.63818 8.42434 9.52625 8.42434 9.38818V9.28271C8.42434 8.56543 8.69729 8.35596 9.43361 7.79736C10.043 7.33398 10.6778 6.81982 10.6778 5.74072C10.6778 4.22998 9.40188 3.5 8.00539 3.5C6.73831 3.5 5.34964 4.09061 5.25511 5.78615C5.24752 5.92237 5.3599 6.03271 5.49634 6.03271ZM7.82131 12.4756C8.43068 12.4756 8.84963 12.082 8.84963 11.5488C8.84963 10.9966 8.43068 10.6094 7.82131 10.6094C7.23732 10.6094 6.81203 10.9966 6.81203 11.5488C6.81203 12.082 7.23732 12.4756 7.82131 12.4756Z"
                fill="orange"
              />
            </svg>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white dark:text-black font-['poppins']">
              Forget Password
            </h2>
            <p className="mt-2 text-center text-sm text-gray-300 dark:text-gray-500">
              Enter your email and we'll send you a link to reset your password.
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
                  className="relative block w-full appearance-none rounded-full  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-orange-600 py-2 px-4 text-sm font-medium text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
                Reset your password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
