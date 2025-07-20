import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "./Home/Home";
import './App.css'



// Main App inside BrowserRouter
const AppWrapper = () => {

  return (
    <>
      <div className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes></div>

    </>
  );
};

// Wrap everything with <BrowserRouter>
const App = () => (
  <BrowserRouter>
    <AppWrapper />
  </BrowserRouter>
);

export default App;
