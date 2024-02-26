import { useState } from "react";

import "./contact.css";
import { useMediaQuery } from 'react-responsive';

const Contact = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedBudget, setSelectedBudget] = useState('');
  const [isHoveredDribbble, setIsHoveredDribbble] = useState(false);
  const [isHoveredLinkedIn, setIsHoveredLinkedIn] = useState(false);
  const [isHoveredInstagram, setIsHoveredInstagram] = useState(false);
  const [isHoveredX, setIsHoveredX] = useState(false);
  const [isHoveredFigma, setIsHoveredFigma] = useState(false);
  const [isHoveredFacebook, setIsHoveredFacebook] = useState(false);
  const [isHoveredBento, setIsHoveredBento] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });




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




  return (


    <div>
      {isMobile ? (
        // Mobile view code
        <div>
          {/* <h1>Mobile View</h1> */}
          <div
            style={{
              width: "100%",
              position: "relative",
              backgroundColor: "#000",
              height: "2849px",
              overflow: "hidden",
              textAlign: "center",
              fontSize: "12px",
              color: "#fff",
              fontFamily: "Figtree",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "calc(50% - 1313.5px)",
                left: "calc(50% + 0.5px)",
                borderRadius: "20.51px",
                width: "250px",
                height: "250px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  position: "absolute",
                  left: "0px",
                  top: "0px",
                  transform: "scale(3.8)",
                }}
                alt=""
                src="/star-11.svg"
              />
            </div>
            <div
              style={{
                position: "absolute",
                top: "calc(50% - 1323.5px)",
                left: "calc(50% - 263.5px)",
                borderRadius: "20.51px",
                width: "250px",
                height: "250px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  position: "absolute",
                  left: "0px",
                  top: "0px",
                  transform: "scale(3.8)",
                }}
                alt=""
              // src="/star-11.svg"
              />
            </div>
            <img
              style={{
                position: "absolute",
                top: "calc(50% - 1384.5px)",
                left: "calc(50% - 162.5px)",
                width: "102px",
                height: "23px",
                overflow: "hidden",
              }}
              alt=""
            // src="/layer-11.svg"
            />
            <div
              style={{
                position: "absolute",
                top: "33px",
                left: "313px",
                borderRadius: "50%",
                backgroundColor: "#282a53",
                border: "1px solid #333679",
                boxSizing: "border-box",
                width: "37px",
                height: "37px",
              }}
            />
            <img
              style={{
                position: "absolute",
                top: "41px",
                left: "321px",
                width: "21px",
                height: "21px",
              }}
              alt=""
              src="/essetionalmenu.svg"
            />
            <div
              style={{
                position: "absolute",
                top: "250px",
                left: "calc(50% - 142.5px)",
                lineHeight: "18px",
                fontWeight: "500",
                color: "#e8e8e8",
                display: "inline-block",
                width: "285px",
              }}
            >
              Together, we'll craft a digital landscape that goes beyond limits and
              sets new standards for excellence.
            </div>
            <b
              style={{
                position: "absolute",
                top: "120px",
                left: "calc(50% - 81.5px)",
                fontSize: "11px",
                lineHeight: "16.5px",
                textTransform: "uppercase",
                fontFamily: "'Space Grotesk'",
                background: "linear-gradient(90.32deg, #90a8ff, #37f2b7), #fff",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Unleash Your Brand's Story
            </b>
            <div
              style={{
                position: "absolute",
                top: "146px",
                left: "calc(50% - 162.5px)",
                fontSize: "20px",
                lineHeight: "30px",
                textTransform: "uppercase",
                fontWeight: "500",
                display: "inline-block",
                width: "325px",
              }}
            >
              <span>{`A message away from turning your dreams into `}</span>
              <span
                style={{
                  background:
                    "linear-gradient(90.13deg, #ecdb68, #fff0b4 54.5%, #b78700)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                digital realities
              </span>
            </div>
            <div
              style={{
                position: "absolute",
                top: "320px",
                left: "calc(50% - 107.5px)",
                width: "215px",
                height: "47.6px",
                textAlign: "left",
                fontSize: "10.7px",
                fontFamily: "'Plus Jakarta Sans'",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "0px",
                  left: "calc(50% - 107.5px)",
                  borderRadius: "33.73px",
                  backgroundColor: "rgba(90, 97, 255, 0.15)",
                  border: "0.8px solid rgba(90, 97, 255, 0.26)",
                  boxSizing: "border-box",
                  width: "215px",
                  height: "47.6px",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "4.9px",
                  left: "calc(50% - 100.2px)",
                  borderRadius: "38.32px",
                  backgroundColor: "#5a61ff",
                  width: "200.4px",
                  height: "37.4px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  padding: "10.73083782196045px 38.32442092895508px",
                  boxSizing: "border-box",
                  gap: "0px 11.5px",
                }}
              >
                <div style={{ position: "relative", fontWeight: "600" }}>
                  Let’s create magic
                </div>
                <div
                  style={{
                    position: "relative",
                    fontSize: "16.5px",
                    fontWeight: "600",
                    color: "#000",
                  }}
                >
                  🎩
                </div>
              </div>
            </div>
            {/* <GroupComponent2 /> */}
            <div
              style={{
                position: "absolute",
                top: "408px",
                left: "25px",
                width: "325px",
                height: "1253px",
                textAlign: "left",
                fontSize: "12.8px",
                color: "#fff",
                fontFamily: "Figtree",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "1px",
                  left: "1px",
                  borderRadius: "50%",
                  backgroundColor: "#b494ce",
                  width: "149px",
                  height: "149px",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  top: "0%",
                  right: "0%",
                  bottom: "0%",
                  left: "0%",
                  borderRadius: "24px",
                  backgroundColor: "rgba(17, 17, 17, 0.4)",
                  backdropFilter: "blur(300px)",
                  border: "1px solid rgba(145, 82, 189, 0.49)",
                  boxSizing: "border-box",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "1153.9px",
                  left: "calc(50% - 122.5px)",
                  width: "245px",
                  height: "64.2px",
                  fontSize: "15.8px",
                  color: "#525252",
                  fontFamily: "'Plus Jakarta Sans'",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "calc(50% - 122.5px)",
                    borderRadius: "49.56px",
                    backgroundColor: "rgba(128, 128, 128, 0.15)",
                    border: "1.1px solid rgba(121, 121, 121, 0.26)",
                    boxSizing: "border-box",
                    width: "245px",
                    height: "64.2px",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "7.3px",
                    left: "calc(50% - 112.6px)",
                    borderRadius: "56.32px",
                    backgroundColor: "#fff",
                    width: "225.3px",
                    height: "49px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    padding: "14.643678665161133px 29.287357330322266px",
                    boxSizing: "border-box",
                  }}
                >
                  <div style={{ position: "relative", fontWeight: "600" }}>
                    SUBMIT APPLICATION
                  </div>
                </div>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "414px",
                  left: "25px",
                  width: "132.8px",
                  height: "44.3px",
                }}
              >
                <label
                  className={` ${isCheckboxChecked('Branding') ? 'checked' : ''}`}
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    borderRadius: "49.17px",
                    backgroundColor: isCheckboxChecked('Branding') ? '#5a61ff' : 'rgba(255, 255, 255, 0.05)',
                    border: "0.5px solid rgba(124, 100, 147, 0.5)",
                    boxSizing: "border-box",
                    width: "132.8px",
                    height: "44.3px",
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
                    style={{
                      position: 'absolute',
                      opacity: 0,
                      cursor: 'pointer',
                    }}
                  />
                  <b
                    style={{
                      position: "absolute",
                      top: "12.3px",
                      left: "34.8px",
                      lineHeight: "19.18px",
                      color: isCheckboxChecked('Branding') ? 'white' : '#fff', // Text color when selected
                    }}
                  >
                    Mobile App
                  </b>
                </label>
                {/* <div
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    borderRadius: "49.17px",
                    backgroundColor: "#5a61ff",
                    border: "0.5px solid rgba(124, 100, 147, 0.5)",
                    boxSizing: "border-box",
                    width: "132.8px",
                    height: "44.3px",
                  }}
                />
                <b
                  style={{
                    position: "absolute",
                    top: "12.3px",
                    left: "33.9px",
                    lineHeight: "19.18px",
                  }}
                >
                  Mobile app
                </b> */}
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "664px",
                  left: "25px",
                  width: "132.8px",
                  height: "44.3px",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    borderRadius: "49.17px",
                    backgroundColor: "#5a61ff",
                    border: "0.5px solid rgba(124, 100, 147, 0.5)",
                    boxSizing: "border-box",
                    width: "132.8px",
                    height: "44.3px",
                  }}
                />
                <b
                  style={{
                    position: "absolute",
                    top: "12.3px",
                    left: "calc(50% - 41.4px)",
                    lineHeight: "19.18px",
                  }}
                >
                  Less than $5K
                </b>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "414px",
                  left: "176.8px",
                  width: "132.8px",
                  height: "44.3px",
                }}
              >
                {/* <div
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    borderRadius: "49.17px",
                    backgroundColor: "#5a61ff",
                    border: "0.5px solid rgba(124, 100, 147, 0.5)",
                    boxSizing: "border-box",
                    width: "132.8px",
                    height: "44.3px",
                  }}
                />
                <b
                  style={{
                    position: "absolute",
                    top: "12.3px",
                    left: "42.3px",
                    lineHeight: "19.18px",
                  }}
                >
                  Website
                </b> */}
                <label
                  className={` ${isCheckboxChecked('Branding') ? 'checked' : ''}`}
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    borderRadius: "49.17px",
                    backgroundColor: isCheckboxChecked('Branding') ? '#5a61ff' : 'rgba(255, 255, 255, 0.05)',
                    border: "0.5px solid rgba(124, 100, 147, 0.5)",
                    boxSizing: "border-box",
                    width: "132.8px",
                    height: "44.3px",
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
                    style={{
                      position: 'absolute',
                      opacity: 0,
                      cursor: 'pointer',
                    }}
                  />
                  <b
                    style={{
                      position: "absolute",
                      top: "12.3px",
                      left: "39.8px",
                      lineHeight: "19.18px",
                      color: isCheckboxChecked('Branding') ? 'white' : '#fff', // Text color when selected
                    }}
                  >
                    Website
                  </b>
                </label>


              </div>
              <div
                style={{
                  position: "absolute",
                  top: "473px",
                  left: "25px",
                  width: "132.8px",
                  height: "44.3px",
                }}
              >
                {/* <div
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    borderRadius: "49.17px",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    border: "0.5px solid rgba(124, 100, 147, 0.5)",
                    boxSizing: "border-box",
                    width: "132.8px",
                    height: "44.3px",
                  }}
                />
                <b
                  style={{
                    position: "absolute",
                    top: "12.3px",
                    left: "39.8px",
                    lineHeight: "19.18px",
                  }}
                >
                  Branding
                </b> */}
                <label
                  className={` ${isCheckboxChecked('Branding') ? 'checked' : ''}`}
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    borderRadius: "49.17px",
                    backgroundColor: isCheckboxChecked('Branding') ? '#5A61FF' : 'rgba(255, 255, 255, 0.05)',
                    border: "0.5px solid rgba(124, 100, 147, 0.5)",
                    boxSizing: "border-box",
                    width: "132.8px",
                    height: "44.3px",
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
                    style={{
                      position: 'absolute',
                      opacity: 0,
                      cursor: 'pointer',
                    }}
                  />
                  <span
                    style={{
                      lineHeight: '19.18px',
                      color: '#fff',
                      fontWeight: 'bold',
                    }}
                  >
                    Branding
                  </span>
                </label>

              </div>
              <div
                style={{
                  position: "absolute",
                  top: "723px",
                  left: "25px",
                  width: "132.8px",
                  height: "44.3px",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    borderRadius: "49.17px",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    border: "0.5px solid rgba(124, 100, 147, 0.5)",
                    boxSizing: "border-box",
                    width: "132.8px",
                    height: "44.3px",
                  }}
                />
                <b
                  style={{
                    position: "absolute",
                    top: "calc(50% - 10.15px)",
                    left: "calc(50% - 39.4px)",
                    lineHeight: "19.18px",
                  }}
                >
                  $10K to $25K
                </b>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "473px",
                  left: "176.8px",
                  width: "132.8px",
                  height: "44.3px",
                }}
              >
                {/* <div
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    borderRadius: "49.17px",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    border: "0.5px solid rgba(124, 100, 147, 0.5)",
                    boxSizing: "border-box",
                    width: "132.8px",
                    height: "44.3px",
                  }}
                />
                <b
                  style={{
                    position: "absolute",
                    top: "12.3px",
                    left: "28.5px",
                    lineHeight: "19.18px",
                  }}
                >
                  Social media
                </b> */}
                <label
                  className={` ${isCheckboxChecked('Branding') ? 'checked' : ''}`}
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    borderRadius: "49.17px",
                    backgroundColor: isCheckboxChecked('Branding') ? '#5a61ff' : 'rgba(255, 255, 255, 0.05)',
                    border: "0.5px solid rgba(124, 100, 147, 0.5)",
                    boxSizing: "border-box",
                    width: "132.8px",
                    height: "44.3px",
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
                    style={{
                      position: 'absolute',
                      opacity: 0,
                      cursor: 'pointer',
                    }}
                  />
                  <b
                    style={{
                      position: "absolute",
                      top: "12.3px",
                      left: "32.8px",
                      lineHeight: "19.18px",
                      color: isCheckboxChecked('Branding') ? 'white' : '#fff', // Text color when selected
                    }}
                  >
                    Social Media
                  </b>
                </label>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "723px",
                  left: "176.8px",
                  width: "132.8px",
                  height: "44.3px",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    borderRadius: "49.17px",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    border: "0.5px solid rgba(124, 100, 147, 0.5)",
                    boxSizing: "border-box",
                    width: "132.8px",
                    height: "44.3px",
                  }}
                />
                <b
                  style={{
                    position: "absolute",
                    top: "calc(50% - 10.15px)",
                    left: "calc(50% - 40.2px)",
                    lineHeight: "19.18px",
                  }}
                >
                  $25K to $45K
                </b>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "664px",
                  left: "176.8px",
                  width: "132.8px",
                  height: "44.3px",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    borderRadius: "49.17px",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    border: "0.5px solid rgba(124, 100, 147, 0.5)",
                    boxSizing: "border-box",
                    width: "132.8px",
                    height: "44.3px",
                  }}
                />
                <b
                  style={{
                    position: "absolute",
                    top: "calc(50% - 10.15px)",
                    left: "calc(50% - 35.2px)",
                    lineHeight: "19.18px",
                  }}
                >
                  $5K to $10K
                </b>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "532px",
                  left: "25px",
                  width: "132.8px",
                  height: "44.3px",
                }}
              >
                {/* <div
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    borderRadius: "49.17px",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    border: "0.5px solid rgba(124, 100, 147, 0.5)",
                    boxSizing: "border-box",
                    width: "132.8px",
                    height: "44.3px",
                  }}
                />
                <b
                  style={{
                    position: "absolute",
                    top: "12.3px",
                    left: "48.7px",
                    lineHeight: "19.18px",
                  }}
                >
                  Other
                </b> */}
                <label
                  className={` ${isCheckboxChecked('Branding') ? 'checked' : ''}`}
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    borderRadius: "49.17px",
                    backgroundColor: isCheckboxChecked('Branding') ? '#5a61ff' : 'rgba(255, 255, 255, 0.05)',
                    border: "0.5px solid rgba(124, 100, 147, 0.5)",
                    boxSizing: "border-box",
                    width: "132.8px",
                    height: "44.3px",
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
                    style={{
                      position: 'absolute',
                      opacity: 0,
                      cursor: 'pointer',
                    }}
                  />
                  <b
                    style={{
                      position: "absolute",
                      top: "12.3px",
                      left: "47.8px",
                      lineHeight: "19.18px",
                      color: isCheckboxChecked('Branding') ? 'white' : '#fff', // Text color when selected
                    }}
                  >
                    Other
                  </b>
                </label>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "366.7px",
                  left: "25px",
                  width: "232.8px",
                  height: "27px",
                  fontSize: "18px",
                  color: "#b1b1b1",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "27.8px",
                    lineHeight: "27px",
                    fontWeight: "600",
                  }}
                >
                  Select your project type:
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: "6.3px",
                    left: "0px",
                    borderRadius: "50%",
                    backgroundColor: "#5a61ff",
                    width: "14px",
                    height: "14px",
                  }}
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "617px",
                  left: "25px",
                  width: "253.8px",
                  height: "27px",
                  fontSize: "18px",
                  color: "#b1b1b1",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "27.8px",
                    lineHeight: "27px",
                    fontWeight: "600",
                  }}
                >
                  Select your project budget:
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: "6.3px",
                    left: "0px",
                    borderRadius: "50%",
                    backgroundColor: "#5a61ff",
                    width: "14px",
                    height: "14px",
                  }}
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "72px",
                  left: "25px",
                  width: "275px",
                  height: "50px",
                  fontSize: "15.1px",
                  color: "#6b6b6b",
                }}
              >
                {/* <div
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    borderRadius: "17px",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    border: "0.5px solid rgba(124, 100, 147, 0.4)",
                    boxSizing: "border-box",
                    width: "275px",
                    height: "50px",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "13.9px",
                    left: "23.6px",
                    lineHeight: "22.63px",
                    fontWeight: "600",
                    display: "inline-block",
                    width: "81px",
                    height: "22.6px",
                  }}
                >
                  Your name*
                </div> */}
                <input
                  type="text"
                  placeholder="Your name*"
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    borderRadius: "17px",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    border: "0.5px solid rgba(124, 100, 147, 0.4)",
                    boxSizing: "border-box",
                    width: "275px",
                    height: "50px",
                    paddingLeft: "23.6px",
                    fontSize: "15.1px",
                    color: "#6b6b6b",
                  }}
                />

              </div>
              <div
                style={{
                  position: "absolute",
                  top: "140px",
                  left: "25px",
                  width: "275px",
                  height: "50px",
                  fontSize: "15.1px",
                  color: "#6b6b6b",
                }}
              >
                {/* <div
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    borderRadius: "17px",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    border: "0.5px solid rgba(124, 100, 147, 0.4)",
                    boxSizing: "border-box",
                    width: "275px",
                    height: "50px",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "13.9px",
                    left: "23.6px",
                    lineHeight: "22.63px",
                    fontWeight: "600",
                    display: "inline-block",
                    width: "81px",
                    height: "22.6px",
                  }}
                >
                  Your Email*
                </div> */}
                <input
                  type="text"
                  placeholder="Your Email*"
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    borderRadius: "17px",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    border: "0.5px solid rgba(124, 100, 147, 0.4)",
                    boxSizing: "border-box",
                    width: "275px",
                    height: "50px",
                    paddingLeft: "23.6px",
                    fontSize: "15.1px",
                    color: "#6b6b6b",
                  }}
                />

              </div>
              {/* <div
                style={{
                  position: "absolute",
                  top: "208px",
                  left: "25px",
                  width: "275px",
                  height: "50px",
                  fontSize: "15.1px",
                  color: "#6b6b6b",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    borderRadius: "17px",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    border: "0.5px solid rgba(124, 100, 147, 0.4)",
                    boxSizing: "border-box",
                    width: "275px",
                    height: "50px",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "13.9px",
                    left: "23.6px",
                    lineHeight: "22.63px",
                    fontWeight: "600",
                  }}
                >
                  Your phone number
                </div>
              </div> */}
              <input
                type="text"
                placeholder="Your phone number"
                style={{
                  position: "absolute",
                  top: "208px",
                  left: "25px",
                  width: "275px",
                  height: "50px",
                  fontSize: "15.1px",
                  color: "#6b6b6b",
                  paddingLeft: "23.6px",
                  borderRadius: "17px",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  border: "0.5px solid rgba(124, 100, 147, 0.4)",
                  boxSizing: "border-box",
                }}
              />

              {/* <div
                style={{
                  position: "absolute",
                  top: "276px",
                  left: "25px",
                  width: "275px",
                  height: "50px",
                  fontSize: "15.1px",
                  color: "#6b6b6b",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    borderRadius: "17px",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    border: "0.5px solid rgba(124, 100, 147, 0.4)",
                    boxSizing: "border-box",
                    width: "275px",
                    height: "50px",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "13.9px",
                    left: "23.6px",
                    lineHeight: "22.63px",
                    fontWeight: "600",
                  }}
                >
                  Your organisation name
                </div>
              </div> */}
              <input
                type="text"
                placeholder="Your organization name"
                style={{
                  position: "absolute",
                  top: "276px",
                  left: "25px",
                  width: "275px",
                  height: "50px",
                  fontSize: "15.1px",
                  color: "#6b6b6b",
                  paddingLeft: "23.6px",
                  borderRadius: "17px",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  border: "0.5px solid rgba(124, 100, 147, 0.4)",
                  boxSizing: "border-box",
                }}
              />

              {/* <div
                style={{
                  position: "absolute",
                  top: "798px",
                  left: "25px",
                  width: "275px",
                  height: "320px",
                  fontSize: "15.1px",
                  color: "#6b6b6b",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    borderRadius: "17px",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    border: "0.5px solid rgba(124, 100, 147, 0.4)",
                    boxSizing: "border-box",
                    width: "275px",
                    height: "320px",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "14px",
                    left: "24px",
                    lineHeight: "22.63px",
                    fontWeight: "600",
                    display: "inline-block",
                    width: "208px",
                  }}
                >
                  Write about your project (Project name, scope of work, timeline,
                  budget)*
                </div>
              </div> */}
              <textarea
                placeholder="Write about your project (Project name, scope of work, timeline, budget)*"
                style={{
                  position: "absolute",
                  top: "798px",
                  left: "25px",
                  width: "275px",
                  height: "320px",
                  fontSize: "15.1px",
                  color: "#6b6b6b",
                  paddingLeft: "23.6px",
                  borderRadius: "17px",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  border: "0.5px solid rgba(124, 100, 147, 0.4)",
                  boxSizing: "border-box",
                  resize: "none",
                }}
              />

              <b
                style={{
                  position: "absolute",
                  top: "25px",
                  left: "25px",
                  fontSize: "18px",
                  lineHeight: "27px",
                  fontFamily: "'Space Grotesk'",
                }}
              >
                Let’s create special
              </b>
            </div>
            {/* <GroupComponent1 /> */}
            <div
              style={{
                position: "absolute",
                top: "1701px",
                left: "25px",
                width: "325px",
                height: "282px",
                textAlign: "left",
                fontSize: "16px",
                color: "#b1b4ff",
                fontFamily: "Figtree",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "100px",
                  left: "0px",
                  borderRadius: "50%",
                  backgroundColor: "#b494ce",
                  width: "100px",
                  height: "100px",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "100px",
                  left: "225px",
                  borderRadius: "50%",
                  backgroundColor: "#b494ce",
                  width: "100px",
                  height: "100px",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  top: "0%",
                  right: "0%",
                  bottom: "0%",
                  left: "0%",
                  borderRadius: "24px",
                  backgroundColor: "rgba(17, 17, 17, 0.4)",
                  backdropFilter: "blur(200px)",
                  border: "1px solid rgba(145, 82, 189, 0.49)",
                  boxSizing: "border-box",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "224px",
                  left: "54px",
                  textDecoration: "underline",
                  lineHeight: "24px",
                  fontWeight: "600",
                }}
              >
                Behance
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "224px",
                  left: "145px",
                  textDecoration: "underline",
                  lineHeight: "24px",
                  fontWeight: "600",
                }}
              >
                Twitter
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "224px",
                  left: "226px",
                  textDecoration: "underline",
                  lineHeight: "24px",
                  fontWeight: "600",
                }}
              >
                Figma
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "180px",
                  left: "36px",
                  textDecoration: "underline",
                  lineHeight: "24px",
                  fontWeight: "600",
                }}
              >
                Instagram
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "180px",
                  left: "228px",
                  textDecoration: "underline",
                  lineHeight: "24px",
                  fontWeight: "600",
                }}
              >
                Dribbble
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "180px",
                  left: "138px",
                  textDecoration: "underline",
                  lineHeight: "24px",
                  fontWeight: "600",
                }}
              >
                LinkedIn
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "76px",
                  left: "65px",
                  textDecoration: "underline",
                  lineHeight: "24px",
                  fontWeight: "600",
                }}
              >
                marasihstudio@gmail.com
              </div>
              <b
                style={{
                  position: "absolute",
                  top: "34px",
                  left: "131px",
                  fontSize: "18px",
                  lineHeight: "27px",
                  fontFamily: "'Space Grotesk'",
                  color: "#fff",
                }}
              >
                Ping us
              </b>
              <b
                style={{
                  position: "absolute",
                  top: "138px",
                  left: "calc(50% - 40.5px)",
                  fontSize: "18px",
                  lineHeight: "27px",
                  fontFamily: "'Space Grotesk'",
                  color: "#fff",
                }}
              >
                Follow us
              </b>
            </div>
            {/* <GroupComponent /> */}
            <div
              style={{
                position: "absolute",
                top: "2083px",
                left: "13px",
                width: "349px",
                height: "766px",
                textAlign: "left",
                fontSize: "20px",
                color: "#9a9a9a",
                fontFamily: "Figtree",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "475px",
                  left: "12px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(119, 124, 246, 0.4)",
                  // filter: "blur(300px)",
                  width: "200px",
                  height: "200px",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "137px",
                  left: "137px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(180, 148, 206, 0.7)",
                  filter: "blur(300px)",
                  width: "200px",
                  height: "200px",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "0px",
                  left: "calc(50% - 174.5px)",
                  borderRadius: "24px 24px 0px 0px",
                  background:
                    "linear-gradient(175.13deg, rgba(74, 74, 74, 0.37), rgba(0, 0, 0, 0))",
                  border: "1px solid rgba(18, 18, 18, 0.54)",
                  boxSizing: "border-box",
                  width: "349px",
                  height: "766px",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "711px",
                  left: "calc(50% - 113.5px)",
                  fontSize: "12px",
                  color: "#41324e",
                }}
              >
                2024 @ marasih studio. All rights reserved
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "594px",
                  left: "22px",
                  width: "305px",
                  height: "67px",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    width: "105px",
                    height: "24px",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "0px",
                      left: "0px",
                      fontWeight: "500",
                      display: "inline-block",
                      width: "105px",
                    }}
                  >
                    Follow us
                  </div>
                </div>
                {/* <div
                  style={{
                    position: "absolute",
                    top: "48px",
                    left: "0px",
                    width: "305px",
                    height: "19px",
                  }}
                >
                  <img
                    style={{
                      position: "absolute",
                      top: "0px",
                      left: "0px",
                      width: "19px",
                      height: "19px",
                    }}
                    alt=""
                    src="/social-icons1.svg"
                  />
                  <img
                    style={{
                      position: "absolute",
                      top: "0px",
                      left: "47px",
                      width: "19px",
                      height: "19px",
                      overflow: "hidden",
                    }}
                    alt=""
                    src="/social-icons2.svg"
                  />
                  <img
                    style={{
                      position: "absolute",
                      top: "0px",
                      left: "94px",
                      width: "19px",
                      height: "19px",
                      overflow: "hidden",
                    }}
                    alt=""
                    src="/component-21.svg"
                  />
                  <img
                    style={{
                      position: "absolute",
                      top: "0px",
                      left: "141px",
                      width: "19px",
                      height: "19px",
                      overflow: "hidden",
                    }}
                    alt=""
                    src="/social-icons3.svg"
                  />
                  <img
                    style={{
                      position: "absolute",
                      top: "0px",
                      left: "188px",
                      width: "19px",
                      height: "19px",
                    }}
                    alt=""
                    src="/social-icons4.svg"
                  />
                  <img
                    style={{
                      position: "absolute",
                      top: "0px",
                      left: "235px",
                      width: "19px",
                      height: "19px",
                      overflow: "hidden",
                    }}
                    alt=""
                    src="/social-icons5.svg"
                  />
                  <img
                    style={{
                      position: "absolute",
                      top: "0px",
                      left: "282px",
                      width: "19px",
                      height: "19px",
                      overflow: "hidden",
                    }}
                    alt=""
                    src="/frame-481.svg"
                  />
                </div> */}
                  <div style={{ display: 'flex', gap: '22px' }}>

<div
  className="custom-svg-container"
  style={{ cursor: 'pointer' }}
  onMouseEnter={handleMouseEnterDribbble}
  onMouseLeave={handleMouseLeaveDribbble}
>
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
    <path
      d="M20 0C8.95879 0 0 8.95879 0 20C0 31.0413 8.95879 40 20 40C31.0195 40 40 31.0413 40 20C40 8.95879 31.0195 0 20 0ZM33.2104 9.21909C35.5965 12.1258 37.0283 15.8351 37.0716 19.8481C36.5076 19.7397 30.8676 18.59 25.1844 19.3059C25.0542 19.0239 24.9458 18.7201 24.8156 18.4165C24.4685 17.5923 24.0781 16.7463 23.6876 15.9436C29.9783 13.384 32.8416 9.69631 33.2104 9.21909ZM20 2.95011C24.3384 2.95011 28.308 4.57701 31.3232 7.24513C31.0195 7.67896 28.4381 11.128 22.3644 13.4056C19.5661 8.26464 16.4643 4.0564 15.987 3.40564C17.2668 3.10195 18.6117 2.95011 20 2.95011ZM12.7332 4.55531C13.1887 5.16269 16.2256 9.39262 19.0673 14.4251C11.0846 16.551 4.03471 16.5076 3.27549 16.5076C4.38177 11.2148 7.96095 6.81128 12.7332 4.55531ZM2.90673 20.0218C2.90673 19.8481 2.90673 19.6746 2.90673 19.5011C3.64425 19.5227 11.9306 19.6313 20.4555 17.0716C20.9545 18.026 21.41 19.0021 21.8439 19.9783C21.6269 20.0434 21.3882 20.1085 21.1714 20.1735C12.3644 23.0151 7.67896 30.7809 7.2885 31.4316C4.577 28.4165 2.90673 24.4035 2.90673 20.0218ZM20 37.0933C16.052 37.0933 12.4078 35.7484 9.52277 33.4924C9.82646 32.8634 13.2971 26.1823 22.9284 22.82C22.9717 22.7983 22.9935 22.7983 23.0369 22.7766C25.4446 29.0021 26.4209 34.2299 26.6811 35.7266C24.6204 36.616 22.3644 37.0933 20 37.0933ZM29.5228 34.1649C29.3493 33.1236 28.4381 28.1345 26.2039 21.9956C31.5619 21.1496 36.2472 22.538 36.833 22.7332C36.0955 27.4837 33.3623 31.5835 29.5228 34.1649Z"
      fill={isHoveredDribbble ? '#BA5198' : 'white'}
    />
  </svg>
</div>

<div className="linked-in-svg">
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
      fill={isHoveredLinkedIn ? '#0A66C2' : 'white'}
    />
  </g>
  <defs>
    <clipPath id="clip0_145_4735">
      <rect width="40" height="40" fill="white" />
    </clipPath>
  </defs>
</svg>
</div>

<div className="instagram-svg">
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" onMouseEnter={handleMouseEnterInstagram} onMouseLeave={handleMouseLeaveInstagram}>
  <g clipPath="url(#clip0_145_4740)">
    <path d="M20 3.60156C25.3438 3.60156 25.9766 3.625 28.0781 3.71875C30.0313 3.80469 31.0859 4.13281 31.7891 4.40625C32.7188 4.76563 33.3906 5.20313 34.0859 5.89844C34.7891 6.60156 35.2188 7.26563 35.5781 8.19531C35.8516 8.89844 36.1797 9.96094 36.2656 11.9062C36.3594 14.0156 36.3828 14.6484 36.3828 19.9844C36.3828 25.3281 36.3594 25.9609 36.2656 28.0625C36.1797 30.0156 35.8516 31.0703 35.5781 31.7734C35.2188 32.7031 34.7813 33.375 34.0859 34.0703C33.3828 34.7734 32.7188 35.2031 31.7891 35.5625C31.0859 35.8359 30.0234 36.1641 28.0781 36.25C25.9688 36.3438 25.3359 36.3672 20 36.3672C14.6563 36.3672 14.0234 36.3438 11.9219 36.25C9.96875 36.1641 8.91406 35.8359 8.21094 35.5625C7.28125 35.2031 6.60938 34.7656 5.91406 34.0703C5.21094 33.3672 4.78125 32.7031 4.42188 31.7734C4.14844 31.0703 3.82031 30.0078 3.73438 28.0625C3.64063 25.9531 3.61719 25.3203 3.61719 19.9844C3.61719 14.6406 3.64063 14.0078 3.73438 11.9062C3.82031 9.95312 4.14844 8.89844 4.42188 8.19531C4.78125 7.26563 5.21875 6.59375 5.91406 5.89844C6.61719 5.19531 7.28125 4.76563 8.21094 4.40625C8.91406 4.13281 9.97656 3.80469 11.9219 3.71875C14.0234 3.625 14.6563 3.60156 20 3.60156ZM20 0C14.5703 0 13.8906 0.0234375 11.7578 0.117188C9.63281 0.210938 8.17188 0.554687 6.90625 1.04688C5.58594 1.5625 4.46875 2.24219 3.35938 3.35938C2.24219 4.46875 1.5625 5.58594 1.04688 6.89844C0.554688 8.17188 0.210938 9.625 0.117188 11.75C0.0234375 13.8906 0 14.5703 0 20C0 25.4297 0.0234375 26.1094 0.117188 28.2422C0.210938 30.3672 0.554688 31.8281 1.04688 33.0938C1.5625 34.4141 2.24219 35.5312 3.35938 36.6406C4.46875 37.75 5.58594 38.4375 6.89844 38.9453C8.17188 39.4375 9.625 39.7812 11.75 39.875C13.8828 39.9688 14.5625 39.9922 19.9922 39.9922C25.4219 39.9922 26.1016 39.9688 28.2344 39.875C30.3594 39.7812 31.8203 39.4375 33.0859 38.9453C34.3984 38.4375 35.5156 37.75 36.625 36.6406C37.7344 35.5312 38.4219 34.4141 38.9297 33.1016C39.4219 31.8281 39.7656 30.375 39.8594 28.25C39.9531 26.1172 39.9766 25.4375 39.9766 20.0078C39.9766 14.5781 39.9531 13.8984 39.8594 11.7656C39.7656 9.64063 39.4219 8.17969 38.9297 6.91406C38.4375 5.58594 37.7578 4.46875 36.6406 3.35938C35.5313 2.25 34.4141 1.5625 33.1016 1.05469C31.8281 0.5625 30.375 0.21875 28.25 0.125C26.1094 0.0234375 25.4297 0 20 0Z" fill={isHoveredInstagram ? 'rgb(188, 42, 141)' : 'rgb(255, 255, 255)'}
    />
    <path d="M20 9.72656C14.3281 9.72656 9.72656 14.3281 9.72656 20C9.72656 25.6719 14.3281 30.2734 20 30.2734C25.6719 30.2734 30.2734 25.6719 30.2734 20C30.2734 14.3281 25.6719 9.72656 20 9.72656ZM20 26.6641C16.3203 26.6641 13.3359 23.6797 13.3359 20C13.3359 16.3203 16.3203 13.3359 20 13.3359C23.6797 13.3359 26.6641 16.3203 26.6641 20C26.6641 23.6797 23.6797 26.6641 20 26.6641Z" fill={isHoveredInstagram ? '#cd486b' : 'white'} />
    <path d="M33.0781 9.32032C33.0781 10.6484 32 11.7188 30.6797 11.7188C29.3516 11.7188 28.2812 10.6406 28.2812 9.32032C28.2812 7.99219 29.3594 6.92188 30.6797 6.92188C32 6.92188 33.0781 8 33.0781 9.32032Z" fill={isHoveredInstagram ? '#833AB4' : 'white'} />
  </g>
  <defs>
    <clipPath id="clip0_145_4740">
      <rect width="40" height="40" fill="white" />
    </clipPath>
  </defs>
</svg>

</div>
<div
  className="custom-svg-container"
  style={{ cursor: 'pointer' }}
  onMouseEnter={handleMouseEnterX}
  onMouseLeave={handleMouseLeaveX}
>
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
    <path
      d="M30.5438 3.1731H36.1662L23.8828 17.2122L38.3333 36.3164H27.0187L18.1567 24.7298L8.01654 36.3164H2.39068L15.529 21.2999L1.66663 3.1731H13.2685L21.279 13.7636L30.5438 3.1731ZM28.5705 32.9511H31.6859L11.5756 6.36165H8.2324L28.5705 32.9511Z"
      fill={isHoveredX ? '#4C4C4C' : 'white'}
    />
  </svg>
</div>

<div
  className="custom-svg-container"
  style={{ cursor: 'pointer' }}
  onMouseEnter={handleMouseEnterFigma}
  onMouseLeave={handleMouseLeaveFigma}
>
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
    <g clipPath="url(#clip0_145_4775)">
      <path
        d="M13.3334 39.9999C17.0134 39.9999 20.0002 37.0132 20.0002 33.3332V26.6665H13.3334C9.65337 26.6665 6.66663 29.6532 6.66663 33.3332C6.66663 37.0132 9.65337 39.9999 13.3334 39.9999Z"
        fill={isHoveredFigma ? '#0ACF83' : 'white'}
      />
      <path
        d="M6.66663 20C6.66663 16.32 9.65337 13.3333 13.3334 13.3333H20.0002V26.6665H13.3334C9.65337 26.6667 6.66663 23.68 6.66663 20Z"
        fill={isHoveredFigma ? '#A259FF' : 'white'}
      />
      <path
        d="M6.66663 6.66672C6.66663 2.98672 9.65337 0 13.3334 0H20.0002V13.3333H13.3334C9.65337 13.3333 6.66663 10.3467 6.66663 6.66672Z"
        fill={isHoveredFigma ? '#F24E1E' : 'white'}
      />
      <path
        d="M19.9998 0H26.6665C30.3466 0 33.3333 2.98672 33.3333 6.66672C33.3333 10.3467 30.3466 13.3333 26.6665 13.3333H19.9998V0Z"
        fill={isHoveredFigma ? '#FF7262' : 'white'}
      />
      <path
        d="M33.3333 20C33.3333 23.68 30.3466 26.6667 26.6665 26.6667C22.9865 26.6667 19.9998 23.68 19.9998 20C19.9998 16.32 22.9865 13.3333 26.6665 13.3333C30.3466 13.3333 33.3333 16.32 33.3333 20Z"
        fill={isHoveredFigma ? '#1ABCFE' : 'white'}
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
  style={{ cursor: 'pointer' }}
  onMouseEnter={handleMouseEnterFacebook}
  onMouseLeave={handleMouseLeaveFacebook}
>
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
    <g clipPath="url(#clip0_145_4782)">
      <path
        d="M20 0C8.9544 0 0 8.9544 0 20C0 29.3792 6.4576 37.2496 15.1688 39.4112V26.112H11.0448V20H15.1688V17.3664C15.1688 10.5592 18.2496 7.404 24.9328 7.404C26.2 7.404 28.3864 7.6528 29.2808 7.9008V13.4408C28.8088 13.3912 27.9888 13.3664 26.9704 13.3664C23.6912 13.3664 22.424 14.6088 22.424 17.8384V20H28.9568L27.8344 26.112H22.424V39.8536C32.3272 38.6576 40.0008 30.2256 40.0008 20C40 8.9544 31.0456 0 20 0Z"
        fill={isHoveredFacebook ? '#0866FF' : 'white'}
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
  style={{ cursor: 'pointer' }}
  onMouseEnter={handleMouseEnterBento}
  onMouseLeave={handleMouseLeaveBento}
>
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="28" viewBox="0 0 40 28" fill="#3F56FF">
    <path
      d="M11.5875 0.718558C12.6739 0.718558 13.7602 0.822178 14.7948 1.02942C15.6742 1.23666 16.5019 1.59933 17.2778 2.11744C17.9503 2.63554 18.5193 3.30908 18.8815 4.08624C19.2953 5.07063 19.5022 6.10684 19.4505 7.14305C19.5022 8.28288 19.1918 9.42271 18.6228 10.4071C18.002 11.3397 17.1226 12.065 16.1398 12.5313C17.5365 12.894 18.7263 13.7748 19.5022 14.9146C20.2782 16.1581 20.6403 17.6088 20.6403 19.0595C20.6403 20.2511 20.4334 21.3909 19.9161 22.4271C19.4505 23.3597 18.778 24.1369 18.002 24.8104C17.1744 25.4321 16.1915 25.8984 15.2086 26.1575C14.174 26.4683 13.0877 26.572 12.0014 26.572H0V0.666748H11.5875V0.718558ZM10.8633 11.1843C11.691 11.2361 12.5704 10.977 13.2429 10.4589C13.9154 9.88901 14.2775 9.00823 14.174 8.07564C14.174 7.55753 14.0706 7.03943 13.8636 6.57314C13.6567 6.21047 13.3981 5.8996 13.036 5.69236C12.6739 5.48512 12.26 5.27787 11.8462 5.22606C11.3806 5.12244 10.915 5.12245 10.4495 5.12245H5.37992V11.1843H10.8633ZM11.1737 22.2717C11.691 22.2717 12.2083 22.2199 12.6739 22.1163C13.1394 22.0126 13.5533 21.8054 13.9671 21.5464C14.3292 21.2873 14.6396 20.9246 14.8465 20.5101C15.1052 19.992 15.2086 19.4221 15.1569 18.8522C15.2604 17.7642 14.8465 16.728 14.0706 16.0026C13.2429 15.3809 12.26 15.1219 11.2254 15.1737H5.37992V22.3235H11.1737V22.2717Z"
      fill={isHoveredBento ? '#3F56FF' : 'white'}
    />
    <path
      d="M28.2964 22.1681C29.1759 22.9453 30.3139 23.3598 31.452 23.308C32.3831 23.308 33.2625 23.0489 33.9867 22.5308C34.6075 22.1163 35.0213 21.5464 35.28 20.8729H39.5736C39.108 22.7899 37.97 24.4996 36.4181 25.6912C34.9179 26.7275 33.1073 27.1938 31.2451 27.1419C29.9518 27.1419 28.6586 26.9347 27.417 26.4166C26.3307 25.9503 25.3478 25.2768 24.5719 24.396C23.7959 23.4634 23.1752 22.4272 22.7613 21.2874C22.2958 19.9921 22.0888 18.645 22.1406 17.298C22.1406 15.9509 22.3475 14.6556 22.8131 13.3604C24.0546 9.73363 27.4688 7.29854 31.2968 7.35035C32.6935 7.29854 34.0385 7.66122 35.28 8.28294C36.3663 8.90467 37.3492 9.73363 38.0734 10.7698C38.7976 11.8579 39.3667 13.0495 39.6253 14.3448C39.9357 15.6918 40.0392 17.1425 39.9874 18.5414H27.1584C27.0032 19.8367 27.417 21.1319 28.2964 22.1681ZM33.8833 12.2723C33.1591 11.547 32.1762 11.1843 31.1416 11.2361C30.4691 11.2361 29.7966 11.3398 29.2276 11.6506C28.762 11.9097 28.3482 12.2723 27.9861 12.6868C27.6757 13.1013 27.4688 13.5158 27.3136 14.0339C27.2101 14.4484 27.1067 14.8629 27.1067 15.2774H35.0731C34.9696 14.1893 34.5558 13.1531 33.8833 12.2723Z"
      fill={isHoveredBento ? '#3F56FF' : 'white'}
    />
    <path d="M36.0044 2.42822H26.0723V4.96693H36.0044V2.42822Z" fill={isHoveredBento ? '#FFFFFF' : 'white'} />
  </svg>

</div>
</div>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "487px",
                  left: "22px",
                  width: "300px",
                  height: "67px",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    width: "300px",
                    height: "67px",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "0px",
                      left: "0px",
                      fontWeight: "500",
                    }}
                  >
                    Explore
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      top: "48px",
                      left: "calc(50% - 150px)",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      gap: "0px 26px",
                      fontSize: "16px",
                      color: "#fff",
                    }}
                  >
                    <div style={{ position: "relative" }}>Work</div>
                    <div style={{ position: "relative" }}>About us</div>
                    <div style={{ position: "relative" }}>Blogs</div>
                    <div style={{ position: "relative" }}>Contact us</div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "calc(50% - 8.3px)",
                  left: "calc(50% - 75.5px)",
                  width: "150.2px",
                  height: "61.7px",
                  fontSize: "14.7px",
                  color: "#fff",
                }}
              >
                <img
                  style={{
                    position: "absolute",
                    top: "calc(50% - 30.85px)",
                    left: "calc(50% - 75.1px)",
                    width: "149.9px",
                    height: "32.8px",
                    overflow: "hidden",
                  }}
                  alt=""
                  src="/layer-12.svg"
                />
                <div
                  style={{
                    position: "absolute",
                    top: "43.7px",
                    left: "calc(50% - 18.9px)",
                    fontWeight: "600",
                  }}
                >
                  Design Studio
                </div>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "333.5px",
                  left: "11.5px",
                  borderTop: "1px solid #373737",
                  boxSizing: "border-box",
                  width: "326px",
                  height: "1px",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "193px",
                  left: "calc(50% - 118.5px)",
                  width: "237px",
                  height: "100.8px",
                  fontSize: "18.6px",
                  color: "#ccc",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "calc(50% - 52.6px)",
                    fontWeight: "500",
                  }}
                >
                  Got an idea?
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: "36.6px",
                    left: "calc(50% - 118.5px)",
                    width: "237px",
                    height: "64.2px",
                    fontSize: "15.8px",
                    color: "#525252",
                    fontFamily: "'Plus Jakarta Sans'",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "0px",
                      left: "calc(50% - 118.5px)",
                      borderRadius: "49.54px",
                      backgroundColor: "rgba(128, 128, 128, 0.15)",
                      border: "1.1px solid rgba(121, 121, 121, 0.26)",
                      boxSizing: "border-box",
                      width: "237px",
                      height: "64.2px",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "6.2px",
                      left: "calc(50% - 112.5px)",
                      borderRadius: "56.29px",
                      backgroundColor: "#fff",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      padding: "14.636579513549805px 29.27315902709961px",
                      gap: "0px 12.95px",
                    }}
                  >
                    <div style={{ position: "relative", fontWeight: "600" }}>
                      Let’s get in touch
                    </div>
                    <img
                      style={{
                        width: "22.5px",
                        position: "relative",
                        height: "22.8px",
                      }}
                      alt=""
                      src="/-emoji-dizzy1.svg"
                    />
                  </div>
                </div>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "33px",
                  left: "calc(50% - 131.5px)",
                  fontSize: "40px",
                  lineHeight: "60px",
                  fontWeight: "800",
                  background:
                    "linear-gradient(97.37deg, #000, rgba(122, 122, 122, 0.53) 28.24%, #404040), #fff",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textAlign: "center",
                }}
              >
                <p style={{ margin: "" }}>BE SIMPLE.</p>
                <p style={{ margin: "" }}>BE CREATIVE.</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Desktop view code
        <div>
          <h1>Desktop View</h1>
          <div className="marasinh-contact-page">
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
                        <a href="/" className="work">Home</a>
                      </div>
                      <a href="#" className="about">Work</a>
                      <div className="contact-info-frame">
                        <div className="" />
                        <a href="/about" className="contact-us">About Us</a>
                      </div>
                    </div>
                  </div>

                  <button className="rectangle-parent">
                    <div className="frame-child" />
                    <div className="lets-talk">Contact</div>
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
              {/* <div className="twitter-icon2" /> */}

              <section className="linked-in-icon-parent">
                <div className="twitter-icon-another" />

                <div class="e145_4457">

                  <div className="linked-in-icon">

                    <div className="" />

                    <div className="dribbble-icon">
                      <div className="behance-icon">
                        <div className="" />

                        <h2 className="lets-create-special">Let’s create special</h2>
                      </div>
                    </div>

                    <div className="design-studio-frame">


                      <div className="input-container">
                        <input placeholder="Your Name*"
                          type="text" className="custom-input" />
                        <input placeholder="Your Email*"
                          type="text" className="custom-input" />
                        <input placeholder="Your phone number"
                          type="text" className="custom-input" />
                        <input placeholder="Your organization name"
                          type="text" className="custom-input" />
                      </div>


                      <div className="content-area1">


                      </div>
                      <div className="content-area1">


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
                          <div className="write-about-your-container">
                            <input
                              type="text"
                              className="write-about-your"
                              placeholder="Write about your project (Project name, scope of work, timeline, budget)*"
                            />
                          </div>
                        </div>
                      </div>


                      <div className="button-container1">
                        <a href="#" className="magic-button1"><span className="submit-text" style={{ color: '#525252' }}>SUBMIT APPLICATION</span></a>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="instagram-icon-frame">
                  <div className="dribbble-icon-frame" />
                  <div className="behance-icon-frame">
                    <div className="twitter-icon-frame">
                      <div className="twitter-icon1" />


                      <h3 className="ping-us">Ping us</h3>
                    </div>
                    <a href="#" className="marasihstudiogmailcom1">
                      marasihstudio@gmail.com
                    </a>
                  </div>
                  <div className="text-frame-with-image">
                    <h3 className="follow-us">Follow us</h3>
                    <div className="text-frame">
                      <a href="#" className="instagram">Instagram</a>
                      <div className="text-frame1">
                        <a href="#" className="linkedin">LinkedIn</a>
                      </div>
                      <a href="#" className="dribbble">Dribbble</a>
                      <a href="#" className="behance">Behance</a>
                      <a href="#" className="twitter">Twitter</a>
                      <div className="ellipse-shape-with-fill">
                        <div className="rectangle-shape" />
                        <a href="#" className="figma1">Figma</a>

                      </div>

                    </div>
                  </div>

                </div>
              </section>

              <div className="custom-rectangle">
                <section className="empty-ellipse">

                  <div className="inner-ellipse">
                    <div className="design-studio-title">
                      <img src="/BE SIMPLE. BE CREATIVE..png"></img>
                      <div className="idea-frame">
                        <div className="contact-frame">
                          <div className="got-an-idea">Got an idea?</div>

                          <div className="button-container2">
                            <a href="#" className="magic-button2"><span className="submit-text" style={{ color: '#525252' }}>Let’s get in touch</span>  <img className="star-img" src="/star-png.png"></img></a>
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
                              <svg width="801" height="864" viewBox="0 0 801 864" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_f_408_2585)">
                                  <circle cx="241" cy="560" r="160" fill="#777CF6" fill-opacity="0.4" />
                                </g>
                                <defs>
                                  <filter id="filter0_f_408_2585" x="-319" y="0" width="1120" height="1120" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feGaussianBlur stdDeviation="200" result="effect1_foregroundBlur_408_2585" />
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
                    
                        <div style={{ display: 'flex', gap: '40px' }}>

                          <div
                            className="custom-svg-container"
                            style={{ cursor: 'pointer' }}
                            onMouseEnter={handleMouseEnterDribbble}
                            onMouseLeave={handleMouseLeaveDribbble}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                              <path
                                d="M20 0C8.95879 0 0 8.95879 0 20C0 31.0413 8.95879 40 20 40C31.0195 40 40 31.0413 40 20C40 8.95879 31.0195 0 20 0ZM33.2104 9.21909C35.5965 12.1258 37.0283 15.8351 37.0716 19.8481C36.5076 19.7397 30.8676 18.59 25.1844 19.3059C25.0542 19.0239 24.9458 18.7201 24.8156 18.4165C24.4685 17.5923 24.0781 16.7463 23.6876 15.9436C29.9783 13.384 32.8416 9.69631 33.2104 9.21909ZM20 2.95011C24.3384 2.95011 28.308 4.57701 31.3232 7.24513C31.0195 7.67896 28.4381 11.128 22.3644 13.4056C19.5661 8.26464 16.4643 4.0564 15.987 3.40564C17.2668 3.10195 18.6117 2.95011 20 2.95011ZM12.7332 4.55531C13.1887 5.16269 16.2256 9.39262 19.0673 14.4251C11.0846 16.551 4.03471 16.5076 3.27549 16.5076C4.38177 11.2148 7.96095 6.81128 12.7332 4.55531ZM2.90673 20.0218C2.90673 19.8481 2.90673 19.6746 2.90673 19.5011C3.64425 19.5227 11.9306 19.6313 20.4555 17.0716C20.9545 18.026 21.41 19.0021 21.8439 19.9783C21.6269 20.0434 21.3882 20.1085 21.1714 20.1735C12.3644 23.0151 7.67896 30.7809 7.2885 31.4316C4.577 28.4165 2.90673 24.4035 2.90673 20.0218ZM20 37.0933C16.052 37.0933 12.4078 35.7484 9.52277 33.4924C9.82646 32.8634 13.2971 26.1823 22.9284 22.82C22.9717 22.7983 22.9935 22.7983 23.0369 22.7766C25.4446 29.0021 26.4209 34.2299 26.6811 35.7266C24.6204 36.616 22.3644 37.0933 20 37.0933ZM29.5228 34.1649C29.3493 33.1236 28.4381 28.1345 26.2039 21.9956C31.5619 21.1496 36.2472 22.538 36.833 22.7332C36.0955 27.4837 33.3623 31.5835 29.5228 34.1649Z"
                                fill={isHoveredDribbble ? '#BA5198' : 'white'}
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
                                fill={isHoveredLinkedIn ? '#0A66C2' : 'white'}
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_145_4735">
                                <rect width="40" height="40" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" onMouseEnter={handleMouseEnterInstagram} onMouseLeave={handleMouseLeaveInstagram}>
                            <g clipPath="url(#clip0_145_4740)">
                              <path d="M20 3.60156C25.3438 3.60156 25.9766 3.625 28.0781 3.71875C30.0313 3.80469 31.0859 4.13281 31.7891 4.40625C32.7188 4.76563 33.3906 5.20313 34.0859 5.89844C34.7891 6.60156 35.2188 7.26563 35.5781 8.19531C35.8516 8.89844 36.1797 9.96094 36.2656 11.9062C36.3594 14.0156 36.3828 14.6484 36.3828 19.9844C36.3828 25.3281 36.3594 25.9609 36.2656 28.0625C36.1797 30.0156 35.8516 31.0703 35.5781 31.7734C35.2188 32.7031 34.7813 33.375 34.0859 34.0703C33.3828 34.7734 32.7188 35.2031 31.7891 35.5625C31.0859 35.8359 30.0234 36.1641 28.0781 36.25C25.9688 36.3438 25.3359 36.3672 20 36.3672C14.6563 36.3672 14.0234 36.3438 11.9219 36.25C9.96875 36.1641 8.91406 35.8359 8.21094 35.5625C7.28125 35.2031 6.60938 34.7656 5.91406 34.0703C5.21094 33.3672 4.78125 32.7031 4.42188 31.7734C4.14844 31.0703 3.82031 30.0078 3.73438 28.0625C3.64063 25.9531 3.61719 25.3203 3.61719 19.9844C3.61719 14.6406 3.64063 14.0078 3.73438 11.9062C3.82031 9.95312 4.14844 8.89844 4.42188 8.19531C4.78125 7.26563 5.21875 6.59375 5.91406 5.89844C6.61719 5.19531 7.28125 4.76563 8.21094 4.40625C8.91406 4.13281 9.97656 3.80469 11.9219 3.71875C14.0234 3.625 14.6563 3.60156 20 3.60156ZM20 0C14.5703 0 13.8906 0.0234375 11.7578 0.117188C9.63281 0.210938 8.17188 0.554687 6.90625 1.04688C5.58594 1.5625 4.46875 2.24219 3.35938 3.35938C2.24219 4.46875 1.5625 5.58594 1.04688 6.89844C0.554688 8.17188 0.210938 9.625 0.117188 11.75C0.0234375 13.8906 0 14.5703 0 20C0 25.4297 0.0234375 26.1094 0.117188 28.2422C0.210938 30.3672 0.554688 31.8281 1.04688 33.0938C1.5625 34.4141 2.24219 35.5312 3.35938 36.6406C4.46875 37.75 5.58594 38.4375 6.89844 38.9453C8.17188 39.4375 9.625 39.7812 11.75 39.875C13.8828 39.9688 14.5625 39.9922 19.9922 39.9922C25.4219 39.9922 26.1016 39.9688 28.2344 39.875C30.3594 39.7812 31.8203 39.4375 33.0859 38.9453C34.3984 38.4375 35.5156 37.75 36.625 36.6406C37.7344 35.5312 38.4219 34.4141 38.9297 33.1016C39.4219 31.8281 39.7656 30.375 39.8594 28.25C39.9531 26.1172 39.9766 25.4375 39.9766 20.0078C39.9766 14.5781 39.9531 13.8984 39.8594 11.7656C39.7656 9.64063 39.4219 8.17969 38.9297 6.91406C38.4375 5.58594 37.7578 4.46875 36.6406 3.35938C35.5313 2.25 34.4141 1.5625 33.1016 1.05469C31.8281 0.5625 30.375 0.21875 28.25 0.125C26.1094 0.0234375 25.4297 0 20 0Z" fill={isHoveredInstagram ? 'rgb(188, 42, 141)' : 'rgb(255, 255, 255)'}
                              />
                              <path d="M20 9.72656C14.3281 9.72656 9.72656 14.3281 9.72656 20C9.72656 25.6719 14.3281 30.2734 20 30.2734C25.6719 30.2734 30.2734 25.6719 30.2734 20C30.2734 14.3281 25.6719 9.72656 20 9.72656ZM20 26.6641C16.3203 26.6641 13.3359 23.6797 13.3359 20C13.3359 16.3203 16.3203 13.3359 20 13.3359C23.6797 13.3359 26.6641 16.3203 26.6641 20C26.6641 23.6797 23.6797 26.6641 20 26.6641Z" fill={isHoveredInstagram ? '#cd486b' : 'white'} />
                              <path d="M33.0781 9.32032C33.0781 10.6484 32 11.7188 30.6797 11.7188C29.3516 11.7188 28.2812 10.6406 28.2812 9.32032C28.2812 7.99219 29.3594 6.92188 30.6797 6.92188C32 6.92188 33.0781 8 33.0781 9.32032Z" fill={isHoveredInstagram ? '#833AB4' : 'white'} />
                            </g>
                            <defs>
                              <clipPath id="clip0_145_4740">
                                <rect width="40" height="40" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                          <div
                            className="custom-svg-container"
                            style={{ cursor: 'pointer' }}
                            onMouseEnter={handleMouseEnterX}
                            onMouseLeave={handleMouseLeaveX}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                              <path
                                d="M30.5438 3.1731H36.1662L23.8828 17.2122L38.3333 36.3164H27.0187L18.1567 24.7298L8.01654 36.3164H2.39068L15.529 21.2999L1.66663 3.1731H13.2685L21.279 13.7636L30.5438 3.1731ZM28.5705 32.9511H31.6859L11.5756 6.36165H8.2324L28.5705 32.9511Z"
                                fill={isHoveredX ? '#4C4C4C' : 'white'}
                              />
                            </svg>
                          </div>

                          <div
                            className="custom-svg-container"
                            style={{ cursor: 'pointer' }}
                            onMouseEnter={handleMouseEnterFigma}
                            onMouseLeave={handleMouseLeaveFigma}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                              <g clipPath="url(#clip0_145_4775)">
                                <path
                                  d="M13.3334 39.9999C17.0134 39.9999 20.0002 37.0132 20.0002 33.3332V26.6665H13.3334C9.65337 26.6665 6.66663 29.6532 6.66663 33.3332C6.66663 37.0132 9.65337 39.9999 13.3334 39.9999Z"
                                  fill={isHoveredFigma ? '#0ACF83' : 'white'}
                                />
                                <path
                                  d="M6.66663 20C6.66663 16.32 9.65337 13.3333 13.3334 13.3333H20.0002V26.6665H13.3334C9.65337 26.6667 6.66663 23.68 6.66663 20Z"
                                  fill={isHoveredFigma ? '#A259FF' : 'white'}
                                />
                                <path
                                  d="M6.66663 6.66672C6.66663 2.98672 9.65337 0 13.3334 0H20.0002V13.3333H13.3334C9.65337 13.3333 6.66663 10.3467 6.66663 6.66672Z"
                                  fill={isHoveredFigma ? '#F24E1E' : 'white'}
                                />
                                <path
                                  d="M19.9998 0H26.6665C30.3466 0 33.3333 2.98672 33.3333 6.66672C33.3333 10.3467 30.3466 13.3333 26.6665 13.3333H19.9998V0Z"
                                  fill={isHoveredFigma ? '#FF7262' : 'white'}
                                />
                                <path
                                  d="M33.3333 20C33.3333 23.68 30.3466 26.6667 26.6665 26.6667C22.9865 26.6667 19.9998 23.68 19.9998 20C19.9998 16.32 22.9865 13.3333 26.6665 13.3333C30.3466 13.3333 33.3333 16.32 33.3333 20Z"
                                  fill={isHoveredFigma ? '#1ABCFE' : 'white'}
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
                            style={{ cursor: 'pointer' }}
                            onMouseEnter={handleMouseEnterFacebook}
                            onMouseLeave={handleMouseLeaveFacebook}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                              <g clipPath="url(#clip0_145_4782)">
                                <path
                                  d="M20 0C8.9544 0 0 8.9544 0 20C0 29.3792 6.4576 37.2496 15.1688 39.4112V26.112H11.0448V20H15.1688V17.3664C15.1688 10.5592 18.2496 7.404 24.9328 7.404C26.2 7.404 28.3864 7.6528 29.2808 7.9008V13.4408C28.8088 13.3912 27.9888 13.3664 26.9704 13.3664C23.6912 13.3664 22.424 14.6088 22.424 17.8384V20H28.9568L27.8344 26.112H22.424V39.8536C32.3272 38.6576 40.0008 30.2256 40.0008 20C40 8.9544 31.0456 0 20 0Z"
                                  fill={isHoveredFacebook ? '#0866FF' : 'white'}
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
                            style={{ cursor: 'pointer' }}
                            onMouseEnter={handleMouseEnterBento}
                            onMouseLeave={handleMouseLeaveBento}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="28" viewBox="0 0 40 28" fill="#3F56FF">
                              <path
                                d="M11.5875 0.718558C12.6739 0.718558 13.7602 0.822178 14.7948 1.02942C15.6742 1.23666 16.5019 1.59933 17.2778 2.11744C17.9503 2.63554 18.5193 3.30908 18.8815 4.08624C19.2953 5.07063 19.5022 6.10684 19.4505 7.14305C19.5022 8.28288 19.1918 9.42271 18.6228 10.4071C18.002 11.3397 17.1226 12.065 16.1398 12.5313C17.5365 12.894 18.7263 13.7748 19.5022 14.9146C20.2782 16.1581 20.6403 17.6088 20.6403 19.0595C20.6403 20.2511 20.4334 21.3909 19.9161 22.4271C19.4505 23.3597 18.778 24.1369 18.002 24.8104C17.1744 25.4321 16.1915 25.8984 15.2086 26.1575C14.174 26.4683 13.0877 26.572 12.0014 26.572H0V0.666748H11.5875V0.718558ZM10.8633 11.1843C11.691 11.2361 12.5704 10.977 13.2429 10.4589C13.9154 9.88901 14.2775 9.00823 14.174 8.07564C14.174 7.55753 14.0706 7.03943 13.8636 6.57314C13.6567 6.21047 13.3981 5.8996 13.036 5.69236C12.6739 5.48512 12.26 5.27787 11.8462 5.22606C11.3806 5.12244 10.915 5.12245 10.4495 5.12245H5.37992V11.1843H10.8633ZM11.1737 22.2717C11.691 22.2717 12.2083 22.2199 12.6739 22.1163C13.1394 22.0126 13.5533 21.8054 13.9671 21.5464C14.3292 21.2873 14.6396 20.9246 14.8465 20.5101C15.1052 19.992 15.2086 19.4221 15.1569 18.8522C15.2604 17.7642 14.8465 16.728 14.0706 16.0026C13.2429 15.3809 12.26 15.1219 11.2254 15.1737H5.37992V22.3235H11.1737V22.2717Z"
                                fill={isHoveredBento ? '#3F56FF' : 'white'}
                              />
                              <path
                                d="M28.2964 22.1681C29.1759 22.9453 30.3139 23.3598 31.452 23.308C32.3831 23.308 33.2625 23.0489 33.9867 22.5308C34.6075 22.1163 35.0213 21.5464 35.28 20.8729H39.5736C39.108 22.7899 37.97 24.4996 36.4181 25.6912C34.9179 26.7275 33.1073 27.1938 31.2451 27.1419C29.9518 27.1419 28.6586 26.9347 27.417 26.4166C26.3307 25.9503 25.3478 25.2768 24.5719 24.396C23.7959 23.4634 23.1752 22.4272 22.7613 21.2874C22.2958 19.9921 22.0888 18.645 22.1406 17.298C22.1406 15.9509 22.3475 14.6556 22.8131 13.3604C24.0546 9.73363 27.4688 7.29854 31.2968 7.35035C32.6935 7.29854 34.0385 7.66122 35.28 8.28294C36.3663 8.90467 37.3492 9.73363 38.0734 10.7698C38.7976 11.8579 39.3667 13.0495 39.6253 14.3448C39.9357 15.6918 40.0392 17.1425 39.9874 18.5414H27.1584C27.0032 19.8367 27.417 21.1319 28.2964 22.1681ZM33.8833 12.2723C33.1591 11.547 32.1762 11.1843 31.1416 11.2361C30.4691 11.2361 29.7966 11.3398 29.2276 11.6506C28.762 11.9097 28.3482 12.2723 27.9861 12.6868C27.6757 13.1013 27.4688 13.5158 27.3136 14.0339C27.2101 14.4484 27.1067 14.8629 27.1067 15.2774H35.0731C34.9696 14.1893 34.5558 13.1531 33.8833 12.2723Z"
                                fill={isHoveredBento ? '#3F56FF' : 'white'}
                              />
                              <path d="M36.0044 2.42822H26.0723V4.96693H36.0044V2.42822Z" fill={isHoveredBento ? '#FFFFFF' : 'white'} />
                            </svg>

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
              </div >

            </div >
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
