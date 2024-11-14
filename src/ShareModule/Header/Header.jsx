import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Redux/authSlice';
// import { prof_pic } from '../../Redux/profileSlice'
// import { profileDetailsPath } from '../../Helper/Helper'
import { profileDetailsPath } from '../../Helper/Helper';
import { profileDetails } from '../../Redux/profileSlice';

import { Link } from 'react-router-dom';
import { IoGameController } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import "./Header.css";

export default function Header() {

    const dispatch=useDispatch()
    const navigate=useNavigate()
    const {isLoggedIn}=useSelector((s)=>s.auth)
    // const {pic}=useSelector((s)=>s.profile)
    console.log(isLoggedIn,'login');
    // console.log("data",pic);

    const { profile } = useSelector((state)=> state.profile)

    const handleLog=()=>{
        dispatch(logout())

        navigate('/login')
    }
    // useEffect(()=>{
    //     dispatch(prof_pic())
    // },[isLoggedIn]);

    useEffect(()=>{
      dispatch(profileDetails())
    },[isLoggedIn])

    const [is_loggedIn, setis_LoggedIn]= useState("")

    const Name = localStorage.getItem("first_name");
    useEffect(()=>{
      setis_LoggedIn(Name);
    },[Name])


  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-danger">
  <a className="navbar-brand" href="#"><IoGameController size={40}/> GameWorld</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <NavLink to="/" className="nav-link">
        <IoHome /> Home
        </NavLink>
      </li>

      <li>
      <NavLink to="/about" className="nav-link">
        About Us
            {/* <p>About</p> */}
        </NavLink>
      </li>

      <li>
      <NavLink to="/blog" className="nav-link">
            Blog
        </NavLink>
      </li>

      <li>
      <NavLink to="/product" className="nav-link">
            Product
        </NavLink>
      </li>

      <li>
      <NavLink to="/contact" className="nav-link">
            Contact Us
        </NavLink>
      </li>

      <li>
        <NavLink to="/postblog" className="nav-link">
          PostBlog
        </NavLink>
      </li>
      

      {/* <li>
      <NavLink to="/registration" className="nav-link">
      Registration
      </NavLink>
      </li>
      
      <li>
      <NavLink to="/login" className="nav-link">
      Login
      </NavLink>
    </li> */}

      
    </ul>
    {/* </div> */}

    {/* {isLoggedIn===true?
        {prof_pic} &&
        <NavLink to="/profile"><li><img className='pic_img' src={pic?.profile_pic?profileDetailsPath(pic?.profile_pic):'error'} alt=''/></li></NavLink>
      :null} */}
      

    {/* <form className="form-inline my-2 my-lg-0">
    <Link to="/register" type="button" className="btn btn-warning my-2 my-sm-0 text-white">
    Register
    </Link>
    <li className="">
    {isLoggedIn ?(
      <>
      <li type="button" className="btn btn-warning my-2 my-sm-0 text-white"
      style={{ cursor: "pointer" }}
      onClick={() => {
        logout();
        dispatch(logout());
      }}
      >
      Logout
      </li>
      
      </>
    ) : (
      <Link to="/login" type="button"
      className="btn btn-warning my-2 my-sm-0 text-white">
      Login
      </Link>
    )}
    </li>
    
  </form> */}
    <ul className="navbar-nav">
      <li className="">

     

      {isLoggedIn ?(
        <>
          <li className="loggout"
          style={{ cursor: "pointer"}}>
            Welcome,{is_loggedIn} 
          </li>
        </>
      ) : (
        <Link to="/login">
          <i
          class="fa fa-user-o"
          
          aria-hidden="true">
          </i>{""}
          </Link>
      )}

{/* {isLoggedIn===true?
        {prof_pic} &&
        <NavLink to="/profile"><li><img className='pic_img' src={pic?.profile_pic?profileDetailsPath(pic?.profile_pic):'error'} alt=''/></li></NavLink>
      :null} */}
      </li>

      {/* <img
        className="img-fluid"
        src={
          profile?.data?.profile_pic
          ? profileDetailsPath(profile?.data?.profile_pic)
          : "error"
        }
        alt="profilepic"
      /> */}




    {isLoggedIn===true?
        {profileDetails} &&
        <NavLink to="/profile"><li><img
        className="img-fluid"
        src={
          profile?.data?.profile_pic
          ? profileDetailsPath(profile?.data?.profile_pic)
          : "error"
        }
        alt="profilepic"
/></li></NavLink>
        :null}


    {/* {isLoggedIn===true?
        {prof_pic} &&
        <NavLink to="/profile"><li><img className='pic_img' src={pic?.profile_pic?profileDetailsPath(pic?.profile_pic):'error'} alt=''/></li></NavLink>
      :null} */}
    <li className="">
              {isLoggedIn ?(
                <>
                      <li className="logout"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          handleLog();
                          dispatch(logout());
                        }}
                        >
                          <FaRegUser />
                        Logout
                      </li>
                
                  </>
                ) : (
                  <Link to="/login">
                    <li className="loggin">
                    <FaRegUser />
                    {" "}
                    Login
                    </li>
                  </Link>
                )}
            </li>
            </ul>
                </div>
</nav>
      
    </>
  )
}
