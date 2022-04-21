import Navbar from "./components/commons/navbar/Navbar"
import Footer from './components/commons/footer/Footer'
import Sidebar from "./components/commons/sidebar/Sidebar"
import Home from './layout/home/Home'
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App App-header phone">
      <Sidebar />
      <header className="App-navtab">
        <Router>
          <Navbar />
        </Router>
      </header>
      <div className="App-content">
        <Home />
      </div>
    </div>
  );
}

export default App;
