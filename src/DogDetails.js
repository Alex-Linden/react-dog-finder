import React from "react";
import { useParams } from "react-router-dom";


/**this renders all the info on a dog
 *
 * props:
 *  - doglist = array of dogs [{name: "dog"...} ...]
 *  - dog: single dog object
 *
 * state: none
 *
 *
 * { App, DogList } -> DogDetails
 */
function DogDetails({ dogList, dog }) {
  const params = useParams();
  console.log("DogDetails ==== param", params.name);

  //TODO: is this right
  if (params.name !== undefined) {
    dog = dogList.filter(dog => dog.name === params.name)[0];
  }

  //TODO: is this right
  const image = (params.name !== undefined)
    ? `/${dog.src}.jpg`
    : `/${dog.src}.jpg`;

  console.log("DogDetails ====", dog);
  return (
    <div className="DogDetails">
      <h3>{dog.name}</h3>
      <h3>Age: {dog.age}</h3>
      <img src={image} alt={dog.name} />
      <ul>
        {dog.facts.map((f, idx) => <h5 key={idx}>{f}</h5>)}
      </ul>
    </div>
  );

}
export default DogDetails;


