import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="anime">Anime</Link>
        </li>
        <li>
          <Link to="characters">characters</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
