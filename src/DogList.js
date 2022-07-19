import React from "react";
import DogDetails from "./DogDetails";

/**this renders a list of all the dog info
 *
 * props:
 *  - doglist = array of dogs [{name: "dog"...} ...]
 *
 * state: none
 *
 *
 * App -> DogList -> DogDetails
 */
function DogList({ dogList }) {

  return (
    <div className="DogListDisplay">
      <div className="DogList">
        <h1>Dog List</h1>
        {dogList.map((dog, idx) => <DogDetails dog={dog} key={idx} />)}
      </div>
    </div>);
}

export default DogList;



