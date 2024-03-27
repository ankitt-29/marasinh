import React, { useState, useEffect } from 'react';

export default function Behance() {
  const [clickedImage, setClickedImage] = useState(null);

  const handleClick = (image) => {
    setClickedImage(image);
    const clickedImgElement = document.querySelector(`.${image}`);
    clickedImgElement.style.zIndex = '2';
  };

  useEffect(() => {
    const handleTransitionEnd = () => {
      if (clickedImage === 'behance') {
        window.location.href = 'https://www.example.com/behance';
      } else if (clickedImage === 'dribble') {
        window.location.href = 'https://www.example.com/dribble';
      }
    };

    const animatedContainer = document.querySelector('.animated');
    animatedContainer.addEventListener('transitionend', handleTransitionEnd);

    return () => {
      animatedContainer.removeEventListener('transitionend', handleTransitionEnd);
    };
  }, [clickedImage]); 

  return (
    <div className="animated">
      <img
        className="behance"
        src="/behance-cir.png"
        alt=""
      //  onClick={() => handleClick('behance')}
      />
      <img
        className="dribble"
        src="/dribble-cir.png"
        alt=""
      //  onClick={() => handleClick('dribble')}
      />
    </div>
  );
}
