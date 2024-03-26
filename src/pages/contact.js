import { useState } from "react";

import "./contact.css";
import { useMediaQuery } from "react-responsive";
import emailjs from "emailjs-com";
import Footer from "./Footer";
import OffcanvasNavbar from "./OffcanvasNavbar";
import Offcanvas from "./Offcanvas";

const Contact = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedBudget, setSelectedBudget] = useState("");
  const [isHoveredDribbble, setIsHoveredDribbble] = useState(false);
  const [isHoveredLinkedIn, setIsHoveredLinkedIn] = useState(false);
  const [isHoveredInstagram, setIsHoveredInstagram] = useState(false);
  const [isHoveredX, setIsHoveredX] = useState(false);
  const [isHoveredFigma, setIsHoveredFigma] = useState(false);
  const [isHoveredFacebook, setIsHoveredFacebook] = useState(false);
  const [isHoveredBento, setIsHoveredBento] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    organizationName: "",
    projectType: [],
    projectBudget: "",
    projectDescription: "",
  });

  const handleInputChange = (e, field) => {
    setFormData({
      ...formData,
      [field]: e.target.value,
    });
  };

  const handleCheckboxChangeService = (service) => {
    const selectedServices = [...formData.projectType];
    const index = selectedServices.indexOf(service);

    if (index !== -1) {
      selectedServices.splice(index, 1);
    } else {
      selectedServices.push(service);
    }

    setFormData({
      ...formData,
      projectType: selectedServices,
    });
  };

  const handleCheckboxChange = (budget) => {
    setFormData({
      ...formData,
      projectBudget: budget,
    });
  };

  const handleProjectDescriptionChange = (e) => {
    setFormData({
      ...formData,
      projectDescription: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission with formData

    console.log(formData);
    sendEmail();
  };
  const sendEmail = () => {
    const templateParams = {
      to_name: "Recipient Name", // Replace with actual recipient name
      from_name: formData.name,
      message: `
        Name: ${formData.name}
        Email: ${formData.email}
        Phone Number: ${formData.phoneNumber}
        Organization: ${formData.organizationName}
        Project Type: ${formData.projectType.join(", ")}
        Project Budget: ${formData.projectBudget}
        Project Description: ${formData.projectDescription}
      `,
    };
    console.log("templateParams:", templateParams);

    emailjs
      .send(
        "service_udn0cjg",
        "template_tldfslc",
        templateParams,
        "kLzQ_jh0x_QnmeXh-"
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
      });
  };

  // const isBudgetChecked = (checkboxName) => selectedBudget === checkboxName;

  // const handleCheckboxChange = (checkboxName) => {
  //   setSelectedBudget(checkboxName);
  // };

  // const isCheckboxChecked = (checkboxName) => selectedServices.includes(checkboxName);

  // const handleCheckboxChangeService = (checkboxName) => {
  //   if (selectedServices.includes(checkboxName)) {
  //     setSelectedServices(selectedServices.filter(item => item !== checkboxName));
  //   } else {
  //     setSelectedServices([...selectedServices, checkboxName]);
  //   }
  // };

  const handleMouseEnterDribbble = () => {
    setIsHoveredDribbble(true);
  };

  const handleMouseLeaveDribbble = () => {
    setIsHoveredDribbble(false);
  };

  const handleMouseEnterLinkedIn = () => {
    setIsHoveredLinkedIn(true);
  };

  const handleMouseLeaveLinkedIn = () => {
    setIsHoveredLinkedIn(false);
  };

  const handleMouseEnterInstagram = () => {
    setIsHoveredInstagram(true);
  };

  const handleMouseLeaveInstagram = () => {
    setIsHoveredInstagram(false);
  };
  const handleMouseEnterX = () => {
    setIsHoveredX(true);
  };

  const handleMouseLeaveX = () => {
    setIsHoveredX(false);
  };

  const handleMouseEnterFigma = () => {
    setIsHoveredFigma(true);
  };

  const handleMouseLeaveFigma = () => {
    setIsHoveredFigma(false);
  };

  const handleMouseEnterFacebook = () => {
    setIsHoveredFacebook(true);
  };

  const handleMouseLeaveFacebook = () => {
    setIsHoveredFacebook(false);
  };

  const handleMouseEnterBento = () => {
    setIsHoveredBento(true);
  };

  const handleMouseLeaveBento = () => {
    setIsHoveredBento(false);
  };
  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
    // Close the card if open
    if (isCardOpen) {
      setIsCardOpen(false);
    }
  };

  // Function to toggle the off-canvas card
  const toggleCard = () => {
    setIsCardOpen(!isCardOpen);
    // Close the navbar if open
    if (isNavbarOpen) {
      setIsNavbarOpen(false);
    }
  };
  return (
    <div>
      <div>
        {isMobile ? (
          <div>
            <div className="marasinh-contact-page">
              <div className="container-group">
              <Offcanvas/>
                {/* <header className="background-frame">
      <nav id="navbar_main" className={`mobile-offcanvas navbar navbar-expand-lg navbar-dark bg-primary ${isNavbarOpen ? 'show' : ''}`}>
        <div className="container-fluid">
          <div className="offcanvas-header">
            <button className="btn-close float-end" onClick={toggleNavbar}></button>
          </div>
          <a className="navbar-brand" href="#">Brand</a>
          <ul className="navbar-nav">
            <li className="nav-item active"> <a className="nav-link" href="#">Home </a> </li>
            <li className="nav-item"><a className="nav-link" href="#"> About </a></li>
            <li className="nav-item"><a className="nav-link" href="#"> Services </a></li>
            <li className="nav-item dropdown">
              <a className="nav-link  dropdown-toggle" href="#" data-bs-toggle="dropdown">  More items  </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#"> Submenu item 1</a></li>
                <li><a className="dropdown-item" href="#"> Submenu item 2 </a></li>
                <li><a className="dropdown-item" href="#"> Submenu item 3 </a></li>
              </ul>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#"> Menu item </a></li>
            <li className="nav-item"><a className="nav-link" href="#"> Menu item </a></li>
            <li className="nav-item dropdown">
              <a className="nav-link  dropdown-toggle" href="#" data-bs-toggle="dropdown"> Dropdown right </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li><a className="dropdown-item" href="#"> Submenu item 1</a></li>
                <li><a className="dropdown-item" href="#"> Submenu item 2 </a></li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>

      <article className={`card mobile-offcanvas bg-light ${isCardOpen ? 'show' : ''}`} id="card_mobile">
        <div className="card-body">
          <div className="offcanvas-header">
            <button className="btn-close float-end" onClick={toggleCard}></button>
          </div>
          <h5>This card becomes offcanvas on mobile view</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </article>

      <img
        className="layer-1-icon"
        loading="eager"
        alt=""
        src="/layer-1.svg"
      />
      <div className=" ">
        <div className="content-frame">
          <div className="link-frame">
            <div className="text-container">
              <a href="/" className="work">
                Home
              </a>
            </div>
            <a href="#" className="about">
              Work
            </a>
            <div className="contact-info-frame">
              <div className="" />
              <a href="/about" className="contact-us">
                About Us
              </a>
            </div>
          </div>
        </div>

        <button className="rectangle-parent d-lg-none btn btn-warning" onClick={toggleNavbar}>
          <div className="frame-child" />
          <div className="lets-talk">Show navbar</div>
        </button>

        <button className="rectangle-parent d-lg-none btn btn-warning" onClick={toggleCard}>
          <div className="frame-child" />
          <div className="lets-talk">Show card</div>
        </button>
      </div>
    </header> */}
                <section className="divider-line">
                  <b className="unleash-your-brands">Unleash Your Brand's Story</b>
                  <div className="explore-link">
                    <div className="wrapper-about-us-links">
                      <img
                        className="about-us-links"
                        loading="eager"
                        alt=""
                        src="/star-1.svg"
                      />
                    </div>
                    <div className="wrapper-social-media-icons-gro">
                      <img
                        className="social-media-icons-group"
                        loading="eager"
                        alt=""
                        src="/star-2.svg"
                      />
                    </div>
                    <h1 className="a-message-away-container">
                      <span className="a-message">{`A message away from turning your dreams into `}</span>
                      <span className="digital-realities">digital realities</span>
                    </h1>
                  </div>
                  <div className="contact-info-frames">
                    <div className="together-well-craft">
                      {" "}
                      <p>
                        Together, we'll craft a digital landscape that goes beyond
                        limits and sets new standards for excellence.
                      </p>
                    </div>
                    <div className="button-container">
                      <a href="#" className="magic-button">
                        Let’s create magic
                        <img className="top-hat" src="/Tophat1.png"></img>
                      </a>
                    </div>
                  </div>
                </section>

                <section className="linked-in-icon-parent">
                  <div className="twitter-icon-another" />

                  <div className="e145_4457">
                    <div className="linked-in-icon">
                      <div className="dribbble-icon">
                        <div className="behance-icon">
                          <div className="" />
                          <h2 className="lets-create-special">
                            Let’s create special
                          </h2>
                        </div>
                      </div>
                      <div className="design-studio-frame">
                        <div className="input-container">
                          <input
                            placeholder="Your Name*"
                            type="text"
                            className="custom-input"
                            value={formData.name}
                            onChange={(e) => handleInputChange(e, "name")}
                          />
                          <input
                            placeholder="Your Email*"
                            type="text"
                            className="custom-input"
                            value={formData.email}
                            onChange={(e) => handleInputChange(e, "email")}
                          />
                          <input
                            placeholder="Your phone number"
                            type="text"
                            className="custom-input"
                            value={formData.phoneNumber}
                            onChange={(e) => handleInputChange(e, "phoneNumber")}
                          />
                          <input
                            placeholder="Your organization name"
                            type="text"
                            className="custom-input"
                            value={formData.organizationName}
                            onChange={(e) =>
                              handleInputChange(e, "organizationName")
                            }
                          />
                        </div>

                        <div className="content-area1" />
                        <div className="content-area1" />

                        <div className="">
                          <div className="project-type-selector">
                            <div className="branding-social-media-other">
                              <div className="mobile-app-website-group">
                                <div className="mobile-app-website-group-child" />
                                <div className="select-your-project">
                                  Select your project type:
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="work-aboutus-blogs-contactus">
                          <label
                            className={`rectangle-parent4 ${formData.projectType.includes("Mobile app")
                                ? "checked"
                                : ""
                              }`}
                            style={{
                              flexShrink: 0,
                              borderRadius: "100px",
                              border: "1px solid #7C6493",
                              background: formData.projectType.includes(
                                "Mobile app"
                              )
                                ? "#5A61FF"
                                : "rgba(255, 255, 255, 0.05)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              cursor: "pointer",
                            }}
                          >
                            <input
                              type="checkbox"
                              className="hidden-checkbox"
                              checked={formData.projectType.includes("Mobile app")}
                              onChange={() =>
                                handleCheckboxChangeService("Mobile app")
                              }
                              style={{ display: "none" }}
                            />
                            <span className="checkbox-text">Mobile app</span>
                          </label>

                          <label
                            className={`rectangle-parent4 ${formData.projectType.includes("Website")
                                ? "checked"
                                : ""
                              }`}
                            style={{
                              flexShrink: 0,
                              borderRadius: "100px",
                              border: "1px solid #7C6493",
                              background: formData.projectType.includes("Website")
                                ? "#5A61FF"
                                : "rgba(255, 255, 255, 0.05)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              cursor: "pointer",
                            }}
                          >
                            <input
                              type="checkbox"
                              className="hidden-checkbox"
                              checked={formData.projectType.includes("Website")}
                              onChange={() =>
                                handleCheckboxChangeService("Website")
                              }
                              style={{ display: "none" }}
                            />
                            <span className="checkbox-text">Website</span>
                          </label>

                          <label
                            className={`rectangle-parent4 ${formData.projectType.includes("Branding")
                                ? "checked"
                                : ""
                              }`}
                            style={{
                              flexShrink: 0,
                              borderRadius: "100px",
                              border: "1px solid #7C6493",
                              background: formData.projectType.includes("Branding")
                                ? "#5A61FF"
                                : "rgba(255, 255, 255, 0.05)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              cursor: "pointer",
                            }}
                          >
                            <input
                              type="checkbox"
                              className="hidden-checkbox"
                              checked={formData.projectType.includes("Branding")}
                              onChange={() =>
                                handleCheckboxChangeService("Branding")
                              }
                              style={{ display: "none" }}
                            />
                            <span className="checkbox-text">Branding</span>
                          </label>

                          <label
                            className={`rectangle-parent4 ${formData.projectType.includes("Social media")
                                ? "checked"
                                : ""
                              }`}
                            style={{
                              flexShrink: 0,
                              borderRadius: "100px",
                              border: "1px solid #7C6493",
                              background: formData.projectType.includes(
                                "Social media"
                              )
                                ? "#5A61FF"
                                : "rgba(255, 255, 255, 0.05)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              cursor: "pointer",
                            }}
                          >
                            <input
                              type="checkbox"
                              className="hidden-checkbox"
                              checked={formData.projectType.includes(
                                "Social media"
                              )}
                              onChange={() =>
                                handleCheckboxChangeService("Social media")
                              }
                              style={{ display: "none" }}
                            />
                            <span className="checkbox-text">Social media</span>
                          </label>

                          <label
                            className={`rectangle-parent4 ${formData.projectType.includes("Other")
                                ? "checked"
                                : ""
                              }`}
                            style={{
                              flexShrink: 0,
                              borderRadius: "100px",
                              border: "1px solid #7C6493",
                              background: formData.projectType.includes("Other")
                                ? "#5A61FF"
                                : "rgba(255, 255, 255, 0.05)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              cursor: "pointer",
                            }}
                          >
                            <input
                              type="checkbox"
                              className="hidden-checkbox"
                              checked={formData.projectType.includes("Other")}
                              onChange={() => handleCheckboxChangeService("Other")}
                              style={{ display: "none" }}
                            />
                            <span className="checkbox-text">Other</span>
                          </label>
                        </div>
                        <div class="select-your-budget">Select your budget type:</div>
                        <div className="another-div-child">
                          <label
                            className={`group-button child1 ${formData.projectBudget === "Less than $5K"
                                ? "checked"
                                : ""
                              }`}
                            style={{
                              flexShrink: 0,
                              borderRadius: "100px",
                              border: "1px solid #7C6493",
                              background:
                                formData.projectBudget === "Less than $5K"
                                  ? "#5A61FF"
                                  : "rgba(255, 255, 255, 0.05)",
                              alignItems: "center",
                              justifyContent: "center",
                              cursor: "pointer",
                            }}
                          >
                            <input
                              type="checkbox"
                              className="hidden-checkbox"
                              checked={formData.projectBudget === "Less than $5K"}
                              onChange={() => handleCheckboxChange("Less than $5K")}
                              style={{ display: "none" }}
                            />
                            <span className="checkbox-text">Less than $5K</span>
                          </label>

                          <label
                            className={`group-button child2 ${formData.projectBudget === "$5K to $10K"
                                ? "checked"
                                : ""
                              }`}
                            style={{
                              display: "flex",
                              flexShrink: 0,
                              borderRadius: "100px",
                              border: "1px solid #7C6493",
                              background:
                                formData.projectBudget === "$5K to $10K"
                                  ? "#5A61FF"
                                  : "rgba(255, 255, 255, 0.05)",
                              alignItems: "center",
                              justifyContent: "center",
                              cursor: "pointer",
                            }}
                          >
                            <input
                              type="checkbox"
                              className="hidden-checkbox"
                              checked={formData.projectBudget === "$5K to $10K"}
                              onChange={() => handleCheckboxChange("$5K to $10K")}
                              style={{ display: "none" }}
                            />
                            <span className="checkbox-text">$5K to $10K</span>
                          </label>

                          <label
                            className={`group-button child3 ${formData.projectBudget === "$10K to $25K"
                                ? "checked"
                                : ""
                              }`}
                            style={{
                              display: "flex",
                              // width: '306px',
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "10px",
                              borderRadius: "100px",
                              border: "1px solid #7C6493",
                              background:
                                formData.projectBudget === "$10K to $25K"
                                  ? "#5A61FF"
                                  : "rgba(255, 255, 255, 0.05)",
                            }}
                          >
                            <input
                              type="checkbox"
                              className="hidden-checkbox"
                              checked={formData.projectBudget === "$10K to $25K"}
                              onChange={() => handleCheckboxChange("$10K to $25K")}
                              style={{ display: "none" }}
                            />
                            <span className="checkbox-text">$10K to $25K</span>
                          </label>

                          <label
                            className={`group-button child4  ${formData.projectBudget === "$25K to $45K"
                                ? "checked"
                                : ""
                              }`}
                            style={{
                              display: "flex",
                              // width: '306px',
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "10px",
                              borderRadius: "100px",
                              border: "1px solid #7C6493",
                              background:
                                formData.projectBudget === "$25K to $45K"
                                  ? "#5A61FF"
                                  : "rgba(255, 255, 255, 0.05)",
                            }}
                          >
                            <input
                              type="checkbox"
                              className="hidden-checkbox"
                              checked={formData.projectBudget === "$25K to $45K"}
                              onChange={() => handleCheckboxChange("$25K to $45K")}
                              style={{ display: "none" }}
                            />
                            <span className="checkbox-text">$25K to $45K</span>
                          </label>
                        </div>

                        <div className="b-e-s-i-m-p-l-e-b-e-c-r-e-a-t1">
                          <div className="">
                            <div className="project-info-child" />
                            <div className="write-about-your-container">
                              <textarea
                                type="text"
                                className="write-about-your"
                                placeholder="Write about your project (Project name, scope of work, timeline, budget)*"
                                value={formData.projectDescription}
                                onChange={handleProjectDescriptionChange}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="button-container1">
                          <a
                            href="#"
                            className="magic-button1"
                            onClick={handleSubmit}
                          >
                            <span
                              className="submit-text"
                              style={{ color: "#525252" }}
                            >
                              SUBMIT APPLICATION
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="instagram-icon-frame">
                    <div className="dribbble-icon-frame" />
                    <div className="behance-icon-frame">
                      <div className="twitter-icon-frame">
                        <h3 className="ping-us">Ping us</h3>
                      </div>
                      <a href="#" className="marasihstudiogmailcom1">
                        marasihstudio@gmail.com
                      </a>
                    </div>
                    <div className="text-frame-with-image">
                      <h3 className="follow-us">Follow us</h3>
                      <div className="text-frame">
                        <a href="#" className="instagram">
                          Instagram
                        </a>
                        <div className="text-frame1">
                          <a href="#" className="linkedin">
                            LinkedIn
                          </a>
                        </div>
                        <a href="#" className="dribbble">
                          Dribbble
                        </a>
                        <a href="#" className="behance">
                          Behance
                        </a>
                        <a href="#" className="twitter">
                          Twitter
                        </a>
                        <div className="ellipse-shape-with-fill">
                          {/* <div className="rectangle-shape" /> */}
                          <a href="#" className="figma1">
                            Figma
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <Footer />
              </div>
            </div>
          </div>
        ) : (
          <div>
              <div className="marasinh-contact-page">
              <div className="container-group">
                <header className="background-frame">
                  <img
                    className="layer-1-icon"
                    loading="eager"
                    alt=""
                    src="/layer-1.svg"
                  />
                  <div className=" ">
                    <div className="content-frame">
                      <div className="link-frame">
                        <div className="text-container">
                          <a href="/" className="work">
                            Home
                          </a>
                        </div>
                        <a href="#" className="about">
                          Work
                        </a>
                        <div className="contact-info-frame">
                          <div className="" />
                          <a href="/about" className="contact-us">
                            About Us
                          </a>
                        </div>
                      </div>
                    </div>

                    <button className="rectangle-parent">
                      <div className="frame-child" />
                      <div className="lets-talk">Contact</div>
                    </button>
                  </div>
                </header>
                {/* <header className="background-frame">
      <nav id="navbar_main" className={`mobile-offcanvas navbar navbar-expand-lg navbar-dark bg-primary ${isNavbarOpen ? 'show' : ''}`}>
        <div className="container-fluid">
          <div className="offcanvas-header">
            <button className="btn-close float-end" onClick={toggleNavbar}></button>
          </div>
          <a className="navbar-brand" href="#">Brand</a>
          <ul className="navbar-nav">
            <li className="nav-item active"> <a className="nav-link" href="#">Home </a> </li>
            <li className="nav-item"><a className="nav-link" href="#"> About </a></li>
            <li className="nav-item"><a className="nav-link" href="#"> Services </a></li>
            <li className="nav-item dropdown">
              <a className="nav-link  dropdown-toggle" href="#" data-bs-toggle="dropdown">  More items  </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#"> Submenu item 1</a></li>
                <li><a className="dropdown-item" href="#"> Submenu item 2 </a></li>
                <li><a className="dropdown-item" href="#"> Submenu item 3 </a></li>
              </ul>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#"> Menu item </a></li>
            <li className="nav-item"><a className="nav-link" href="#"> Menu item </a></li>
            <li className="nav-item dropdown">
              <a className="nav-link  dropdown-toggle" href="#" data-bs-toggle="dropdown"> Dropdown right </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li><a className="dropdown-item" href="#"> Submenu item 1</a></li>
                <li><a className="dropdown-item" href="#"> Submenu item 2 </a></li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>

      <article className={`card mobile-offcanvas bg-light ${isCardOpen ? 'show' : ''}`} id="card_mobile">
        <div className="card-body">
          <div className="offcanvas-header">
            <button className="btn-close float-end" onClick={toggleCard}></button>
          </div>
          <h5>This card becomes offcanvas on mobile view</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </article>

      <img
        className="layer-1-icon"
        loading="eager"
        alt=""
        src="/layer-1.svg"
      />
      <div className=" ">
        <div className="content-frame">
          <div className="link-frame">
            <div className="text-container">
              <a href="/" className="work">
                Home
              </a>
            </div>
            <a href="#" className="about">
              Work
            </a>
            <div className="contact-info-frame">
              <div className="" />
              <a href="/about" className="contact-us">
                About Us
              </a>
            </div>
          </div>
        </div>

        <button className="rectangle-parent d-lg-none btn btn-warning" onClick={toggleNavbar}>
          <div className="frame-child" />
          <div className="lets-talk">Show navbar</div>
        </button>

        <button className="rectangle-parent d-lg-none btn btn-warning" onClick={toggleCard}>
          <div className="frame-child" />
          <div className="lets-talk">Show card</div>
        </button>
      </div>
    </header> */}
                <section className="divider-line">
                  <b className="unleash-your-brands">Unleash Your Brand's Story</b>
                  <div className="explore-link">
                    <div className="wrapper-about-us-links">
                      <img
                        className="about-us-links"
                        loading="eager"
                        alt=""
                        src="/star-1.svg"
                      />
                    </div>
                    <div className="wrapper-social-media-icons-gro">
                      <img
                        className="social-media-icons-group"
                        loading="eager"
                        alt=""
                        src="/star-2.svg"
                      />
                    </div>
                    <h1 className="a-message-away-container">
                      <span className="a-message">{`A message away from turning your dreams into `}</span>
                      <span className="digital-realities">digital realities</span>
                    </h1>
                  </div>
                  <div className="contact-info-frames">
                    <div className="together-well-craft">
                      {" "}
                      <p>
                        Together, we'll craft a digital landscape that goes beyond
                        limits and sets new standards for excellence.
                      </p>
                    </div>
                    <div className="button-container">
                      <a href="#" className="magic-button">
                        Let’s create magic
                        <img className="top-hat" src="/Tophat1.png"></img>
                      </a>
                    </div>
                  </div>
                </section>

                <section className="linked-in-icon-parent">
                  <div className="twitter-icon-another" />

                  <div className="e145_4457">
                    <div className="linked-in-icon">
                      <div className="dribbble-icon">
                        <div className="behance-icon">
                          <div className="" />
                          <h2 className="lets-create-special">
                            Let’s create special
                          </h2>
                        </div>
                      </div>
                      <div className="design-studio-frame">
                        <div className="input-container">
                          <input
                            placeholder="Your Name*"
                            type="text"
                            className="custom-input"
                            value={formData.name}
                            onChange={(e) => handleInputChange(e, "name")}
                          />
                          <input
                            placeholder="Your Email*"
                            type="text"
                            className="custom-input"
                            value={formData.email}
                            onChange={(e) => handleInputChange(e, "email")}
                          />
                          <input
                            placeholder="Your phone number"
                            type="text"
                            className="custom-input"
                            value={formData.phoneNumber}
                            onChange={(e) => handleInputChange(e, "phoneNumber")}
                          />
                          <input
                            placeholder="Your organization name"
                            type="text"
                            className="custom-input"
                            value={formData.organizationName}
                            onChange={(e) =>
                              handleInputChange(e, "organizationName")
                            }
                          />
                        </div>

                        <div className="content-area1" />
                        <div className="content-area1" />

                        <div className="">
                          <div className="project-type-selector">
                            <div className="branding-social-media-other">
                              <div className="mobile-app-website-group">
                                <div className="mobile-app-website-group-child" />
                                <div className="select-your-project">
                                  Select your project type:
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="work-aboutus-blogs-contactus">
                          <label
                            className={`rectangle-parent4 ${formData.projectType.includes("Mobile app")
                                ? "checked"
                                : ""
                              }`}
                            style={{
                              flexShrink: 0,
                              borderRadius: "100px",
                              border: "1px solid #7C6493",
                              background: formData.projectType.includes(
                                "Mobile app"
                              )
                                ? "#5A61FF"
                                : "rgba(255, 255, 255, 0.05)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              cursor: "pointer",
                            }}
                          >
                            <input
                              type="checkbox"
                              className="hidden-checkbox"
                              checked={formData.projectType.includes("Mobile app")}
                              onChange={() =>
                                handleCheckboxChangeService("Mobile app")
                              }
                              style={{ display: "none" }}
                            />
                            <span className="checkbox-text">Mobile app</span>
                          </label>

                          <label
                            className={`rectangle-parent4 ${formData.projectType.includes("Website")
                                ? "checked"
                                : ""
                              }`}
                            style={{
                              flexShrink: 0,
                              borderRadius: "100px",
                              border: "1px solid #7C6493",
                              background: formData.projectType.includes("Website")
                                ? "#5A61FF"
                                : "rgba(255, 255, 255, 0.05)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              cursor: "pointer",
                            }}
                          >
                            <input
                              type="checkbox"
                              className="hidden-checkbox"
                              checked={formData.projectType.includes("Website")}
                              onChange={() =>
                                handleCheckboxChangeService("Website")
                              }
                              style={{ display: "none" }}
                            />
                            <span className="checkbox-text">Website</span>
                          </label>

                          <label
                            className={`rectangle-parent4 ${formData.projectType.includes("Branding")
                                ? "checked"
                                : ""
                              }`}
                            style={{
                              flexShrink: 0,
                              borderRadius: "100px",
                              border: "1px solid #7C6493",
                              background: formData.projectType.includes("Branding")
                                ? "#5A61FF"
                                : "rgba(255, 255, 255, 0.05)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              cursor: "pointer",
                            }}
                          >
                            <input
                              type="checkbox"
                              className="hidden-checkbox"
                              checked={formData.projectType.includes("Branding")}
                              onChange={() =>
                                handleCheckboxChangeService("Branding")
                              }
                              style={{ display: "none" }}
                            />
                            <span className="checkbox-text">Branding</span>
                          </label>

                          <label
                            className={`rectangle-parent4 ${formData.projectType.includes("Social media")
                                ? "checked"
                                : ""
                              }`}
                            style={{
                              flexShrink: 0,
                              borderRadius: "100px",
                              border: "1px solid #7C6493",
                              background: formData.projectType.includes(
                                "Social media"
                              )
                                ? "#5A61FF"
                                : "rgba(255, 255, 255, 0.05)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              cursor: "pointer",
                            }}
                          >
                            <input
                              type="checkbox"
                              className="hidden-checkbox"
                              checked={formData.projectType.includes(
                                "Social media"
                              )}
                              onChange={() =>
                                handleCheckboxChangeService("Social media")
                              }
                              style={{ display: "none" }}
                            />
                            <span className="checkbox-text">Social media</span>
                          </label>

                          <label
                            className={`rectangle-parent4 ${formData.projectType.includes("Other")
                                ? "checked"
                                : ""
                              }`}
                            style={{
                              flexShrink: 0,
                              borderRadius: "100px",
                              border: "1px solid #7C6493",
                              background: formData.projectType.includes("Other")
                                ? "#5A61FF"
                                : "rgba(255, 255, 255, 0.05)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              cursor: "pointer",
                            }}
                          >
                            <input
                              type="checkbox"
                              className="hidden-checkbox"
                              checked={formData.projectType.includes("Other")}
                              onChange={() => handleCheckboxChangeService("Other")}
                              style={{ display: "none" }}
                            />
                            <span className="checkbox-text">Other</span>
                          </label>
                        </div>

                        <div className="another-div-child">
                          <label
                            className={`group-button child1 ${formData.projectBudget === "Less than $5K"
                                ? "checked"
                                : ""
                              }`}
                            style={{
                              flexShrink: 0,
                              borderRadius: "100px",
                              border: "1px solid #7C6493",
                              background:
                                formData.projectBudget === "Less than $5K"
                                  ? "#5A61FF"
                                  : "rgba(255, 255, 255, 0.05)",
                              alignItems: "center",
                              justifyContent: "center",
                              cursor: "pointer",
                            }}
                          >
                            <input
                              type="checkbox"
                              className="hidden-checkbox"
                              checked={formData.projectBudget === "Less than $5K"}
                              onChange={() => handleCheckboxChange("Less than $5K")}
                              style={{ display: "none" }}
                            />
                            <span className="checkbox-text">Less than $5K</span>
                          </label>

                          <label
                            className={`group-button child2 ${formData.projectBudget === "$5K to $10K"
                                ? "checked"
                                : ""
                              }`}
                            style={{
                              display: "flex",
                              flexShrink: 0,
                              borderRadius: "100px",
                              border: "1px solid #7C6493",
                              background:
                                formData.projectBudget === "$5K to $10K"
                                  ? "#5A61FF"
                                  : "rgba(255, 255, 255, 0.05)",
                              alignItems: "center",
                              justifyContent: "center",
                              cursor: "pointer",
                            }}
                          >
                            <input
                              type="checkbox"
                              className="hidden-checkbox"
                              checked={formData.projectBudget === "$5K to $10K"}
                              onChange={() => handleCheckboxChange("$5K to $10K")}
                              style={{ display: "none" }}
                            />
                            <span className="checkbox-text">$5K to $10K</span>
                          </label>

                          <label
                            className={`group-button child3 ${formData.projectBudget === "$10K to $25K"
                                ? "checked"
                                : ""
                              }`}
                            style={{
                              display: "flex",
                              // width: '306px',
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "10px",
                              borderRadius: "100px",
                              border: "1px solid #7C6493",
                              background:
                                formData.projectBudget === "$10K to $25K"
                                  ? "#5A61FF"
                                  : "rgba(255, 255, 255, 0.05)",
                            }}
                          >
                            <input
                              type="checkbox"
                              className="hidden-checkbox"
                              checked={formData.projectBudget === "$10K to $25K"}
                              onChange={() => handleCheckboxChange("$10K to $25K")}
                              style={{ display: "none" }}
                            />
                            <span className="checkbox-text">$10K to $25K</span>
                          </label>

                          <label
                            className={`group-button child4  ${formData.projectBudget === "$25K to $45K"
                                ? "checked"
                                : ""
                              }`}
                            style={{
                              display: "flex",
                              // width: '306px',
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "10px",
                              borderRadius: "100px",
                              border: "1px solid #7C6493",
                              background:
                                formData.projectBudget === "$25K to $45K"
                                  ? "#5A61FF"
                                  : "rgba(255, 255, 255, 0.05)",
                            }}
                          >
                            <input
                              type="checkbox"
                              className="hidden-checkbox"
                              checked={formData.projectBudget === "$25K to $45K"}
                              onChange={() => handleCheckboxChange("$25K to $45K")}
                              style={{ display: "none" }}
                            />
                            <span className="checkbox-text">$25K to $45K</span>
                          </label>
                        </div>

                        <div className="b-e-s-i-m-p-l-e-b-e-c-r-e-a-t1">
                          <div className="">
                            <div className="project-info-child" />
                            <div className="write-about-your-container">
                              <textarea
                                type="text"
                                className="write-about-your"
                                placeholder="Write about your project (Project name, scope of work, timeline, budget)*"
                                value={formData.projectDescription}
                                onChange={handleProjectDescriptionChange}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="button-container1">
                          <a
                            href="#"
                            className="magic-button1"
                            onClick={handleSubmit}
                          >
                            <span
                              className="submit-text"
                              style={{ color: "#525252" }}
                            >
                              SUBMIT APPLICATION
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="instagram-icon-frame">
                    <div className="dribbble-icon-frame" />
                    <div className="behance-icon-frame">
                      <div className="twitter-icon-frame">
                        <h3 className="ping-us">Ping us</h3>
                      </div>
                      <a href="#" className="marasihstudiogmailcom1">
                        marasihstudio@gmail.com
                      </a>
                    </div>
                    <div className="text-frame-with-image">
                      <h3 className="follow-us">Follow us</h3>
                      <div className="text-frame">
                        <a href="#" className="instagram">
                          Instagram
                        </a>
                        <div className="text-frame1">
                          <a href="#" className="linkedin">
                            LinkedIn
                          </a>
                        </div>
                        <a href="#" className="dribbble">
                          Dribbble
                        </a>
                        <a href="#" className="behance">
                          Behance
                        </a>
                        <a href="#" className="twitter">
                          Twitter
                        </a>
                        <div className="ellipse-shape-with-fill">
                          <div className="rectangle-shape" />
                          <a href="#" className="figma1">
                            Figma
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <Footer />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
