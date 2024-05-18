import React, { Fragment } from "react";
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
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Image from "../../images/furniture_insta2.jpg";
const TrendingComp = () => {

 
  return (
    <Fragment>
      <section className="trending">
        <div className="corsol-text">
          <span>
            <FaArrowLeftLong />
          </span>
          <h1>Trending Items</h1>
          <span>
            <FaArrowRightLong />
          </span>
        </div>
        <div className="container">
          <div className="trending-cards">
            <Swiper
              slidesPerView={6}
              centeredSlides={true}
              spaceBetween={30}
              pagination={{
                type: "fraction",
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
            >
              <SwiperSlide className="trending-card" >
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
              </SwiperSlide>
              <SwiperSlide className="trending-card" >
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
              </SwiperSlide>
              <SwiperSlide className="trending-card" >
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
              </SwiperSlide>
              <SwiperSlide className="trending-card" >
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
              </SwiperSlide>
              <SwiperSlide className="trending-card" >
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
              </SwiperSlide>
              <SwiperSlide className="trending-card" >
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
              </SwiperSlide>
              <SwiperSlide className="trending-card" >
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
              </SwiperSlide>
              <SwiperSlide className="trending-card" >
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
              </SwiperSlide>
            </Swiper>

          </div>
       
        </div>
      </section>
    </Fragment>
  );
};

export default TrendingComp;
