import React from "react"
import { useParams } from "react-router-dom";
import whiskey from "./whiskey.jpg"
import duke from "./duke.jpg"
import perry from "./perry.jpg"


function DogDetails({dog}){
  const params = useParams();
  const dogImages = [whiskey, duke, perry]

  console.log("DogDetails ====", dog)
return(
  <div>
    <h3>{dog.name}</h3>
    <h3>Age: {dog.age}</h3>
    <img src={`./${dog.src}.jpg`} alt={dog.name} />
    <ul>
      {dog.facts.map((f, idx) => <h5 key={idx}>{f}</h5>)}
    </ul>
  </div>
)

}
export default DogDetails


