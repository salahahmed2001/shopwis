import React, { Fragment, useEffect, useState } from "react";
import { PiMagnifyingGlassPlus } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { IoShuffle } from "react-icons/io5";
import { BiSolidStarHalf } from "react-icons/bi";
import { ImStarFull } from "react-icons/im";
import { FaCartArrowDown } from "react-icons/fa6";
import "./products.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { ProductSlice } from "../../Redux/ProductSlice";

const ProductsComp = () => {
  const [Product, setProduct] = useState([]);
  const dispatch=useDispatch();
  
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products`).then((res) => {
      setProduct(res.data);
    });
  },[]);
  return (
    <Fragment>
      <section className="products">
        <h1 data-aos="fade-up">Exclusive Products</h1>
        <div className="container">
          <div className="products-cards">
            {
              Product.map((el,idx)=>(   
              <div key={idx} className="products-card" data-aos="flip-left">
                <div className="img-card">
                  <img src={el.image} alt=""></img>
                  <div className="icon-card">
                    <ul>
                      <li>
                        <Link style={{ transition: ".5s" }}>
                          <IoShuffle size={25} />
                        </Link>
                      </li>
                      <li>
                        <Link to={`/singleproduct/${el.id}`} style={{ transition: ".7s" }}>
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
                <h2>{el.title}</h2>
                <div className="price-card">
                  <span>${el.price}</span>
                  <span>$95.00</span>
                </div>
                <span className="rating">
                  <ImStarFull />
                  <ImStarFull />
                  <ImStarFull />
                  <ImStarFull />
                  <BiSolidStarHalf /> <span>({el.rating.rate})</span>
                </span>
                <button onClick={()=>dispatch(ProductSlice.actions.addToCart(el))} className="btn">
                  <FaCartArrowDown /> Add to cart
                </button>
              </div>
              ))
            }
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ProductsComp;
