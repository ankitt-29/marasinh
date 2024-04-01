import Footer from "./Footer";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./MainFrame.scss";
import Behance from "./behance";
import Offcanvas from "./Offcanvas";
import "./mobileWork.scss";
import FooterMobile from "./FooterMobile";
import DesktopHeader from "./WorkHeader";
import WorkHeader from "./WorkHeader";
import WorkOffcanvasMenu from "./WorkOffcanvasMenu";
import NewFooter from "./NewFooter";
const MainFrame = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1200);

  const navigate = useNavigate();

  const handleNavigation = (route) => {
    console.log("clicked");
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
  const handleWorkMenuClick = () => {
    // Show the Work offcanvas menu
    const offcanvas = document.getElementById("offcanvasWork");
    if (offcanvas) {
      offcanvas.classList.add("show");
    }
  };

  const handleClick = (event) => {
    const image = event.target;
    const imageWidth = image.offsetWidth;
    const clickX = event.nativeEvent.offsetX;

    if (clickX <= imageWidth / 3) {
      window.location.href = "/left-page"; // Redirect to the left page
    } else {
      window.location.href = "/right-page"; // Redirect to the right page
    }
  };

  return (
    <div>
      {isMobile ? (
        <div>
          <div className="mobile-work-page">
            <div className="contact-us3">
              {/* <div className="wrapper-star-11">
                <img
                  className="wrapper-star-1-item"
                  alt=""
                  src="/star-1-mobile.svg"
                />
              </div>
              <div className="wrapper-star-21">
                <img
                  className="wrapper-star-2-item"
                  alt=""
                  src="/star-1-mobile.svg"
                />
              </div> */}
              <header className="contact-us-inner">
                <div className="frame-parent35">
                  <div className="layer-1-frame">
                    <img
                      className="layer-1-icon4"
                      loading="lazy"
                      alt=""
                      src="/layer-1.svg"
                    />
                  </div>
                  <div className="essential-menu-instance-parent">
                    <div className="essential-menu-instance"></div>
                    <img
                      className="essetionalmenu-icon2"
                      loading="lazy"
                      alt=""
                      src="/essetionalmenu.svg"
                      onClick={handleWorkMenuClick} // Call handleWorkMenuClick on image click
                    />
                    <WorkOffcanvasMenu /> {/* Render the Work offcanvas menu */}
                  </div>
                </div>
              </header>
              <section className="contact-us-child">
                <div className="frame-parent36">
                  <div className="crafted-with-care-container">
                    <b className="crafted-with-care1">Crafted with care</b>
                  </div>
                  <h1 className="crafting-designs-that-container">
                    <span>Crafting Designs that Blend Practicality with </span>
                    <span className="creative-mastery">Creative mastery</span>
                  </h1>
                </div>
              </section>
              <div className="lets-sail-the-sea-of-creativi-wrapper">
                <div className="lets-sail-the">
                  Let’s sail the sea of creativity
                </div>
              </div>
              <div className="mobile-work-images">
                <div class="image-container">
                  <img class="unleash-bg" src="/unleash-bf.png" alt="" />
                  <img class="work-center" src="/mobile-unleash.png" alt="" />
                </div>

                <img
                  className="work-center"
                  src="/socialine-mobile.png"
                  alt=""
                />
                <img className="work-center" src="/roast-mobile.png" alt="" />
                <img className="work-center" src="/mult-mobile.png" alt="" />

                <img className="work-center" src="/atyl.png" alt="" />

                <img className="work-center" src="/schoduler.png" alt="" />

                <img className="work-center" src="/posify.png" alt="" />
                <img className="work-center" src="/destivel.png" alt="" />
                <img className="work-center" src="/attached.png" alt="" />

                <img className="work-center" src="/zenfit.png" alt="" />
                <img className="work-center" src="/ihab.png" alt="" />

                <img className="work-center" src="/trame.png" alt="" />
                <img className="work-center" src="/flexforce.png" alt="" />

                <img className="work-center" src="/cashcusion.png" alt="" />

                <img className="work-center" src="/lockey.png" alt="" />
              </div>

              {
                /* <section className="contact-us-inner1">
                <div className="wrapper-group-34407-parent">
                  <div className="wrapper-group-34407">
                    <img
                      className="wrapper-group-34407-child"
                      alt=""
                      src="/group-34407.svg"
                    />
                  </div>
                  <div className="frame-parent37">
                    <img
                      className="frame-child50"
                      loading="lazy"
                      alt=""
                      src="/group-34488@2x.png"
                    />

                    <h2 className="unleash">Unleash</h2>
                    <div className="design-agency-website">
                      Design agency website
                    </div>
                  </div>
                </div>
              </section>
              <section className="contact-us-inner2">
                <div className="rectangle-parent29">
                  <div className="frame-child51"></div>
                  <img
                    className="mask-group-icon4"
                    loading="lazy"
                    alt=""
                    src="/mask-group1@2x.png"
                  />

                  <h2 className="socialline1">Socialline</h2>
                  <div className="social-media-app">Social media app</div>
                </div>
              </section>
              <section className="contact-us-inner3">
                <div className="rectangle-parent30">
                  <div className="frame-child52"></div>
                  <img
                    className="mask-group-icon5"
                    loading="lazy"
                    alt=""
                    src="/mask-group-11@2x.png"
                  />

                  <div className="mult-wrapper">
                    <h2 className="mult">Mult</h2>
                  </div>
                  <div className="logo-branding">Logo & Branding</div>
                </div>
              </section>
              <section className="contact-us-inner4">
                <div className="rectangle-parent31">
                  <div className="frame-child53"></div>
                  <img
                    className="mask-group-icon6"
                    loading="lazy"
                    alt=""
                    src="/mask-group-21@2x.png"
                  />

                  <h2 className="roast-masters">Roast Masters</h2>
                  <div className="coffee-packaging-design-wrapper">
                    <div className="coffee-packaging-design">
                      Coffee packaging design
                    </div>
                  </div>
                </div>
              </section>
              <section className="contact-us-inner5">
                <div className="rectangle-parent32">
                  <div className="frame-child54"></div>
                  <img
                    className="mask-group-icon7"
                    loading="lazy"
                    alt=""
                    src="/mask-group-3@2x.png"
                  />

                  <h2 className="atlys">Atlys</h2>
                  <div className="online-visa-app">Online visa app</div>
                </div>
              </section>
              <section className="contact-us-inner6">
                <div className="rectangle-parent33">
                  <div className="frame-child55"></div>
                  <img
                    className="mask-group-icon8"
                    loading="lazy"
                    alt=""
                    src="/mask-group-4.svg"
                  />

                  <h2 className="schoduler">Schoduler</h2>
                  <div className="message-scheduler">Message scheduler</div>
                </div>
              </section>
              <section className="mask-group-wrapper">
                <div className="mask-group1">
                  <img
                    className="mask-group-item"
                    loading="lazy"
                    alt=""
                    src="/group-34494@2x.png"
                  />

                  <div className="posify-wrapper">
                    <h2 className="posify">POSIFY</h2>
                  </div>
                  <div className="pos-portal">POS Portal / Dashboard</div>
                </div>
              </section>
              <section className="contact-us-inner7">
                <div className="frame-parent38">
                  <div className="frame-wrapper14">
                    <img
                      className="frame-child56"
                      loading="lazy"
                      alt=""
                      src="/group-34526@2x.png"
                    />
                  </div>
                  <div className="frame-parent39">
                    <div className="ellipse-parent4">
                      <div className="frame-child57"></div>
                      <div className="frame-child58"></div>
                      <img
                        className="mask-group-icon9"
                        loading="lazy"
                        alt=""
                        src="/mask-group-5@2x.png"
                      />

                      <h2 className="destivel">Destivel</h2>
                      <div className="travel-booking-app">Travel booking app</div>
                    </div>
                    <div className="frame-parent40">
                      <div className="rectangle-parent34">
                        <div className="frame-child59"></div>
                        <img
                          className="mask-group-icon10"
                          loading="lazy"
                          alt=""
                          src="/mask-group-6@2x.png"
                        />

                        <div className="zenfit-wrapper">
                          <h2 className="zenfit">ZenFit</h2>
                        </div>
                        <div className="yoga-meditation">Yoga & Meditation app</div>
                      </div>
                      <div className="rectangle-parent35">
                        <div className="frame-child60"></div>
                        <img
                          className="mask-group-icon11"
                          loading="lazy"
                          alt=""
                          src="/mask-group-7@2x.png"
                        />

                        <h2 className="ihab">ihab</h2>
                        <div className="logo-branding1">Logo & Branding</div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="contact-us-inner8">
                <img
                  className="frame-child61"
                  loading="lazy"
                  alt=""
                  src="/group-34528@2x.png"
                />
              </section>
              <section className="contact-us-inner9">
                <div className="frame-parent41">
                  <div className="frame-parent42">
                    <img
                      className="frame-child62"
                      loading="lazy"
                      alt=""
                      src="/group-34499@2x.png"
                    />

                    <h2 className="flexforce">FlexForce</h2>
                    <div className="fitness-web">Fitness web & app</div>
                  </div>
                  <img
                    className="frame-child63"
                    loading="lazy"
                    alt=""
                    src="/group-34500@2x.png"
                  />
                </div>
              </section>
              <section className="contact-us-inner10">
                <img
                  className="frame-child64"
                  loading="lazy"
                  alt=""
                  src="/group-34432@2x.png"
                />
              </section>*/
                <section className="contact-us-inner11">
                  <div className="rectangle-parent36">
                    <div className="frame-child65"></div>
                    <div className="we-arent-limit-our-creativity-parent">
                      <div className="we-arent-limit">
                        we aren't limit our creativity here
                      </div>
                      <div className="this-is-our-selected-work-from-wrapper">
                        <div className="this-is-our">
                          This is our selected work from our large portfolio and
                          we also keep adding our precious things here, by the
                          time you can also check at dribbble and behance.
                        </div>
                      </div>
                    </div>
                    {/* <div className="frame-wrapper15">
                    <div className="frame-parent43">
                      <div className="image-18-parent">
                        <img
                          className="image-18-icon"
                          alt=""
                          src="/image-18@2x.png"
                        />

                        <img
                          className="image-19-icon"
                          alt=""
                          src="/image-19@2x.png"
                        />

                        <div className="frame-child66"></div>
                      </div>
                      <div className="image-16-parent">
                        <img
                          className="image-16-icon"
                          alt=""
                          src="/dribble-cir.png"
                        />

                           <img
                            className="dribble-svg-icon"
                            loading="lazy"
                            alt=""
                            src="/dribble-svg.svg"
                          /> 
                      </div>
                      <img
                        className="frame-child67"
                        alt=""
                        src="/group-34434.svg"
                      />
                      
                    </div>
                  </div> */}
                    <div className="group-with-images-wrapper">
                      <img
                        className="behance-name"
                        src="/behance-name.png"
                        alt=""
                        onClick={handleClick}
                        style={{ width: "80%", height: "auto" }}
                      />
                    </div>
                  </div>
                </section>
              }
              {/* <section className="contact-us-inner12">
                <div className="rectangle-parent37">
                  <div className="frame-child68"></div>
                  <div className="be-simple-be-creative-container">
                    <h1 className="be-simple-be-container2">
                      <p className="be-simple2">BE SIMPLE.</p>
                      <p className="be-creative2">BE CREATIVE.</p>
                    </h1>
                  </div>
                  <div className="frame-wrapper16">
                    <div className="frame-parent44">
                      <div className="got-an-idea-container">
                        <div className="got-an-idea2">Got an idea?</div>
                      </div>
                      <div className="ellipse-parent5">
                        <div className="frame-child69"></div>
                        <div className="rectangle-parent38">
                          <div className="frame-child70"></div>
                          <button className="frame-parent45">
                            <div className="lets-get-in-touch-frame">
                              <div className="lets-get-in2">Let’s get in touch</div>
                            </div>
                            <img
                              className="emoji-dizzy-icon2"
                              alt=""
                              src="/-emoji-dizzy.svg"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-child71"></div>
                  <div className="frame-wrapper17">
                    <div className="layer-1-group">
                      <img
                        className="layer-1-icon5"
                        loading="lazy"
                        alt=""
                        src="/layer-1-1.svg"
                      />

                      <div className="design-studio-frame">
                        <div className="design-studio3">Design Studio</div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-wrapper18">
                    <div className="explore-group">
                      <h1 className="explore2">Explore</h1>
                      <div className="blogs-and-contact-us1">
                        <div className="frame-parent46">
                          <div className="work-container">
                            <h2 className="work2">Work</h2>
                            <h2 className="about-us2">About us</h2>
                          </div>
                          <div className="work-about-us1">
                            <div className="work-about-us-child"></div>
                            <h1 className="follow-us3">Follow us</h1>
                          </div>
                        </div>
                        <h2 className="blogs2">Blogs</h2>
                        <h2 className="contact-us4">Contact us</h2>
                      </div>
                      <div className="copyright-notice">
                        <img
                          className="social-icons10"
                          loading="lazy"
                          alt=""
                          src="/social-icons.svg"
                        />

                        <img
                          className="social-icons11"
                          loading="lazy"
                          alt=""
                          src="/social-icons-1.svg"
                        />

                        <img
                          className="component-2-icon2"
                          loading="lazy"
                          alt=""
                          src="/component-2.svg"
                        />

                        <img
                          className="social-icons12"
                          loading="lazy"
                          alt=""
                          src="/social-icons-2.svg"
                        />

                        <img
                          className="social-icons13"
                          loading="lazy"
                          alt=""
                          src="/social-icons-3.svg"
                        />

                        <img
                          className="social-icons14"
                          loading="lazy"
                          alt=""
                          src="/social-icons-4.svg"
                        />

                        <img
                          className="copyright-notice-child"
                          alt=""
                          src="/frame-48.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="main-footer">
                    <div className="marasih-studio-all2">
                      2024 @ marasih studio. All rights reserved
                    </div>
                  </div>
                </div>
              </section> */}

              <div className="footer-m">
                <FooterMobile />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="desktop-work-page">
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
            {/* <header className="inner-frame-a">
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
                href="/contact"
                  className="contact-us4"
                  onClick={(event) => {
                    event.preventDefault(); // Prevent default behavior
                    handleNavigation("/about");
                  }}
                >
                  About us
                </div>
                <button
                  className="letstalk-frame"
                  onClick={() => handleNavigation("/lets-talk")}
                >
                  <div className="letstalk-frame-child" />
                  <div className="lets-talk5">Let’s Talk</div>
                </button>
              </div>
            </header> */}
            <WorkHeader />
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
                    src="/new-mask-group.png"
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
                    src="/roast-master.png"
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
                    src="/posify-desktop.png"
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
                      src="/flexforce-desktop.png"
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
                  <img
                    className="behance-name"
                    src="/behance-name.png"
                    alt=""
                    onClick={handleClick}
                    style={{ width: "80%", height: "auto" }}
                  />
                </div>
              </section>
            </main>

            {/* <Footer /> */}
            <NewFooter />
          </div>
        </div>
      )}
    </div>
  );
};

export default MainFrame;
