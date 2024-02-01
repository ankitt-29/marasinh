import { useState } from "react";

import "./contact.css";

const Contact = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedBudget, setSelectedBudget] = useState('');


  const isBudgetChecked = (checkboxName) => selectedBudget === checkboxName;

  const handleCheckboxChange = (checkboxName) => {
    setSelectedBudget(checkboxName);
  };


  const isCheckboxChecked = (checkboxName) => selectedServices.includes(checkboxName);

  const handleCheckboxChangeService = (checkboxName) => {
    if (selectedServices.includes(checkboxName)) {
      setSelectedServices(selectedServices.filter(item => item !== checkboxName));
    } else {
      setSelectedServices([...selectedServices, checkboxName]);
    }
  };

  return (
    <div className="container-group">
      <header className="background-frame">
        <img
          className="layer-1-icon"
          loading="eager"
          alt=""
          src="/layer-1.svg"
        />
        <div className="inner-frames">
          <div className="content-frame">
            <div className="link-frame">
              <div className="text-container">
                <div className="work">Work</div>
              </div>
              <div className="about">About</div>
              <div className="contact-info-frame">
                <div className="email-frame" />
                <div className="contact-us">Contact us</div>
              </div>
            </div>
          </div>
          <button className="rectangle-parent">
            <div className="frame-child" />
            <div className="lets-talk">Let’s Talk</div>
          </button>
        </div>
      </header>
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
            <span>{`A message away from turning your dreams into `}</span>
            <span className="digital-realities">digital realities</span>
          </h1>
        </div>
        <div className="contact-info-frames">
          <div className="together-well-craft">
            Together, we'll craft a digital landscape that goes beyond limits
            and sets new standards for excellence.
          </div>
          <div className="button-container">
            <a href="#" className="magic-button">Let’s create magic<img className="top-hat" src="/Tophat1.png"></img></a>
          </div>
        </div>
      </section>
      <section className="linked-in-icon-parent">
        <div className="linked-in-icon">
          <div className="instagram-icon" />
          <div className="dribbble-icon">
            <div className="behance-icon">
              <div className="twitter-icon" />
              <h2 className="lets-create-special">Let’s create special</h2>
            </div>
          </div>
          <div className="design-studio-frame">
            <div className="content-area">
              <div className="rectangle-container">
                <div className="frame-inner" />
                <input
                  className="your-name"
                  placeholder="Your name*"
                  type="text"
                />
              </div>
              <div className="group-div">
                <div className="rectangle-div" />
                <input
                  className="your-email"
                  placeholder="Your Email* "
                  type="text"
                />
              </div>
            </div>
            <div className="content-area1">
              <div className="rectangle-parent1">
                <div className="frame-child1" />
                <input
                  className="your-phone-number"
                  placeholder="Your phone number"
                  type="text"
                />
              </div>
              <div className="rectangle-parent2">
                <div className="frame-child2" />
                <input
                  className="your-organisation-name"
                  placeholder="Your organisation name"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="emoji-dizzy-frame">
            <div className="project-type-selector">
              <div className="branding-social-media-other">
                <div className="mobile-app-website-group">
                  <div className="mobile-app-website-group-child" />
                  <div className="select-your-project">
                    Select your project type:
                  </div>
                </div>
              </div>
              <div className="work-aboutus-blogs-contactus">
                <label
                  className={`group-button ${isCheckboxChecked('Mobile app') ? 'checked' : ''}`}
                  style={{
                    flexShrink: 0,
                    borderRadius: '100px',
                    border: '1px solid #7C6493',
                    background: isCheckboxChecked('Mobile app') ? '#5A61FF' : 'rgba(255, 255, 255, 0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                  }}
                >
                  <input
                    type="checkbox"
                    className="hidden-checkbox"
                    checked={isCheckboxChecked('Mobile app')}
                    onChange={() => handleCheckboxChangeService('Mobile app')}
                    style={{ display: 'none' }}
                  />
                  <span className="checkbox-text">Mobile app</span>
                </label>

                <label
                  className={`group-button ${isCheckboxChecked('Website') ? 'checked' : ''}`}
                  style={{
                    flexShrink: 0,
                    borderRadius: '100px',
                    border: '1px solid #7C6493',
                    background: isCheckboxChecked('Website') ? '#5A61FF' : 'rgba(255, 255, 255, 0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                  }}
                >
                  <input
                    type="checkbox"
                    className="hidden-checkbox"
                    checked={isCheckboxChecked('Website')}
                    onChange={() => handleCheckboxChangeService('Website')}
                    style={{ display: 'none' }}
                  />
                  <span className="checkbox-text">Website</span>
                </label>

                <label
                  className={`rectangle-parent4 ${isCheckboxChecked('Branding') ? 'checked' : ''}`}
                  style={{
                    flexShrink: 0,
                    borderRadius: '100px',
                    border: '1px solid #7C6493',
                    background: isCheckboxChecked('Branding') ? '#5A61FF' : 'rgba(255, 255, 255, 0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                  }}
                >
                  <input
                    type="checkbox"
                    className="hidden-checkbox"
                    checked={isCheckboxChecked('Branding')}
                    onChange={() => handleCheckboxChangeService('Branding')}
                    style={{ display: 'none' }}
                  />
                  <span className="checkbox-text">Branding</span>
                </label>

                <label
                  className={`rectangle-parent4 ${isCheckboxChecked('Social media') ? 'checked' : ''}`}
                  style={{
                    flexShrink: 0,
                    borderRadius: '100px',
                    border: '1px solid #7C6493',
                    background: isCheckboxChecked('Social media') ? '#5A61FF' : 'rgba(255, 255, 255, 0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                  }} v
                >
                  <input
                    type="checkbox"
                    className="hidden-checkbox"
                    checked={isCheckboxChecked('Social media')}
                    onChange={() => handleCheckboxChangeService('Social media')}
                    style={{ display: 'none' }}
                  />
                  <span className="checkbox-text">Social media</span>
                </label>

                <label
                  className={`rectangle-parent4 ${isCheckboxChecked('Other') ? 'checked' : ''}`}
                  style={{
                    flexShrink: 0,
                    borderRadius: '100px',
                    border: '1px solid #7C6493',
                    background: isCheckboxChecked('Other') ? '#5A61FF' : 'rgba(255, 255, 255, 0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                  }}
                >
                  <input
                    type="checkbox"
                    className="hidden-checkbox"
                    checked={isCheckboxChecked('Other')}
                    onChange={() => handleCheckboxChangeService('Other')}
                    style={{ display: 'none' }}
                  />
                  <span className="checkbox-text">Other</span>
                </label>
              </div>
            </div>
          </div>
          <div className="marasihstudiogmailcom">
            <div className="followus">
              <div className="figma">
                <div className="b-e-s-i-m-p-l-e-b-e-c-r-e-a-t">
                  <div className="gotanidea">
                    <div className="letsgetintouch" />
                    <div className="select-your-project1">
                      Select your project budget:
                    </div>
                  </div>
                </div>
                <div className="frame-parent">
                  <label
                    className={`group-button ${isBudgetChecked('Less than $5K') ? 'checked' : ''}`}
                    style={{
                      display: 'flex',
                      flexShrink: 0,
                      borderRadius: '100px',
                      border: '1px solid #7C6493',
                      background: isBudgetChecked('Less than $5K') ? '#5A61FF' : 'rgba(255, 255, 255, 0.05)',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      // Add other styles here
                    }}
                  >
                    <input
                      type="checkbox"
                      className="hidden-checkbox"
                      checked={isBudgetChecked('Less than $5K')}
                      onChange={() => handleCheckboxChange('Less than $5K')}
                      style={{ display: 'none' }}
                    />
                    <span className="checkbox-text">Less than $5K</span>
                  </label>
                  <label
                    className={`group-button ${isBudgetChecked('$5K to $10K') ? 'checked' : ''}`}
                    style={{
                      display: 'flex',
                      flexShrink: 0,
                      borderRadius: '100px',
                      border: '1px solid #7C6493',
                      background: isBudgetChecked('$5K to $10K') ? '#5A61FF' : 'rgba(255, 255, 255, 0.05)',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      // Add other styles here
                    }}
                  >
                    <input
                      type="checkbox"
                      className="hidden-checkbox"
                      checked={isBudgetChecked('$5K to $10K')}
                      onChange={() => handleCheckboxChange('$5K to $10K')}
                      style={{ display: 'none' }}
                    />
                    <span className="checkbox-text">$5K to $10K</span>
                  </label>
                </div>
              </div>
              <label
                className={`rectangle-parent4 ${isBudgetChecked('$10K to $25K') ? 'checked' : ''}`}
                style={{
                  display: 'flex',
                  width: '306px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '10px',
                  borderRadius: '100px',
                  border: '1px solid #7C6493',
                  background: isBudgetChecked('$10K to $25K') ? '#5A61FF' : 'rgba(255, 255, 255, 0.05)',
                  // Add other styles here
                }}
              >
                <input
                  type="checkbox"
                  className="hidden-checkbox"
                  checked={isBudgetChecked('$10K to $25K')}
                  onChange={() => handleCheckboxChange('$10K to $25K')}
                  style={{ display: 'none' }}
                />
                <span className="checkbox-text">$10K to $25K</span>
              </label>

              <label
                className={`rectangle-parent4 ${isBudgetChecked('$25K to $45K') ? 'checked' : ''}`}
                style={{
                  display: 'flex',
                  width: '306px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '10px',
                  borderRadius: '100px',
                  border: '1px solid #7C6493',
                  background: isBudgetChecked('$25K to $45K') ? '#5A61FF' : 'rgba(255, 255, 255, 0.05)',
                  // Add other styles here
                }}
              >
                <input
                  type="checkbox"
                  className="hidden-checkbox"
                  checked={isBudgetChecked('$25K to $45K')}
                  onChange={() => handleCheckboxChange('$25K to $45K')}
                  style={{ display: 'none' }}
                />
                <span className="checkbox-text">$25K to $45K</span>
              </label>
            </div>
          </div>
          <div className="b-e-s-i-m-p-l-e-b-e-c-r-e-a-t1">
            <div className="">
              <div className="project-info-child" />
              <input
                type="text"
                className="write-about-your"
                style={{
                  width: '1440px',
                  height: '264px',
                  flexShrink: 0,
                  borderRadius: '38px',
                  border: '1px solid #7C6493',
                  background: 'rgba(255, 255, 255, 0.05)',
                  color: '#6B6B6B',
                  fontFamily: 'Figtree',
                  fontSize: '32px',
                  fontStyle: 'normal',
                  fontWeight: 600,
                  lineHeight: '48px',
                }}
                placeholder="Write about your project (Project name, scope of work, timeline, budget)*"
              />
            </div>
          </div>

          <div className="rectangle-parent7">
            {/* <button className="button-group">
              <span className="button-text">Submit Application</span>
            </button> */}
            <div className="button-container1 ">
            <a href="#" className="magic-button1"><span style={{color: '#525252'}}>SUBMIT APPLICATION</span></a>
            </div>
          </div>

        </div>

        <div className="instagram-icon-frame">
          <div className="dribbble-icon-frame" />
          <div className="behance-icon-frame">
            <div className="twitter-icon-frame">
              <div className="linked-in-icon-frame" />
              <h3 className="ping-us">Ping us</h3>
            </div>
            <div className="marasihstudiogmailcom1">
              marasihstudio@gmail.com
            </div>
          </div>
          <div className="text-frame-with-image">
            <h3 className="follow-us">Follow us</h3>
            <div className="text-frame">
              <div className="instagram">Instagram</div>
              <div className="text-frame1">
                <div className="linkedin">LinkedIn</div>
              </div>
              <div className="dribbble">Dribbble</div>
              <div className="behance">Behance</div>
              <div className="twitter">Twitter</div>
              <div className="ellipse-shape-with-fill">
                <div className="rectangle-shape" />
                <div className="figma1">Figma</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="empty-ellipse">
        <div className="background-rectangle" />
        <div className="text-frame2" />
        <div className="inner-ellipse">
          <div className="design-studio-title">
            <h1 className="be-simple-be-container">
              <p className="be-simple">BE SIMPLE.</p>
              <p className="be-creative">BE CREATIVE.</p>
            </h1>
            <div className="idea-frame">
              <div className="contact-frame">
                <div className="got-an-idea">Got an idea?</div>
                <div className="rectangle-parent8">
                  <div className="frame-child9" />
                  <button className="lets-get-in-touch-parent">
                    <div className="lets-get-in">Let’s get in touch</div>
                    <img
                      className="emoji-dizzy-icon"
                      alt=""
                      src="/-emoji-dizzy.svg"
                    />
                  </button>
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
                    <div className="ellipse-div" />
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
              <div className="social-icons-frame1">
                <div className="line-separator">
                  <div className="follow-us1">Follow us</div>
                  <div className="ellipse-frame">
                    <img
                      className="social-icons"
                      loading="eager"
                      alt=""
                      src="/social-icons.svg"
                    />
                    <img
                      className="social-icons1"
                      loading="eager"
                      alt=""
                      src="/social-icons-1.svg"
                    />
                  </div>
                </div>
                <div className="frame-container">
                  <img
                    className="component-2-icon"
                    loading="eager"
                    alt=""
                    src="/component-2.svg"
                  />
                  <img
                    className="social-icons2"
                    loading="eager"
                    alt=""
                    src="/social-icons-2.svg"
                  />
                  <img
                    className="social-icons3"
                    loading="eager"
                    alt=""
                    src="/social-icons-3.svg"
                  />
                  <img
                    className="social-icons4"
                    loading="eager"
                    alt=""
                    src="/social-icons-4.svg"
                  />
                  <img
                    className="frame-container-child"
                    loading="eager"
                    alt=""
                    src="/frame-48.svg"
                  />
                </div>
              </div>
            </div>
            <div className="all-rights-text-frame">
              <div className="marasih-studio-all">
                2024 @ marasih studio. All rights reserved
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
