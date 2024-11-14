import React from 'react'
import "./Home.css";

// import Card from '../Card/Card'
import Bandlogo from "../../Component/Bandlogo/Bandlogo"
import Speciality from '../Speciality/Speciality';
// import CountdownOffer from '../Countdown/Countdown'
import { NavLink } from 'react-router-dom';
// import ReverseCountdown from "../Countdown/Countdown"


export default function Home() {
  return (
    <>
    <section className="home-block">
<div id="carouselExampleControls" className="carousel" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="../../img/cn1.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption">
        <h5 className="text-center">Limited time offer, grab yours today</h5>
        <p>Flat 45%</p>
        {/* <p className="text-center">Some representative placeholder content for the first slide.</p> */}
        {/* <button type="submit" className="btn cbtn "><NavLink to="/card" className="nav-link">Buy Now</NavLink>Buy Now</button> */}
        <NavLink to="/product"><button type="submit" className="btn cbtn ">Buy Now</button></NavLink>
      </div>
    </div>
    <div className="carousel-item">
      <img src="../../img/cn2.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block c-context">
        <h5 className="text-center">Limited time offer, grab yours today</h5>
        <p>Flat 45%</p>
        <NavLink to="/product"><button type="submit" className="btn cbtn ">Buy Now</button></NavLink>
      </div>
    </div>
    <div className="carousel-item">
      <img src="../../img/c45.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block c-context">
        <h5 className="text-center">Limited time offer, grab yours today</h5>
        <p>Flat 45%</p>
        <NavLink to="/product"><button type="submit" className="btn cbtn ">Buy Now</button></NavLink>
      </div>
    </div>
    <div className="carousel-item">
      <img src="../../img/cn4.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block c-context">
        <h5 className="text-center">Limited time offer, grab yours today</h5>
        <p>Flat 45%</p>
        <NavLink to="/product"><button type="submit" className="btn cbtn ">Buy Now</button></NavLink>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </button>
</div>

<section className="card-block">
    <h1>Game Catalogue</h1>
    <div className="container-fluid cf">
      <div className="row">
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
          <div className="card">
            <img src="../../../img/cn3.jpg" className="card-img-top" alt="Card 1" />
            <div className="card-body">
              <p className="card-text">Action</p>
              <NavLink to="/product"><button className="btn cardbtn">Buy Now</button></NavLink>
              {/* <button className="btn cardbtn">Button 1</button> */}
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
          <div className="card">
            <img src="../../../img/cn2.jpg" className="card-img-top" alt="Card 2" />
            <div className="card-body">
              <p className="card-text">Story</p>
              <NavLink to="/product"><button className="btn cardbtn">Buy Now</button></NavLink>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
          <div className="card">
            <img src="../../../img/cn4.jpg" className="card-img-top" alt="Card 3" />
            <div className="card-body">
              <p className="card-text">Racing</p>
              <NavLink to="/product"><button className="btn cardbtn">Buy Now</button></NavLink>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
          <div className="card">
            <img src="../../../img/c45.jpg" className="card-img-top" alt="Card 4" />
            <div className="card-body">
              <p className="card-text">Horror</p>
              <NavLink to="/product"><button className="btn cardbtn">Buy Now</button></NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
</section>
<Speciality/>
<Bandlogo/>

    {/* <CountdownOffer/> */}
    
    </>
  )
}
