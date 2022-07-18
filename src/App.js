import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Nav from './Nav';
import DogList from './DogList'
import DogDetails from './DogDetails';

function App() {
  const dL = [{ name: "one" }, { name: "Two" }]
  return (
    <div className="App">
      <h1>Good luck!</h1>
      <BrowserRouter>
        <Nav dogs={dL} />
        <Routes>
          <Route element={<DogList />} path="/" />
          <Route element={<DogDetails />} path="/dogs/:name" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
