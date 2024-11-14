import React from 'react'
import "./Testimonials.css";
import { FaStar } from "react-icons/fa";
export default function Testimonials() {
  return (
    <>
    <div className="testimials-containor">
        <h1>Testimonials</h1>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-6 mb-5">
              <div className="card testimonials-block">
                <div className="d-flex justify-content-center align-items-center">
                  <img src="../../../img/t1.jpg" className="card-img-top rounded-circle" alt="Card 1" />
                </div>
                <div className="card-body">
                  <h4 className="Testimonials-text">Carryminati</h4>
                  <p className="Testimonials-text">"Immersive gaming experience with diverse titles, seamless navigation, and vibrant community. Engage in thrilling adventures and discover new favorites effortlessly."</p>
                <div className="star">
                <FaStar size={25}/><FaStar size={25}/><FaStar size={25}/><FaStar size={25}/><FaStar size={25}/>
                </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 mb-5">
              <div className="card testimonials-block">
                <div className="d-flex justify-content-center align-items-center">
                  <img src="../../../img/img3.jpg" className="card-img-top rounded-circle" alt="Card 1" />
                </div>
                <div className="card-body">
                <h4 className="Testimonials-text">Vedika Pinto</h4>
                  <p className="Testimonials-text">"Immersive gaming experience with diverse titles, seamless navigation, and vibrant community. Engage in thrilling adventures and discover new favorites effortlessly."</p>
                <div className="star">
                <FaStar size={25}/><FaStar size={25}/><FaStar size={25}/><FaStar size={25}/><FaStar size={25}/>
                </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 mb-5">
              <div className="card testimonials-block">
                <div className="d-flex justify-content-center align-items-center">
                  <img src="../../../img/t3.jpg" className="card-img-top rounded-circle" alt="Card 1" />
                </div>
                <div className="card-body">
                <h4 className="Testimonials-text">Darshan Raval</h4>
                  <p className="Testimonials-text">"Immersive gaming experience with diverse titles, seamless navigation, and vibrant community. Engage in thrilling adventures and discover new favorites effortlessly."</p>
                <div className="star">
                <FaStar size={25}/><FaStar size={25}/><FaStar size={25}/><FaStar size={25}/><FaStar size={25}/>
                </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 mb-5">
              <div className="card testimonials-block">
                <div className="d-flex justify-content-center align-items-center">
                  <img src="../../../img/t5.jpg" className="card-img-top rounded-circle" alt="Card 1" />
                </div>
                <div className="card-body">
                <h4 className="Testimonials-text">Harsh Choudhary</h4>
                  <p className="Testimonials-text">"Immersive gaming experience with diverse titles, seamless navigation, and vibrant community. Engage in thrilling adventures and discover new favorites effortlessly."</p>
                <div className="star">
                <FaStar size={25}/><FaStar size={25}/><FaStar size={25}/><FaStar size={25}/><FaStar size={25}/>
                </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 mb-5">
              <div className="card testimonials-block">
                <div className="d-flex justify-content-center align-items-center">
                  <img src="../../../img/c1.jpg" className="card-img-top rounded-circle" alt="Card 1" />
                </div>
                <div className="card-body">
                <h4 className="Testimonials-text">Mrunal Thakur</h4>
                  <p className="Testimonials-text">"Immersive gaming experience with diverse titles, seamless navigation, and vibrant community. Engage in thrilling adventures and discover new favorites effortlessly."</p>
                <div className="star">
                <FaStar size={25}/><FaStar size={25}/><FaStar size={25}/><FaStar size={25}/><FaStar size={25}/>
                </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 mb-5">
              <div className="card testimonials-block">
                <div className="d-flex justify-content-center align-items-center">
                  <img src="../../../img/t7.jpg" className="card-img-top rounded-circle" alt="Card 1" />
                </div>
                <div className="card-body">
                <h4 className="Testimonials-text">Chris Hemsworth</h4>
                  <p className="Testimonials-text">"Immersive gaming experience with diverse titles, seamless navigation, and vibrant community. Engage in thrilling adventures and discover new favorites effortlessly."</p>
                <div className="star">
                <FaStar size={25}/><FaStar size={25}/><FaStar size={25}/><FaStar size={25}/><FaStar size={25}/>
                </div>
                </div>
              </div>
            </div>
 
        
        
        </div>
        </div>
    </div>
      
    </>
  )
}
