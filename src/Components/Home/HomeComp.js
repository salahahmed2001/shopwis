import React, { Fragment, useEffect, useState } from "react";
import "./homecomp.css";
const HomeComp = () => {
  const [BackImg, setBackImg] = useState(0);
  const BackArr = [
    <div className="back-img1 back-img">
      <div className="back-img-content">
        <h6
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          Get up to 50% off Today Only!
        </h6>
        <h1
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          Wooden Chair Collection
        </h1>
        <button data-aos="fade-up">SHOP NOW</button>
      </div>
    </div>,
    <div className="back-img2 back-img">
      <div className="back-img-content">
        <h6
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          Taking your Viewing Experience to Next Level
        </h6>
        <h1
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          Living Room Collection
        </h1>
        <button data-aos="fade-up">SHOP NOW</button>
      </div>
    </div>,
    <div className="back-img3 back-img">
      <div className="back-img-content">
        <h6
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          NEW TRANDING
        </h6>
        <h1
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          Sofa Collection
        </h1>
        <p data-aos="fade-up">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          blandit massa enim. Nullam id varius nunc id varius nunc.
        </p>
        <button data-aos="fade-up">SHOP NOW</button>
      </div>
    </div>,
  ];

  const BackImg1 = () => {
    setBackImg((prevIndex) => (prevIndex = 0) % BackArr.length);
  };

  const BackImg2 = () => {
    setBackImg((prevIndex) => (prevIndex = 1) % BackArr.length);
  };

  const BackImg3 = () => {
    setBackImg((prevIndex) => (prevIndex = 2) % BackArr.length);
  };
  useEffect(() => {
    setInterval(() => {
      setBackImg((prevIndex) => (prevIndex + 1) % BackArr.length);
    }, 9000);
  }, [BackArr.length]);
  return (
    <Fragment>
      <section className="back-imgs">
        {BackArr[BackImg]}
        <div className="span-icon">
          <span onClick={BackImg1}></span>
          <span onClick={BackImg2}></span>
          <span onClick={BackImg3}></span>
        </div>
      </section>

      
      
    </Fragment>
  );
};

export default HomeComp;
