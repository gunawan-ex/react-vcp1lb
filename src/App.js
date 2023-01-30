import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Product from './pages/Product';
import Profile from './pages/Profile';
//import "./style.css";

export default function App() {
  return (
    <>
    	<Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
}
