import Footer from "./Footer";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./MainFrame.css";
import Behance from "./behance";

const MainFrame = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1200);

  const navigate = useNavigate();

  const handleNavigation = (route) => {
    navigate(route);
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1200);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {isMobile ? (
        <div>
          <div className="main-frame">
            <div className="we-are-marasih1">We are marasih studio</div>
            <div className="design-that-inspires1">
              Design that Inspires, Connects, and Sparks Growth
            </div>
            <div className="rectangle-parent12">
              <div className="frame-child20" />
              <div className="lets-talk4">Let’s talk</div>
              <img className="emoji-waving-hand2" alt="" />
            </div>
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
                    <div
                      className="work4"
                      onClick={() => handleNavigation("/work")}
                    >
                      Work
                    </div>
                  </div>
                </div>
                <div
                  className="about2"
                  onClick={() => handleNavigation("/about")}
                >
                  About
                </div>
                <div
                  className="contact-us4"
                  onClick={() => handleNavigation("/contact")}
                >
                  Contact us
                </div>
                <button
                  className="letstalk-frame"
                  onClick={() => handleNavigation("/lets-talk")}
                >
                  <div className="letstalk-frame-child" />
                  <div className="lets-talk5">Let’s Talk</div>
                </button>
              </div>
            </header>
            <div className="star-star-frame">
              <h2 className="crafted-with-care1">Crafted with care</h2>
              <div className="frame-mask-group-socialine">
                <div className="wrapper-socialline-atlys-desti">
                  <img
                    className="socialline-atlys-destiel"
                    loading="eager"
                    alt=""
                    src="/star-11.svg"
                  />
                </div>
                <div className="wrapper-socialline-atlys-desti1">
                  <img
                    className="socialline-atlys-destiel1"
                    loading="eager"
                    alt=""
                    src="/star-21.svg"
                  />
                </div>
                <h1 className="crafting-designs-that-container">
                  <span>Crafting Designs that Blend Practicality with </span>
                  {/* <span className="">{` `}</span> */}
                  {/* <span className="blend"> Blend Practicality with</span> */}
                  <span className="creative-mastery"> Creative mastery</span>
                </h1>
              </div>
            </div>
            <div className="letssail-creativity-frame">
              <div className="lets-sail-the">
                Let’s sail the sea of creativity
              </div>
            </div>
            <div className="work-images">
              <img className="images-work" src="/unleash.png" alt="" />
              <img className="socialine" src="/socialine.png" alt="" />
              <img className="mult1" src="/mask-group-21@2x.png" alt="" />
              <img className="mult1" src="/roast.png" alt="" />
              <img className="mult1" src="/atyl.png" alt="" />
              <img className="mult1" src="/schoduler.png" alt="" />
              <img className="mult1" src="/posify.png" alt="" />
              <img className="mult1" src="/destivel.png" alt="" />
              <img className="mult1" src="/attached.png" alt="" />
              <img className="mult1" src="/zenfit.png" alt="" />
              <img className="mult1" src="/ihab.png" alt="" />
              <img className="mult1" src="/trame.png" alt="" />

              <img className="mult1" src="/flexforce.png" alt="" />

              <img className="mult1" src="/cashcusion.png" alt="" />
              <img className="mult1" src="/lockey.png" alt="" />

              <div className="creativity-box">
                <img className="we-creativity" src="/creativity.png" alt="" />
                <Behance/>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      ) : (
        <div>
          <div className="main-frame">
            <div className="we-are-marasih1">We are marasih studio</div>
            <div className="design-that-inspires1">
              Design that Inspires, Connects, and Sparks Growth
            </div>
            <div className="rectangle-parent12">
              <div className="frame-child20" />
              <div className="lets-talk4">Let’s talk</div>
              <img className="emoji-waving-hand2" alt="" />
            </div>
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
                    <div
                      className="work4"
                      onClick={() => handleNavigation("/work")}
                    >
                      Work
                    </div>
                  </div>
                </div>
                <div
                  className="about2"
                  onClick={() => handleNavigation("/about")}
                >
                  About
                </div>
                <div
                  className="contact-us4"
                  onClick={() => handleNavigation("/contact")}
                >
                  Contact us
                </div>
                <button
                  className="letstalk-frame"
                  onClick={() => handleNavigation("/lets-talk")}
                >
                  <div className="letstalk-frame-child" />
                  <div className="lets-talk5">Let’s Talk</div>
                </button>
              </div>
            </header>
            <div className="star-star-frame">
              <h2 className="crafted-with-care1">Crafted with care</h2>
              <div className="frame-mask-group-socialine">
                <div className="wrapper-socialline-atlys-desti">
                  <img
                    className="socialline-atlys-destiel"
                    loading="eager"
                    alt=""
                    src="/star-11.svg"
                  />
                </div>
                <div className="wrapper-socialline-atlys-desti1">
                  <img
                    className="socialline-atlys-destiel1"
                    loading="eager"
                    alt=""
                    src="/star-21.svg"
                  />
                </div>
                <h1 className="crafting-designs-that-container">
                  <span>Crafting Designs that Blend</span>
                  <span className="span3">{` `}</span>
                  <span>Practicality with</span>
                  <span className="creative-mastery"> Creative mastery</span>
                </h1>
              </div>
            </div>
            <div className="letssail-creativity-frame">
              <div className="lets-sail-the">
                Let’s sail the sea of creativity
              </div>
            </div>
            <div className="main-frame-child" />
            <img className="mask-group-icon4" alt="" />
            <main className="frame-frame-maskgroup-socialli">
              <section className="text-unleash-design-agency">
                <div className="text-unleash-design-agency-child" />
                <div className="frame-frame-maskgroup-social-m">
                  <img
                    className="frame-frame-maskgroup-social-m-child"
                    alt=""
                    src="/group-34407.svg"
                  />
                  <div className="frame-frame-maskgroup-social-m-item" />
                  <img
                    className="mask-group-icon5"
                    alt=""
                    src="/mask-group@2x.png"
                  />
                  <h3 className="unleash">Unleash</h3>
                  <div className="design-agency-website">
                    Design agency website
                  </div>
                </div>
              </section>
              <section className="craftedwithcare-star-star">
                <div className="socialline-app-logos">
                  <div className="frame-div">
                    <div className="frame-child21" />
                    <img
                      className="mask-group-icon6"
                      alt=""
                      src="/mask-group-11@2x.png"
                    />
                    <div className="socialline">Socialline</div>
                    <div className="social-media-app">Social media app</div>
                  </div>
                  <div className="roast-masters-group">
                    <div className="roast-masters-group-child" />
                    <img
                      className="mask-group-icon7"
                      loading="eager"
                      alt=""
                      src="/mask-group-21@2x.png"
                    />
                    <div className="mult">Mult</div>
                    <div className="logo-branding">{`Logo & Branding`}</div>
                  </div>
                </div>
                <div className="socialline-app-logos1">
                  <div className="socialline-app-logos-child" />
                  <img
                    className="mask-group-icon8"
                    loading="eager"
                    alt=""
                    src="/mask-group-31@2x.png"
                  />
                  <h3 className="roast-masters">Roast Masters</h3>
                  <div className="coffee-packaging-design">
                    Coffee packaging design
                  </div>
                </div>
                <div className="socialline-app-logos2">
                  <div className="rectangle-parent13">
                    <div className="frame-child22" />
                    <img
                      className="mask-group-icon9"
                      loading="eager"
                      alt=""
                      src="/mask-group-4@2x.png"
                    />
                    <div className="atlys">Atlys</div>
                    <div className="online-visa-app">Online visa app</div>
                  </div>
                  <div className="rectangle-parent14">
                    <div className="frame-child23" />
                    <img
                      className="mask-group-icon10"
                      loading="eager"
                      alt=""
                      src="/mask-group-5.svg"
                    />
                    <div className="schoduler">Schoduler</div>
                    <div className="message-scheduler">Message scheduler</div>
                  </div>
                </div>
                <div className="socialline-app-logos3">
                  <div className="socialline-app-logos-item" />
                  <img
                    className="mask-group-icon11"
                    loading="eager"
                    alt=""
                    src="/mask-group-6.svg"
                  />
                </div>
                <div className="socialline-app-logos4">
                  <div className="rectangle-parent15">
                    <div className="frame-child24" />
                    <img
                      className="mask-group-icon12"
                      loading="eager"
                      alt=""
                      src="/mask-group-7@2x.png"
                    />
                    <div className="destivel">Destivel</div>
                    <div className="travel-booking-app">Travel booking app</div>
                  </div>
                  <img
                    className="socialline-app-logos-inner"
                    loading="eager"
                    alt=""
                    src="/group-34425@2x.png"
                  />
                </div>
                <img
                  className="craftedwithcare-star-star-child"
                  loading="eager"
                  alt=""
                  src="/group-34426@2x.png"
                />
              </section>
              <section className="group-frame-maskgroupihab-logo">
                <div className="group-group">
                  <div className="rectangle-parent16">
                    <div className="frame-child25" />
                    <img
                      className="mask-group-icon13"
                      loading="eager"
                      alt=""
                      src="/mask-group-8@2x.png"
                    />
                    <div className="ihab">ihab</div>
                    <div className="logo-branding1">{`Logo & Branding`}</div>
                  </div>
                  <div className="rectangle-parent17">
                    <div className="frame-child26" />
                    <img
                      className="mask-group-icon14"
                      loading="eager"
                      alt=""
                      src="/mask-group-9@2x.png"
                    />
                    <div className="flexforce">FlexForce</div>
                    <div className="fitness-web">{`Fitness web & app`}</div>
                  </div>
                </div>
                <img
                  className="group-frame-maskgroupihab-logo-child"
                  loading="eager"
                  alt=""
                  src="/group-34428@2x.png"
                />
              </section>
              <section className="parent-frame">
                <img
                  className="parent-frame-child"
                  loading="eager"
                  alt=""
                  src="/group-34431@2x.png"
                />
                <img
                  className="parent-frame-item"
                  loading="eager"
                  alt=""
                  src="/group-34432@2x.png"
                />
              </section>
              <section className="selected-works">
                <div className="selected-works-child" />
                <div className="infinite-creativity">
                  <h1 className="we-arent-limit">
                    we aren't limit our creativity here
                  </h1>
                  <div className="this-is-our">
                    This is our selected work from our large portfolio and we
                    also keep adding our precious things here, by the time you
                    can also check at dribbble and behance.
                  </div>
                </div>
                <div className="group-with-images-wrapper">
                  <div className="group-with-images">
                    <div className="image-18-parent">
                      <img
                        className="image-18-icon"
                        loading="eager"
                        alt=""
                        src="/image-18@2x.png"
                      />
                      <img
                        className="image-19-icon"
                        loading="eager"
                        alt=""
                        src="/image-19@2x.png"
                      />
                      <div className="rectangle-shape5" />
                    </div>
                    <div className="image-16-parent">
                      <img
                        className="image-16-icon"
                        alt=""
                        src="/image-16@2x.png"
                      />
                      <img
                        className="dribble-svg-icon"
                        loading="eager"
                        alt=""
                        src="/dribble-svg.svg"
                      />
                    </div>
                    <img
                      className="group-with-images-child"
                      alt=""
                      src="/group-34434.svg"
                    />
                  </div>
                </div>
              </section>
            </main>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainFrame;
