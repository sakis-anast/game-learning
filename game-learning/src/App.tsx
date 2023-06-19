import React from 'react';
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Puzzle from "./pages/Puzzle";
import Quiz from "./pages/Quiz";
import Activities from "./pages/Activities";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <BrowserRouter basename="/">
    <Navbar/>

      <Routes>
        <Route path="/" element={<Home />}/> 
        <Route path="/puzzle" element={<Puzzle />}/> 
        <Route path="/quiz" element={<Quiz />}/> 
        <Route path="/activities" element={<Activities />}/> 

      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
