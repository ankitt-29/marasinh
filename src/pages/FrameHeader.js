import Footer from "./Footer";
import { useNavigate } from 'react-router-dom';

import "./FrameHeader.css";

const FrameHeader = () => {
  const navigate = useNavigate();

  const handleNavigation = (event, route) => {
    event.preventDefault();
    navigate(route);
  };
  
  return (
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
      <header className="group-main">
        <img
          className="layer-1-icon5"
          loading="eager"
          alt=""
          src="/layer-1.svg"
        />
        {/* <div className="text-brand-name">
          <div className="ellipse-emblem">
            <div className="frame-content">
              <div className="work5">Work</div>
              <div className="frame-footer">
                <div className="group-links" />
                <div className="about3">About</div>
              </div>
              <div className="contact-us5">Contact us</div>
            </div>
          </div> */}
        <div className="inner-frames">
          <div className="content-frame">
            <div className="link-frame">
            <div className="text-container">
        <a href="/work" className="work" onClick={(e) => handleNavigation(e, '/work')}>
          Work
        </a>
      </div>
      <div className="frame-footer">
        <div className="group-links" />
        <a href="/about" className="about3" onClick={(e) => handleNavigation(e, '/about')}>
          About
        </a>
      </div>
      <div className="contact-info-frame">
        <div className="" />
        <a href="/contact" className="contact-us" onClick={(e) => handleNavigation(e, '/contact')}>
          Contact Us
        </a>
      </div>
            </div>
          </div>
          <button className="rectangle-parent19">
            <div className="frame-child28" />
            <div className="lets-talk7">Let’s Talk</div>
          </button>

        </div>
      </header>
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
              <p className="a-versatile-design">A versatile design studio,</p>
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
          {/* <button className="group-user-experience">
            <div className="lets-create-special1">Let’s create special</div>
            <img
              className="emoji-shooting-star"
              alt=""
              src="/-emoji-shooting-star@2x.png"
            />
          </button> */}
          <div className="button-container-about">
            <a href="#" className="magic-button-about">Let's Create Special <img
              className="emoji-waving-hand1"
              alt=""
              src="/-emoji-shooting-star@2x.png"
            /></a>
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
            insights from four years in a 9-to-6 corporate job and freelancing
            endeavors, the decision to establish our studio in 2024 was a
            pivotal moment. Our agency is a testament to a vision: crafting
            digital designs that go beyond aesthetics, prioritizing user
            experience. With a commitment to innovation and years of industry
            insight, we embark on this journey to redefine the future of digital
            design. Join us, where each pixel tells a story and every project
            adds a new chapter to the Marasih Design Studio legacy.
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
          <div className="text-block">
            <div className="text-block-child" />
            <div className="divider">
              {/* <img className="mask-group-icon15" alt="" src="/mask-group.svg" /> */}
              <div className="image">
                {/* <img
                  className="image-child"
                  loading="eager"
                  alt=""
                  src="/group-34407@2x.png"
                /> */}
                <h2 className="our-mission">Our Mission</h2>
              </div>
              <div className="pixels-with-purpose">Pixels with Purpose</div>
            </div>
          </div>
          <div className="pen">
            <div className="pen-child" />
            <div className="at-marasih-studio-container">
              <p className="at-marasih-studio">
                At Marasih studio, we're not just pixel pushers, we're
                experience architects. We blend stunning visuals with intuitive
                interfaces to craft digital experiences that captivate users,
                drive engagement, and power brand success. From sleek websites
                to user-friendly apps, we weave together technology and
                creativity to build bridges between brands and their audiences,
                creating connections that last.   <br></br><br></br>
                Every project is fueled by our relentless pursuit of design
                excellence. We push boundaries, challenge conventions, and
                deliver results that exceed expectations. Join us on this
                journey to transform the digital landscape, one pixel at a time.
              </p>
              {/* <p className="blank-line">&nbsp;</p>
              <p className="every-project-is">
                Every project is fueled by our relentless pursuit of design
                excellence. We push boundaries, challenge conventions, and
                deliver results that exceed expectations. Join us on this
                journey to transform the digital landscape, one pixel at a time.
              </p> */}
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
              At Marasih Studio, we embark on a journey of ethical design and
              core values creativity, user-centricity, integrity, and a promise
              of exceptional value for money. Channeling boundless creativity,
              we sculpt designs that inspire and redefine user experiences. Our
              integrity radiates through transparent collaborations with brands
              sharing our ethical ethos. Infusing value for money into our DNA,
              we ensure impactful designs within budgetary realms. Our designs
              thrive on collaborative synergy. Sustainability is the heartbeat
              of our innovation. Continuous learning keeps us at the forefront
              of technology and design trends. <br></br>
              At Marasih Studio, our values aren’t just principles; they’re the
              essence of our studio, a transformative journey where creativity
              meets integrity, and design becomes a powerful force for positive
              change
            </p>
            {/* <p className="blank-line1">&nbsp;</p>
            <p className="at-marasih-studio2">
              At Marasih Studio, our values aren’t just principles; they’re the
              essence of our studio, a transformative journey where creativity
              meets integrity, and design becomes a powerful force for positive
              change
            </p> */}
          </div>
        </div>
        <div className="line-segment2">
          <div className="rectangle-parent21">
            <div className="frame-child30" />
            <div className="at-marasih-studio-container2">
              <p className="at-marasih-studio3">
                At Marasih Studio, our vision extends beyond the pixels, fueling
                aspirations and setting ambitious goals for the future of
                design. Our mission is to pioneer innovative and impactful
                designs, pushing boundaries and redefining digital aesthetics.
                We aspire to redefine user experiences, creating designs that
                seamlessly blend creativity and functionality.<br></br><br></br>
                Staying at the forefront of emerging technologies is a
                commitment we hold dear, ensuring that our designs not only meet
                current standards but set new ones. we envision a future where
                our designs inspire, engage, and leave a lasting impression.
              </p>
              {/* <p className="blank-line2">&nbsp;</p>
              <p className="staying-at-the">
                Staying at the forefront of emerging technologies is a
                commitment we hold dear, ensuring that our designs not only meet
                current standards but set new ones. we envision a future where
                our designs inspire, engage, and leave a lasting impression.
              </p> */}
            </div>
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
            <div className="aspirations-and-beyond">Aspirations and Beyond</div>
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
            <div className="symbol-instance" />
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
                <div className="interaction-design1">Interaction Design</div>
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
              <div className="circle-frame">
                <div className="ellipse-shape1" />
              </div>
            </div>
          </div>
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
              {/* <button class="create-your-frame">
                <div class="lets-create-yours">Let’s create yours</div>
                <h3 class="h3">💭</h3>
              </button> */}
              <button className="group-user-experience">
                <div className="lets-create-special1">Let’s create special</div>
                <h3 class="h3">💭</h3>

               
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      {/* <section className="master-frame">
        <div className="elevate-frame" />
        <div className="line-element" />
        <div className="frame-wrapper">
          <div className="design-studio-frame5">
            <h1 className="be-simple-be-container2">
              <p className="be-simple2">BE SIMPLE.</p>
              <p className="be-creative2">BE CREATIVE.</p>
            </h1>
            <div className="main-text-frame">
              <div className="nested-container-group">
                <div className="got-an-idea3">Got an idea?</div>
                <div className="rectangle-parent25">
                  <div className="frame-child36" />
                  <button className="design-area-frames">
                    <div className="lets-get-in2">Let’s get in touch</div>
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
          <div className="line-separator2" />
        </div>
        <div className="sub-frame">
          <div className="design-studio-frame6">
            <div className="frame-subheader">
              <div className="sub-heading-frame">
                <div className="ellipse-button">
                  <div className="circle-button-hover">
                    <div className="text-button-label" />
                    <img
                      className="layer-1-icon6"
                      loading="eager"
                      alt=""
                      src="/layer-1-11.svg"
                    />
                  </div>
                  <div className="design-studio2">Design Studio</div>
                </div>
              </div>
              <div className="website-layout">
                <div className="explore2">Explore</div>
                <div className="follow-us-frame">
                  <div className="work6">Work</div>
                  <div className="about-us2">About us</div>
                  <div className="blogs2">Blogs</div>
                  <div className="contact-us6">Contact us</div>
                </div>
              </div>
              <div className="home-page-frame">
                <div className="contact-frame1">
                  <div className="follow-us3">Follow us</div>
                  <div className="social-icons-frame2">
                    <img
                      className="social-icons10"
                      loading="eager"
                      alt=""
                      src="/social-icons.svg"
                    />
                    <img
                      className="social-icons11"
                      loading="eager"
                      alt=""
                      src="/social-icons-1.svg"
                    />
                  </div>
                </div>
                <div className="design-studio-frame7">
                  <img
                    className="component-2-icon2"
                    loading="eager"
                    alt=""
                    src="/component-2.svg"
                  />
                  <img
                    className="social-icons12"
                    loading="eager"
                    alt=""
                    src="/social-icons-22.svg"
                  />
                  <img
                    className="social-icons13"
                    loading="eager"
                    alt=""
                    src="/social-icons-3.svg"
                  />
                  <img
                    className="social-icons14"
                    loading="eager"
                    alt=""
                    src="/social-icons-4.svg"
                  />
                  <img
                    className="design-studio-frame-child"
                    loading="eager"
                    alt=""
                    src="/frame-481.svg"
                  />
                </div>
              </div>
            </div>
            <div className="about-us-frame">
              <div className="marasih-studio-all2">
                2024 @ marasih studio. All rights reserved
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default FrameHeader;
