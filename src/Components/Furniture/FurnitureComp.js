import React, { Fragment } from 'react'
import './furniture.css'
const FurnitureComp = () => {
  return (
    <Fragment>
      <section className='furniture'>
        <div className='container'>

          <div className='super-sale' data-aos="flip-left">
            <h3>Super Sale</h3>
            <h1>
            New Collection
            </h1>
            <span>Shop Now</span>
          </div>
          <div className='new-season' data-aos="flip-right">
            <h1>New Season</h1>
            <p>
            Sale 40% Off
            </p>
            <span>Shop Now</span>
            
          </div>
        </div>
      </section>
      
    </Fragment>
  )
}

export default FurnitureComp
