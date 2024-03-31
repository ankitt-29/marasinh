import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FrameHeader.scss';

export default function ContactHeader() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className='desktop-work-page'>
      <header className="inner-frame-a">
        <img
          className="layer-1-icon4"
          loading="eager"
          alt=""
          src="/layer-1.svg"
        />
        <div className="contact-us-frame1">
          <div
            className="about2"
            onClick={() => handleNavigation("/")}
          >
            Home
          </div>
          <div
            className="about2"
            onClick={() => handleNavigation("/work")}
          >
            Work
          </div>
          <div
            className="contact-us4"
            onClick={() => handleNavigation("/about")}
          >
            About us
          </div>
          <button
            className="letstalk-frame color-contact"
            onClick={() => handleNavigation("/contact")}
          >
            <div className="letstalk-frame-child" />
            <div className="lets-talk5 color-button">Contact</div>
          </button>
        </div>
      </header>
    </div>
  );
}
