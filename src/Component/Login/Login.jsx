import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import {login, reset_redirect, reset_redirectLogin} from '../../Redux/authSlice';
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BsInstagram } from "react-icons/bs";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import "./Login.css";


export default function Login() {
    const [user,setUser]=useState({
        email:"",
        password:""
    })
    const [error,setError]=useState({})
    console.log(error);
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const {redirectlogin,redirectHome}=useSelector((s)=>s.auth)
    console.log(redirectHome,"home");


    const validation=()=>{
        let error={}
        if(!user.email){
            error.email="*Please enter the email" 
        }
        if(!user.password){
            error.password="*Please enter the password"
        }
        return error
    }

    let name,value
    const postUser=(e)=>{
        name=e.target.name
        value=e.target.value

        if(name=='email'){
            if(value.trim().length===0){
                setUser({...user,email:""})
                setError({...error,email:"*Email cannot be empty"})
            }else{
                setUser({...user,email:value})
                setError({...error,email:""})
            }
        }
        if(name=='password'){
            if(value.trim().length===0){
                setUser({...user,password:""})
                setError({...error,password:"*Password cannot be empty"})
            }else{
                setUser({...user,password:value})
                setError({...error,password:""})
            }
        }
    }

    const submit=(e)=>{
        e.preventDefault()
        setError(validation())

        let formData={
            email:user.email,
            password:user.password
        }

        dispatch(login(formData))
    }

    const redirectUser=()=>{
        let inLogin=window.location.pathname.toLowerCase()==='/login'

        if(redirectHome==='/' && inLogin==true){
            navigate('/')
        }
    }

    useEffect(()=>{
        redirectUser()
    },[redirectHome])

    useEffect(()=>{
        dispatch(reset_redirectLogin(null))
        console.log(redirectlogin);
    },[])

  return (
    <>
  
<section className="Login">
        <div className="container">
            <div className="login-container">
                <h2>Login Form</h2>
            <div className="row justify-content-center align-items-center">
            <form>
                <div className="form-group text-left">
                   <label htmlFor="exampleInputEmail1">Email address<span>*</span></label>
                   <input type="email" name="email" placeholder="Enter Your Email" value={user.email} onChange={(e)=>postUser(e)} className="form-control" />
                   <span className='error'>{error?.email}</span>
                </div>

                <div className="form-group text-left">
                   <label htmlFor="exampleInputPassword1">Password<span>*</span></label>
                   <input type="password" name="password" placeholder="Enter Your Password" value={user.password} onChange={(e)=>postUser(e)} className="form-control" />
                   <span className='error'>{error?.password}</span>
                </div>

               <div className="form-group text-left form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                  <label className="form-check-label" for="exampleCheck1">Check me out</label>
               </div>

               <div className="col-lg-12 lbtn">
              {/* <button type="submit" onClick={submit} className="btn btn-primary">Login</button> */}
              <button type='submit' className="btn login-btn" onClick={submit}>Login</button>
              </div>
              <div className="col-lg-12 llogo">
                 <BsInstagram size={40} className="icon" />
                 <FaGoogle size={40} className="icon" />
                 <FaFacebookF size={40} className="icon" />
                 <FiTwitter size={40} className="icon" />
              </div>
             <Link to="/Registration"><p className="rl">New to GameWorld? Sign Up</p></Link>
            </form>
        </div>
    </div>
            
        </div>

    </section>
      
    </>
  )
}




