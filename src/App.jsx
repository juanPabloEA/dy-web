import Navbar from "./components/commons/navbar/Navbar"
import Sidebar from "./components/commons/sidebar/Sidebar"
import Contact from "./layout/contact/Contact"
import {Routes, Route } from "react-router-dom";
import Home from './layout/home/Home'
import './App.css';

function App() {
  return (
    <div className="App App-header phone">
      <Sidebar />
      <header className="App-navtab">
          <Navbar />
      </header>
      <div className="App-content"> 
        <Routes>
          <Route index element={<Home />}/>
          <Route path="contact" element={<Contact />}/>
        </Routes>    
      </div>
    </div>
  );
}

export default App;
