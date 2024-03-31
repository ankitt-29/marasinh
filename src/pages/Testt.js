import React, { useRef } from 'react';
import Slider from 'react-slick';
import { FaArrowRight } from 'react-icons/fa';
import './mobileHometest.scss'
const Testt = () => {
    const slider1 = useRef(null);
    const slider2 = useRef(null);

    const handleSliderPrevNext = () => {
        slider1.current.slickPrev();
        slider2.current.slickPrev();
    };

    const sliderSettings = {
        slidesToShow: 1,
        fade: true,
        arrows: false,
    };

    // Determine the image paths based on screen size
    const servicesImage = window.innerWidth < 768 ? "/green-left.png" : "/green-left.png";
    const secondLeftImage = window.innerWidth < 768 ? "/orange-left.png" : "/orange-left.png";
    const thirdLeftImage = window.innerWidth < 768 ? "/purple-left.png" : "/purple-left.png";
    const groupImage = window.innerWidth < 768 ? "/Group 34379.png" : "/Group 34379.png";
    const secondRightImage = window.innerWidth < 768 ? "/third-right-ser.png" : "/third-right-ser.png";
    const thirdRightImage = window.innerWidth < 768 ? "/second-right-ser.png" : "/second-right-ser.png";

    return (
        <div className='mobiletest'>
        <div className='scrollable-container'>
            <div className="monu">
                <Slider ref={slider1} {...sliderSettings}>
                    <div className="xyzzz"><img src={servicesImage} alt="Services Image" /></div>
                    <div className="xyzzz"><img src={secondLeftImage} alt="Second Left Image" /></div>
                    <div className="xyzzz"><img src={thirdLeftImage} alt="Third Left Image" /></div>
                </Slider>
            </div>
            <div className="monu">
                <Slider ref={slider2} {...sliderSettings}>
                    <div className="xyzzz"><img src={groupImage} alt="Group Image" /></div>
                    <div className="xyzzz"><img src={secondRightImage} alt="Second Right Image" /></div>
                    <div className="xyzzz"><img src={thirdRightImage} alt="Third Right Image" /></div>
                </Slider>
            </div>
            {/* Use your custom arrow buttons with the same functionality */}
            <div className='circle-button-service'>
                <button className="circle-button-ser" onClick={() => handleSliderPrevNext()}>
                    <FaArrowRight className="arrow-top-left-ser" strokeWidth={1}/>
                </button>
                <button className="circle-button2-ser" onClick={() => handleSliderPrevNext()}>
                    <FaArrowRight className="arrow-top-ser" />
                </button>
            </div>
        </div>
        </div>
    );
};

export default Testt;
