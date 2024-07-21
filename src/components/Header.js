import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

const Header = ({state}) => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.=
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  return (
    <Link to="/" className="cursor-pointer">
      <div className="flex items-center justify-between w-full absolute px-8 py-2 bg-gradient-to-b from-black z-50">
        <img
          className="w-44"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Logo"
        />

        { state && <div className="flex items-center gap-6">
          <img
            src="https://occ-0-6335-3647.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXYofKdCJceEP7pdxcEZ9wt80GsxEyXIbnG_QM8znksNz3JexvRbDLr0_AcNKr2SJtT-MLr1eCOA-e7xlDHsx4Jmmsi5HL8.png?r=1d4"
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
    </Link>
  );
};

export default Header;
