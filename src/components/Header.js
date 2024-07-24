import React from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { AVTAR_LOGO, LOGO } from "../utils/constants";

const Header = ({ state }) => {

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.=
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="flex items-center justify-between w-full absolute px-8 py-2 bg-gradient-to-b from-black z-50">
      <Link to="/" className="cursor-pointer">
        <img
          className="w-44"
          src= {LOGO}
          alt="Logo"
        />
      </Link>

      {state && <div className="flex items-center gap-6">
        <img
          src= {AVTAR_LOGO}
          alt="User Profile"
          className="w-12 h-12 rounded-full"
        />
        <button
          className="px-4 py-2 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition duration-300 ease-in-out"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </div>
      }
    </div>

  );
};

export default Header;