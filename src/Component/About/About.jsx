import React from 'react'
import { NavLink } from 'react-router-dom';
import "./About.css";
import Speciality from "../Speciality/Speciality"
import Bandlogo from '../Bandlogo/Bandlogo';
import Testimonials from '../../Component/Testimonials/Testimonials';


export default function About() {
  return (
    <>
    <div className="about">
      <section className="about-banner-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 text-center">
              <div className="inner-about-content">
                <h2 className="title">About Us</h2>
                <div className="breadcrumb-area">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
                                    <li className="breadcrumb-item active" aria-current="page">About us</li>
                                </ol>
                            </nav>
                        </div>
              </div>

            </div>
          </div>
        </div>
      </section>


      <section className="about-section">
        <div className="container-fluid">
          <div className="row justify-content-center align-items-center gp">
          
        <div className="about-p1 col-lg-6">
          <div className="aboutimg">
            <img src="../../../img/about/about11.jpg" alt="image"  />
          </div>
        </div>
        
        <div className="about-p2 col-lg-6">
          <div className="aboutcontext">
            <p>Welcome to our dynamic gaming platform, where excitement knows no bounds! Immerse yourself in a world of endless adventures, fierce competitions, and captivating stories. From pulse-pounding action to mind-bending puzzles, our diverse collection of games has something for every player. Join a vibrant community of fellow gamers, share strategies, and forge lasting friendships. Stay updated with the latest releases, exclusive events, and gaming news. With intuitive interfaces and seamless gameplay, dive into unparalleled gaming experiences anytime, anywhere. Elevate your gaming journey with us and unleash your inner champion today!</p>
          </div>
        </div>
      

          </div>
        </div>
      </section>
    </div>


    

{/* <section className="aboutblock">
  <div className="container-fluid about-container">
    <h1>About Us</h1>
    <div className="row justify-content-center align-items-center">
      <div className="col-lg-6">
        <div className="about-p1">
          <div className="aboutimg1">
            <img src="../../../img/img5.png" alt="image" className="img-fluid" />
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="about-p2">
          <div className="aboutcontext">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa recusandae aspernatur quibusdam cupiditate accusamus esse minus, voluptatibus necessitatibus similique tempore porro praesentium facilis omnis repudiandae sint non. Dignissimos cupiditate nulla illum, eaque in voluptate ea tenetur, maxime cum aperiam nam.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> */}
<Speciality/>

<Bandlogo/>
<Testimonials/>

     
    </>
  )}