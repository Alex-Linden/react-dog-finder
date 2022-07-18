import React, { useState } from "react";
import DogDetails from "./DogDetails";

/**this renders a list of all the dog info
 *
 * props: none
 *
 * state:
 *  dogList: await axios request for list of dogs
 *
 * App -> DogList -> DogDetails
 */
function DogList({ dogList }) {

  return (
    <div className="DogListDisplay">
      <div className="DogList">
          <h1>Dog List</h1>
          {dogList.map((dog, idx) => <DogDetails dog={dog} key={idx}/>)}
      </div>
    </div>);
}

export default DogList;



/*[
  "name": "Whiskey",
  "age": 5,
  "src": "whiskey",
  "facts": [
    "Whiskey loves eating popcorn.",
    "Whiskey is a terrible guard dog.",
    "Whiskey wants to cuddle with you!"
  ]
}, */