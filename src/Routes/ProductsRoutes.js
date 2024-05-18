import React, { Fragment } from 'react'
import ProductsComp from '../Components/Products/ProductsComp'
import Navbar from '../Components/Navbar/Navbar'
import FooterComp from '../Components/footer/FooterComp'

const ProductsRoutes = () => {
  return (
    <Fragment>
      <Navbar/>
      <ProductsComp/>
      <FooterComp/>
    </Fragment>
  )
}

export default ProductsRoutes
