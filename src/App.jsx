import React from "react";
import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import User from './pages/User';
import Payment from './pages/payment';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/user" element={<User />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  )
}

export default App;