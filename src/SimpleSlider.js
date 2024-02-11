import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    // speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
x 
  return (
    <div className="outer-box">
      <Slider {...settings}>
       
        <div className="crafted-container" key={1}>
          <div className="crafted-box">
            <img className="inner-img" src="/squar-2.png" alt="Card 1" />
            <div className="crafted-inner">
              <div className="my-div">
                <div className="crafted-card-big-text">FelxForce</div>
                <div className="crafted-card-small-text">UX research & UI design</div>
              </div>
            </div>
            <div className="outlined-circle">
              <img className="arrow-left" src="/arrow-left.png" alt="Arrow Left" />
            </div>
          </div>
        </div>

     
        <div className="crafted-container" key={2}>
          <div className="crafted-box">
            <img className="inner-img" src="/squar-2.png" alt="Card 2" />
            <div className="crafted-inner">
              <div className="my-div1">
                <div className="crafted-card-big-text">Grocers</div>
                <div className="crafted-card-small-text">Website design</div>
              </div>
            </div>
            <div className="outlined-circle">
              <img className="arrow-left" src="/arrow-left.png" alt="Arrow Left" />
            </div>
          </div>
        </div>

   
        <div className="crafted-container" key={3}>
          <div className="crafted-box">
            <img className="inner-img" src="/squar-2.png" alt="Card 3" />
            <div className="crafted-inner">
              <div className="my-div2">
                <div className="crafted-card-big-text">Socialline</div>
                <div className="crafted-card-small-text">A ultimate social media app</div>
              </div>
            </div>
            <div className="outlined-circle">
              <img className="arrow-left" src="/arrow-left.png" alt="Arrow Left" />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SimpleSlider;
