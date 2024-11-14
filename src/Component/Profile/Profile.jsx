// import React,{ useEffect} from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { prof_pic } from '../../Redux/profileSlice';
// // import { blogpic } from '../../Helper/Helper';
// import { profileDetailsPath } from '../../Helper/Helper';
// import "./Profile.css";

// export default function Profile() {
//     const dispatch=useDispatch()
//     const {pic}=useSelector((s)=>s.profile)
//     console.log(pic,"pic");
//     useEffect(()=>{
//         dispatch(prof_pic())
//     },[])
//     return (
//         <>
//         <div className="prof_container">
//         <div className="prof_head">
//             <h2>Profile Details</h2>
//         </div>
//         <div className="prof_content">
//         <div className="prof-left">
//             <img className="prof_image" src={profileDetailsPath(pic?.profile_pic)} alt="" />
//         </div>
//         <div className="prof_right">
//           <h3>{pic.first_name+ " "+pic.last_name}</h3>
//             <p>Email:{pic.email}</p>
//             <p>Hobby:gaming</p>
//             <p>About Me:Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
//         </div>
//         </div>
//     </div>
//         </>
//     )
// }

import React from 'react'
import { useEffect } from 'react';
import { profileDetailsPath } from '../../Helper/Helper';
import { profileDetails } from '../../Redux/profileSlice';
import { useSelector, useDispatch } from 'react-redux';
import "./Profile.css";
export default function Profile() {

  const dispatch=useDispatch()

  const { profile } = useSelector((state)=> state.profile)

  useEffect(()=>{
    dispatch(profileDetails())
  },[])


  return (
    <>
    <div className="profile-blog">
      <h1>Profile Details</h1>
      <div className="container">
        <div className="row profile-row">
          <div className="col-lg-6  mb-5">
            <div className="img-container">
            <img className="profile-img"src={profile?.data?.profile_pic
            ? profileDetailsPath(profile?.data?.profile_pic)
            : "error"} alt="profilepic"/>
            </div>
          </div>

          <div className="col-lg-6 mb-5">
            <div className="card-body testimonial-body">
              <h4 className="Testimonials-text">Name: Harsh Choudhary</h4>
              {/* <p className="Testimonials-text">About: </p> */}
              <p className="Testimonials-text">About:<br/>"I am a web developer constantly striving to enhance my skills and knowledge in the industry. I am currently learning the latest technologies and expanding my expertise in web development.<br/><br/>Skills: Redux.js · JavaScript · Cascading Style Sheets (CSS) · React.js · HTML5"</p>
              <p className="Testimonials-text">Hobby:<br/>Traveling, Bike Riding, Music</p>
              <p className="Testimonials-text">Contact Us:<br/>Email Id: harshraz0009@gmail.com<br/>Phone No: 8789106615 , 6205944394</p>
                {/* <div className="star">
                <FaStar size={25}/><FaStar size={25}/><FaStar size={25}/><FaStar size={25}/><FaStar size={25}/>
                </div> */}
            </div>
          </div>
          
        </div> 
      </div>
    </div>
    </>
  )
}
