import React from "react";
import {Link} from 'react-router-dom';
function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg  navbar-light bg-primary">
        <span className="navbar-brand text-white">
          Navbar
        </span>
        <Link to={`/`} className="text-white m-2">ALL</Link>
        <Link to={`/create`} className="text-white ">Add</Link>
      </nav>
    </>
  );
}

export default NavBar;
