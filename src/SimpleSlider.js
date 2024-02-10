// SimpleSlider.js
import React from 'react';

const SimpleSlider = () => {


  return (
    <div className="outer-box">
      <div className="crafted-container">

          <div className="crafted-box">
            <img className="inner-img" src="/squar-2.png"></img>
            <div className="crafted-inner">
              <div className="my-div">
                <div className="crafted-card-big-text"> FelxForce</div>
                <div className="crafted-card-small-text">UX research & UI design</div>
              </div>
            </div>

            <div class="outlined-circle"> <img className="arrow-left" src="/arrow-left.png"></img></div>
          </div>

          <div className="crafted-box">
            <img className="inner-img" src="/squar-2.png"></img>
            <div className="crafted-inner">
              <div className="my-div1">
                <div className="crafted-card-big-text"> Grocers</div>
                <div className="crafted-card-small-text">Website design</div>
              </div>
            </div>

            <div class="outlined-circle"> <img className="arrow-left" src="/arrow-left.png"></img></div>
          </div>

          <div className="crafted-box">
            <img className="inner-img" src="/squar-2.png"></img>
            <div className="crafted-inner">
              <div className="my-div2">
                <div className="crafted-card-big-text"> Socialline</div>
                <div className="crafted-card-small-text">A ultimate social media app</div>
              </div>
            </div>

            <div class="outlined-circle"> <img className="arrow-left" src="/arrow-left.png"></img></div>
          </div>
      </div>
    </div>
  );
};

export default SimpleSlider;
