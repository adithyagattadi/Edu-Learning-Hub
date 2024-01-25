import React from 'react';
import './AboutUs.css';
import { Col, Row } from 'react-bootstrap';
import aboutUs from '../../Assests/aboutUs.avif';

const AboutUs = () => {
  return (
    <div className="about-us-container">
        <br /><br />
        <h4 className='aboutUs'>About Us</h4>
      <Row className="g-0">
        <Col md={4} className="image-column">
          <img
            className="img w-100"
            src={aboutUs}
            alt="About Us"
            style={{
              borderRadius: "20px",
              border: "3px solid black",
              boxShadow: "0 0 10px yellow",
              transition: "box-shadow 0.3s, transform 0.3s",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(0.9)";
            }}
          />
        </Col>
        <Col md={8} className="content-column">
          <div
            data-bs-spy="scroll"
            data-bs-target="#navbar-example3"
            data-bs-offset="0"
            className="scrollspy-example-2"
            tabIndex="0"
          >
            <div id="item-1">
              <h3>School Infrastructure</h3>
              <p>Welcome to our esteemed institution, where we take pride in providing a conducive learning environment through state-of-the-art infrastructure. Our campus is thoughtfully designed to foster holistic development and to cater to the diverse needs of our students.</p>
            </div>
            <div id="item-2">
              <h3>Modern Classrooms</h3>
              <p>Our classrooms are equipped with the latest educational technology to enhance the learning experience. Each room is designed to create an engaging and interactive atmosphere, promoting a positive and collaborative learning environment.</p>
            </div>
            <div id="item-3">
              <h3>Library Hub</h3>
              <p>Dive into the world of knowledge at our library hub, a treasure trove of books, journals, and digital resources. It's a quiet space where students can immerse themselves in academic pursuits and foster a love for reading.</p>
            </div>
            <div id="item-4">
              <h3>Sports Facilities</h3>
              <p>Physical fitness is integral to a well-rounded education. Our school boasts top-notch sports facilities, including playgrounds, courts, and fields, providing students with opportunities to develop teamwork, discipline, and a healthy lifestyle.</p>
            </div>
            <div id="item-5">
              <h3>Green Campus</h3>
              <p>Our commitment to environmental sustainability is reflected in our green campus. Lush gardens and eco-friendly initiatives create a serene atmosphere, promoting a sense of responsibility towards the planet.</p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AboutUs;
