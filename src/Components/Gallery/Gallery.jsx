import React from "react";
import "./Gallery.css";
import g1 from "../../Assests/g1.avif";
import g2 from "../../Assests/g2.avif";
import g3 from "../../Assests/g3.avif";
import g4 from "../../Assests/g4.avif";
import g5 from "../../Assests/g5.avif";
import g6 from "../../Assests/g6.avif";
import g7 from "../../Assests/g7.avif";
import g8 from "../../Assests/g8.avif";
import g9 from "../../Assests/g9.avif";
import g10 from "../../Assests/g10.avif";
import g11 from "../../Assests/g11.avif";
import g12 from "../../Assests/g12.avif";
import g13 from "../../Assests/g13.avif";
import g14 from "../../Assests/g14.avif";

const Gallery = () => {
  return (
    <div className="div-gallery">
      <div>
      <br />
      <br />
      <h1>Gallery</h1> <br /><br />
      <div className="wrapper" style={{border: "3px solid black", borderRadius: "20px",boxShadow: "0 0 10px black",
              transition: "box-shadow 0.3s, transform 0.3s", background: "yellow"}}>
        <div className="slider" >
          <div className="slide-track" >
            <div class="slide">
              <img style={{border: "3px solid black", borderRadius: "20px",boxShadow: "0 0 10px black",
              transition: "box-shadow 0.3s, transform 0.3s"}} src={g1} alt="" />
            </div>

            <div class="slide">
              <img style={{border: "3px solid black", borderRadius: "20px",boxShadow: "0 0 10px black",
              transition: "box-shadow 0.3s, transform 0.3s"}} src={g2} alt="" />
            </div>

            <div class="slide">
              <img style={{border: "3px solid black", borderRadius: "20px",boxShadow: "0 0 10px black",
              transition: "box-shadow 0.3s, transform 0.3s"}} src={g3} alt="" />
            </div>

            <div class="slide">
              <img style={{border: "3px solid black", borderRadius: "20px",boxShadow: "0 0 10px black",
              transition: "box-shadow 0.3s, transform 0.3s"}} src={g4} alt="" />
            </div>

            <div class="slide">
              <img style={{border: "3px solid black", borderRadius: "20px",boxShadow: "0 0 10px black",
              transition: "box-shadow 0.3s, transform 0.3s"}}  src={g5} alt="" />
            </div>

            <div class="slide">
              <img style={{border: "3px solid black", borderRadius: "20px",boxShadow: "0 0 10px black",
              transition: "box-shadow 0.3s, transform 0.3s"}} src={g6} alt="" />
            </div>

            <div class="slide">
              <img style={{border: "3px solid black", borderRadius: "20px",boxShadow: "0 0 10px black",
              transition: "box-shadow 0.3s, transform 0.3s"}} src={g7} alt="" />
            </div>

            <div class="slide">
              <img style={{border: "3px solid black", borderRadius: "20px",boxShadow: "0 0 10px black",
              transition: "box-shadow 0.3s, transform 0.3s"}} src={g8} alt="" />
            </div>

            <div class="slide">
              <img style={{border: "3px solid black", borderRadius: "20px",boxShadow: "0 0 10px black",
              transition: "box-shadow 0.3s, transform 0.3s"}} src={g9} alt="" />
            </div>

            <div class="slide">
              <img style={{border: "3px solid black", borderRadius: "20px",boxShadow: "0 0 10px black",
              transition: "box-shadow 0.3s, transform 0.3s"}} src={g10} alt="" />
            </div>

            <div class="slide">
              <img style={{border: "3px solid black", borderRadius: "20px",boxShadow: "0 0 10px black",
              transition: "box-shadow 0.3s, transform 0.3s"}} src={g11} alt="" />
            </div>

            <div class="slide">
              <img style={{border: "3px solid black", borderRadius: "20px",boxShadow: "0 0 10px black",
              transition: "box-shadow 0.3s, transform 0.3s"}} src={g12} alt="" />
            </div>

            <div class="slide">
              <img style={{border: "3px solid black", borderRadius: "20px",boxShadow: "0 0 10px black",
              transition: "box-shadow 0.3s, transform 0.3s"}} src={g13} alt="" />
            </div>

            <div class="slide">
              <img style={{border: "3px solid black", borderRadius: "20px",boxShadow: "0 0 10px black",
              transition: "box-shadow 0.3s, transform 0.3s"}} src={g14} alt="" />
            </div>
          </div>
        </div>
      </div> <br /><br />
    <h1>Our Branches</h1>
      <div className="wrapper">
        <div className="slider">
          <div className="slide-track">
          <div class="slide" style={{ marginRight: "10px" }}>
              <h1 style={{border: "3px solid black", borderRadius: "20px",boxShadow: "0 0 8px black",
              transition: "box-shadow 0.3s, transform 0.3s"}}>Hyderabad</h1>
            </div>

            <div class="slide" style={{ marginRight: "10px" }}>
                <h1 style={{border: "3px solid black", borderRadius: "20px",boxShadow: "0 0 8px black",
              transition: "box-shadow 0.3s, transform 0.3s"}}>Chennai</h1>
            </div>

            <div class="slide" style={{ marginRight: "10px" }}>
                <h1 style={{border: "3px solid black", borderRadius: "20px",boxShadow: "0 0 8px black",
              transition: "box-shadow 0.3s, transform 0.3s"}}>Mumbai</h1>
            </div>

            <div class="slide" style={{ marginRight: "10px" }}>
                <h1 style={{border: "3px solid black", borderRadius: "20px",boxShadow: "0 0 8px black",
              transition: "box-shadow 0.3s, transform 0.3s"}}>Delhi</h1>
            </div>

            <div class="slide" style={{ marginRight: "10px" }}>
              <h1 style={{border: "3px solid black", borderRadius: "20px",boxShadow: "0 0 8px black",
              transition: "box-shadow 0.3s, transform 0.3s"}}>Ahmedabad</h1>
            </div>

            <div class="slide" style={{ marginRight: "10px" }}>
                <h1 style={{border: "3px solid black", borderRadius: "20px",boxShadow: "0 0 8px black",
              transition: "box-shadow 0.3s, transform 0.3s"}}>Pune</h1>
            </div>

            <div class="slide" style={{ marginRight: "10px" }}>
             <h1 style={{border: "3px solid black", borderRadius: "20px",boxShadow: "0 0 8px black",
              transition: "box-shadow 0.3s, transform 0.3s"}}>Lucknow</h1>
            </div>

            <div class="slide" style={{ marginRight: "10px" }}>
             <h1 style={{border: "3px solid black", borderRadius: "20px",boxShadow: "0 0 8px black",
              transition: "box-shadow 0.3s, transform 0.3s"}}>Kanpur</h1>
            </div>

            <div class="slide" style={{ marginRight: "10px" }}>
             <h1 style={{border: "3px solid black", borderRadius: "20px",boxShadow: "0 0 8px black",
              transition: "box-shadow 0.3s, transform 0.3s"}}>Patna</h1>
            </div>

            <div class="slide" style={{ marginRight: "10px" }}>
                <h1 style={{border: "3px solid black", borderRadius: "20px",boxShadow: "0 0 8px black",
              transition: "box-shadow 0.3s, transform 0.3s"}}>Vellore</h1>
            </div>

            <div class="slide" style={{ marginRight: "10px" }}>
                <h1 style={{border: "3px solid black", borderRadius: "20px",boxShadow: "0 0 8px black",
              transition: "box-shadow 0.3s, transform 0.3s"}}>Jaipur</h1>
            </div>

            <div class="slide" style={{ marginRight: "10px" }}>
                <h1 style={{border: "3px solid black", borderRadius: "20px",boxShadow: "0 0 8px black",
              transition: "box-shadow 0.3s, transform 0.3s"}}>Vizag</h1>
            </div>

            <div class="slide" style={{ marginRight: "10px" }}>
                <h1 style={{border: "3px solid black", borderRadius: "20px",boxShadow: "0 0 8px black",
              transition: "box-shadow 0.3s, transform 0.3s"}}>Noida</h1>
            </div>

            <div class="slide" style={{ marginRight: "10px" }}>
                <h1 style={{border: "3px solid black", borderRadius: "20px",boxShadow: "0 0 8px black",
              transition: "box-shadow 0.3s, transform 0.3s"}}>Bangalore</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Gallery
