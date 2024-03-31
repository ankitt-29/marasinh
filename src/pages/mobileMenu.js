import React from 'react';
import './MobileMenu.scss';

const MobileMenu = () => {
  return (
    <div className="mobile-menu">
      <img className="left-top-icon" alt="" src="/layer-1.svg" />
      <div className="menu-items">
        <div className="menu-item">Home</div>
        <div className="menu-item">Work</div>
        <div className="menu-item">Contact Us</div>
        <div className="menu-item">About Us</div>
        <div className="menu-item">Blogs</div>
      </div>
      <hr className="menu-divider" />
      <img className="right-top-icon" alt="" src="/close.png" />
    </div>
  );
};

export default MobileMenu;
