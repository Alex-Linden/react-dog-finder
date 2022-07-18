import React, { useState } from "react";
import axios from "axios";
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
function DogList() {
  const [dogList, setDogList] = useState(getDogList);

  async function getDogList() {
    const response = await axios.get("http://localhost:5001/dogs");
    const aDogList = promiseAll(response.data);
    setDogList(aDogList);
  }
  console.log("Dog List", dogList);
  return (
    <div className="DogList">
      <h1>Dog List</h1>
      {dogList.map(dog => <DogDetails dog={dog} />)}
    </div>
  );
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