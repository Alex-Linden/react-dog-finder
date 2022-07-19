import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

/** displays nav bar for all the dogs
 *
 * props: dogs => array of dogs [{name: "dog"...} ...]
 *
 * state: none
 *
 * on top of all pages
 */
function Nav({ dogs }) {
  return (
    <nav className="Nav">
      {dogs.map((dog, idx) => (
        <Link key={idx} to={`/dogs/${dog.name}`}>
          {dog.name}
        </Link>)
      )}
    </nav>
  );
}

export default Nav;
