import React from 'react'
import "./Video.css";

export default function card() {
  return (
    <>
    <section className="video-block">
    <h1>Upcoming Game</h1>
    <div className="container-fluid">
      <div className="row video-row">
        <div className="video-container">
      <iframe width="1080" height="720" src="https://www.youtube.com/embed/QdBZY2fkU-0?si=Bf591lEUz6HEwNpj" className="vd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      </div>
    </div>
    </section>
    
    </>
  )
}
