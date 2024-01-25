import React from "react";
import "./Academics.css";
import {CardGroup,Card,CardImg,CardBody,CardTitle,CardSubtitle,
CardText, Button,} from "reactstrap";
import card1 from '../../Assests/card1.avif'
import card2 from '../../Assests/card2.avif'
import card3 from '../../Assests/card3.avif'
import card4 from '../../Assests/card4.avif'
import card5 from '../../Assests/card5.avif'
import card6 from '../../Assests/card6.avif'


const Academics = () => {
  return (
    <div className="div">
      <br />
      <br />
      <h1>Academics</h1>
      <CardGroup>
        <Card className="my-card" style={{border: "3px solid black", borderRadius: "20px", boxShadow: "0 0 10px black",
              transition: "box-shadow 0.3s, transform 0.3s",}}>
          <CardImg
            alt="Card image cap"
            src= {card1}
            top
            width="100%"
            style={{ height: "400px", borderRadius: "20px" }}
          />
          <CardBody>
            <CardTitle tag="h5">ACADEMICS</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              World Class Infrastructure
            </CardSubtitle>
            <CardText>
            Our institution fosters a dynamic learning environment, equipping students with comprehensive knowledge and skills through innovative teaching methodologies, cutting-edge research.
            </CardText>
            <Button>Explore</Button>
          </CardBody>
        </Card>
        <Card className="my-card" style={{border: "3px solid black", borderRadius: "20px",boxShadow: "0 0 10px black",
              transition: "box-shadow 0.3s, transform 0.3s"}}>
          <CardImg
            alt="Card image cap"
            src={card2}
            top
            width="100%"
            style={{ height: "400px", borderRadius: "20px" }}
          />
          <CardBody>
            <CardTitle tag="h5">MESS HALL</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
            World Class Infrastructure
            </CardSubtitle>
            <CardText>
            Our well-equipped mess ensures a diverse and nutritious menu, catering to the culinary preferences and dietary needs of our students. A dedicated team strives to provide a hygienic and welcoming dining experience
            </CardText>
            <Button>Explore</Button>
          </CardBody>
        </Card>
        <Card className="my-card" style={{border: "3px solid black", borderRadius: "20px",boxShadow: "0 0 10px black",
              transition: "box-shadow 0.3s, transform 0.3s"}}>
          <CardImg
            alt="Card image cap"
            src={card3}
            top
            width="100%"
            style={{ height: "400px", borderRadius: "20px" }}
          />
          <CardBody>
            <CardTitle tag="h5">SPORTS FACILITIES</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
            World Class Infrastructure
            </CardSubtitle>
            <CardText>
            Embracing the spirit of athleticism, our sports programs encourage physical fitness, teamwork, and sportsmanship. State-of-the-art facilities and a range of sports activities,promoting a healthy and active lifestyle.
            </CardText>
            <Button>Explore</Button>
          </CardBody>
        </Card>
      </CardGroup>
      <br /><br />
      <CardGroup>
        <Card className="my-card" style={{border: "3px solid black", borderRadius: "20px",boxShadow: "0 0 10px black",
              transition: "box-shadow 0.3s, transform 0.3s"}}>
          <CardImg
            alt="Card image cap"
            src={card4}
            top
            width="100%"
            style={{ height: "400px", borderRadius: "20px" }}
          />
          <CardBody>
            <CardTitle tag="h5">EVENTS/HACKATHONS</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
            World Class Infrastructure
            </CardSubtitle>
            <CardText>
            Our vibrant campus life is enriched by a plethora of events and cultural activities, offering students opportunities to showcase their talents, engage in creative pursuits, and build lasting connections.
            </CardText>
            <Button>Explore</Button>
          </CardBody>
        </Card>
        <Card className="my-card" style={{border: "3px solid black", borderRadius: "20px",boxShadow: "0 0 10px black",
              transition: "box-shadow 0.3s, transform 0.3s"}}>
          <CardImg
            alt="Card image cap"
            src={card5}
            top
            width="100%"
            style={{ height: "400px", borderRadius: "20px" }}
          />
          <CardBody>
            <CardTitle tag="h5">HOSTEL BLOCKS</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
            World Class Infrastructure
            </CardSubtitle>
            <CardText>
            The hostel provides a nurturing home away from home, fostering a sense of camaraderie and inclusivity. With modern amenities and a conducive environment, the hostel ensures the well-being and comfort of students
            </CardText>
            <Button>Explore</Button>
          </CardBody>
        </Card>
        <Card className="my-card" style={{border: "3px solid black", borderRadius: "20px",boxShadow: "0 0 10px black",
              transition: "box-shadow 0.3s, transform 0.3s"}}>
          <CardImg
            alt="Card image cap"
            src={card6}
            top
            width="100%"
            style={{ height: "400px", borderRadius: "20px" }}
          />
          <CardBody>
            <CardTitle tag="h5">HOSPITAL</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
            World Class Infrastructure
            </CardSubtitle>
            <CardText>
            Our on-campus hospital is committed to ensuring the health and well-being of our students and staff. Equipped with experienced medical professionals and advanced facilities,promoting a safe and supportive living and learning 
            </CardText>
            <Button>Explore</Button>
          </CardBody>
        </Card>
      </CardGroup>
      <br /><br />
    </div>
  );
};

export default Academics;
