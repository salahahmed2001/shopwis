


import React, { Fragment, useEffect, useState } from 'react'
import loginStyle from '../login/login.module.css';
import { IoIosArrowForward } from 'react-icons/io';
import { FaFacebookF } from 'react-icons/fa6';
import { TiSocialGooglePlus } from 'react-icons/ti';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Joi from 'joi';


const LogIn = ({saveUser}) => {
    // console.log(saveUser)
    let [user,setuser]=useState({
        username:"",
        password:""
    })
    let[validationError,setvalidationError]=useState([])
    let [apiError,setapiError]=useState(null);
    let navigate=useNavigate();
    function getUserData(e) {
        let currentUser={...user} ;
        currentUser[e.target.name ]=e.target.value;
        setuser(currentUser)
        
        
    }
    async function register(e){
        e.preventDefault()
        if (validateUser()) {
            let {data}= await axios.post(`https://fakestoreapi.com/auth/login`,user);
            console.log(data);
            if (data) {
                localStorage.setItem("token",data.token);
                saveUser();
                navigate("/home")
                setapiError(null)
            }else{
                setapiError(data.message)
            }
        } 
   }
   function validateUser(){
    let schema=Joi.object({
        username:Joi.string().min(3).max(10).required(),
        password:Joi.string()
    })
    let res=schema.validate(user,{abortEarly:false})
    console.log(res)
    if(res.error){

        setvalidationError(res.error.details)
    return false
    }else{
        return true
    }
   }
  return (
    <Fragment>
      <div className={loginStyle.loginContainer}>
            <div className={loginStyle.container}>
                <div className={loginStyle.textCon}>
                    <h1>{("login")}</h1>

                </div>
                {apiError && <div> {apiError}</div>}
                <div className={loginStyle.linksCon}>
                    <ul>
                        <li>{<NavLink to="/home">Home</NavLink>} <IoIosArrowForward size={12} /></li>
                        <li>{('Pages')} <IoIosArrowForward size={12} /></li>
                        <li>{('Login')}</li>
                    </ul>
                </div>
            </div>
            <div className={loginStyle.login}>
                <div className={loginStyle.inputCon}>
                    <div >
                        <form onSubmit={(e)=>register(e)} className={loginStyle.inputs}>

                        
                        <h1> Login</h1>
                        <p className='wrong'></p>
                        
                        
                        <input onChange={(e)=>getUserData(e)} type='text' placeholder='user Name'  name='username' />
                            {validationError.filter(ele=>ele.context.label=="username")[0]?.message}
                        <input onChange={(e)=>getUserData(e)} type='password' placeholder='password'  name='password' />
                        {validationError.filter(ele=>ele.context.label=="password")[0]?.message}
                        <div className={loginStyle.chickBox}>
                            <div className={loginStyle.chick}>
                                <input type='checkbox' id='box' />
                                <label htmlFor='box'>Remember me</label>
                            </div>
                            <h3> Forgot password? </h3>
                        </div>
                        <button >Log In</button>
                        <div className={loginStyle.or}>
                            <div className={loginStyle.hr}></div>
                            <h3> OR </h3>
                            <div className={loginStyle.hr}></div>
                        </div>
                        <div className={loginStyle.buttons}>
                            <Link><FaFacebookF /> Facebook </Link>
                            <Link><TiSocialGooglePlus /> Google </Link>
                        </div>
                        <p>Don't Have an Account? <Link>Sign up now</Link> </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default LogIn
