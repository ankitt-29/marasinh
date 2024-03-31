import React, { useState } from 'react';
import './contact.scss';

function OffcanvasNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <span className={`screen-darken ${isOpen ? 'active' : ''}`} onClick={toggleNavbar}></span>

      <header className="section-header py-4">
        <div className="container">
          <h2>Demo page</h2>
        </div>
      </header>

      <div className="container">
        <button className="d-lg-none btn btn-warning" type="button" onClick={toggleNavbar}>Show navbar</button>

        <nav className={`mobile-offcanvas navbar navbar-expand-lg navbar-dark bg-primary ${isOpen ? 'show' : ''}`}>
          <div className="container-fluid">
            <div className="offcanvas-header">
              <button className="btn-close float-end" onClick={toggleNavbar}></button>
            </div>
            <a className="navbar-brand" href="#">Brand</a>

            <ul className="navbar-nav">
              <li className="nav-item active"><a className="nav-link" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Services</a></li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" onClick={(e) => { e.preventDefault(); }} data-bs-toggle="dropdown">More items</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Submenu item 1</a></li>
                  <li><a className="dropdown-item" href="#">Submenu item 2</a></li>
                  <li><a className="dropdown-item" href="#">Submenu item 3</a></li>
                </ul>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#">Menu item</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Menu item</a></li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" onClick={(e) => { e.preventDefault(); }} data-bs-toggle="dropdown">Dropdown right</a>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li><a className="dropdown-item" href="#">Submenu item 1</a></li>
                  <li><a className="dropdown-item" href="#">Submenu item 2</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>

        <section className="section-content py-5">
          <h6>Demo for Responsive Navbar with offcanvas view on mobile. <br /> Based on Bootstrap 5 CSS framework. <br /><br /> <span className="text-danger">Change browser size to see in action</span> </h6>
          <p>For this demo page you should connect to the internet to receive files from CDN like Bootstrap5 CSS, Bootstrap5 JS</p>
        </section>
      </div>
    </>
  );
}

export default OffcanvasNavbar;
