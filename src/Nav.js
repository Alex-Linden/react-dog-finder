import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";


function Nav({ dogs }) {
  return (
    <nav className="Nav">
      {dogs.map((dog, idx) => (
        <Link key={idx} to={`/${dog.name}`}>
          {dog.name}
        </Link>
      )
      )}
    </nav>
  );
}

export default Nav;
