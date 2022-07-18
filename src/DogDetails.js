import React from "react"
import { useParams } from "react-router-dom";
import "public";

function DogDetails({dog}){
  const params = useParams();

return(
  <div>
    <h3>{dog.name}</h3>
    <h3>Age: {dog.age}</h3>
    <img src={"../public/whiskey.jpg"} alt={dog.name} />
    <ul>
      {dog.facts.map(f => <h5>{f}</h5>)}
    </ul>
  </div>
)

}
export default DogDetails


