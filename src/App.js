import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from 'react';

import axios from 'axios';

import Nav from './Nav';
import DogList from './DogList';
import DogDetails from './DogDetails';


function App() {
  const [dogList, setDogList] = useState([]);

  async function getDogList() {
    const response = await axios.get("http://localhost:5001/dogs");
    const aDogList = response.data;
    setDogList(aDogList);
  }

  if (dogList.length === 0) {
    getDogList();
  }

  return (
    <div className="App">
      <h1>Good luck!</h1>
      <BrowserRouter>
        <Nav dogs={dogList} />
        <Routes>
          <Route element={<DogList dogList={dogList}/>} path="/dogs" />
          <Route element={<DogDetails/>} path="/dogs/:name" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
