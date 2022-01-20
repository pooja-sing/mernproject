
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About/>}> 
        </Route>
        <Route path="/contact" element={<Contact/>}> 
        </Route>
        <Route path="/login" element={<Login/>}> 
        </Route>
        <Route path="/signup" element={<Signup/>}> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
