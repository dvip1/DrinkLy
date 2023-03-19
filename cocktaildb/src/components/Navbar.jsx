import React, { useEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

function Navbar(props) {
  let locationData = useLocation();
  //console.log(locationData.pathname)
  let location = locationData.pathname;
  useEffect(() => {
    props.setPath(location);
  }, [location]);

  return (
    <div className="w-100v z-50 bg-transparent sticky top-0 transition-all duration-700">
      <div className="flex justify-between p-3   items-center bg-transparent">
        <p>Logo</p>
        <nav className=" flex justify-between esm:hidden md:block m-3 cursor-pointer ">
          <NavLink to="/" className="m-3 ">
            Home
          </NavLink>
          <NavLink to="/popular" className="m-3 ">
            Popular
          </NavLink>
          <NavLink to="/about" className="m-3 ">
            About us
          </NavLink>
          <NavLink to="/fav" className="m-3 ">
            Favourite
          </NavLink>
          <NavLink to="/cart" className="m-3 ">
            Cart
          </NavLink>
        </nav>
      </div>
      <Outlet />
    </div>
  );
}

export default Navbar;
