import React, { Fragment, useEffect, useState } from 'react'
import { BiSolidStarHalf } from 'react-icons/bi'
import { CiHeart } from 'react-icons/ci'
import { ImStarFull } from 'react-icons/im'
import { IoShuffle } from 'react-icons/io5'
import { PiMagnifyingGlassPlus } from 'react-icons/pi'
import { Link } from 'react-router-dom'
import '../Products/products.css'
import { useDispatch, useSelector } from 'react-redux'
import { FaTrashCan } from 'react-icons/fa6'
import { ProductSlice } from '../../Redux/ProductSlice'

const CartComp = () => {
  const [products,setProduct]=useState([])
  const dispatch=useDispatch();
  const CartProducts=useSelector((state)=>state.product.items)
  const allPrices=useSelector((state)=>state.product.total)
  useEffect(()=>{
    dispatch(ProductSlice.actions.calcTotal())
    setProduct(CartProducts)
  },[CartProducts,dispatch])
  return (
    <Fragment>
      <section className="products">
      {CartProducts.length>0?<h1>Total Cost:{allPrices}</h1>:""}
        <div className="container">
          <div className="products-cards">
            {
              products.map((el,idx)=>(   
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
                <span>
                  <ImStarFull />
                  <ImStarFull />
                  <ImStarFull />
                  <ImStarFull />
                  <BiSolidStarHalf /> <span>({el.rating.rate})</span>
                </span>
                <button onClick={()=>dispatch(ProductSlice.actions.removeFromCart(el))}  className="btn">
                <FaTrashCan /> 
                </button>
              </div>
              ))
            }
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default CartComp
