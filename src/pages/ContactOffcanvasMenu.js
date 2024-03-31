import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ContactOffcanvasMenu() {
  const navigate = useNavigate();

  const handleNavigation = (route) => {
    navigate(route);
    document.getElementById("offcanvasContact").classList.remove("show");
  };

  return (
    <div>
      <div className="offcanvas offcanvas-top" tabIndex="-1" id="offcanvasContact" aria-labelledby="offcanvasContactLabel" style={{ backgroundColor: '#000000', height: '624px' }}>
        <div className="offcanvas-header">
          <img className="left-top-icon" alt="" src="/layer-1.svg" />
          <img className="right-top-icon" alt="Close" src="/close.png" onClick={() => {document.getElementById("offcanvasContact").classList.remove("show");}} />
        </div>
        <div className="offcanvas-body small">
          <div className="mobile-menu">
            <div className="menu-items">
              <div className="menu-item" onClick={() => handleNavigation('/')}>Home</div>
              <div className="menu-item" onClick={() => handleNavigation('/work')}>Work</div>
              <div className="menu-item" onClick={() => handleNavigation('/about')}>About Us</div>
              <div className="menu-item" onClick={() => handleNavigation('/blogs')}>Blogs</div>
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <div className="menu-item" style={{ color: '#ffffff', position: 'relative', zIndex: '1' }} onClick={() => handleNavigation('/contact')}>Contact</div>
                <div className="home-icon" style={{ height: '21px', width: '21px', position: 'absolute', top: '8px', left: '-7px', borderRadius: '50%', backgroundColor: '#5A61FF', zIndex: '0' }}></div>
              </div>
            </div>
            <hr className="menu-divider" />
          </div>
        </div>
      </div>
    </div>
  );
}
