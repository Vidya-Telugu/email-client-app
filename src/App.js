import { BrowserRouter,Routes,Route } from "react-router-dom";
import React from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Welcome from "./components/Welcome";
function App() {
  return (
   <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Login></Login>}/>
    <Route path="/signup" element={<Signup></Signup>}></Route>
    <Route path="/welcome" element={<Welcome></Welcome>}></Route>
  </Routes>
  </BrowserRouter>
   </>
  );
}

export default App;
