import React, { Fragment, useEffect, useState } from "react";
import { BiSolidStarHalf } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";
import'./singleproducts.css';
import { ImStarFull } from "react-icons/im";
import { IoShieldCheckmarkOutline, IoShuffle, IoSyncCircleOutline } from "react-icons/io5";
import { FaSackDollar } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { ProductSlice } from "../../Redux/ProductSlice";


const SingleProductComp = () => {
  const {id}=useParams();
  const [product,setProduct]=useState({})
  const dispatch=useDispatch();
  const [add,setadd]=useState(0)
  
  const Plus=()=>{
    setadd(add+1)
    
  }
  const Minus=()=>{
    setadd(add-1)
    
  }
  useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      setProduct(res.data);

    })
  })
  return (
    <Fragment>
      <section className="single-product">
        <div className="container">
          <div className="single-prod">
            <div className="img-prod">
              <img src={product.image} alt=""></img>
            </div>
            <div className="text-prod">
              <h1>{product.title}</h1>
              <div className="price-rate-prod">
                <div className="price-prod">
                  <span>${product.price}</span>
                  <span>$55.00</span>
                </div>
                <div className="rate-prod">
                  <span>
                  <ImStarFull />
                  <ImStarFull />
                  <ImStarFull />
                  <ImStarFull />
                  <BiSolidStarHalf />
                  </span>
                  <span>(4.5)</span>
                </div>
              </div>
              <p>
                {product.description}
              </p>
              <div className="quality">
                <span><IoShieldCheckmarkOutline  style={{color:"#ff324d" ,marginRight:"5px"} } />  1 Year AL Jazeera Brand Warranty</span>
                <span><IoSyncCircleOutline  style={{color:"#ff324d" ,marginRight:"5px"} }/> 30 Day Return Policy</span>
                <span><FaSackDollar style={{color:"#ff324d" ,marginRight:"5px"} }/>  Cash on Delivery available</span>
              </div>
              <div className="color">
                <small> color</small>
                <small></small>
                <small></small>
                <small></small>
              </div>
              <div className="size">
                <small>Size</small>
                <span>XS</span>
                <span>S</span>
                <span>M</span>
                <span>L</span>
                <span>XL</span>
              </div>
              <div className="buttons">
                <span onClick={Minus}>-</span>
                <span>{add}</span>
                <span onClick={Plus}>+</span>
                <Link onClick={()=>dispatch(ProductSlice.actions.addToCart(product))} >add to cart</Link>
                <IoShuffle size={30}/>
                <CiHeart size={30}/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default SingleProductComp;
