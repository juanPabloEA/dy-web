import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <>
        <div className="menu">
        <div className="options">
          <div className="option selected">Home</div>
          <div className="option">About</div>
          <div className="option">Products</div>
          <div className="option">Contact</div>
        </div>
      </div>
    </>
    
  )
}

export default Sidebar;
