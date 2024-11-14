import React, { Component } from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import Footer from '../ShareModule/Footer/Footer';
// import Header from '../ShareModule/Header/Header';
// import Home from '../Component/Home/Home';
// import About from '../Component/About/About';
// import Blog from '../Component/Blog/Blog';
// import Service from '../Component/Service/Service';
// import Contact from '../Component/Contact/Contact';
// import Registration from '../Component/Registration/Registration';
// import Login from '../Component/Login/Login';
import { Navigate, useNavigate } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { check_token } from '../Redux/authSlice';
import { useDispatch } from 'react-redux';
// import Blog from '../Component/Blog/Blog';
// import Edit from "../Component/Edit/Edit"
import Loader from '../Component/Loader/Loader';
export default function Rout() {

    const dispatch=useDispatch()

    const Header = lazy(() => import("../ShareModule/Header/Header"))
    const Footer = lazy(() => import("../ShareModule/Footer/Footer"))
    const Home = lazy(() => import("../Component/Home/Home"))
    const About = lazy(() => import("../Component/About/About"))
    const Blog = lazy(()=> import("../Component/Blog/Blog"))
    const PostBlog = lazy(() => import("../Component/PostBlog/PostBlog"))
    // const Product = lazy(() => import("../Component/Product/product"))
    const Product = lazy(()=> import("../Component/Product/product"))
    const Contact = lazy(() => import("../Component/Contact/Contact"))
    const Registration = lazy(() => import("../Component/Registration/Registration"))
    const Login = lazy(() => import("../Component/Login/Login"))
    const Profile = lazy(()=> import("../Component/Profile/Profile"))
    const Edit = lazy(()=> import("../Component/Edit/Edit"))
    // const Card = lazy(()=> import("../Component/Card/Card"))
    // const Loader= lazy(()=> import ("../Component/Loader/Loader"))



    const publicRoutes=[
        {
            path:"/login",
            Component:<Login/>
        },
        {
            path:"/registration",
            Component:<Registration/>
        }
    ]
    const PrivateRoutes=[
        {
            path:"/",
            Component:<Home/>
        },
        {
            path:"/about",
            Component:<About/>
        },
        {
            path:"/postblog",
            Component:<PostBlog/>
        },
        {
            path:"/product",
            Component:<Product/>
        },
        {
            path:"/contact",
            Component:<Contact/>
        },
        {
            path:"/profile",
            Component:<Profile/>
        },
        {
            path:"/blog",
            Component:<Blog/>
        },
        {
            path:"/edit/:id",
            Component:<Edit/>
        },
        // {
        //     parh:"/card",
        //     Component:<Card/>
        // }

    ]

    useEffect(()=>{
        dispatch(check_token())
    },[])

    const Private=({children})=>{
        let token = localStorage.getItem("token") || sessionStorage.getItem("token")

        return token!==null && token !==undefined?(children):
        (<Navigate to="/login"/>)
    }


  return (
    <>
    {/* <Suspense fallback={<h2>Loading...</h2>}> */}
    <Suspense fallback={<Loader/>}>
    <Router>
        <Header/>
        <Routes>
            {publicRoutes?.map((value,index)=>{
                return(
                    <>
                    <Route path={value.path} element={value.Component} />
                    </>
                )
            })}

            {
                PrivateRoutes?.map((value,index)=>{
                    return(
                        <>
                        <Route path={value.path} element={<Private>{value.Component}</Private>} />
                        </>
                    )
                })
            }


            {/* <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/service" element={<Service/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/registration" element={<Registration/>} />
            <Route path="/login" element={<Login/>} /> */}
            
        </Routes>
        <Footer/>
    </Router>
    </Suspense>
      
    </>
  )
}
