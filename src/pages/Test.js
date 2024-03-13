import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowRight } from 'react-icons/fa'; // Import FaArrowRight icon from react-icons/fa

const Test = () => {
    const slider1 = useRef(null);
    const slider2 = useRef(null);

    const handleSliderPrevNext = () => {
        slider1.current.slickPrev();
        slider2.current.slickPrev();
    };

    const sliderSettings = {
        slidesToShow: 1,
        fade: true,
        arrows: false, // Set arrows to false to hide navigation buttons
    };

    return (
        <div>
            <div className="slider-container">
                <div className="slider">
                    <Slider ref={slider1} {...sliderSettings}>
                        <div className="slide"><img src="/services1.png" alt="/services1.png" /></div>
                        <div className="slide"><img src="/second-left-ser.png" alt="" /></div>
                        <div className="slide"><img src="/third-left-ser.png" alt="/services1.png" /></div>
                    </Slider>
                </div>
                <div className="slider">
                    <Slider ref={slider2} {...sliderSettings}>
                        <div className="slide"><img src="/Group 34379.png" alt="" /></div>
                        <div className="slide"><img src="/second-right-ser.png" alt="/services1.png" /></div>
                        <div className="slide"><img src="/third-right-ser.png" alt="" /></div>
                    </Slider>
                </div>
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
    );
};

export default Test;
