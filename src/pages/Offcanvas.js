import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Offcanvas() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const navigate = useNavigate();

  const toggleOffcanvas = () => {
    setShowOffcanvas((prev) => !prev);
  };

  const handleMenuItemClick = (path) => {
    toggleOffcanvas(); // Close offcanvas when a menu item is clicked
    navigate(path); // Navigate to the specified path
  };

  return (
    <div style={{ backgroundColor: "#000",  paddingTop: "10px", paddingRight: "10px" }}>
      <img
        src="/off-marasih.png"
        alt="Toggle offcanvas"
        style={{ 
          cursor: "pointer", 
          position: "absolute", 
          top: '35px',
          left: '27px',
          zIndex: "1000" 
        }}
      />

      <img
        src="/off-button.png"
        alt="Toggle offcanvas"
        onClick={toggleOffcanvas}
        style={{ 
          cursor: "pointer", 
          position: "absolute", 
          top: "22px", 
          right: "14px", 
          width: "50px", 
          height: "50px", // Same width and height as the left image
          zIndex: "1000" 
        }}
      />

      <div
        className={`offcanvas offcanvas-end ${showOffcanvas ? "show" : ""}`}
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
        style={{ backgroundColor: "#000c29", color: "#fff", width: "75%", minHeight: "100vh" }}
      >
        <div className="offcanvas-header">
          <h5 id="offcanvasRightLabel">Offcanvas right</h5>
          <button
            type="button"
            className="btn-close"
            onClick={toggleOffcanvas}
            aria-label="Close"
            style={{ color: "#fff", marginTop: "5px", marginRight: "10px", outline: "none" }} // Set color to white
          >
          </button>
        </div>
        <div className="offcanvas-body">
          {/* Offcanvas content goes here */}
          <ul className="list-group">
            <li className="list-group-item" onClick={() => handleMenuItemClick("/")} style={{ backgroundColor: "transparent", border: "none", color: "#fff", fontWeight: "bold" }}>Home</li>
            <li className="list-group-item" onClick={() => handleMenuItemClick("/about")} style={{ backgroundColor: "transparent", border: "none", color: "#fff", fontWeight: "bold" }}>About</li>
            <li className="list-group-item" onClick={() => handleMenuItemClick("/work")} style={{ backgroundColor: "transparent", border: "none", color: "#fff", fontWeight: "bold" }}>Work</li>
            <li className="list-group-item" onClick={() => handleMenuItemClick("/blog")} style={{ backgroundColor: "transparent", border: "none", color: "#fff", fontWeight: "bold" }}>Blog</li>
            <li className="list-group-item" onClick={() => handleMenuItemClick("/contact")} style={{ backgroundColor: "transparent", border: "none", color: "#fff", fontWeight: "bold" }}>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Offcanvas;
