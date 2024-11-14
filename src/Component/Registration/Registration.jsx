import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { register } from '../../Redux/authSlice'
import { BsInstagram } from "react-icons/bs";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import "./Registration.css";


export default function Registration() {
    const [user, setUser]= useState({
        first_name:"",
        last_name:"",
        email:"",
        password:""
    })

    const dispatch=useDispatch()
    const navigate=useNavigate()

    const {redirectlogin}=useSelector((s)=>s.auth)
    const [img,setImg]=useState()
    const[error,setError]=useState({})


    const validation=()=>{
        let error={}
        if(!user.first_name){
            error.first_name="please enter the first name"
        }
        if(!user.last_name){
            error.last_name="please enter the last name"
        }
        if(!user.email){
            error.email="please enter the email"
        }
        if(!user.password){
            error.password="please enter the password"
        }
        return error
    }

    let name,value
    const postUser=(e)=>{
        name=e.target.name
        value=e.target.value

        if(name=='first_name'){
            if(value.trim().length===0){
                setUser({...user,first_name:""})
                setError({...error,first_name:"*First Name cannot be empty"})
            }else{
                setUser({...user,first_name:value})
                setError({...error,first_name:""})
            }
        }

        if(name=='last_name'){
            if(value.trim().length===0){
                setUser({...user,last_name:""})
                setError({...error,last_name:"*Last Name cannot be empty"})
            }else{
                setUser({...user,last_name:value})
                setError({...error,last_name:""})
            }
        }

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

    // const image=(e)=>{
    //     setImg(e.target.file[0])
    // }

    const submit=(e)=>{
        e.preventDefault()
        setError(validation())

        let formData= new FormData()
        formData.append("first_name",user?.first_name)
        formData.append("last_name",user?.last_name)
        formData.append('email',user?.email)
        formData.append("profile_pic",img)
        formData.append("password",user?.password)
        
            dispatch(register(formData))
        

    }

    const redirectUser=()=>{
        let inRegistertion=window.location.pathname.toLowerCase()==='/registration'

        if(redirectlogin==='/login' && inRegistertion){
            navigate('/login')
        }
    }
    useEffect(()=>{
        redirectUser()
    },redirectlogin)
  return (
    <>
    <section className="Registration">
    <div className="container">
        <div className="registration-container">
            <h2>Registration page</h2>
        {/* <div className="row justify-content-center align-items-center Registration-row"> */}
        {/* <video loop="" muted autoplay>
          <source src="../../../public/img/videp1.mp4"/>
        </video> */}
        <form>
  <div className="form-group text-left">
    <label htmlFor="">First Name<span>*</span></label>
    <input type="text" name='first_name' className="form-control" placeholder="Enter Your First Name" value={user?.first_name} onChange={(e)=>postUser(e)}/>
    <span className='error'>{error?.first_name}</span>
  </div>

  <div className="form-group text-left">
    <label htmlFor="">Last Name<span>*</span></label>
    <input type="text" name='last_name' className="form-control" placeholder="Enter Your Last Name" value={user?.last_name} onChange={(e)=>postUser(e)}/>
  </div>
  
  <div class="form-group text-left">
    <label htmlFor="exampleInputEmail1">Email address<span>*</span></label>
    <input type="email" name='email' className="form-control" placeholder="Enter Your Email" value={user?.email} onChange={(e)=>postUser(e)}/>
    
  </div>

  <div className="form-group text-left">
    <label htmlFor="exampleInputPassword1">Password<span>*</span></label>
    <input type="password" name='password' className="form-control" placeholder="Enter Your Password" value={user?.password} onChange={(e)=>postUser(e)}/>
  </div>

  <div className="form-group text-left">
    <label htmlFor="exampleInputPassword1">image<span>*</span></label>
    {/* <input type="file" name='img' className="form-control" onChange={image} accept='image/*'/> */}
    <input type="file" name='img' className="form-control" onChange={(e) => setImg(e.target.files[0])} accept='image/*'/>
  </div>


  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <div className="col-lg-12 rbtn">
  <button type="submit" className="btn btn-primary registration-btn" onClick={submit} >Register</button>
  </div>
  <div className="col-lg-12 rlogo">
  <BsInstagram size={40} className="icon" />
  <FaGoogle size={40} className="icon" />
  <FaFacebookF size={40} className="icon" />
  <FiTwitter size={40} className="icon" />
</div>
<div className="col-lg-12 nv">
<NavLink to="/login"><p className="rl">Click To Login</p></NavLink>
</div>

</form>



        </div>
        </div>
    {/* </div> */}
    </section>
      
    </>
  )
}
