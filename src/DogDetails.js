import React from "react"

function DogDetails({dog}){

return(
  <div>
    <h3>{dog.name}</h3>
    <h3>Age: {dog.age}</h3>
    <img src={`../public/${dog.src}`} alt={dog.name} />
    <ul>
      {dog.facts.map(f => <li>{f}</li>)}
    </ul>
  </div>
)

}
export default DogDetails


