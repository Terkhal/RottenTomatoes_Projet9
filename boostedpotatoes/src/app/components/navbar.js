"use client"
import React, { useState, useEffect } from "react";
import Login from "../components/login";
import Signup from "../components/signup";
import Cookies from "js-cookie";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const userId = Cookies.get("userId");
    if (userId) {
      setIsLogged(true);
      setIsLoading(false);
    } else if (!userId) {
      setIsLogged(false);
      setIsLoading(false);
    }
  }, []);

  const handleLogout = () => {
    Cookies.remove("userId");
    setIsLogged(false);
    setIsLoading(false);
    toast.success('Logout successful')
  };

  if (isLoading) {
    return (
      <>
          <div className="navbar bg-base-100">
            <div className="flex-1">
              <a href="/" className="btn btn-ghost normal-case text-xl font-sans"><img className="w-12 h-12 mr-3" src="Rotten.png"/>Boosted Potato</a>
            </div>

            <div className="flex-none gap-2">
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Search"
                  className="input input-bordered"
                />
              </div>
              <button className="btn loading text-center btn btn-ghost btn-circle avatar"></button>
            </div>
          </div>
      </>
    )
  }

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a href="/" className="btn btn-ghost normal-case text-xl font-sans"><img className="w-12 h-12 mr-3" src="Rotten.png"/>Boosted Potato</a>
      </div>

      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered"
          />
        </div>


        {isLogged ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="/profile" className="justify-between">Profile</a>
              </li>
              <li>
                <a href="/settings">Settings</a>
              </li>
              <li>
                <a onClick={handleLogout}>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <>
            <label htmlFor="my-modal-login" className="btn ml-3">
              Login
            </label>
            <Login isLogged={isLogged} setIsLogged={setIsLogged} />

            
            <label htmlFor="my-modal-signup" className="btn">
              Sign up
            </label>
            <Signup />
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
