import React, { Fragment, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import LogoDarck from "../../images/logo_dark.png";
import "./navbar.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";
import { FaHeart, FaUser, FaX } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { ImShuffle } from "react-icons/im";
import { MdPhoneIphone } from "react-icons/md";



const Navbar = ({userData,logOut}) => {
  const CartProducts=useSelector((state)=>state.product.items)

  const [Show, setShow] = useState();
  const [nav,setnav]=useState();
  
 
  useEffect(() => {
    window.addEventListener("resize", (e) => {
      const windowSize = e.currentTarget.innerWidth;
      setShow(windowSize);
    });
    window.addEventListener("scroll", () => {
      setnav(window.scrollY)
    })
  },[setShow,setnav]);
  const [isActive, setIsActive] = useState(false);
  function AddClass() {
    setIsActive(!isActive);
  }
  const addNewClass = (
    navbarToggler,
    navbarTogglerRotate,
    navbar,
    navbarActive
  ) => {
    return `${navbarToggler} ${navbarTogglerRotate} ${navbar} ${navbarActive}`;
  };
  const [Searsh, setSearsh] = useState(false);
  const ShowSearsh = () => {
    setSearsh(true);
  };
  const HideSearsh = () => {
    setSearsh(false);
  };
  return (
    <Fragment>
      <div className="header-top">
        <div className="log">
          <span>English</span>
          <span>USD</span>
          <span><MdPhoneIphone />  123-456-789</span>
        </div>
        <div className="log">
          <span><ImShuffle /> Comaare</span>
          <span><FaHeart /> Wishlist</span>
          {userData?<span  className="login" onClick={logOut}>logout</span>:<NavLink className="login" to="/login"><FaUser /> Login</NavLink>}
        </div>
      </div>

      <header style={nav>45?{position:"fixed" }:{}} className="header">
        <div className="logo-btn">
          <div className="logo">
            <img src={LogoDarck} alt=""></img>
          </div>
          {Show < 992 ? (
            <div className="icon">
              <span>
                <IoSearchOutline
                  style={{ fontSize: "30px" }}
                  className="single-icon"
                />
              </span>
              <span>
                <Link to="/cartRoutes" >

                <IoCartOutline
                  style={{ fontSize: "30px" }}
                  className="single-icon"
                  /> <span style={{color:"red"}}>
                    {CartProducts.length>0?CartProducts.length:undefined }
                    </span>
                  </Link>
              </span>
            </div>
          ) : (
            ""
          )}
          <button
            style={Show < 992 ? { display: "flex" } : { display: "none" }}
            className={addNewClass(
              "navbarToggler",
              isActive ? "navbarTogglerRotate" : ""
            )}
            onClick={AddClass}
          >
            <span></span>
          </button>
        </div>
        <div className={addNewClass("navbar", isActive ? "navbarActive" : "")}>
          <ul>
            <li className="home">
              <NavLink to="/home">
                HOME <RiArrowDropDownLine style={{ fontSize: "30px" }} />
              </NavLink>
              <div className="home-links">
                <span>Fashion 1</span>
                <span>Fashion 2</span>
                <span>Furniture 1</span>
                <span>Furniture 2</span>
                <span>Electronice 1</span>
                <span>Electronice 2</span>
              </div>
            </li>
            <li className="home">
              <NavLink to="/PAGES">
                PAGES <RiArrowDropDownLine style={{ fontSize: "30px" }} />
              </NavLink>
              <div className="home-links">
                <span>About us</span>
                <span>Contact us</span>
                <span>Faq</span>
                <span>404 Error Page</span>
                <span>Login</span>
                <span>Register</span>
              </div>
            </li>
            <li>
              <NavLink  to="/products">
                PRODUCTS
                <RiArrowDropDownLine style={{ fontSize: "30px" }} />
              </NavLink>
            </li>
            <li>
              <NavLink to="wscc">BLOG</NavLink>
            </li>
            <li>
              <NavLink to="qwd">SHOP</NavLink>
            </li>
            <li>CONTACT US</li>
          </ul>
        </div>
        <div
          style={Show < 992 ? { display: "none" } : { display: "flex" }}
          className="icon"
        >
          <span onClick={ShowSearsh}>
            <IoSearchOutline
              style={{ fontSize: "30px" }}
              className="single-icon"
            />
          </span>

          <span>
            <NavLink to="/cartRoutes">

            <IoCartOutline
              style={{ fontSize: "30px" }}
              className="single-icon"
              />
              <span style={{color:"red",fontSize:"20px",fontWeight:"700"}}>
                    {CartProducts.length>0?CartProducts.length:undefined }
                    </span>
              </NavLink>
          </span>
        </div>
      </header>
      <div style={Searsh?{left:"0px"}: Searsh?{right:"-100%"}:{}} className="search">
        <div className="btn-search">
          <FaX size={30} onClick={HideSearsh} className="fax" />
          <input placeholder="Search" />
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
