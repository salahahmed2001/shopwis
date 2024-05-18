import React, { Fragment } from "react";
import { FaCreditCard, FaHandHoldingUsd } from "react-icons/fa";
import { RiCustomerService2Line } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import './about.css'


const AboutComp = () => {
  return (
    <Fragment>
      <section className="about" data-aos="fade-up">
        <div className="container"> 
          <div className="text-icon-about">
            <div className="icon-about">
              <TbTruckDelivery />
            </div>
            <div className="text-about">
              <h2>Free Delivery</h2>
              <h3>Worldwide</h3>
            </div>
          </div>
          <div className="text-icon-about">
            <div className="icon-about">
            <FaHandHoldingUsd />
            </div>
            <div className="text-about">
              <h2>Money Returns</h2>
              <h3>30 Days money return</h3>
            </div>
          </div>
          <div className="text-icon-about">
            <div className="icon-about">
              <RiCustomerService2Line />
            </div>
            <div className="text-about">
              <h2>27/4 Online Support</h2>
              <h3>Customer Support</h3>
            </div>
          </div>
          <div className="text-icon-about">
            <div className="icon-about">
              <FaCreditCard />
              
            </div>
            <div className="text-about">
              <h2>Payment Security</h2>
              <h3>Safe Payment</h3>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default AboutComp;
