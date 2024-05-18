import React, { Fragment } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import SingleProductComp from '../Components/singleproduct/SingleProductComp'
import FooterComp from '../Components/footer/FooterComp'

const SingleProductRoutes = () => {
  return (
    <Fragment>
      <Navbar/>
      <SingleProductComp/>
      <FooterComp/>
    </Fragment>
  )
}

export default SingleProductRoutes
