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


const HomeRoutes = () => {
 
  return (
    <Fragment>
      <Navbar />
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
