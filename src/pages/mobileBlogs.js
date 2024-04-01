import React, { useRef, useState, useEffect } from "react";
import './blogsMobile.scss'
import FooterMobile from './FooterMobile'
import BlogsOffcanvasMenu from './BlogsOffcanvas'
export default function MobileBlogs() {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1200);


  const toggleOffcanvas = () => {
    const offcanvas = document.getElementById("offcanvasBlogs");
    offcanvas.classList.toggle("show");
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
  
  return (

    <div>
    {isMobile ? (
     
    <div className='mobile-blogs-page'>
    <div className="blogs4">
 {/* <div className="wrapper-star-12">
   <img className="wrapper-star-1-inner" alt="" src="/star-1.svg" />
 </div>
 <div className="wrapper-star-22">
   <img className="wrapper-star-2-inner" alt="" src="/star-1.svg" />
 </div> */}
 <section className="frame-parent54">
   <div className="frame-parent55">
     <div className="frame-parent56">
       <div className="layer-1-wrapper2">
         <img
           className="layer-1-icon8"
           loading="lazy"
           alt=""
           src="/layer-1.svg"
         />
       </div>
       <div className="menu-instance">
         <div className="menu-instance-child"></div>
         <img
           className="essetionalmenu-icon4"
           loading="lazy"
           alt=""
           src="/essetionalmenu.svg"
           onClick={toggleOffcanvas}

         />
               <BlogsOffcanvasMenu />

       </div>
     </div>
     <div className="blogs-and-articles">
       <b className="blogs-and-articles1">Blogs and Articles</b>
     </div>
   </div>
   <div className="exploring-design-trends">
     Exploring Design Trends and Techniques in Our Studio
   </div>
 </section>
 <section className="blogs-inner">
   <div className="frame-parent57">
     <div className="rectangle-parent43">
       <div className="frame-child84"></div>
       <div className="rectangle-parent44">
         <div className="frame-child85"></div>
         <img className="layer-1-icon9" alt="" src="/layer-1-11.svg" />
       </div>
       <div className="frame-wrapper23">
         <div className="frame-parent58">
           <div className="how-a-design-studio-get-100-l-parent">
             <b className="how-a-design"
               >How a design studio get 100+ leads at just pre launch</b
             >
             <div className="marasih-design-studio2">
               Marasih design studio just started in 2024 and getting much
               more love by brands and the creative minds they designing...
             </div>
           </div>
           <div className="star-parent">
             <img
               className="star-icon"
               loading="lazy"
               alt=""
               src="/star-4.svg"
             />

             <b className="design">DESIGN</b>
           </div>
         </div>
       </div>
     </div>
     <div className="rectangle-parent45">
       <div className="frame-child86"></div>
       <div className="rectangle-parent46">
         <div className="frame-child87"></div>
         <img
           className="group-icon1"
           loading="lazy"
           alt=""
           src="/group.svg"
         />
       </div>
       <div className="frame-wrapper24">
         <div className="frame-parent59">
           <div className="how-a-design-studio-get-100-l-group">
             <b className="how-a-design1"
               >How a design studio get 100+ leads at just pre launch</b
             >
             <div className="marasih-design-studio3">
               Marasih design studio just started in 2024 and getting much
               more love by brands and the creative minds they designing...
             </div>
           </div>
           <div className="star-group">
             <img
               className="frame-child88"
               loading="lazy"
               alt=""
               src="/star-4.svg"
             />

             <b className="sports">SPORTS</b>
           </div>
         </div>
       </div>
     </div>
     <div className="rectangle-parent47">
       <div className="frame-child89"></div>
       <div className="rectangle-parent48">
         <div className="frame-child90"></div>
         <img
           className="airbnb-logosvg-icon"
           loading="lazy"
           alt=""
           src="/airbnb-logosvg.svg"
         />
       </div>
       <div className="frame-wrapper25">
         <div className="frame-parent60">
           <div className="how-a-design-studio-get-100-l-container">
             <b className="how-a-design2"
               >How a design studio get 100+ leads at just pre launch</b
             >
             <div className="marasih-design-studio4">
               Marasih design studio just started in 2024 and getting much
               more love by brands and the creative minds they designing...
             </div>
           </div>
           <div className="star-container">
             <img
               className="frame-child91"
               loading="lazy"
               alt=""
               src="/star-4.svg"
             />

             <b className="travel">TRAVEL</b>
           </div>
         </div>
       </div>
     </div>
     <div className="rectangle-parent49">
       <div className="frame-child92"></div>
       <div className="rectangle-parent50">
         <div className="frame-child93"></div>
         <img
           className="mcdonalds-symbolsvg-icon"
           loading="lazy"
           alt=""
           src="/mcdonalds-symbolsvg.svg"
         />
       </div>
       <div className="frame-wrapper26">
         <div className="frame-parent61">
           <div className="how-a-design-studio-get-100-l-parent1">
             <b className="how-a-design3"
               >How a design studio get 100+ leads at just pre launch</b
             >
             <div className="marasih-design-studio5">
               Marasih design studio just started in 2024 and getting much
               more love by brands and the creative minds they designing...
             </div>
           </div>
           <div className="star-parent1">
             <img
               className="frame-child94"
               loading="lazy"
               alt=""
               src="/star-4.svg"
             />

             <b className="food">FOOD</b>
           </div>
         </div>
       </div>
     </div>
   </div>
 </section>
<FooterMobile/>
</div>
</div>
    ) : (
    <div></div>
    )}
  </div>
































  )
}
