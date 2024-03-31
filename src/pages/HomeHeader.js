import React from "react";
import { useNavigate } from 'react-router-dom';
import "./FrameHeader.scss";

export default function HomeHeader() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="desktop-work-page">
      <header className="inner-frame-a">
        <img
          className="layer-1-icon4"
          loading="eager"
          alt=""
          src="/layer-1.svg"
        />
        <div className="contact-us-frame1">
          <div className="work-frame">
            <div className="text-layer">
              <div className="ellipse-shape" />
              <div className="work4" onClick={() => handleNavigation("/")}>
                Home
              </div>
            </div>
          </div>
          <div className="about2" onClick={() => handleNavigation("/work")}>
            Work
          </div>
          <div className="contact-us4" onClick={() => handleNavigation("/about")}>
            About us
          </div>
          <button
            className="letstalk-frame"
            onClick={() => handleNavigation("/contact")}
          >
            <div className="letstalk-frame-child" />
            <div className="lets-talk5">Contact</div>
          </button>
        </div>
      </header>
    </div>
  );
}
