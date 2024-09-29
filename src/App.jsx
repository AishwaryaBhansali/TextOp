import Message from './Message';
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import About from './components/About';
import { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App(props) {
  const [mode, setMode] = useState("light");

  const toggleMode1 = (event) => {
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.title = "TextOp - Dark Mode";
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.title = "TextOp";
    }
  }

  const toggleMode2 = (event) => {
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundImage = "url('/images/nature.jpg')";
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundRepeat = "no-repeat";
    }
    else{
      setMode("light");
      // document.body.style.backgroundColor = "white";
      document.body.style.backgroundImage = "url('/images/white.jpg')";
    }
  }
  const toggleMode3 = (event) => {
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "violet";
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  }

  return (
    <>
   <BrowserRouter>
        <Navbar title="TextOp" mode={mode} toggleMode1 = {toggleMode1} toggleMode2 = {toggleMode2} toggleMode3 = {toggleMode3}/>
        <div className="container my-4" mode={mode}>
          <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/" element={
              <Form heading="Enter Text to analyze" mode={mode}/>  
            }>
            </Route>
          </Routes>
        </div>
      </BrowserRouter> 
      
    </>
  );
}

export default App;