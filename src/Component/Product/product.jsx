import React from 'react'
import Speciality from '../Speciality/Speciality'
import { NavLink } from 'react-router-dom';
import "./Product.css";
import { Link } from 'react-router-dom';
import Video from "../../Component/video/Video"
import Bandlogo from "../../Component/Bandlogo/Bandlogo"

export default function Product() {
  return (
    <>
    <div className="product">
  <section className="product-banner-section">
    <video autoplay muted loop className="bg-video">
      <source src="../../img/gta1.mp4" type="video/mp4"/>
      {/* <source src="../../img/nfsmw.mp4" type="video/mp4"/> */}
      {/* Your browser does not support the video tag. */}
    </video>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-12 text-center">
          <div className="inner-about-content">
            <h2 className="title">Product</h2>
            <div className="breadcrumb-area">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
                  <li className="breadcrumb-item active" aria-current="page">Product</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="product-block">
    <h1>Type of Game</h1>
    <div className="container-fluid cf">
      <div className="row">
        <div className="col-lg-3 col-md-4 col-sm-6 mb-5">
          <div className="card">
            <img src="../../../img/cn3.jpg" className="card-img-top" alt="Card 1" />
            <div className="card-body">
              <p className="card-text">Halo Infinite</p>
              <button className="btn cardbtn">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6 mb-5">
          <div className="card">
            <img src="../../../img/cn2.jpg" className="card-img-top" alt="Card 2" />
            <div className="card-body">
              <p className="card-text">GTA 5</p>
              <Link to="https://www.rockstargames.com/VI"><button className="btn cardbtn">Buy Now</button></Link>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6 mb-5">
          <div className="card">
            <img src="../../../img/cn4.jpg" className="card-img-top" alt="Card 3" />
            <div className="card-body">
              <p className="card-text">Need for Speed: Most Wanted</p>
              <button className="btn cardbtn">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6 mb-5">
          <div className="card">
            <img src="../../../img/c45.jpg" className="card-img-top" alt="Card 4" />
            <div className="card-body">
              <p className="card-text">World War Z</p>
              <button className="btn cardbtn">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 mb-5">
          <div className="card">
            <img src="../../../img/cimg2.jpg" className="card-img-top" alt="Card 1" />
            <div className="card-body">
              <p className="card-text">Call Of Duty World War 2</p>
              <button className="btn cardbtn">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6 mb-5">
          <div className="card">
            <img src="../../../img/cimg3.jpg" className="card-img-top" alt="Card 2" />
            <div className="card-body">
              <p className="card-text">Metal Gear Solid</p>
              <button className="btn cardbtn">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6 mb-5">
          <div className="card">
            <img src="../../../img/cimg1.jpg" className="card-img-top" alt="Card 3" />
            <div className="card-body">
              <p className="card-text">Tom Clancy's Ghost</p>
              <button className="btn cardbtn">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6 mb-5">
          <div className="card">
            <img src="../../../img/cimg4.jpg" className="card-img-top" alt="Card 4" />
            <div className="card-body">
              <p className="card-text">Overwatch</p>
              <button className="btn cardbtn">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 mb-5">
          <div className="card">
            <img src="../../../img/cimg9.jpg" className="card-img-top" alt="Card 1" />
            <div className="card-body">
              <p className="card-text">DMC 5</p>
              <button className="btn cardbtn">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6 mb-5">
          <div className="card">
            <img src="../../../img/cimg6.jpg" className="card-img-top" alt="Card 2" />
            <div className="card-body">
              <p className="card-text">Call Of Duty Ghost</p>
              <button className="btn cardbtn">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6 mb-5">
          <div className="card">
            <img src="../../../img/cimg10.jpg" className="card-img-top" alt="Card 3" />
            <div className="card-body">
              <p className="card-text">Super Metroid</p>
              <button className="btn cardbtn">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6 mb-5">
          <div className="card">
            <img src="../../../img/cimg11.jpg" className="card-img-top" alt="Card 4" />
            <div className="card-body">
              <p className="card-text">GTA 5</p>
              <button className="btn cardbtn">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 mb-5">
          <div className="card">
            <img src="../../../img/cimg2.jpg" className="card-img-top" alt="Card 1" />
            <div className="card-body">
              <p className="card-text">Call Of Duty World War 2</p>
              <button className="btn cardbtn">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6 mb-5">
          <div className="card">
            <img src="../../../img/cimg3.jpg" className="card-img-top" alt="Card 2" />
            <div className="card-body">
              <p className="card-text">Metal Gear Solid</p>
              <button className="btn cardbtn">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6 mb-5">
          <div className="card">
            <img src="../../../img/cimg1.jpg" className="card-img-top" alt="Card 3" />
            <div className="card-body">
              <p className="card-text">Tom Clancy's Ghost</p>
              <button className="btn cardbtn">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6 mb-5">
          <div className="card">
            <img src="../../../img/cimg4.jpg" className="card-img-top" alt="Card 4" />
            <div className="card-body">
              <p className="card-text">Overwatch</p>
              <button className="btn cardbtn">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>




    {/* <div className="container-fluid ">
      <div className="row">
        <div className="col-lg-9 col-md-8 col-sm-12 mb-5">
          <div className="carddm">
            <img src="../../../img/nfslogo.png" className="card-img-top" alt="Card 1" />
            </div>
            </div>

        <div className="col-lg-3 col-md-8 col-sm-12 mb-5">
          <div className="carddm">
            <img src="../../../img/bmwm3.png" className="card-img-top" alt="Card 1" />
            </div>
            </div>
            </div>
            </div> */}


    </section>
  
</div>








    {/* <h1>Service component</h1> */}
    <Video/>
    <Speciality/>
    <Bandlogo/>
      
    </>
  )
}
