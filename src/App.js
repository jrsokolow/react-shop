import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from "./List/List";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ListItem from './ListItem/ListItem';
import Card from './Card/Card';

function App() {

  const [counter, setCounter] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCard = (product) => {
    setCounter(counter+1);
    setTotalPrice(totalPrice+product.price);
  }

  return (
    <div className="App">
      <Card counter={counter} totalPrice={totalPrice} />
      <Router>
        <Routes>
          <Route path="/" element={<List addToCard={addToCard} />}></Route>
          <Route path="/details" element={<ListItem addToCard={addToCard} />}></Route>
        </Routes>
      </Router>   
    </div>
  );
}

export default App;
