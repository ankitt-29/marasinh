import React, { useRef, useState, useEffect } from "react";

import "./home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Footer";
import Test from "./Test";

const HeaderFrame = () => {
  const sliderRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedBudget, setSelectedBudget] = useState("");
  const [isHoveredDribbble, setIsHoveredDribbble] = useState(false);
  const [isHoveredLinkedIn, setIsHoveredLinkedIn] = useState(false);
  const [isHoveredInstagram, setIsHoveredInstagram] = useState(false);
  const [isHoveredX, setIsHoveredX] = useState(false);
  const [isHoveredFigma, setIsHoveredFigma] = useState(false);
  const [isHoveredFacebook, setIsHoveredFacebook] = useState(false);
  const [isHoveredBento, setIsHoveredBento] = useState(false);

  const isBudgetChecked = (checkboxName) => selectedBudget === checkboxName;

  const handleCheckboxChange = (checkboxName) => {
    setSelectedBudget(checkboxName);
  };

  const isCheckboxChecked = (checkboxName) =>
    selectedServices.includes(checkboxName);

  const handleCheckboxChangeService = (checkboxName) => {
    if (selectedServices.includes(checkboxName)) {
      setSelectedServices(
        selectedServices.filter((item) => item !== checkboxName)
      );
    } else {
      setSelectedServices([...selectedServices, checkboxName]);
    }
  };

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

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="marasih-home-page">
      <div className="header-frame">
        <div className="we-are-marasih">We are marasih studio</div>
        <div className="design-that-inspires">
          Design that Inspires, Connects, and Sparks Growth
        </div>
        <div className="rectangle-parent9">
          <div className="frame-child10" />
          <div className="lets-talk1">Let’s talk</div>
          <img className="emoji-waving-hand" alt="" />
        </div>
        <section className="content-group">
          <header className="first-mask-group">
            <img
              className="layer-1-icon2"
              loading="eager"
              alt=""
              src="/layer-11.svg"
            />
            <div className="third-frame">
              <div className="frame-footer-home">
                <div className="group-links-home" />
                <a href="/" className="about3-home">
                  Home
                </a>
              </div>
              <a href="/about" className="about1">
                About
              </a>
              <a href="/contact" className="contact-us2">
                Contact us
              </a>
              <button className="project-deliveries">
                <div className="project-deliveries-child" />
                <div className="lets-talk2">Let’s Talk</div>
              </button>
            </div>
          </header>
          <div className="team-intro-frame">
            <div className="first-name-frame">
              <div className="last-name-frame" />
              <b className="we-marasih-studio">We marasih studio</b>
            </div>
            <h1 className="design-that-inspires-container">
              <span>{`Design that Inspires, Connects, & `}</span>
              <span className="sparks-growth">Sparks Growth</span>
            </h1>
          </div>
        </section>
        <div className="contact-us-frame">
          <div className="">
            <div className="frame-child11" />

            <div className="button-container3">
              <a href="#" className="magic-button3">
                Let’s talk{" "}
                <img
                  className="emoji-waving-hand1"
                  alt=""
                  src="/-emoji-waving-hand-1.svg"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="outer-box">
          <div className="circle-button">
            <div className="circle-container">
              <button className="circle-button1" onClick={handlePrev}>
                <i class="fa-solid fa-arrow-right arrow-top-left"></i>
              </button>
              <button className="circle-button2" onClick={handleNext}>
                <i class="fa-solid fa-arrow-right arrow-top"></i>
              </button>
            </div>
          </div>
          <div className="rectangle-frame">
            <div className="three-cards">
              <div className="header-text-container">
                <div className="crafted-with-care">Crafted with Care</div>
              </div>
              <div className="frame-content-container">
                <h2 className="crafted-with-precision-container">
                  <span>{`Crafted with Precision, `}</span>
                  <span className="infused-with-passion">
                    Infused with Passion
                  </span>
                </h2>
              </div>
            </div>
          </div>

          <div>
            <Slider ref={sliderRef} {...settings}>
              <div className="crafted-container" key={1}>
                <div className="crafted-box">
                  <img
                    className="inner-img"
                    src="/Mask group 1.png"
                    alt="Card 1"
                  />
                  <div className="crafted-inner">
                    <div className="services-desc">
                      <div className="crafted-card-big-text">Socialline</div>
                      <div className="crafted-card-small-text">
                        UX research & UI design
                      </div>
                    </div>
                  </div>
                  <div className="outlined-circle">
                    <i class="fa-solid fa-arrow-right arrow-icon-1"></i>
                  </div>
                </div>
              </div>

              <div className="crafted-container" key={2}>
                <div className="crafted-box">
                  <img
                    className="inner-img"
                    src="/Mask group 2.png"
                    alt="Card 1"
                  />
                  <div className="crafted-inner">
                    <div className="services-desc">
                      <div className="crafted-card-big-text">
                        Dor - Dating app
                      </div>
                      <div className="crafted-card-small-text">
                        {" "}
                        UX research and UI design
                      </div>
                    </div>
                  </div>
                  <div className="outlined-circle">
                    <i class="fa-solid fa-arrow-right arrow-icon-1"></i>
                  </div>
                </div>
              </div>

              <div className="crafted-container" key={3}>
                <div className="crafted-box">
                  <img
                    className="inner-img"
                    src="/Mask group 3.png"
                    alt="Card 2"
                  />
                  <div className="crafted-inner">
                    <div className="services-desc">
                      <div className="crafted-card-big-text">Panache</div>
                      <div className="crafted-card-small-text">
                        Logo & Brand identity
                      </div>
                    </div>
                  </div>
                  <div className="outlined-circle">
                    <i class="fa-solid fa-arrow-right arrow-icon-1"></i>
                  </div>
                </div>
              </div>

              <div className="crafted-container" key={4}>
                <div className="crafted-box"></div>
              </div>
            </Slider>
          </div>
        </div>
        <div className="mobile-outer-box">
          <div className="mobile-rectangle-frame">
            <div className="mobile-three-cards">
              <div className="mobile-header-text-container">
                <div className="mobile-crafted-with-care">
                  Crafted with Care
                </div>
              </div>
              <div className="mobile-frame-content-container">
                <h2 className="mobile-crafted-with-precision-container">
                  <span>Crafted with Precision,</span>
                </h2>
                <span className="mobile-infused-with-passion">
                  Infused with Passion
                </span>
              </div>
            </div>
          </div>

          <div className="mobile-crafted-container" key={1}>
            <div className="mobile-crafted-box">
              <div className="mobile-crafted-inner">
                <div className="mobile-services-desc">
                  <div className="mobile-crafted-card-big-text">Socialline</div>
                  <div className="mobile-crafted-card-small-text">
                    UX research & UI design
                  </div>
                </div>
              </div>
              <div className="mobile-outlined-circle">
                <i class="fa-solid fa-arrow-right mobile-arrow-icon-1"></i>
              </div>
            </div>
          </div>

          <div className="mobile-crafted-container" key={2}>
            <div className="mobile-crafted-box">
              {/* <img
        className="mobile-inner-img"
        src="/Mask group 2.png"
        alt="Card 1"
      /> */}
              <div className="mobile-crafted-inner">
                <div className="mobile-services-desc">
                  <div className="mobile-crafted-card-big-text">
                    Dor - Dating app
                  </div>
                  <div className="mobile-crafted-card-small-text">
                    UX research and UI design
                  </div>
                </div>
              </div>
              <div className="mobile-outlined-circle">
                <i class="fa-solid fa-arrow-right mobile-arrow-icon-1"></i>
              </div>
            </div>
          </div>

          <div className="mobile-crafted-container" key={3}>
            <div className="mobile-crafted-box">
              {/* <img
        className="mobile-inner-img"
        src="/Mask group 3.png"
        alt="Card 2"
      /> */}
              <div className="mobile-crafted-inner">
                <div className="mobile-services-desc">
                  <div className="mobile-crafted-card-big-text">Panache</div>
                  <div className="mobile-crafted-card-small-text">
                    Logo & Brand identity
                  </div>
                </div>
              </div>
              <div className="mobile-outlined-circle">
                <i class="fa-solid fa-arrow-right mobile-arrow-icon-1"></i>
              </div>
            </div>
          </div>

          <div className="mobile-crafted-container" key={4}>
            <div className="mobile-crafted-box"></div>
          </div>
        </div>

        <div className="fixed-container">
          <Test />
        </div>
        <div>
          {isMobile ? (
            <div>
              <div className="mobile-custom-class">
                <img className="mini-figma" src="/group-34406@2x.png" alt="" />
                <img src="/industry-leading.png" alt="" />
                <button className="frame-elements">
                    <div className="lets-create-a">Let’s create a thing</div>
                    <img
                      className="emoji-sparkles-icon"
                      alt=""
                      src="/-emoji-sparkles.svg"
                    />
                  </button>

                  <img className="unveiling" src="/unveiling.png" alt="" />
                  <img className="unveiling" src="/projects.png" alt="" />
              </div>
            </div>
          ) : (
            <div>
              <section className="project-card">
                <div className="frame-background">
                  <div className="frame-border">
                    <div className="masters-of-the">
                      Masters of the Digital Canvas
                    </div>
                    <div className="button-element">
                      <h1 className="proficiency-amplified-with-container">
                        <span>{`Proficiency Amplified with `}</span>
                        <span className="industry-leading-tools">
                          Industry-Leading Tools
                        </span>
                      </h1>
                      <div className="crafting-excellence-with">
                        Crafting excellence with a toolkit of innovation. Our
                        proficiency spans Figma, Photoshop, Illustrator, Adobe
                        XD, After Effects, and WordPress. Elevate your digital
                        experience with our mastery in these industry-leading
                        tools. From seamless designs to dynamic websites, we
                        bring your vision to life with precision and creativity
                      </div>
                    </div>
                  </div>
                  <button className="frame-elements">
                    <div className="lets-create-a">Let’s create a thing</div>
                    <img
                      className="emoji-sparkles-icon"
                      alt=""
                      src="/-emoji-sparkles.svg"
                    />
                  </button>
                </div>
                <div className="wrapper-group-34406">
                  <img
                    className="wrapper-group-34406-child"
                    loading="eager"
                    alt=""
                    src="/group-34406@2x.png"
                  />
                </div>
              </section>
              <section className="project-showcase">
                <div className="crafted-projects">
                  <div className="crafted-projects-child" />
                  <div className="mask-group1">
                    <img
                      className="mask-group-inner"
                      alt=""
                      src="/group-34407@2x.png"
                    />
                    <div className="digits-of-design1">Digits of Design</div>
                    <h2 className="unveiling-our-design-container">
                      <span>Unveiling Our Design</span>
                      <span className="universe-in-stats">
                        {" "}
                        Universe in Stats
                      </span>
                    </h2>
                    <div className="our-numbers-tell">
                      Our numbers tell a story of dedication – from a multitude
                      of successful projects and a dynamic team to a growing
                      list of satisfied clients.
                    </div>
                    <button className="lets-craft-your-product-parent">
                      <div className="lets-craft-your">
                        Let’s craft your product
                      </div>
                      <img
                        className="emoji-high-voltage"
                        alt=""
                        src="/-emoji-high-voltage.svg"
                      />
                    </button>
                  </div>
                </div>
                <div className="successful-delivery">
                  <div className="frame-global-projects">
                    <div className="frame-mask-group">
                      <div className="frame-mask-group-child" />
                      <div className="client-projects">
                        <div className="frame-letters">
                          <span>60</span>
                          <span className="span">+</span>
                        </div>
                        <div className="project-successfully-delivered">
                          <div className="project">Project</div>
                          <div className="successfully-delivered-project">
                            successfully delivered projects around the globe
                          </div>
                        </div>
                        <img
                          className="mask-group-icon1"
                          alt=""
                          src="/mask-group-1.svg"
                        />
                      </div>
                    </div>
                    <div className="frame-mask-group1">
                      <div className="frame-mask-group-item" />
                      <img
                        className="mask-group-icon2"
                        alt=""
                        src="/mask-group-2.svg"
                      />
                      <div className="rectangle-group1">
                        <span>20</span>
                        <span className="span1">+</span>
                      </div>
                      <div className="frame-client-services">
                        <div className="clients">Clients</div>
                        <div className="successfully-served-services">
                          successfully served services clients around the globe
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="gratification-glimpses">
                    <div className="gratification-glimpses-child" />
                    <img
                      className="mask-group-icon3"
                      alt=""
                      src="/mask-group-3.svg"
                    />
                    <div className="client-praise-frame-container">
                      <span>12</span>
                      <span className="span2">+</span>
                    </div>
                    <div className="captivating-user-experiences1">
                      <div className="team-members">Team members</div>
                      <div className="creative-and-beautiful">
                        Creative and beautiful team of peoples to upscale
                        product and scale your product
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="designer-frame-parent">
                <div className="designer-frame">
                  <div className="initiative-taken" />
                  <div className="co-founder-c-t-o-ellipse">
                    <div className="digital-design-expertise-parent">
                      <div className="digital-design-expertise">
                        <div className="digital-design-expertise-child" />
                        <div className="digital-design-expertise-item" />
                      </div>
                      <div className="gratification-glance-frame" />
                      <div className="darshil-is-a">
                        Darshil is a talented designer and took initiative in
                        building the Ul/UX architecture for our application. He
                        is quick and his attention to detail and general Ul
                        creativity is great. I recommend him highly for any
                        project in UI/UX design.
                      </div>
                    </div>
                    <img
                      className="icon"
                      loading="eager"
                      alt=""
                      src="/coma.png"
                    />
                  </div>
                  <div className="designer-frame-inner">
                    <div className="ellipse-group">
                      <img
                        className="ellipse-icon"
                        loading="eager"
                        alt=""
                        src="/ellipse-820@2x.png"
                      />
                      <div className="arpit-bajpai-parent">
                        <div className="arpit-bajpai">Arpit Bajpai</div>
                        <div className="co-founder-cto">{`Co-Founder & CTO at LegalAI`}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="glimpses-grati-ful">
                  <div className="frame-glob-projects">
                    <div className="team-members-frame">
                      <div className="glimpses-of-gratification">
                        Glimpses of Gratification
                      </div>
                      <h1 className="unwavering-praise-for-container">
                        <span>{`Unwavering Praise for Our `}</span>
                        <span className="digital-design-expertise1">
                          Digital Design Expertise
                        </span>
                      </h1>
                      <div className="captivating-user-experiences2">
                        Captivating User Experiences, Unwavering Brand Loyalty.
                        Discover the impact of our meticulously crafted designs,
                        from evoking awe-inspiring user experiences to fostering
                        unwavering brand loyalty. Let our clients' stories serve
                        as a testament to our unwavering commitment to design
                        excellence.
                      </div>
                    </div>
                    <button className="lets-create-phenomenal-parent">
                      <div className="lets-create-phenomenal">
                        Let’s create phenomenal
                      </div>
                      <img
                        className="emoji-rainbow-icon"
                        alt=""
                        src="/-emoji-rainbow.svg"
                      />
                    </button>
                  </div>
                </div>
              </section>{" "}
            </div>
          )}
        </div>
        {/* 
        <section className="project-card">
          <div className="frame-background">
            <div className="frame-border">
              <div className="masters-of-the">
                Masters of the Digital Canvas
              </div>
              <div className="button-element">
                <h1 className="proficiency-amplified-with-container">
                  <span>{`Proficiency Amplified with `}</span>
                  <span className="industry-leading-tools">
                    Industry-Leading Tools
                  </span>
                </h1>
                <div className="crafting-excellence-with">
                  Crafting excellence with a toolkit of innovation. Our
                  proficiency spans Figma, Photoshop, Illustrator, Adobe XD,
                  After Effects, and WordPress. Elevate your digital experience
                  with our mastery in these industry-leading tools. From
                  seamless designs to dynamic websites, we bring your vision to
                  life with precision and creativity
                </div>
              </div>
            </div>
            <button className="frame-elements">
              <div className="lets-create-a">Let’s create a thing</div>
              <img
                className="emoji-sparkles-icon"
                alt=""
                src="/-emoji-sparkles.svg"
              />
            </button>
          </div>
          <div className="wrapper-group-34406">
            <img
              className="wrapper-group-34406-child"
              loading="eager"
              alt=""
              src="/group-34406@2x.png"
            />
          </div>
        </section>
        <section className="project-showcase">
          <div className="crafted-projects">
            <div className="crafted-projects-child" />
            <div className="mask-group1">
              <img
                className="mask-group-inner"
                alt=""
                src="/group-34407@2x.png"
              />
              <div className="digits-of-design1">Digits of Design</div>
              <h2 className="unveiling-our-design-container">
                <span>Unveiling Our Design</span>
                <span className="universe-in-stats"> Universe in Stats</span>
              </h2>
              <div className="our-numbers-tell">
                Our numbers tell a story of dedication – from a multitude of
                successful projects and a dynamic team to a growing list of
                satisfied clients.
              </div>
              <button className="lets-craft-your-product-parent">
                <div className="lets-craft-your">Let’s craft your product</div>
                <img
                  className="emoji-high-voltage"
                  alt=""
                  src="/-emoji-high-voltage.svg"
                />
              </button>
            </div>
          </div>
          <div className="successful-delivery">
            <div className="frame-global-projects">
              <div className="frame-mask-group">
                <div className="frame-mask-group-child" />
                <div className="client-projects">
                  <div className="frame-letters">
                    <span>60</span>
                    <span className="span">+</span>
                  </div>
                  <div className="project-successfully-delivered">
                    <div className="project">Project</div>
                    <div className="successfully-delivered-project">
                      successfully delivered projects around the globe
                    </div>
                  </div>
                  <img
                    className="mask-group-icon1"
                    alt=""
                    src="/mask-group-1.svg"
                  />
                </div>
              </div>
              <div className="frame-mask-group1">
                <div className="frame-mask-group-item" />
                <img
                  className="mask-group-icon2"
                  alt=""
                  src="/mask-group-2.svg"
                />
                <div className="rectangle-group1">
                  <span>20</span>
                  <span className="span1">+</span>
                </div>
                <div className="frame-client-services">
                  <div className="clients">Clients</div>
                  <div className="successfully-served-services">
                    successfully served services clients around the globe
                  </div>
                </div>
              </div>
            </div>
            <div className="gratification-glimpses">
              <div className="gratification-glimpses-child" />
              <img
                className="mask-group-icon3"
                alt=""
                src="/mask-group-3.svg"
              />
              <div className="client-praise-frame-container">
                <span>12</span>
                <span className="span2">+</span>
              </div>
              <div className="captivating-user-experiences1">
                <div className="team-members">Team members</div>
                <div className="creative-and-beautiful">
                  Creative and beautiful team of peoples to upscale product and
                  scale your product
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="designer-frame-parent">
          <div className="designer-frame">
            <div className="initiative-taken" />
            <div className="co-founder-c-t-o-ellipse">
              <div className="digital-design-expertise-parent">
                <div className="digital-design-expertise">
                  <div className="digital-design-expertise-child" />
                  <div className="digital-design-expertise-item" />
                </div>
                <div className="gratification-glance-frame" />
                <div className="darshil-is-a">
                  Darshil is a talented designer and took initiative in building
                  the Ul/UX architecture for our application. He is quick and
                  his attention to detail and general Ul creativity is great. I
                  recommend him highly for any project in UI/UX design.
                </div>
              </div>
              <img className="icon" loading="eager" alt="" src="/coma.png" />
            </div>
            <div className="designer-frame-inner">
              <div className="ellipse-group">
                <img
                  className="ellipse-icon"
                  loading="eager"
                  alt=""
                  src="/ellipse-820@2x.png"
                />
                <div className="arpit-bajpai-parent">
                  <div className="arpit-bajpai">Arpit Bajpai</div>
                  <div className="co-founder-cto">{`Co-Founder & CTO at LegalAI`}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="glimpses-grati-ful">
            <div className="frame-glob-projects">
              <div className="team-members-frame">
                <div className="glimpses-of-gratification">
                  Glimpses of Gratification
                </div>
                <h1 className="unwavering-praise-for-container">
                  <span>{`Unwavering Praise for Our `}</span>
                  <span className="digital-design-expertise1">
                    Digital Design Expertise
                  </span>
                </h1>
                <div className="captivating-user-experiences2">
                  Captivating User Experiences, Unwavering Brand Loyalty.
                  Discover the impact of our meticulously crafted designs, from
                  evoking awe-inspiring user experiences to fostering unwavering
                  brand loyalty. Let our clients' stories serve as a testament
                  to our unwavering commitment to design excellence.
                </div>
              </div>
              <button className="lets-create-phenomenal-parent">
                <div className="lets-create-phenomenal">
                  Let’s create phenomenal
                </div>
                <img
                  className="emoji-rainbow-icon"
                  alt=""
                  src="/-emoji-rainbow.svg"
                />
              </button>
            </div>
          </div>
        </section> */}

        <Footer />
        {/* <div className="custom-rectangle">
          <section className="empty-ellipse">
            <div className="inner-ellipse">
              <div className="design-studio-title">
                <img src="/BE SIMPLE. BE CREATIVE..png"></img>
                <div className="idea-frame">
                  <div className="contact-frame">
                    <div className="got-an-idea">Got an idea?</div>

                    <div className="button-container2">
                      <a href="#" className="magic-button2">
                        <span
                          className="submit-text"
                          style={{ color: "#525252" }}
                        >
                          Let’s get in touch
                        </span>{" "}
                        <img className="star-img" src="/star-png.png"></img>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="inner-ellipse-child" />
            </div>
            <div className="empty-ellipse-inner">
              <div className="design-studio-container-parent">
                <div className="design-studio-container">
                  <div className="content-explore">
                    <div className="social-icons-frame">
                      <div className="ellipse-parent">
                        <svg
                          width="801"
                          height="864"
                          viewBox="0 0 801 864"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g filter="url(#filter0_f_408_2585)">
                            <circle
                              cx="241"
                              cy="560"
                              r="160"
                              fill="#777CF6"
                              fill-opacity="0.4"
                            />
                          </g>
                          <defs>
                            <filter
                              id="filter0_f_408_2585"
                              x="-319"
                              y="0"
                              width="1120"
                              height="1120"
                              filterUnits="userSpaceOnUse"
                              color-interpolation-filters="sRGB"
                            >
                              <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                              />
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="BackgroundImageFix"
                                result="shape"
                              />
                              <feGaussianBlur
                                stdDeviation="200"
                                result="effect1_foregroundBlur_408_2585"
                              />
                            </filter>
                          </defs>
                        </svg>

                        <div className="" />

                        <img
                          className="layer-1-icon1"
                          loading="eager"
                          alt=""
                          src="/layer-1-1.svg"
                        />
                      </div>
                      <div className="design-studio">Design Studio</div>
                    </div>
                  </div>
                  <div className="kto-k-frames-group">
                    <div className="explore">Explore</div>
                    <div className="design-studio-frame1">
                      <div className="work1">Work</div>
                      <div className="about-us">About us</div>
                      <div className="blogs">Blogs</div>
                      <div className="contact-us1">Contact us</div>
                    </div>
                  </div>
                
                  <div style={{ display: "flex", gap: "40px" }}>
                    <div
                      className="custom-svg-container"
                      style={{ cursor: "pointer" }}
                      onMouseEnter={handleMouseEnterDribbble}
                      onMouseLeave={handleMouseLeaveDribbble}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                      >
                        <path
                          d="M20 0C8.95879 0 0 8.95879 0 20C0 31.0413 8.95879 40 20 40C31.0195 40 40 31.0413 40 20C40 8.95879 31.0195 0 20 0ZM33.2104 9.21909C35.5965 12.1258 37.0283 15.8351 37.0716 19.8481C36.5076 19.7397 30.8676 18.59 25.1844 19.3059C25.0542 19.0239 24.9458 18.7201 24.8156 18.4165C24.4685 17.5923 24.0781 16.7463 23.6876 15.9436C29.9783 13.384 32.8416 9.69631 33.2104 9.21909ZM20 2.95011C24.3384 2.95011 28.308 4.57701 31.3232 7.24513C31.0195 7.67896 28.4381 11.128 22.3644 13.4056C19.5661 8.26464 16.4643 4.0564 15.987 3.40564C17.2668 3.10195 18.6117 2.95011 20 2.95011ZM12.7332 4.55531C13.1887 5.16269 16.2256 9.39262 19.0673 14.4251C11.0846 16.551 4.03471 16.5076 3.27549 16.5076C4.38177 11.2148 7.96095 6.81128 12.7332 4.55531ZM2.90673 20.0218C2.90673 19.8481 2.90673 19.6746 2.90673 19.5011C3.64425 19.5227 11.9306 19.6313 20.4555 17.0716C20.9545 18.026 21.41 19.0021 21.8439 19.9783C21.6269 20.0434 21.3882 20.1085 21.1714 20.1735C12.3644 23.0151 7.67896 30.7809 7.2885 31.4316C4.577 28.4165 2.90673 24.4035 2.90673 20.0218ZM20 37.0933C16.052 37.0933 12.4078 35.7484 9.52277 33.4924C9.82646 32.8634 13.2971 26.1823 22.9284 22.82C22.9717 22.7983 22.9935 22.7983 23.0369 22.7766C25.4446 29.0021 26.4209 34.2299 26.6811 35.7266C24.6204 36.616 22.3644 37.0933 20 37.0933ZM29.5228 34.1649C29.3493 33.1236 28.4381 28.1345 26.2039 21.9956C31.5619 21.1496 36.2472 22.538 36.833 22.7332C36.0955 27.4837 33.3623 31.5835 29.5228 34.1649Z"
                          fill={isHoveredDribbble ? "#BA5198" : "white"}
                        />
                      </svg>
                    </div>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      onMouseEnter={handleMouseEnterLinkedIn}
                      onMouseLeave={handleMouseLeaveLinkedIn}
                    >
                      <g clipPath="url(#clip0_145_4735)">
                        <path
                          d="M37.0391 0H2.95312C1.32031 0 0 1.28906 0 2.88281V37.1094C0 38.7031 1.32031 40 2.95312 40H37.0391C38.6719 40 40 38.7031 40 37.1172V2.88281C40 1.28906 38.6719 0 37.0391 0ZM11.8672 34.0859H5.92969V14.9922H11.8672V34.0859ZM8.89844 12.3906C6.99219 12.3906 5.45312 10.8516 5.45312 8.95312C5.45312 7.05469 6.99219 5.51562 8.89844 5.51562C10.7969 5.51562 12.3359 7.05469 12.3359 8.95312C12.3359 10.8438 10.7969 12.3906 8.89844 12.3906ZM34.0859 34.0859H28.1562V24.8047C28.1562 22.5938 28.1172 19.7422 25.0703 19.7422C21.9844 19.7422 21.5156 22.1562 21.5156 24.6484V34.0859H15.5938V14.9922H21.2812V17.6016H21.3594C22.1484 16.1016 24.0859 14.5156 26.9688 14.5156C32.9766 14.5156 34.0859 18.4688 34.0859 23.6094V34.0859Z"
                          fill={isHoveredLinkedIn ? "#0A66C2" : "white"}
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_145_4735">
                          <rect width="40" height="40" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      onMouseEnter={handleMouseEnterInstagram}
                      onMouseLeave={handleMouseLeaveInstagram}
                    >
                      <g clipPath="url(#clip0_145_4740)">
                        <path
                          d="M20 3.60156C25.3438 3.60156 25.9766 3.625 28.0781 3.71875C30.0313 3.80469 31.0859 4.13281 31.7891 4.40625C32.7188 4.76563 33.3906 5.20313 34.0859 5.89844C34.7891 6.60156 35.2188 7.26563 35.5781 8.19531C35.8516 8.89844 36.1797 9.96094 36.2656 11.9062C36.3594 14.0156 36.3828 14.6484 36.3828 19.9844C36.3828 25.3281 36.3594 25.9609 36.2656 28.0625C36.1797 30.0156 35.8516 31.0703 35.5781 31.7734C35.2188 32.7031 34.7813 33.375 34.0859 34.0703C33.3828 34.7734 32.7188 35.2031 31.7891 35.5625C31.0859 35.8359 30.0234 36.1641 28.0781 36.25C25.9688 36.3438 25.3359 36.3672 20 36.3672C14.6563 36.3672 14.0234 36.3438 11.9219 36.25C9.96875 36.1641 8.91406 35.8359 8.21094 35.5625C7.28125 35.2031 6.60938 34.7656 5.91406 34.0703C5.21094 33.3672 4.78125 32.7031 4.42188 31.7734C4.14844 31.0703 3.82031 30.0078 3.73438 28.0625C3.64063 25.9531 3.61719 25.3203 3.61719 19.9844C3.61719 14.6406 3.64063 14.0078 3.73438 11.9062C3.82031 9.95312 4.14844 8.89844 4.42188 8.19531C4.78125 7.26563 5.21875 6.59375 5.91406 5.89844C6.61719 5.19531 7.28125 4.76563 8.21094 4.40625C8.91406 4.13281 9.97656 3.80469 11.9219 3.71875C14.0234 3.625 14.6563 3.60156 20 3.60156ZM20 0C14.5703 0 13.8906 0.0234375 11.7578 0.117188C9.63281 0.210938 8.17188 0.554687 6.90625 1.04688C5.58594 1.5625 4.46875 2.24219 3.35938 3.35938C2.24219 4.46875 1.5625 5.58594 1.04688 6.89844C0.554688 8.17188 0.210938 9.625 0.117188 11.75C0.0234375 13.8906 0 14.5703 0 20C0 25.4297 0.0234375 26.1094 0.117188 28.2422C0.210938 30.3672 0.554688 31.8281 1.04688 33.0938C1.5625 34.4141 2.24219 35.5312 3.35938 36.6406C4.46875 37.75 5.58594 38.4375 6.89844 38.9453C8.17188 39.4375 9.625 39.7812 11.75 39.875C13.8828 39.9688 14.5625 39.9922 19.9922 39.9922C25.4219 39.9922 26.1016 39.9688 28.2344 39.875C30.3594 39.7812 31.8203 39.4375 33.0859 38.9453C34.3984 38.4375 35.5156 37.75 36.625 36.6406C37.7344 35.5312 38.4219 34.4141 38.9297 33.1016C39.4219 31.8281 39.7656 30.375 39.8594 28.25C39.9531 26.1172 39.9766 25.4375 39.9766 20.0078C39.9766 14.5781 39.9531 13.8984 39.8594 11.7656C39.7656 9.64063 39.4219 8.17969 38.9297 6.91406C38.4375 5.58594 37.7578 4.46875 36.6406 3.35938C35.5313 2.25 34.4141 1.5625 33.1016 1.05469C31.8281 0.5625 30.375 0.21875 28.25 0.125C26.1094 0.0234375 25.4297 0 20 0Z"
                          fill={
                            isHoveredInstagram
                              ? "rgb(188, 42, 141)"
                              : "rgb(255, 255, 255)"
                          }
                        />
                        <path
                          d="M20 9.72656C14.3281 9.72656 9.72656 14.3281 9.72656 20C9.72656 25.6719 14.3281 30.2734 20 30.2734C25.6719 30.2734 30.2734 25.6719 30.2734 20C30.2734 14.3281 25.6719 9.72656 20 9.72656ZM20 26.6641C16.3203 26.6641 13.3359 23.6797 13.3359 20C13.3359 16.3203 16.3203 13.3359 20 13.3359C23.6797 13.3359 26.6641 16.3203 26.6641 20C26.6641 23.6797 23.6797 26.6641 20 26.6641Z"
                          fill={isHoveredInstagram ? "#cd486b" : "white"}
                        />
                        <path
                          d="M33.0781 9.32032C33.0781 10.6484 32 11.7188 30.6797 11.7188C29.3516 11.7188 28.2812 10.6406 28.2812 9.32032C28.2812 7.99219 29.3594 6.92188 30.6797 6.92188C32 6.92188 33.0781 8 33.0781 9.32032Z"
                          fill={isHoveredInstagram ? "#833AB4" : "white"}
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_145_4740">
                          <rect width="40" height="40" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <div
                      className="custom-svg-container"
                      style={{ cursor: "pointer" }}
                      onMouseEnter={handleMouseEnterX}
                      onMouseLeave={handleMouseLeaveX}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                      >
                        <path
                          d="M30.5438 3.1731H36.1662L23.8828 17.2122L38.3333 36.3164H27.0187L18.1567 24.7298L8.01654 36.3164H2.39068L15.529 21.2999L1.66663 3.1731H13.2685L21.279 13.7636L30.5438 3.1731ZM28.5705 32.9511H31.6859L11.5756 6.36165H8.2324L28.5705 32.9511Z"
                          fill={isHoveredX ? "#4C4C4C" : "white"}
                        />
                      </svg>
                    </div>

                    <div
                      className="custom-svg-container"
                      style={{ cursor: "pointer" }}
                      onMouseEnter={handleMouseEnterFigma}
                      onMouseLeave={handleMouseLeaveFigma}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_145_4775)">
                          <path
                            d="M13.3334 39.9999C17.0134 39.9999 20.0002 37.0132 20.0002 33.3332V26.6665H13.3334C9.65337 26.6665 6.66663 29.6532 6.66663 33.3332C6.66663 37.0132 9.65337 39.9999 13.3334 39.9999Z"
                            fill={isHoveredFigma ? "#0ACF83" : "white"}
                          />
                          <path
                            d="M6.66663 20C6.66663 16.32 9.65337 13.3333 13.3334 13.3333H20.0002V26.6665H13.3334C9.65337 26.6667 6.66663 23.68 6.66663 20Z"
                            fill={isHoveredFigma ? "#A259FF" : "white"}
                          />
                          <path
                            d="M6.66663 6.66672C6.66663 2.98672 9.65337 0 13.3334 0H20.0002V13.3333H13.3334C9.65337 13.3333 6.66663 10.3467 6.66663 6.66672Z"
                            fill={isHoveredFigma ? "#F24E1E" : "white"}
                          />
                          <path
                            d="M19.9998 0H26.6665C30.3466 0 33.3333 2.98672 33.3333 6.66672C33.3333 10.3467 30.3466 13.3333 26.6665 13.3333H19.9998V0Z"
                            fill={isHoveredFigma ? "#FF7262" : "white"}
                          />
                          <path
                            d="M33.3333 20C33.3333 23.68 30.3466 26.6667 26.6665 26.6667C22.9865 26.6667 19.9998 23.68 19.9998 20C19.9998 16.32 22.9865 13.3333 26.6665 13.3333C30.3466 13.3333 33.3333 16.32 33.3333 20Z"
                            fill={isHoveredFigma ? "#1ABCFE" : "white"}
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_145_4775">
                            <rect width="40" height="40" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>

                    <div
                      className="facebook-container"
                      style={{ cursor: "pointer" }}
                      onMouseEnter={handleMouseEnterFacebook}
                      onMouseLeave={handleMouseLeaveFacebook}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_145_4782)">
                          <path
                            d="M20 0C8.9544 0 0 8.9544 0 20C0 29.3792 6.4576 37.2496 15.1688 39.4112V26.112H11.0448V20H15.1688V17.3664C15.1688 10.5592 18.2496 7.404 24.9328 7.404C26.2 7.404 28.3864 7.6528 29.2808 7.9008V13.4408C28.8088 13.3912 27.9888 13.3664 26.9704 13.3664C23.6912 13.3664 22.424 14.6088 22.424 17.8384V20H28.9568L27.8344 26.112H22.424V39.8536C32.3272 38.6576 40.0008 30.2256 40.0008 20C40 8.9544 31.0456 0 20 0Z"
                            fill={isHoveredFacebook ? "#0866FF" : "white"}
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_145_4782">
                            <rect width="40" height="40" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div
                      className="bento-container"
                      style={{ cursor: "pointer" }}
                      onMouseEnter={handleMouseEnterBento}
                      onMouseLeave={handleMouseLeaveBento}
                    >
                      <div className="pink-shadow-footer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="28"
                          viewBox="0 0 40 28"
                          fill="#3F56FF"
                        >
                          <path
                            d="M11.5875 0.718558C12.6739 0.718558 13.7602 0.822178 14.7948 1.02942C15.6742 1.23666 16.5019 1.59933 17.2778 2.11744C17.9503 2.63554 18.5193 3.30908 18.8815 4.08624C19.2953 5.07063 19.5022 6.10684 19.4505 7.14305C19.5022 8.28288 19.1918 9.42271 18.6228 10.4071C18.002 11.3397 17.1226 12.065 16.1398 12.5313C17.5365 12.894 18.7263 13.7748 19.5022 14.9146C20.2782 16.1581 20.6403 17.6088 20.6403 19.0595C20.6403 20.2511 20.4334 21.3909 19.9161 22.4271C19.4505 23.3597 18.778 24.1369 18.002 24.8104C17.1744 25.4321 16.1915 25.8984 15.2086 26.1575C14.174 26.4683 13.0877 26.572 12.0014 26.572H0V0.666748H11.5875V0.718558ZM10.8633 11.1843C11.691 11.2361 12.5704 10.977 13.2429 10.4589C13.9154 9.88901 14.2775 9.00823 14.174 8.07564C14.174 7.55753 14.0706 7.03943 13.8636 6.57314C13.6567 6.21047 13.3981 5.8996 13.036 5.69236C12.6739 5.48512 12.26 5.27787 11.8462 5.22606C11.3806 5.12244 10.915 5.12245 10.4495 5.12245H5.37992V11.1843H10.8633ZM11.1737 22.2717C11.691 22.2717 12.2083 22.2199 12.6739 22.1163C13.1394 22.0126 13.5533 21.8054 13.9671 21.5464C14.3292 21.2873 14.6396 20.9246 14.8465 20.5101C15.1052 19.992 15.2086 19.4221 15.1569 18.8522C15.2604 17.7642 14.8465 16.728 14.0706 16.0026C13.2429 15.3809 12.26 15.1219 11.2254 15.1737H5.37992V22.3235H11.1737V22.2717Z"
                            fill={isHoveredBento ? "#3F56FF" : "white"}
                          />
                          <path
                            d="M28.2964 22.1681C29.1759 22.9453 30.3139 23.3598 31.452 23.308C32.3831 23.308 33.2625 23.0489 33.9867 22.5308C34.6075 22.1163 35.0213 21.5464 35.28 20.8729H39.5736C39.108 22.7899 37.97 24.4996 36.4181 25.6912C34.9179 26.7275 33.1073 27.1938 31.2451 27.1419C29.9518 27.1419 28.6586 26.9347 27.417 26.4166C26.3307 25.9503 25.3478 25.2768 24.5719 24.396C23.7959 23.4634 23.1752 22.4272 22.7613 21.2874C22.2958 19.9921 22.0888 18.645 22.1406 17.298C22.1406 15.9509 22.3475 14.6556 22.8131 13.3604C24.0546 9.73363 27.4688 7.29854 31.2968 7.35035C32.6935 7.29854 34.0385 7.66122 35.28 8.28294C36.3663 8.90467 37.3492 9.73363 38.0734 10.7698C38.7976 11.8579 39.3667 13.0495 39.6253 14.3448C39.9357 15.6918 40.0392 17.1425 39.9874 18.5414H27.1584C27.0032 19.8367 27.417 21.1319 28.2964 22.1681ZM33.8833 12.2723C33.1591 11.547 32.1762 11.1843 31.1416 11.2361C30.4691 11.2361 29.7966 11.3398 29.2276 11.6506C28.762 11.9097 28.3482 12.2723 27.9861 12.6868C27.6757 13.1013 27.4688 13.5158 27.3136 14.0339C27.2101 14.4484 27.1067 14.8629 27.1067 15.2774H35.0731C34.9696 14.1893 34.5558 13.1531 33.8833 12.2723Z"
                            fill={isHoveredBento ? "#3F56FF" : "white"}
                          />
                          <path
                            d="M36.0044 2.42822H26.0723V4.96693H36.0044V2.42822Z"
                            fill={isHoveredBento ? "#FFFFFF" : "white"}
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="all-rights-text-frame">
              <div className="marasih-studio-all">
                2024 @ marasih studio. All rights reserved
              </div>
            </div>
          </section>
        </div> */}
      </div>
    </div>
  );
};

export default HeaderFrame;
