import { useState, useEffect } from "react";

import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

import "./FrameHeader.scss";
import Offcanvas from "./Offcanvas";
import './mobileAbout.scss'
import FooterMobile from "./FooterMobile";
import DesktopHeader from "./WorkHeader";
import AboutHeader from "./AboutHeader";
import AboutOffcanvasMenu from "./AboutOffcanvasMenu";
const FrameHeader = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1200);

  const navigate = useNavigate();

  const handleNavigation = (event, route) => {
    event.preventDefault();
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

  const handleAboutMenuClick = () => {
    // Show the About offcanvas menu
    const offcanvas = document.getElementById("offcanvasAbout");
    if (offcanvas) {
      offcanvas.classList.add("show");
    }
  };

  return (
    <div>
      {isMobile ? (
        <div className="mobile-about-page">
           <div className="contact-us5">
           {/* <div className="wrapper-function-tree">
             <img className="function-tree-icon" alt="" src="/star-1-mobile.svg" />
           </div>
           <div className="wrapper-function-tree1">
             <img className="function-tree-icon1" alt="" src="/star-1-mobile.svg" />
           </div> */}
           <section className="a-versatile-design-studio-whe-parent">
             <h2 className="a-versatile-design-container">
               <p className="a-versatile-design">A versatile design studio,</p>
               <p className="where-creativity">where creativity</p>
               <p className="knows-no-bounds">knows no bounds</p>
             </h2>
             <div className="frame-wrapper19">
               <div className="frame-parent47">
                 <div className="frame-parent48">
                   <div className="layer-1-wrapper1">
                     <img
                       className="layer-1-icon6"
                       loading="lazy"
                       alt=""
                       src="/layer-1.svg"
                     />
                   </div>
                   <div className="ellipse-parent6">
      <div className="frame-child72"></div>
      <img
        className="essetionalmenu-icon3"
        loading="lazy"
        alt=""
        src="/essetionalmenu.svg"
        onClick={handleAboutMenuClick} // Call handleAboutMenuClick on image click
      />
      <AboutOffcanvasMenu /> {/* Render the About offcanvas menu */}
    </div>
                 </div>
                 <div className="marasih-design-studio-wrapper">
                   <div className="marasih-design-studio">Marasih design studio</div>
                 </div>
               </div>
             </div>
           </section>
           <section className="function-stack">
             <div className="rule-engine">
               <div className="we-dont-just">
                 We don't just follow trends, we set them. We're pioneers in the
                 digital landscape, pushing the boundaries of design with every
                 project.
               </div>
               <div className="logic-gate">
                 <div className="rectangle-parent39">
                   <div className="frame-child73"></div>
                   <button className="frame-parent49">
                     <div className="lets-create-special-wrapper">
                       <div className="lets-create-special1">Let’s create special</div>
                     </div>
                     <img
                       className="emoji-shooting-star"
                       alt=""
                       src="/-emoji-shooting-star@2x.png"
                     />
                   </button>
                 </div>
               </div>
             </div>
           </section>
           <section className="contact-us-inner13">
             <img
               className="frame-child74"
               loading="lazy"
               alt=""
               src="/group-34530.svg"
             />
           </section>
           <section className="contact-us-inner14">
             <div className="connection-point-parent">
               <div className="connection-point">
                 <h3 className="our-story">Our Story</h3>
               </div>
               <div className="a-tale-of-our-design-studio-parent">
                 <h1 className="a-tale-of">A Tale of Our Design Studio</h1>
                 <div className="marasih-design-studio1">
                   Marasih Design Studio was born from a passion to elevate digital
                   experiences into something exceptional. After gaining valuable
                   insights from four years in a 9-to-6 corporate job and freelancing
                   endeavors, the decision to establish our studio in 2024 was a
                   pivotal moment. Our agency is a testament to a vision: crafting
                   digital designs that go beyond aesthetics, prioritizing user
                   experience. With a commitment to innovation and years of industry
                   insight, we embark on this journey to redefine the future of
                   digital design. Join us, where each pixel tells a story and every
                   project adds a new chapter to the Marasih Design Studio legacy.
                 </div>
               </div>
             </div>
           </section>

           <div className="center-about">
            <img className="center-image" src="/our-mission.png" alt="" />
            <img className="center-image" src="/at-marasih-text.png" alt="" />

            <img className="center-image" src="/our-values.png" alt="" />

            <img className="center-image" src="/Our goals.webp" alt="" />

            <img className="center-image" src="/at-marasih-second.png" alt="" />
            <img className="center-image" src="/at-marasih-second.png" alt="" />
            <img className="center-image crafted-1" src="/crafted-excellence.png" alt="" />
            <img className="center-image elavate" src="/elevate.png" alt="" />
            <img className="center-image apps" src="/apps.png" alt="" />
            <img className="center-image product" src="/product.png" alt="" />
            <button className="sky-button"> Let's create your's 💭</button>





           </div>

           
           {/* <section className="contact-us-inner15">

             <div className="frame-parent50">
               <div className="frame-parent51">
               <div className="organization-name"></div>

                 <img
                   className="frame-child75"
                   alt=""
                   src="/group-34407@2x.png"
                 />

     
                 <div className="frame-child76"></div>
                 <img
                   className="mask-group-icon12"
                   loading="lazy"
                   alt=""
                   src="/mask-group2.svg"
                 />
     
                 <b className="our-mission">Our Mission</b>
                 <div className="pixels-with-purpose">Pixels with Purpose</div>
               </div>
               <div className="frame-wrapper20">
                 <div className="frame-parent52">
                   <div className="frame-wrapper21">
                     <div className="rectangle-parent40">
                       <div className="frame-child77"></div>
                       <div className="at-marasih-studio-container">
                         <p className="at-marasih-studio">
                           At Marasih studio, we're not just pixel pushers, we're
                           experience architects. We blend stunning visuals with
                           intuitive interfaces to craft digital experiences that
                           captivate users, drive engagement, and power brand
                           success. From sleek websites to user-friendly apps, we
                           weave together technology and creativity to build bridges
                           between brands and their audiences, creating connections
                           that last.
                         </p>
                         <p className="blank-line">&nbsp;</p>
                         <p className="every-project-is">
                           Every project is fueled by our relentless pursuit of
                           design excellence. We push boundaries, challenge
                           conventions, and deliver results that exceed expectations.
                           Join us on this journey to transform the digital
                           landscape, one pixel at a time.
                         </p>
                       </div>
                     </div>
                   </div>
                   <div className="instruction-set-parent">
                     <div className="instruction-set"></div>
                     <div className="our-values-parent">
                       <b className="our-values">Our Values</b>
                       <div className="ethics-in-every">Ethics in Every Pixels</div>
                     </div>
                     <div className="data-aggregator">
                       <img
                         className="data-aggregator-child"
                         loading="lazy"
                         alt=""
                         src="/group-34447@2x.png"
                       />
     
                       <img
                         className="data-aggregator-item"
                         loading="lazy"
                         alt=""
                         src="/group-34448@2x.png"
                       />
     
                       <div className="at-marasih-studio-container1">
                         <p className="at-marasih-studio1">
                           At Marasih Studio, we embark on a journey of ethical
                           design and core values creativity, user-centricity,
                           integrity, and a promise of exceptional value for money.
                           Channeling boundless creativity, we sculpt designs that
                           inspire and redefine user experiences. Our integrity
                           radiates through transparent collaborations with brands
                           sharing our ethical ethos. Infusing value for money into
                           our DNA, we ensure impactful designs within budgetary
                           realms. Our designs thrive on collaborative synergy.
                           Sustainability is the heartbeat of our innovation.
                           Continuous learning keeps us at the forefront of
                           technology and design trends.
                         </p>
                         <p className="blank-line1">&nbsp;</p>
                         <p className="at-marasih-studio2">
                           At Marasih Studio, our values aren’t just principles;
                           they’re the essence of our studio, a transformative
                           journey where creativity meets integrity, and design
                           becomes a powerful force for positive change
                         </p>
                       </div>
                     </div>
                   </div>
                   <div className="rectangle-parent41">
                     <div className="frame-child78"></div>
                     <img
                       className="mask-group-icon13"
                       alt=""
                       src="/mask-group-12.svg"
                     />
     
                     <div className="link-collector">
                       <img
                         className="link-collector-child"
                         loading="lazy"
                         alt=""
                         src="/group-34445@2x.png"
                       />
     
                       <h1 className="our-goals">Our Goals</h1>
                     </div>
                     <div className="aspirations-and-beyond">Aspirations and Beyond</div>
                   </div>
                   <div className="frame-wrapper22">
                     <div className="pattern-matcher-parent">
                       <div className="pattern-matcher"></div>
                       <div className="at-marasih-studio-container2">
                         <p className="at-marasih-studio3">
                           At Marasih Studio, our vision extends beyond the pixels,
                           fueling aspirations and setting ambitious goals for the
                           future of design. Our mission is to pioneer innovative and
                           impactful designs, pushing boundaries and redefining
                           digital aesthetics. We aspire to redefine user
                           experiences, creating designs that seamlessly blend
                           creativity and functionality.
                         </p>
                         <p className="blank-line2">&nbsp;</p>
                         <p className="staying-at-the">
                           Staying at the forefront of emerging technologies is a
                           commitment we hold dear, ensuring that our designs not
                           only meet current standards but set new ones. we envision
                           a future where our designs inspire, engage, and leave a
                           lasting impression.
                         </p>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </section>
           <section className="function-caller">
             <div className="loop-controller">
               <div className="sequence-controller">
                 <div className="data-sorter">
                   <h3 className="crafted-excellence">Crafted Excellence</h3>
                 </div>
                 <div className="marasih-studios-expertise">
                   Marasih Studio’s Expertise Showcase
                 </div>
               </div>
               <div className="data-output">
                 <div className="pattern-validator-parent">
                   <div className="pattern-validator"></div>
                   <div className="elevate-with-exceptional">
                     Elevate with Exceptional Design Services
                   </div>
                   <div className="value-enhancer">
                     <input
                       className="value-enhancer-child"
                       checked="{true}"
                       type="radio"
                       name="radioGroup-1"
                     />
     
                     <div className="user-experience-design1">
                       User Experience Design
                     </div>
                   </div>
                   <div className="value-enhancer1">
                     <input
                       className="value-enhancer-item"
                       checked="{true}"
                       type="radio"
                       name="radioGroup-1"
                     />
     
                     <div className="user-interface-design1">User Interface Design</div>
                   </div>
                   <div className="value-enhancer2">
                     <input
                       className="value-enhancer-inner"
                       checked="{true}"
                       type="radio"
                       name="radioGroup-1"
                     />
     
                     <div className="interaction-design1">Interaction Design</div>
                   </div>
                   <div className="value-enhancer3">
                     <input
                       className="value-enhancer-child1"
                       checked="{true}"
                       type="radio"
                       name="radioGroup-1"
                     />
     
                     <div className="brand-identity">Brand Identity</div>
                   </div>
                   <div className="value-enhancer4">
                     <input
                       className="value-enhancer-child2"
                       checked="{true}"
                       type="radio"
                       name="radioGroup-1"
                     />
     
                     <div className="marketing-graphics">Marketing Graphics</div>
                   </div>
                   <div className="geometry-checker">
                     <div className="column">
                       <div className="parallel-controller">
                         <input
                           className="parallel-controller-child"
                           checked="{true}"
                           type="radio"
                           name="radioGroup-1"
                         />
     
                         <div className="illustration-design">Illustration Design</div>
                       </div>
                       <div className="value-comparer">
                         <input
                           className="value-comparer-child"
                           checked="{true}"
                           type="radio"
                           name="radioGroup-1"
                         />
     
                         <div className="social-media-branding">
                           Social Media Branding
                         </div>
                       </div>
                       <div className="parallel-controller1">
                         <input
                           className="parallel-controller-item"
                           checked="{true}"
                           type="radio"
                           name="radioGroup-1"
                         />
     
                         <div className="email-marketing-design">
                           Email Marketing Design
                         </div>
                       </div>
                     </div>
                     <div className="border-creator">
                       <div className="pattern-mapper"></div>
                     </div>
                   </div>
                 </div>
                 <div className="tree-reducer-parent">
                   <div className="tree-reducer"></div>
                   <div className="proficiency-amplified-with-container1">
                     <span>Proficiency Amplified with </span>
                     <span className="industry-leading-tools1"
                       >Industry-Leading Tools</span
                     >
                   </div>
                   <div className="empty-shape">
                     <div className="sequence-joiner-parent">
                       <div className="sequence-joiner"></div>
                       <div className="pattern-separator"></div>
                       <img
                         className="adobe-illustrator-cc-icon-1"
                         loading="lazy"
                         alt=""
                         src="/adobe-illustrator-cc-icon-1@2x.png"
                       />
                     </div>
                     <div className="ellipse-parent7">
                       <div className="frame-child79"></div>
                       <div className="frame-child80"></div>
                       <img
                         className="adobe-photoshop-cc-icon-1"
                         loading="lazy"
                         alt=""
                         src="/adobe-photoshop-cc-icon-1@2x.png"
                       />
                     </div>
                     <div className="sub-container">
                       <div className="error-corrector"></div>
                       <div className="wrapper-group-34400">
                         <img
                           className="wrapper-group-34400-child"
                           loading="lazy"
                           alt=""
                           src="/group-34400.svg"
                         />
                       </div>
                     </div>
                     <div className="ellipse-parent8">
                       <div className="frame-child81"></div>
                       <div className="frame-child82"></div>
                       <img
                         className="adobe-after-effects-cc-icon-1"
                         loading="lazy"
                         alt=""
                         src="/adobe-after-effects-cc-icon-1@2x.png"
                       />
                     </div>
                     <div className="wrapper-group-34402">
                       <img
                         className="wrapper-group-34402-child"
                         loading="lazy"
                         alt=""
                         src="/group-34402@2x.png"
                       />
                     </div>
                   </div>
                 </div>
               </div>
               <div className="tree-modifier-parent">
                 <div className="tree-modifier"></div>
                 <div className="radio-button-container">
                   <div className="decision-merger"></div>
                   <div className="lets-impressed-with">
                     Let’s impressed with your product!
                   </div>
                 </div>
                 <div className="table-container">
                   <div className="pattern-enhancer">
                     <div className="result-collider">
                       <div className="lets-create-yours">Let’s create your’s</div>
                     </div>
                     <div className="div4">💭</div>
                   </div>
                 </div>
               </div>
             </div>
           </section> */}
           {/* <section className="shape-container-parent">
             <div className="shape-container"></div>
             <div className="be-simple-be-creative-frame">
               <h1 className="be-simple-be-container3">
                 <p className="be-simple3">BE SIMPLE.</p>
                 <p className="be-creative3">BE CREATIVE.</p>
               </h1>
             </div>
             <div className="color-palette">
               <div className="frame-parent53">
                 <div className="got-an-idea-frame">
                   <div className="got-an-idea3">Got an idea?</div>
                 </div>
                 <div className="layer-handler">
                   <div className="image-editor"></div>
                   <div className="rectangle-parent42">
                     <div className="frame-child83"></div>
                     <button className="button-creator">
                       <div className="link-organizer">
                         <div className="lets-get-in3">Let’s get in touch</div>
                       </div>
                       <img
                         className="emoji-dizzy-icon3"
                         alt=""
                         src="/-emoji-dizzy.svg"
                       />
                     </button>
                   </div>
                 </div>
               </div>
             </div>
             <div className="shape-transformer">
               <div className="shape-transformer-child"></div>
             </div>
             <div className="fill-handler-wrapper">
               <div className="fill-handler">
                 <img
                   className="layer-1-icon7"
                   loading="lazy"
                   alt=""
                   src="/layer-1-1.svg"
                 />
     
                 <div className="spacing-manager">
                   <div className="design-studio4">Design Studio</div>
                 </div>
               </div>
             </div>
             <div className="grid-system">
               <div className="row-column-designer">
                 <h2 className="explore3">Explore</h2>
                 <div className="collapsible-container">
                   <div className="toggle-switch">
                     <div className="progress-bar-builder">
                       <div className="work3">Work</div>
                       <div className="about-us3">About us</div>
                     </div>
                     <div className="scrollbar-manager">
                       <div className="popup-creator"></div>
                       <h2 className="follow-us4">Follow us</h2>
                     </div>
                   </div>
                   <div className="blogs3">Blogs</div>
                   <div className="contact-us6">Contact us</div>
                 </div>
               </div>
             </div>
             <div className="accordion-organizer">
               <div className="table-builder">
                 <img
                   className="social-icons15"
                   loading="lazy"
                   alt=""
                   src="/social-icons.svg"
                 />
     
                 <img
                   className="social-icons16"
                   loading="lazy"
                   alt=""
                   src="/social-icons-1.svg"
                 />
     
                 <img
                   className="component-2-icon3"
                   loading="lazy"
                   alt=""
                   src="/component-2.svg"
                 />
     
                 <img
                   className="social-icons17"
                   alt=""
                   src="/social-icons-2.svg"
                 />
     
                 <img
                   className="social-icons18"
                   alt=""
                   src="/social-icons-3.svg"
                 />
     
                 <img
                   className="social-icons19"
                   alt=""
                   src="/social-icons-4.svg"
                 />
     
                 <img
                   className="table-builder-child"
                   alt=""
                   src="/frame-48.svg"
                 />
               </div>
             </div>
             <div className="validation-engine">
               <div className="marasih-studio-all3">
                 2024 @ marasih studio. All rights reserved
               </div>
             </div>
           </section> */}
           <div className="footer-ha">
           <FooterMobile/>
           </div>
         </div>
         </div>
      ) : (
        <div className="desktop-about-page">
        <div className="frame-header">
          <div className="we-are-marasih2">We are marasih studio</div>
          <div className="design-that-inspires2">
            Design that Inspires, Connects, and Sparks Growth
          </div>
          <div className="rectangle-parent18">
            <div className="frame-child27" />
            <div className="lets-talk6">Let’s talk</div>
            <img className="emoji-waving-hand3" alt="" />
          </div>
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
                      href="/work"
                      className="work"
                      onClick={(e) => handleNavigation(e, "/work")}
                    >
                      Home
                    </a>
                  </div>
                  <div className="contact-info-frame">
                    <div className="" />
                    <a
                      href="/contact"
                      className="contact-us"
                      onClick={(e) => handleNavigation(e, "/contact")}
                    >
                      Work
                    </a>
                  </div>
                  <div className="frame-footer">
                    <div className="group-links" />
                    <a
                      href="/about"
                      className="about3"
                      onClick={(e) => handleNavigation(e, "/about")}
                    >
                      About us
                    </a>
                  </div>
                </div>
              </div>
              <button className="rectangle-parent19">
                <div className="frame-child28" />
                <div className="lets-talk7">Let’s Talk</div>
              </button>
            </div>
          </header> */}
          <AboutHeader/>
          <section className="text-email-address">
            <h2 className="marasih-design-studio">Marasih design studio</h2>
            <div className="group-social-media">
              <div className="frame-header-background">
                <div className="wrapper-ellipse-user">
                  <img
                    className="ellipse-user-icon"
                    loading="eager"
                    alt=""
                    src="/star-12.svg"
                  />
                </div>
                <div className="wrapper-ellipse-user1">
                  <img
                    className="ellipse-user-icon1"
                    loading="eager"
                    alt=""
                    src="/star-22.svg"
                  />
                </div>
                <h1 className="a-versatile-design-container">
                  <p className="a-versatile-design">
                    A versatile design studio,
                  </p>
                  <p className="where-creativity-knows-no-boun">
                    <span>where creativity</span>
                    <span className="span4">{` `}</span>
                    <span className="knows-no-bounds">knows no bounds</span>
                  </p>
                </h1>
              </div>
              <div className="we-dont-just">
                We don't just follow trends, we set them. We're pioneers in the
                digital landscape, pushing the boundaries of design with every
                project.
              </div>
            </div>
            <div className="">
              <div className="frame-child29" />

              <div className="button-container-about">
                <a href="#" className="magic-button-about">
                  Let's Create Special{" "}
                  <img
                    className="emoji-waving-hand1"
                    alt=""
                    src="/-emoji-shooting-star@2x.png"
                  />
                </a>
              </div>
            </div>
          </section>
          <img className="frame-header-child" alt="" />
          <section className="rectangle">
            <div className="group">
              <div className="ellipse">
                <div className="our-story">Our Story</div>
                <h1 className="a-tale-of">A Tale of Our Design Studio</h1>
              </div>
              <div className="marasih-design-studio1">
                Marasih Design Studio was born from a passion to elevate digital
                experiences into something exceptional. After gaining valuable
                insights from four years in a 9-to-6 corporate job and
                freelancing endeavors, the decision to establish our studio in
                2024 was a pivotal moment. Our agency is a testament to a
                vision: crafting digital designs that go beyond aesthetics,
                prioritizing user experience. With a commitment to innovation
                and years of industry insight, we embark on this journey to
                redefine the future of digital design. Join us, where each pixel
                tells a story and every project adds a new chapter to the
                Marasih Design Studio legacy.
              </div>
            </div>
            <div className="align">
              <img className="align-child" alt="" src="/group-34442.svg" />
              <img
                className="align-item"
                loading="eager"
                alt=""
                src="/group-34444.svg"
              />
            </div>
          </section>
          <section className="path">
            <div className="line-segment">
              {/* <div className="text-block">
                <div className="text-block-child" />
                <div className="divider">
                  <div className="image">
                    <h2 className="our-mission">Our Mission</h2>
                  </div>
                  <div className="pixels-with-purpose">Pixels with Purpose</div>
                </div>
              </div> */}
              <img className="our-mission-desktop" src="Our mission.webp"></img>
              <div className="pen">
                <div className="pen-child" />
                <div className="at-marasih-studio-container">
                  <p className="at-marasih-studio">
                    At Marasih studio, we're not just pixel pushers, we're
                    experience architects. We blend stunning visuals with
                    intuitive interfaces to craft digital experiences that
                    captivate users, drive engagement, and power brand success.
                    From sleek websites to user-friendly apps, we weave together
                    technology and creativity to build bridges between brands
                    and their audiences, creating connections that last.{" "}
                    <br></br>
                    <br></br>
                    Every project is fueled by our relentless pursuit of design
                    excellence. We push boundaries, challenge conventions, and
                    deliver results that exceed expectations. Join us on this
                    journey to transform the digital landscape, one pixel at a
                    time.
                  </p>
                </div>
              </div>
            </div>
            <div className="line-segment1">
              <img
                className="line-segment-child"
                loading="eager"
                alt=""
                src="/group-34447@2x.png"
              />
              <img
                className="line-segment-item"
                loading="eager"
                alt=""
                src="/group-34447@2x.png"
              />
              <div className="path-shape" />
              <h2 className="our-values">Our Values</h2>
              <div className="ethics-in-every">Ethics in Every Pixels</div>
              <div className="at-marasih-studio-container1">
                <p className="at-marasih-studio1">
                  At Marasih Studio, we embark on a journey of ethical design
                  and core values creativity, user-centricity, integrity, and a
                  promise of exceptional value for money. Channeling boundless
                  creativity, we sculpt designs that inspire and redefine user
                  experiences. Our integrity radiates through transparent
                  collaborations with brands sharing our ethical ethos. Infusing
                  value for money into our DNA, we ensure impactful designs
                  within budgetary realms. Our designs thrive on collaborative
                  synergy. Sustainability is the heartbeat of our innovation.
                  Continuous learning keeps us at the forefront of technology
                  and design trends. <br></br>
                  At Marasih Studio, our values aren’t just principles; they’re
                  the essence of our studio, a transformative journey where
                  creativity meets integrity, and design becomes a powerful
                  force for positive change
                </p>
              </div>
            </div>
            <div className="line-segment2">
              <div className="rectangle-parent21">
                <div className="frame-child30" />
                <div className="at-marasih-studio-container2">
                  <p className="at-marasih-studio3">
                    At Marasih Studio, our vision extends beyond the pixels,
                    fueling aspirations and setting ambitious goals for the
                    future of design. Our mission is to pioneer innovative and
                    impactful designs, pushing boundaries and redefining digital
                    aesthetics. We aspire to redefine user experiences, creating
                    designs that seamlessly blend creativity and functionality.
                    <br></br>
                    <br></br>
                    Staying at the forefront of emerging technologies is a
                    commitment we hold dear, ensuring that our designs not only
                    meet current standards but set new ones. we envision a
                    future where our designs inspire, engage, and leave a
                    lasting impression.
                  </p>
                </div>
              </div>
              <div>

              </div>
              <div className="rectangle-parent22">
                <div className="frame-child31" />
                <img
                  className="mask-group-icon16"
                  alt=""
                  src="/mask-group-12.svg"
                />
                <div className="frame-group1">
                  <img
                    className="frame-group-child"
                    loading="eager"
                    alt=""
                    src="/group-34445@2x.png"
                  />
                  <h2 className="our-goals">Our Goals</h2>
                </div>
                <div className="aspirations-and-beyond">
                  Aspirations and Beyond
                </div>
              </div>
            </div>
          </section>
          <section className="text">
            <div className="frame-with-text">
              <div className="crafted-excellence">Crafted Excellence</div>
              <h1 className="marasih-studios-expertise-container">
                <span className="marasih-studios">Marasih Studio’s</span>
                <span>{` `}</span>
                <span className="expertise-showcase">Expertise Showcase</span>
              </h1>
            </div>
            <div className="ellipse-with-text">
              <div className="shape-group">
                <div className="" />
                <div className="service-frames">
                  <h3 className="elevate-with-exceptional">
                    Elevate with Exceptional Design Services
                  </h3>
                </div>
                <div className="ux-design-frame">
                  <div className="ui-design-frame">
                    <img
                      className="ui-design-frame-child"
                      loading="eager"
                      alt=""
                      src="/group-34367.svg"
                    />
                    <div className="user-experience-design1">
                      User Experience Design
                    </div>
                  </div>
                </div>
                <div className="illustration-design">
                  <div className="social-media-branding">
                    <img
                      className="social-media-branding-child"
                      loading="eager"
                      alt=""
                      src="/group-34367.svg"
                    />
                    <div className="user-interface-design1">
                      User Interface Design
                    </div>
                  </div>
                </div>
                <div className="brand-identity">
                  <div className="brand-identity-frame">
                    <img
                      className="brand-identity-frame-child"
                      loading="eager"
                      alt=""
                      src="/group-34367.svg"
                    />
                    <div className="interaction-design1">
                      Interaction Design
                    </div>
                  </div>
                </div>
                <div className="marketing-frame">
                  <div className="illustration-frame">
                    <img
                      className="illustration-frame-child"
                      loading="eager"
                      alt=""
                      src="/group-34367.svg"
                    />
                    <div className="brand-identity1">Brand Identity</div>
                  </div>
                </div>
                <div className="branding-frame">
                  <div className="marketing-frame1">
                    <img
                      className="marketing-frame-child"
                      alt=""
                      src="/group-34367.svg"
                    />
                    <div className="marketing-graphics">Marketing Graphics</div>
                  </div>
                </div>
                <div className="social-media-frame">
                  <div className="component-social-icons">
                    <div className="social-media-design">
                      <img
                        className="social-media-design-child"
                        alt=""
                        src="/group-34367.svg"
                      />
                      <div className="illustration-design1">
                        Illustration Design
                      </div>
                    </div>
                    <div className="social-brand-frame">
                      <img
                        className="social-brand-frame-child"
                        alt=""
                        src="/group-34367.svg"
                      />
                      <div className="social-media-branding1">
                        Social Media Branding
                      </div>
                    </div>
                    <div className="component-social-icons1">
                      <img
                        className="component-social-icons-child"
                        alt=""
                        src="/group-34367.svg"
                      />
                      <div className="email-marketing-design">
                        Email Marketing Design
                      </div>
                    </div>
                  </div>
                  <div className="circle-frame"></div>
                </div>
              </div>
              <img className="checking" src="/checking.png" />
              <div className="shape-group1">
                <div className="image-parent">
                  <div className="image1" />
                  <h3 className="proficiency-amplified-with-container1">
                    <span>{`Proficiency Amplified with `}</span>
                    <span className="industry-leading-tools1">
                      Industry-Leading Tools
                    </span>
                  </h3>
                  <div className="path1">
                    <div className="ellipse-path-parent">
                      <div className="ellipse-path" />
                      <div className="content-boxes">
                        <div className="text-banner" />
                        <img
                          className="adobe-illustrator-cc-icon-1"
                          loading="eager"
                          alt=""
                          src="/adobe-illustrator-cc-icon-1@2x.png"
                        />
                      </div>
                    </div>
                    <div className="rectangle-parent23">
                      <div className="frame-child32" />
                      <button className="ellipse-container">
                        <div className="frame-child33" />
                        <img
                          className="adobe-photoshop-cc-icon-1"
                          alt=""
                          src="/adobe-photoshop-cc-icon-1@2x.png"
                        />
                      </button>
                    </div>
                    <div className="ellipse-parent1">
                      <div className="frame-child34" />
                      <div className="wrapper-group-34400">
                        <img
                          className="wrapper-group-34400-child"
                          loading="eager"
                          alt=""
                          src="/group-34400.svg"
                        />
                      </div>
                    </div>
                    <div className="rectangle-background-parent">
                      <div className="rectangle-background" />
                      <div className="ellipse-focus-parent">
                        <div className="ellipse-focus" />
                        <img
                          className="adobe-after-effects-cc-icon-1"
                          loading="eager"
                          alt=""
                          src="/adobe-after-effects-cc-icon-1@2x.png"
                        />
                      </div>
                    </div>
                    <div className="wrapper-group-34402">
                      <img
                        className="wrapper-group-34402-child"
                        loading="eager"
                        alt=""
                        src="/group-34402@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="rectangle-parent24">
                  <div className="frame-child35" />
                  <div className="impressed-frame">
                    <div className="create-frame" />
                    <h3 className="lets-impressed-with">
                      Let’s impressed with your product!
                    </h3>
                  </div>

                  <button className="group-user-experience">
                    <div className="lets-create-special1">
                      Let’s create special
                    </div>
                    <h2 classnName="h3">💭</h2>
                  </button>
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </div>
        </div>
      )}
    </div>
  );
};

export default FrameHeader;
