import React, { Fragment, } from "react";
import Navbar from "../Components/Navbar/Navbar";
import HomeComp from "../Components/Home/HomeComp";
import FooterComp from "../Components/footer/FooterComp";
import AboutComp from "../Components/About/AboutComp";
import ProductsComp from "../Components/Products/ProductsComp";
import FurnitureRoutes from "./FurnitureRoutes";
import TrendingRoutes from "./TrendingRoutes";
import InstaRoutes from "./InstaRoutes";
import BtnBackComp from "./BtnBackComp";
import { Offline } from "react-detect-offline";
import DetectOffline from "../Components/detectOffline/DetectOffline";


const HomeRoutes = ({userData,logOut}) => {
 
  return (
    <Fragment>
      
      <Offline><DetectOffline/></Offline>
      <Navbar  userData={userData} logOut={logOut}/>
      <HomeComp />
      <AboutComp />
      <ProductsComp />
      <FurnitureRoutes />
      <TrendingRoutes />
      <InstaRoutes />
      <FooterComp />
      <BtnBackComp />
    </Fragment>
  );
};

export default HomeRoutes;
