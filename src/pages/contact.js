import { useState } from "react";

import { useMediaQuery } from "react-responsive";
import emailjs from "emailjs-com";
import Footer from "./Footer";
import OffcanvasNavbar from "./OffcanvasNavbar";
import Offcanvas from "./Offcanvas";
import { useNavigate } from "react-router-dom";
import "./contact1.scss";
import FooterMobile from "./FooterMobile";
import ContactOffcanvasMenu from "./ContactOffcanvasMenu";
import ContactHeader from "./ContactHeader";
const Contact = () => {
  const [clickedLabels, setClickedLabels] = useState({
    MobileApp: false,
    Website: false,
    Branding: false,
    SocialMedia: false,
    Other: false,
  });

  const handleLabelClick = (labelName) => {
    setClickedLabels((prevState) => ({
      ...prevState,
      [labelName]: !prevState[labelName],
    }));
  };
  const [selectedBudgetMobile, setSelectedBudgetMobile] = useState(null);

  const handleBudgetLabelClick = (budget) => {
    setSelectedBudgetMobile((prevBudget) =>
      prevBudget === budget ? null : budget
    );
  };

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
  const navigate = useNavigate();

  const handleNavigation = (event, route) => {
    event.preventDefault();
    navigate(route);
  };
  const handleContactMenuClick = () => {
    // Show the Contact offcanvas menu
    const offcanvas = document.getElementById("offcanvasContact");
    if (offcanvas) {
      offcanvas.classList.add("show");
    }
  };
  return (
    <div>
      <div>
        {isMobile ? (
          <div>
            <div className="mobile-contact-page">
              <div className="contact-us1">
                {/* <div className="wrapper-star-1">
                  <img
                    className="wrapper-star-1-child"
                    alt=""
                    src="/star-1-mobile.svg"
                  />
                </div>
                <div className="wrapper-star-2">
                  <img
                    className="wrapper-star-2-child"
                    alt=""
                    src="/star-1-mobile.svg"
                  />
                </div> */}
                <section className="secondary-heading">
                  <div className="frame-parent22">
                    <div className="frame-parent23">
                      <div className="layer-1-container">
                        <img
                          className="layer-1-icon2"
                          loading="lazy"
                          alt=""
                          src="/layer-1.svg"
                        />
                      </div>
                      <div className="essetionalmenu">
      <div className="unleash-your-brand-story"></div>
      <img
        className="essetionalmenu-icon1"
        loading="lazy"
        alt=""
        src="/essetionalmenu.svg"
        onClick={handleContactMenuClick} // Call handleContactMenuClick on image click
      />
      <ContactOffcanvasMenu /> {/* Render the Contact offcanvas menu */}
    </div>
                    </div>
                    <div className="unleash-your-brands-story-wrapper">
                      <b className="unleash-your-brands">
                        Unleash Your Brand's Story
                      </b>
                    </div>
                  </div>
                  <div className="a-message-away-container">
                    <span>A message away from turning your dreams into </span>
                    <span className="digital-realities">digital realities</span>
                  </div>
                </section>
                <section className="mobile-dropdown-menu-wrapper">
                  <div className="mobile-dropdown-menu">
                    <div className="mobile-dropdown-menu-inner">
                      <div className="together-well-craft-a-digita-parent">
                        <div className="together-well-craft">
                          Together, we'll craft a digital landscape that goes
                          beyond limits and sets new standards for excellence.
                        </div>
                        <div className="frame-wrapper10">
                          <div className="rectangle-parent13">
                            <div className="frame-child25"></div>
                            <div className="frame-parent24">
                              <div className="lets-create-magic-wrapper">
                                <div className="lets-create-magic">
                                  Let’s create magic
                                </div>
                              </div>
                              <div className="div3">🎩</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="center" id="main">
                      <form className="group-form">
                        <div className="frame-child26"></div>
                        <div className="lets-create-special-parent">
                          <b className="lets-create-special">
                            Let’s create special
                          </b>
                          <div className="organisation-name-parent">
                            <div className="organisation-name"></div>
                            <div className="rectangle-parent14">
                              <div className="frame-child27"></div>
                              <input
                                className="your-name"
                                placeholder="Your name*"
                                type="text"
                              />
                            </div>
                          </div>
                          <div className="rectangle-parent15">
                            <div className="frame-child28"></div>
                            <input
                              className="your-email"
                              placeholder="Your Email*"
                              type="text"
                            />
                          </div>
                          <div className="rectangle-parent16">
                            <div className="frame-child29"></div>
                            <input
                              className="your-phone-number"
                              placeholder="Your phone number"
                              type="text"
                            />
                          </div>
                          <div className="rectangle-parent16">
                            <div className="frame-child29"></div>
                            <input
                              className="your-phone-number"
                              placeholder="Your Organization Name"
                              type="text"
                            />
                          </div>
                        </div>
                        <div className="frame-parent25">
                          <div className="design-tool-parent">
                            <div className="design-tool">
                              <div className="design-tool-child"></div>
                            </div>
                            <div className="select-your-project">
                              Select your project type:
                            </div>
                          </div>
                          <div className="button-background">
                            <div className="frame-parent26">
                              <label
                                className={`rectangle-parent17 ${
                                  clickedLabels.MobileApp ? "clicked" : ""
                                }`}
                                onClick={() => handleLabelClick("MobileApp")}
                                style={{
                                  backgroundColor: clickedLabels.MobileApp
                                    ? "#5a61ff"
                                    : "initial",
                                }}
                              >
                                <div className="frame-child31"></div>
                                <b className="mobile-app">Mobile app</b>
                              </label>
                              <label
                                className={`rectangle-parent18 ${
                                  clickedLabels.Website ? "clicked" : ""
                                }`}
                                onClick={() => handleLabelClick("Website")}
                                style={{
                                  backgroundColor: clickedLabels.Website
                                    ? "#5a61ff"
                                    : "initial",
                                }}
                              >
                                <div className="frame-child32"></div>
                                <b className="website">Website</b>
                              </label>
                            </div>
                            <div className="frame-parent27">
                              <label
                                className={`rectangle-parent19 ${
                                  clickedLabels.Branding ? "clicked" : ""
                                }`}
                                onClick={() => handleLabelClick("Branding")}
                                style={{
                                  backgroundColor: clickedLabels.Branding
                                    ? "#5a61ff"
                                    : "initial",
                                }}
                              >
                                <div className="frame-child33"></div>
                                <b className="branding">Branding</b>
                              </label>
                              <label
                                className={`rectangle-parent20 ${
                                  clickedLabels.SocialMedia ? "clicked" : ""
                                }`}
                                onClick={() => handleLabelClick("SocialMedia")}
                                style={{
                                  backgroundColor: clickedLabels.SocialMedia
                                    ? "#5a61ff"
                                    : "initial",
                                }}
                              >
                                <div className="frame-child34"></div>
                                <b className="social-media">Social media</b>
                              </label>
                            </div>
                            <label
                              className={`rectangle-parent21 ${
                                clickedLabels.Other ? "clicked" : ""
                              }`}
                              onClick={() => handleLabelClick("Other")}
                              style={{
                                backgroundColor: clickedLabels.Other
                                  ? "#5a61ff"
                                  : "initial",
                              }}
                            >
                              <div className="frame-child35"></div>
                              <b className="other">Other</b>
                            </label>
                          </div>
                        </div>
                        <div className="success-icon">
                          <div className="info-icon">
                            <div className="design-tool1">
                              <div className="design-tool-item"></div>
                            </div>
                            <div className="select-your-project1">
                              Select your project budget:
                            </div>
                          </div>
                          <div className="frame-parent28">
                            <div className="frame-parent29">
                              <label
                                className={`rectangle-parent22 ${
                                  selectedBudgetMobile === "< $5K"
                                    ? "selected"
                                    : ""
                                }`}
                                onClick={() => handleBudgetLabelClick("< $5K")}
                                style={{
                                  backgroundColor:
                                    selectedBudgetMobile === "< $5K"
                                      ? "#5a61ff"
                                      : "initial",
                                }}
                              >
                                <div className="frame-child36"></div>
                                <b className="less-than-5k">Less than $5K</b>
                              </label>
                              <label
                                className={`rectangle-parent23 ${
                                  selectedBudgetMobile === "$5K - $10K"
                                    ? "selected"
                                    : ""
                                }`}
                                onClick={() =>
                                  handleBudgetLabelClick("$5K - $10K")
                                }
                                style={{
                                  backgroundColor:
                                    selectedBudgetMobile === "$5K - $10K"
                                      ? "#5a61ff"
                                      : "initial",
                                }}
                              >
                                <div className="frame-child37"></div>
                                <b className="k-to-10k">$5K to $10K</b>
                              </label>
                            </div>
                            <div className="frame-parent30">
                              <label
                                className={`rectangle-parent24 ${
                                  selectedBudgetMobile === "$10K - $25K"
                                    ? "selected"
                                    : ""
                                }`}
                                onClick={() =>
                                  handleBudgetLabelClick("$10K - $25K")
                                }
                                style={{
                                  backgroundColor:
                                    selectedBudgetMobile === "$10K - $25K"
                                      ? "#5a61ff"
                                      : "initial",
                                }}
                              >
                                <div className="frame-child38"></div>
                                <b className="k-to-25k">$10K to $25K</b>
                              </label>
                              <label
                                className={`rectangle-parent25 ${
                                  selectedBudgetMobile === "$25K - $45K"
                                    ? "selected"
                                    : ""
                                }`}
                                onClick={() =>
                                  handleBudgetLabelClick("$25K - $45K")
                                }
                                style={{
                                  backgroundColor:
                                    selectedBudgetMobile === "$25K - $45K"
                                      ? "#5a61ff"
                                      : "initial",
                                }}
                              >
                                <div className="frame-child39"></div>
                                <b className="k-to-45k">$25K to $45K</b>
                              </label>
                            </div>
                          </div>
                        </div>
                        <input
                          className="input-style"
                          type="text"
                          placeholder="Write about your project (Project name, scope of work, timeline, budget)*')"
                        />

                        <div className="output-processor">
                          <div className="rectangle-parent26">
                            <div className="frame-child40"></div>
                            <button className="value-merger">
                              <div className="submit-application">
                                SUBMIT APPLICATION
                              </div>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="rectangle-parent27">
                      <div className="frame-child41"></div>
                      <div className="figma-workspace-wrapper">
                        <div className="figma-workspace">
                          <div className="be-simple-create">
                            <b className="ping-us">Ping us</b>
                          </div>
                          <div className="marasihstudiogmailcom">
                            marasihstudio@gmail.com
                          </div>
                        </div>
                      </div>
                      <div className="frame-parent31">
                        <div className="ellipse-parent1">
                          <div className="frame-child42"></div>
                          <div className="design-social-icons">
                            <b className="follow-us1">Follow us</b>
                          </div>
                        </div>
                        <div className="frame-parent32">
                          <div className="instagram-parent">
                            <div className="instagram">Instagram</div>
                            <div className="behance-wrapper">
                              <div className="behance">Behance</div>
                            </div>
                          </div>
                          <div className="linkedin-parent">
                            <div className="linkedin">LinkedIn</div>
                            <div className="twitter-wrapper">
                              <div className="twitter">Twitter</div>
                            </div>
                          </div>
                          <div className="frame-parent33">
                            <div className="frame-wrapper11">
                              <div className="ellipse-parent2">
                                <div className="frame-child43"></div>
                                <div className="dribbble">Dribbble</div>
                              </div>
                            </div>
                            <div className="figma">Figma</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {/* <section className="group-section">
                  <div className="ellipse-parent3">
                    <div className="frame-child44"></div>
                    <div className="frame-child45"></div>
                    <img
                      className="frame-child46"
                      alt=""
                      src="/rectangle.png"
                    />
                  </div>
                  <div className="simple-creative">
                    <h1 className="be-simple-be-container1">
                      <p className="be-simple1">BE SIMPLE.</p>
                      <p className="be-creative1">BE CREATIVE.</p>
                    </h1>
                  </div>
                  <div className="frame-wrapper12">
                    <div className="work-about-us-parent">
                      <div className="work-about-us">
                        <div className="got-an-idea1">Got an idea?</div>
                      </div>
                      <div className="rectangle-parent28">
                        <div className="frame-child47"></div>
                        <button className="frame-parent34">
                          <div className="lets-get-in-touch-container">
                            <div className="lets-get-in1">
                              Let’s get in touch
                            </div>
                          </div>
                          <img
                            className="emoji-dizzy-icon1"
                            alt=""
                            src="/-emoji-dizzy.svg"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="line-wrapper">
                    <div className="frame-child48"></div>
                  </div>
                  <div className="design-studio1">
                    <div className="blogs-and-contact-us">
                      <img
                        className="layer-1-icon3"
                        loading="lazy"
                        alt=""
                        src="/layer-1-1.svg"
                      />

                      <div className="design-studio-container">
                        <div className="design-studio2">Design Studio</div>
                      </div>
                    </div>
                  </div>
                  <div className="label-stack">
                    <div className="icon-grid">
                      <div className="explore1">Explore</div>
                      <div className="list-item-batch-parent">
                        <div className="list-item-batch">
                          <div className="work-group">
                            <div className="work1">Work</div>
                            <div className="about-us1">About us</div>
                          </div>
                          <div className="follow-us2">Follow us</div>
                        </div>
                        <div className="blogs1">Blogs</div>
                        <div className="contact-us2">Contact us</div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-wrapper13">
                    <div className="social-icons-group">
                      <img
                        className="social-icons5"
                        loading="lazy"
                        alt=""
                        src="/social-icons.svg"
                      />

                      <img
                        className="social-icons6"
                        loading="lazy"
                        alt=""
                        src="/social-icons-1.svg"
                      />

                      <img
                        className="component-2-icon1"
                        loading="lazy"
                        alt=""
                        src="/component-2.svg"
                      />

                      <img
                        className="social-icons7"
                        loading="lazy"
                        alt=""
                        src="/social-icons-2.svg"
                      />

                      <img
                        className="social-icons8"
                        loading="lazy"
                        alt=""
                        src="/social-icons-3.svg"
                      />

                      <img
                        className="social-icons9"
                        loading="lazy"
                        alt=""
                        src="/social-icons-4.svg"
                      />

                      <img
                        className="frame-child49"
                        loading="lazy"
                        alt=""
                        src="/frame-48.svg"
                      />
                    </div>
                  </div>
                  <div className="marasih-studio-all-rights-res-container">
                    <div className="marasih-studio-all1">
                      2024 @ marasih studio. All rights reserved
                    </div>
                  </div>
                </section> */}
                <FooterMobile />
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="desktop-contact-page">
              <div className="marasinh-contact-page">
                <div className="container-group">
                  {/* <header className="group-main">
                    <img
                      className="layer-1-icon5"
                      loading="eager"
                      alt=""
                      src="/layer-1.svg"
                    />

                    <div className="inner-frames">
                      <div className="content-frame">
                        <div className="link-frame">
                          <div className="text-container">
                            <a
                              href="/"
                              className="work"
                              onClick={(e) => handleNavigation(e, "/")}
                            >
                              Home
                            </a>
                          </div>
                          <div className="frame-footer">
                            <div className="" />
                            <div
                              href="/"
                              className="about3"
                              onClick={(e) => handleNavigation(e, "/work")}
                            >
                              Work
                            </div>
                          </div>
                          <div className="contact-info-frame">
                            <div className="" />
                            <div
                              href="/"
                              className="contact-us"
                              onClick={(e) => handleNavigation(e, "/about")}
                            >
                              About us
                            </div>
                          </div>
                        </div>
                      </div>
                      <button className="rectangle-parent19">
                        <div className="frame-child28" />
                        <div className="lets-talk7">Contact</div>
                      </button>
                    </div>
                  </header> */}
                  <ContactHeader />
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
                    <b className="unleash-your-brands">
                      Unleash Your Brand's Story
                    </b>
                    <div className="explore-link">
                      <div className="wrapper-about-us-links">
                        <img
                          className="about-us-links"
                          loading="eager"
                          alt=""
                          src="/star-1-mobile.svg"
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
                        <span className="digital-realities">
                          digital realities
                        </span>
                      </h1>
                    </div>
                    <div className="contact-info-frames">
                      <div className="together-well-craft">
                        {" "}
                        <p>
                          Together, we'll craft a digital landscape that goes
                          beyond limits and sets new standards for excellence.
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
                              onChange={(e) =>
                                handleInputChange(e, "phoneNumber")
                              }
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

                          {/* <div className="content-area1" />
                          <div className="content-area1" /> */}

{/* <div className="mobile-app-website-group">
  <div className="select-your-project">
    <span className="bullet-point"></span>
    Select your project type:
  </div>
</div> */}
   <div style={{ display: 'flex', alignItems: 'center', marginLeft: '-1040px' }}>
      <div className="bullet"></div>
      <span style={{ fontFamily: 'figtree', fontWeight: 600, color: '#B2B2B2', fontSize: '29px' }}>Select your project type:</span>
    </div>
                          <div className="work-aboutus-blogs-contactus">
                            <label
                              className={`rectangle-parent4 ${
                                formData.projectType.includes("Mobile app")
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
                                checked={formData.projectType.includes(
                                  "Mobile app"
                                )}
                                onChange={() =>
                                  handleCheckboxChangeService("Mobile app")
                                }
                                style={{ display: "none" }}
                              />
                              <span className="checkbox-text">Mobile app</span>
                            </label>

                            <label
                              className={`rectangle-parent4 ${
                                formData.projectType.includes("Website")
                                  ? "checked"
                                  : ""
                              }`}
                              style={{
                                flexShrink: 0,
                                borderRadius: "100px",
                                border: "1px solid #7C6493",
                                background: formData.projectType.includes(
                                  "Website"
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
                                  "Website"
                                )}
                                onChange={() =>
                                  handleCheckboxChangeService("Website")
                                }
                                style={{ display: "none" }}
                              />
                              <span className="checkbox-text">Website</span>
                            </label>

                            <label
                              className={`rectangle-parent4 ${
                                formData.projectType.includes("Branding")
                                  ? "checked"
                                  : ""
                              }`}
                              style={{
                                flexShrink: 0,
                                borderRadius: "100px",
                                border: "1px solid #7C6493",
                                background: formData.projectType.includes(
                                  "Branding"
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
                                  "Branding"
                                )}
                                onChange={() =>
                                  handleCheckboxChangeService("Branding")
                                }
                                style={{ display: "none" }}
                              />
                              <span className="checkbox-text">Branding</span>
                            </label>

                            <label
                              className={`rectangle-parent4 ${
                                formData.projectType.includes("Social media")
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
                              <span className="checkbox-text">
                                Social media
                              </span>
                            </label>

                            <label
                              className={`rectangle-parent4 ${
                                formData.projectType.includes("Other")
                                  ? "checked"
                                  : ""
                              }`}
                              style={{
                                flexShrink: 0,
                                borderRadius: "100px",
                                border: "1px solid #7C6493",
                                background: formData.projectType.includes(
                                  "Other"
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
                                checked={formData.projectType.includes("Other")}
                                onChange={() =>
                                  handleCheckboxChangeService("Other")
                                }
                                style={{ display: "none" }}
                              />
                              <span className="checkbox-text">Other</span>
                            </label>
                          </div>

                          <div style={{ display: 'flex', alignItems: 'center', marginLeft: '-1013px', marginBottom: '-20px',marginTop:'23px' }}>
      <div className="bullet"></div>
      <span style={{ fontFamily: 'figtree', fontWeight: 600, color: '#B2B2B2', fontSize: '29px' }}>Select your project budget:</span>
    </div>
                          <div className="another-div-child">
                            <label
                              className={`group-button child1 ${
                                formData.projectBudget === "Less than $5K"
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
                                checked={
                                  formData.projectBudget === "Less than $5K"
                                }
                                onChange={() =>
                                  handleCheckboxChange("Less than $5K")
                                }
                                style={{ display: "none" }}
                              />
                              <span className="checkbox-text">
                                Less than $5K
                              </span>
                            </label>

                            <label
                              className={`group-button child2 ${
                                formData.projectBudget === "$5K to $10K"
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
                                checked={
                                  formData.projectBudget === "$5K to $10K"
                                }
                                onChange={() =>
                                  handleCheckboxChange("$5K to $10K")
                                }
                                style={{ display: "none" }}
                              />
                              <span className="checkbox-text">$5K to $10K</span>
                            </label>

                            <label
                              className={`group-button child3 ${
                                formData.projectBudget === "$10K to $25K"
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
                                checked={
                                  formData.projectBudget === "$10K to $25K"
                                }
                                onChange={() =>
                                  handleCheckboxChange("$10K to $25K")
                                }
                                style={{ display: "none" }}
                              />
                              <span className="checkbox-text">
                                $10K to $25K
                              </span>
                            </label>

                            <label
                              className={`group-button child4  ${
                                formData.projectBudget === "$25K to $45K"
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
                                checked={
                                  formData.projectBudget === "$25K to $45K"
                                }
                                onChange={() =>
                                  handleCheckboxChange("$25K to $45K")
                                }
                                style={{ display: "none" }}
                              />
                              <span className="checkbox-text">
                                $25K to $45K
                              </span>
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
                                  style={{ overflow: 'hidden', resize: 'none' }}

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

                    {/* <div className="instagram-icon-frame">
                    <div className="" />
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
                          <div className="" />
                          <a href="#" className="figma1">
                            Figma
                          </a>
                        </div>
                      </div>
                    </div>
                  </div> */}
                    <div className="container-ping-us">
                      <img
                        className="ping-us-rect"
                        src="/ping-us-rect.png"
                        alt=""
                      />
                      <div className="content-overlay">
                        <div className="instagram-icon-frame">
                          <div className=""></div>
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
                                <div className=""></div>
                                <a href="#" className="figma1">
                                  Figma
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  <Footer />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
