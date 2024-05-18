import React, { Fragment, useEffect, useState } from "react";
import "./insta.css";
import InstaImg1 from "../../images/furniture_insta1.jpg";
import InstaImg2 from "../../images/furniture_insta2.jpg";
import InstaImg3 from "../../images/furniture_insta3.jpg";
import InstaImg4 from "../../images/furniture_insta4.jpg";
import InstaImg5 from "../../images/furniture_insta5.jpg";
import InstaImg6 from "../../images/furniture_insta6.jpg";
import ImgText1 from "../../images/cl_logo1.png";
import ImgText2 from "../../images/cl_logo2.png";
import ImgText3 from "../../images/cl_logo3.png";
import ImgText4 from "../../images/cl_logo4.png";
import ImgText5 from "../../images/cl_logo5.png";
import ImgText6 from "../../images/cl_logo6.png";

const InstaComp = () => {
  const InstaImg = [
    InstaImg1,
    InstaImg2,
    InstaImg3,
    InstaImg4,
    InstaImg5,
    InstaImg6,
  ];
  const ImgText = [ImgText1, ImgText2, ImgText3, ImgText4, ImgText5, ImgText6];
  const [Show, setShow] = useState(0);
  useEffect(()=>{
    setInterval(()=>{
      setShow((prevShow) => (prevShow + 1) % ImgText.length);
    },6000)
  },[ImgText.length])
  const getImages = () => {
    let orderedImages = [];
    for (let i = 0; i < ImgText.length; i++) {
      orderedImages.push(ImgText[(i + Show) % ImgText.length]);
    }
    return orderedImages;
  };
  const [offset, setoffset] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setoffset((prevOffset) => (prevOffset + 1) % InstaImg.length);
    }, 5000);
  }, [InstaImg.length]);
  const getImagesToShow = () => {
    let orderedImages = [];
    for (let i = 0; i < InstaImg.length; i++) {
      orderedImages.push(InstaImg[(i + offset) % InstaImg.length]);
    }
    return orderedImages;
  };

  return (
    <Fragment>
      <section className="insta">
        <div className="img-insta" data-aos="fade-up">
          {getImagesToShow().map((image, index) => (
            <div className="single-img">
            <img key={index} src={image} alt={`Slide ${index}`} style={{transition:"1s"}}></img>
            </div>
          ))}
          <div className="instagram">
            <h1>instagram</h1>
            <span>@shoppingzone</span>
          </div>
        </div>
        <div className="container"data-aos="fade-up" >
        <div className="img-text" >{
          getImages().map((image, idx) => (
            <img key={idx} src={image} alt={`Slide ${idx}`}></img>
          ))
        }</div>
        </div>
      </section>
    </Fragment>
  );
};

export default InstaComp;
