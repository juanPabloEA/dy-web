import Navbar from "./components/commons/navbar/Navbar";
import Sidebar from "./components/commons/sidebar/Sidebar";
import Contact from "./pages/contact/Contact";
import Gallery from "./pages/gallery/Gallery";
import Footer from "./components/commons/footer/Footer";
import {Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Shop from "./pages/shop/Shop";
import ErrorBoundary from "./pages/error/ErrorBoundary.jsx" 
import './App.css';

function App() {
  return (
    <div className="App App-header phone">
      <Sidebar />
      <header className="App-navtab">
          <Navbar />
      </header>
      <div className="App-content">
        <ErrorBoundary>
        <Routes>
          <Route index element={<Home />}/>
          <Route path="contact" element={<Contact />}/>
          <Route path="gallery" element={<Gallery />}/>
          <Route path="shop" element={<Shop />}/>
        </Routes>
        </ErrorBoundary>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
