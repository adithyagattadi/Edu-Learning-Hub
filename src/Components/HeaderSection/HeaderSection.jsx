import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import headerSection1 from '../../Assests/headerSection1.avif';
import headerSection2 from '../../Assests/headerSection2.jpeg';
import headerSection3 from '../../Assests/headerSection3.jpeg';
import './HeaderSection.css';

const HeaderSection = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img style={{border: "3px solid black", boxShadow: "0 0 20px black",}} className="d-block w-100" src={headerSection1} alt="Huge Campus" />
        <Carousel.Caption>
          <h1><b>Greenery Campus</b></h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{border: "3px solid black", boxShadow: "0 0 20px black",}} className="d-block w-100" src={headerSection2} alt="Free Environment" />
        <Carousel.Caption>
          <h1><b>Clean Environment</b></h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{border: "3px solid black", boxShadow: "0 0 20px black",}} className="d-block w-100" src={headerSection3} alt="Greenery Campus" />
        <Carousel.Caption>
          <h1><b>Huge Campus</b></h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HeaderSection;
