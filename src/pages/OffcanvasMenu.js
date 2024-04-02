import React from "react";
import { useNavigate } from "react-router-dom";

export default function OffcanvasMenu() {
  const navigate = useNavigate();

  const handleNavigation = (route) => {
    navigate(route);
    document.getElementById("offcanvasTop").classList.remove("show");
  };

  return (
    <div>
      <div
        className="offcanvas offcanvas-top"
        tabIndex="-1"
        id="offcanvasTop"
        aria-labelledby="offcanvasTopLabel"
        style={{ backgroundColor: "#000000", height: "auto" }}
      >
        <div className="offcanvas-header">
          <img className="left-top-icon" alt="" src="/layer-1.svg" />
          <img
            className="right-top-icon"
            alt="Close"
            src="/close.png"
            onClick={() => {
              document.getElementById("offcanvasTop").classList.remove("show");
            }}
          />
        </div>
        <div className="offcanvas-body small">
          <div className="mobile-menu">
            <div className="menu-items">
              <div style={{ position: "relative", display: "inline-block" }}>
                <div
                  className="menu-item"
                  style={{
                    color: "#ffffff",
                    position: "relative",
                    zIndex: "1",
                  }}
                  onClick={() => handleNavigation("/")}
                >
                  Home
                </div>
                <div
                  className="home-icon"
                  style={{
                    height: "21px",
                    width: "21px",
                    position: "absolute",
                    top: "8px",
                    left: "-7px",
                    borderRadius: "50%",
                    backgroundColor: "#5A61FF",
                    zIndex: "0",
                  }}
                ></div>
              </div>
              <div
                className="menu-item"
                onClick={() => handleNavigation("/work")}
              >
                Work
              </div>
              <div
                className="menu-item"
                onClick={() => handleNavigation("/about")}
              >
                About Us
              </div>
              {/* <div
                className="menu-item"
                onClick={() => handleNavigation("/blogs")}
              >
                Blogs
              </div> */}
              <div
                className="menu-item"
                onClick={() => handleNavigation("/contact")}
              >
                Contact Us
              </div>
            </div>
            <hr className="menu-divider" />
              <div
                style={{
                  marginBottom: "5px",
                  fontSize: "21px",
                  color: "#9A9A9A",
                  textAlign: "center",
                  marginLeft:"5px"

                }}
              >
                Follow us
              </div>
          </div>
          <div
            className="social-icons-container"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <img
              src="/social-icons.svg"
              alt="Social Media Icon 1"
              style={{ width: "23px", height: "23px", margin: "0 14px" }}
            />
            <img
              src="/social-icons-1.svg"
              alt="Social Media Icon 2"
              style={{ width: "23px", height: "23px", margin: "0 14px" }}
            />
            <img
              src="/component-2.svg"
              alt="Social Media Icon 3"
              style={{ width: "23px", height: "23px", margin: "0 14px" }}
            />
            <img
              src="/social-icons-2.svg"
              alt="Social Media Icon 4"
              style={{ width: "23px", height: "23px", margin: "0 14px" }}
            />
            <img
              src="/social-icons-3.svg"
              alt="Social Media Icon 5"
              style={{ width: "23px", height: "23px", margin: "0 14px" }}
            />
            <img
              src="/social-icons-4.svg"
              alt="Social Media Icon 6"
              style={{ width: "23px", height: "23px", margin: "0 14px" }}
            />
            <img
              src="/frame-48.svg"
              alt="Social Media Icon 7"
              style={{ width: "23px", height: "23px", margin: "0 14px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
