import React from 'react'
import { NavLink } from 'react-router-dom';
import { BsInstagram } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import { FiTwitter } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import "./Contact.css";

export default function contact() {
  return (
    <>
<div className="contact">
{/* <h2 className="title">Contact Us</h2> */}
<section className="inner-banner-section bg_img bg-overlay-black" >
  {/* <img src="../../img/banner/inner.png" alt="image" /> */}
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-12 text-center">
                    <div className="inner-banner-content">
                        <h2 className="title">Contact Us</h2>
                        <div className="breadcrumb-area">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
                                    <li className="breadcrumb-item active" aria-current="page">Contact us</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>



    <section className="contact-section">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-12 text-center">
                    <div className="contact-area">
                        <div className="contac-header">
                            <h3 className="sub-title">Need some help?</h3>
                            <h2 className="title">Get in Touch</h2>
                            <p>Whatever your question we are here to help</p>
                        </div>
                        <div className="contact-form-area">
                            <form className="contact-form">
                                <div className="row">
                                    <div className="col-lg-12 form-group text-left">
                                        <label>Name<span>*</span></label>
                                        <input type="text" class="form-control" placeholder="Enter Your FullName"/>
                                    </div>
                                    <div className="col-lg-12 form-group text-left">
                                        <label>Email<span>*</span></label>
                                        <input type="email" class="form-control" placeholder="Enter Your Email"/>
                                    </div>
                                    <div className="col-lg-12 form-group text-left">
                                        <label>Subject<span>*</span></label>
                                        <input type="text" class="form-control" placeholder="Enter Your Subject"/>
                                    </div>
                                    <div className="col-lg-12 form-group text-left">
                                        <label htmlFor="">Message<span>*</span></label>
                                        <textarea className="form-control" name="description"></textarea>
                                    </div>
                                    <div className="col-lg-12 form-group text-center">
                                        <input type="submit" className="cmn-btn" value="Send Message"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="contact-section pt-120 pb-120">
        <div className="container">
            <div className="row mb-30-none">
                <div className="col-lg-3 col-md-6 col-sm-6 mb-30">
                <div className="contact-item text-center">
                        <div className="contact-item-icon">
                        <BsInstagram size={40}/>
                            </div>
                        <h3 className="title">130k</h3>
                        <span className="sub-title">Followers</span>
                    </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 mb-30">
                    <div className="contact-item text-center">
                    <div className="contact-item-icon">
                    <FaPeopleGroup size={40}/>
                        </div>
                        <h3 className="title">35k</h3>
                        <span className="sub-title">Members</span>
                    </div>
                    </div>
                <div className="col-lg-3 col-md-6 col-sm-6 mb-30">
                    <div className="contact-item text-center">
                    <div className="contact-item-icon">
                    <FiTwitter size={40}/>
                            </div>
                            <h3 className="title">47k</h3>
                            <span className="sub-title">Followers</span>
                            </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 mb-30">
                            <div className="contact-item text-center">
                            <div className="contact-item-icon">
                            <HiOutlineMail size={40}/>
                            </div>
                            <h3 className="title">291k</h3>
                            <span className="sub-title">Subscribers</span>
                            </div>
                            </div>
                            </div>
                            </div>
                        </section>
                        <section className="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.5446281574655!2d88.4288143114744!3d22.59612867938936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02759a6db27d93%3A0x20b2a7e27f353191!2sABHINANDAN%20APARTMENT!5e0!3m2!1sen!2sin!4v1715499994880!5m2!1sen!2sin" 
                        width="100%" 
                        height="450" style={{border:"0;"}} 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade">

                        </iframe>
                        </section>
                        </div>
      
    </>
  )
}
