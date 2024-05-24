import React, { Fragment,useState, useEffect, useRef  } from "react";
import { PiMagnifyingGlassPlus } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { IoShuffle } from "react-icons/io5";
import { BiSolidStarHalf } from "react-icons/bi";
import { ImStarFull } from "react-icons/im";
import {
  FaArrowLeftLong,
  FaArrowRightLong,
  FaCartArrowDown,
} from "react-icons/fa6";
import "./trending.css";
import { Link } from "react-router-dom";
import Image from "../../images/furniture_insta2.jpg";
const TrendingComp = () => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [currentMargin, setCurrentMargin] = useState(0);
  const [slidesPerPage, setSlidesPerPage] = useState(0);
  const [slidesCount, setSlidesCount] = useState(0);
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const slides = 6;
  useEffect(() => {
    const checkWidth = () => {
      const containerWidth = containerRef.current.offsetWidth;
      setParams(containerWidth);
    };
    
    const setParams = (w) => {
      if (w < 551) {
        setSlidesPerPage(1);
      } else if (w < 901) {
        setSlidesPerPage(2);
      } else if (w < 1101) {
        setSlidesPerPage(3);
      } else {
        setSlidesPerPage(4);
      }
      const newSlidesCount = slides - slidesPerPage;
      setSlidesCount(newSlidesCount);
      if (currentPosition > newSlidesCount) {
        setCurrentPosition(currentPosition - slidesPerPage);
      }
      const newMargin = -currentPosition * (100 / slidesPerPage);
      setCurrentMargin(newMargin);
    };
    
    window.addEventListener('resize', checkWidth);
    checkWidth(); 
    
    return () => {
      window.removeEventListener('resize', checkWidth);
    };
  }, [currentPosition, slidesPerPage]);
 

  const slideRight = () => {
    if (currentPosition !== 0) {
      setCurrentMargin(currentMargin + (100 / slidesPerPage));
      setCurrentPosition(currentPosition - 1);
    }
  };

  const slideLeft = () => {
    if (currentPosition !== slidesCount) {
      setCurrentMargin(currentMargin - (100 / slidesPerPage));
      setCurrentPosition(currentPosition + 1);
    }
  };
 
  return (
    <Fragment>
      <section className="trending">
        <div className="corsol-text">
          <span className={`btn ${currentPosition === 0 ? 'inactive' : ''}`} onClick={slideRight}> 
            <FaArrowLeftLong />
          </span>
          <h1>Trending Items</h1>
          <span className={`btn ${currentPosition === slidesCount ? 'inactive' : ''}`} onClick={slideLeft}>
            <FaArrowRightLong />
          </span>
        </div>
        <div className="container" ref={containerRef}>
          <div className="trending-cards"  ref={sliderRef} style={{ marginLeft: `${currentMargin}%` }}>
            <div className="trending-card">
              <div className="img-card">
                <img src={Image} alt=""></img>
                <div className="icon-card">
                  <ul>
                    <li>
                      <Link style={{ transition: ".5s" }}>
                        <IoShuffle size={25} />
                      </Link>
                    </li>
                    <li>
                      <Link style={{ transition: ".7s" }}>
                        <PiMagnifyingGlassPlus size={25} />
                      </Link>
                    </li>
                    <li>
                      <Link style={{ transition: ".9s" }}>
                        <CiHeart size={25} />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <h2>asasas</h2>
              <div className="price-card">
                <span>$50</span>
                <span>$95.00</span>
              </div>
              <span>
                <ImStarFull />
                <ImStarFull />
                <ImStarFull />
                <ImStarFull />
                <BiSolidStarHalf /> <span>(22)</span>
              </span>
              <Link className="btn">
                <FaCartArrowDown /> Add to cart
              </Link>
            </div>
            <div className="trending-card">
              <div className="img-card">
                <img src={Image} alt=""></img>
                <div className="icon-card">
                  <ul>
                    <li>
                      <Link style={{ transition: ".5s" }}>
                        <IoShuffle size={25} />
                      </Link>
                    </li>
                    <li>
                      <Link style={{ transition: ".7s" }}>
                        <PiMagnifyingGlassPlus size={25} />
                      </Link>
                    </li>
                    <li>
                      <Link style={{ transition: ".9s" }}>
                        <CiHeart size={25} />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <h2>asasas</h2>
              <div className="price-card">
                <span>$50</span>
                <span>$95.00</span>
              </div>
              <span>
                <ImStarFull />
                <ImStarFull />
                <ImStarFull />
                <ImStarFull />
                <BiSolidStarHalf /> <span>(22)</span>
              </span>
              <Link className="btn">
                <FaCartArrowDown /> Add to cart
              </Link>
            </div>
            <div className="trending-card">
              <div className="img-card">
                <img src={Image} alt=""></img>
                <div className="icon-card">
                  <ul>
                    <li>
                      <Link style={{ transition: ".5s" }}>
                        <IoShuffle size={25} />
                      </Link>
                    </li>
                    <li>
                      <Link style={{ transition: ".7s" }}>
                        <PiMagnifyingGlassPlus size={25} />
                      </Link>
                    </li>
                    <li>
                      <Link style={{ transition: ".9s" }}>
                        <CiHeart size={25} />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <h2>asasas</h2>
              <div className="price-card">
                <span>$50</span>
                <span>$95.00</span>
              </div>
              <span>
                <ImStarFull />
                <ImStarFull />
                <ImStarFull />
                <ImStarFull />
                <BiSolidStarHalf /> <span>(22)</span>
              </span>
              <Link className="btn">
                <FaCartArrowDown /> Add to cart
              </Link>
            </div>
            <div className="trending-card">
              <div className="img-card">
                <img src={Image} alt=""></img>
                <div className="icon-card">
                  <ul>
                    <li>
                      <Link style={{ transition: ".5s" }}>
                        <IoShuffle size={25} />
                      </Link>
                    </li>
                    <li>
                      <Link style={{ transition: ".7s" }}>
                        <PiMagnifyingGlassPlus size={25} />
                      </Link>
                    </li>
                    <li>
                      <Link style={{ transition: ".9s" }}>
                        <CiHeart size={25} />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <h2>asasas</h2>
              <div className="price-card">
                <span>$50</span>
                <span>$95.00</span>
              </div>
              <span>
                <ImStarFull />
                <ImStarFull />
                <ImStarFull />
                <ImStarFull />
                <BiSolidStarHalf /> <span>(22)</span>
              </span>
              <Link className="btn">
                <FaCartArrowDown /> Add to cart
              </Link>
            </div>
            <div className="trending-card">
              <div className="img-card">
                <img src={Image} alt=""></img>
                <div className="icon-card">
                  <ul>
                    <li>
                      <Link style={{ transition: ".5s" }}>
                        <IoShuffle size={25} />
                      </Link>
                    </li>
                    <li>
                      <Link style={{ transition: ".7s" }}>
                        <PiMagnifyingGlassPlus size={25} />
                      </Link>
                    </li>
                    <li>
                      <Link style={{ transition: ".9s" }}>
                        <CiHeart size={25} />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <h2>asasas</h2>
              <div className="price-card">
                <span>$50</span>
                <span>$95.00</span>
              </div>
              <span>
                <ImStarFull />
                <ImStarFull />
                <ImStarFull />
                <ImStarFull />
                <BiSolidStarHalf /> <span>(22)</span>
              </span>
              <Link className="btn">
                <FaCartArrowDown /> Add to cart
              </Link>
            </div>
            <div className="trending-card">
              <div className="img-card">
                <img src={Image} alt=""></img>
                <div className="icon-card">
                  <ul>
                    <li>
                      <Link style={{ transition: ".5s" }}>
                        <IoShuffle size={25} />
                      </Link>
                    </li>
                    <li>
                      <Link style={{ transition: ".7s" }}>
                        <PiMagnifyingGlassPlus size={25} />
                      </Link>
                    </li>
                    <li>
                      <Link style={{ transition: ".9s" }}>
                        <CiHeart size={25} />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <h2>asasas</h2>
              <div className="price-card">
                <span>$50</span>
                <span>$95.00</span>
              </div>
              <span>
                <ImStarFull />
                <ImStarFull />
                <ImStarFull />
                <ImStarFull />
                <BiSolidStarHalf /> <span>(22)</span>
              </span>
              <Link className="btn">
                <FaCartArrowDown /> Add to cart
              </Link>
            </div>
            
          
          </div>
        </div>
        </section>
    </Fragment>
  );
};

export default TrendingComp;
