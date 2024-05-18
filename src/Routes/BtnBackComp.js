import React, { Fragment, useEffect, useState } from 'react'
import { GoMoveToTop } from 'react-icons/go'

const BtnBackComp = () => {
  const [ShowBtn,setShowBtn]=useState();
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      setShowBtn(window.scrollY);
    });
  })
 
  const ShowBtnBack=()=>{

    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  }
  return (
  <Fragment>
    <div onClick={ShowBtnBack} style={ShowBtn >300 ?{opacity:"1"}:{opacity:"0"}} className="BtnBack" >
    <GoMoveToTop />
    </div>
  </Fragment>
  )
}

export default BtnBackComp
