import logo from './logo.svg';
import Navbar from "./components/commons/navbar/Navbar"
import Footer from './components/commons/footer/Footer'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {  Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App App-header">
      <header className="App-navtab">
        <Router>
              <Navbar/>
          </Router>
      </header>
      <div className="App-content">
        
      </div>
      <footer>
          <Footer/>
      </footer>
    </div>
  );
}

export default App;
