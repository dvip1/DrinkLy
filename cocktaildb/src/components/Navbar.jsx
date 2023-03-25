import React, { useEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { userDataContext } from "./userData/userData";
import { useContext } from "react";

function Navbar(props) {
  let locationData = useLocation();

  let location = locationData.pathname;
  useEffect(() => {
    props.setPath(location);
  }, [location]);

  let [cartData, wishlistData, cartLength] = useContext(userDataContext);

  return (
    <div className="w-100v z-50 bg-transparent sticky top-0 transition-all duration-700">
      <div className="flex justify-between p-3   items-center bg-transparent">
        <NavLink to="/" className="mx-3 ">
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="90.000000pt"
            height="90.000000pt"
            viewBox="0 0 210.000000 90.000000"
            preserveAspectRatio="xMidYMid meet"
            className="h-12"
          >
            {" "}
            <g
              transform="translate(0.000000,97.000000) scale(0.100000,-0.100000)"
              fill="#ffffff"
              stroke="none"
            >
              {" "}
              <path d="M230 807 c-78 -26 -110 -75 -118 -179 -9 -129 42 -351 103 -447 60 -96 165 -120 261 -60 118 75 255 223 303 329 34 74 26 148 -19 192 -110 106 -420 202 -530 165z m151 -37 c84 -16 91 -17 134 -33 72 -26 169 -78 203 -108 58 -52 63 -98 20 -184 -47 -93 -204 -256 -292 -302 -44 -23 -105 -21 -147 5 -76 47 -149 253 -151 427 -2 178 57 227 233 195z" />{" "}
              <path d="M1482 541 c2 -93 7 -151 13 -150 6 0 9 14 7 31 -3 32 12 58 33 58 7 0 27 -23 45 -51 22 -37 35 -48 42 -41 8 8 0 26 -27 63 l-37 52 33 28 c24 19 31 31 24 38 -8 8 -24 -3 -55 -34 -24 -25 -48 -45 -53 -45 -5 0 -7 43 -5 97 2 72 0 97 -10 101 -10 3 -12 -28 -10 -147z" />{" "}
              <path d="M870 536 l0 -146 60 0 c90 0 100 14 100 139 0 126 -9 140 -98 148 l-62 6 0 -147z m126 89 c12 -19 15 -43 12 -106 -4 -93 -16 -109 -80 -109 l-38 0 0 120 0 120 45 0 c36 0 47 -5 61 -25z" />{" "}
              <path d="M1666 673 c-3 -3 -6 -69 -6 -145 l0 -138 65 0 c36 0 68 0 72 -1 4 0 9 4 11 10 2 7 -18 11 -57 11 l-61 0 0 129 c0 118 -6 152 -24 134z" />{" "}
              <path d="M1206 651 c-7 -11 18 -33 27 -24 4 3 7 12 7 20 0 15 -26 18 -34 4z" />{" "}
              <path d="M1131 571 c-7 -5 -22 -6 -32 -4 -19 5 -20 0 -17 -88 4 -113 21 -125 28 -19 5 74 5 75 38 85 17 5 32 15 32 22 0 15 -28 17 -49 4z" />{" "}
              <path d="M1215 568 c-10 -24 -1 -178 10 -178 13 0 19 170 6 183 -7 7 -12 5 -16 -5z" />{" "}
              <path d="M1326 564 c-9 -8 -16 -11 -16 -5 0 6 -7 11 -15 11 -13 0 -15 -15 -13 -92 3 -108 21 -122 26 -21 3 74 13 93 47 93 34 0 44 -19 47 -93 4 -91 22 -91 26 1 3 66 1 74 -22 97 -29 29 -58 32 -80 9z" />{" "}
              <path d="M1780 568 c0 -7 14 -46 30 -87 37 -91 37 -105 0 -143 -32 -32 -38 -48 -17 -48 27 0 57 48 97 153 40 109 47 137 31 137 -7 0 -19 -30 -58 -140 -2 -8 -17 17 -32 59 -24 68 -51 104 -51 69z" />{" "}
            </g>{" "}
          </svg>
        </NavLink>
        <nav className=" flex justify-between  esm:hidden md:flex mx-3 cursor-pointer ">
          <NavLink to="/" className="mx-3 ">
            Home
          </NavLink>
          <NavLink to="/popular" className="mx-3 ">
            Popular
          </NavLink>
          <NavLink to="/about" className="mx-3 ">
            About us
          </NavLink>
          <NavLink to="/fav" className="mx-3 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </NavLink>
          <NavLink to="/cart" className="mx-3 ">
            <div className="relative">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              {cartLength?.length > 0 && (
                <p className="absolute top-0 left-1/2 -translate-y-4 text-white bg-red-600 rounded-full px-1">
                  {cartLength?.length}
                </p>
              )}
            </div>
          </NavLink>
        </nav>
      </div>
      <Outlet />
    </div>
  );
}

export default Navbar;
