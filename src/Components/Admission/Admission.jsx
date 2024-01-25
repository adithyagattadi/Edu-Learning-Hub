import React from "react";
import "./Admission.css";
import { Form } from "reactstrap";
import { FormGroup, Col, Button, FormText, Label, Input } from "reactstrap";

const Admission = () => {
  return (
    <div className="section" style={{border: "3px solid black",boxShadow: "0 0 10px black",
    transition: "box-shadow 0.3s, transform 0.3s"}}>
      <br />
      <br />
      <h1 className="admission" >New Admission</h1>
      <br />
      <br />
      <Col sm={{ size: 6, offset: 6 }} className="form">
        <Form>
          <FormGroup row>
            <Label style={{border: "2px solid black", borderRadius: "20px",boxShadow: "0 0 2px black",}} className="short-label" for="exampleUsername" sm={2}>
              Full Name
            </Label>
            <Col sm={6}>
              <Input 
                id="exampleUsername"
                name="name"
                placeholder="Enter Your Full Name"
                type="name"
                style={{ height: "50px",border: "2px solid green", borderRadius: "20px",boxShadow: "0 0 2px green",}}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label style={{border: "2px solid black", borderRadius: "20px",boxShadow: "0 0 2px black",}} className="short-label" for="exampleEmail" sm={2}>
              Email
            </Label>
            <Col sm={6}>
              <Input
                id="exampleEmail"
                name="email"
                placeholder="Enter Your Email"
                type="email"
                style={{ height: "50px",border: "2px solid green", borderRadius: "20px",boxShadow: "0 0 2px green",}}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label style={{border: "2px solid black", borderRadius: "20px",boxShadow: "0 0 2px black",}} className="short-label" for="examplePassword" sm={2}>
              Password
            </Label>
            <Col sm={6}>
              <Input
                id="examplePassword"
                name="password"
                placeholder="Enter New Password"
                type="password"
                style={{ height: "50px",border: "2px solid green", borderRadius: "20px",boxShadow: "0 0 2px green",}}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label style={{border: "2px solid black", borderRadius: "20px",boxShadow: "0 0 2px black",}} className="short-label" for="exampleText" sm={2}>
              Tell us About yourself
            </Label>
            <Col sm={6}>
              <Input
                id="exampleText"
                name="text"
                type="textarea"
                placeholder="Introduction..."
                style={{ height: "50px",border: "2px solid green", borderRadius: "20px",boxShadow: "0 0 2px green",}}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label style={{border: "2px solid black", borderRadius: "20px",boxShadow: "0 0 2px black",}} className="short-label" for="exampleFile" sm={2}>
              Transfer Certificate
            </Label>
            <Col sm={6}>
              <Input style={{ height: "50px",border: "3px solid green", borderRadius: "20px",boxShadow: "0 0 2px green",}} id="exampleFile" name="file" type="file" />
              <FormText style={{ height: "50px",border: "2px solid white", borderRadius: "20px",boxShadow: "0 0 2px white",}}>Required*</FormText>
            </Col>
          </FormGroup>
          <FormGroup row tag="fieldset">
            <legend style={{border: "2px solid black", borderRadius: "20px",boxShadow: "0 0 2px black",}} className="col-form-label col-sm-2">Gender</legend>
            <Col sm={6}>
              <FormGroup check>
                <Input name="radio2" type="radio" /> <Label style={{ height: "50px",border: "2px solid green", borderRadius: "20px",boxShadow: "0 0 2px green",}} check>Male</Label>
              </FormGroup>
              <FormGroup check>
                <Input name="radio2" type="radio" /> <Label style={{ height: "50px",border: "2px solid green", borderRadius: "20px",boxShadow: "0 0 2px green",}} check>Female</Label>
              </FormGroup>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label style={{border: "2px solid black", borderRadius: "20px",boxShadow: "0 0 2px black",}} className="short-label" for="checkbox2" sm={2}>
              Confirmation
            </Label>
            <Col
              sm={{
                size: 6,
              }}
            >
              <FormGroup check>
                <Input id="checkbox2" type="checkbox" />{" "}
                <Label style={{ height: "50px",border: "2px solid green", borderRadius: "20px",boxShadow: "0 0 2px green",}} check sm={12}>
                  I've read the privacy and policies
                </Label>
              </FormGroup>
            </Col>
          </FormGroup>
          <FormGroup check row>
            <Col
              sm={{
                offset: 2,
                size: 6,
              }}
            >
              <Button style={{ height: "50px",border: "3px solid white", borderRadius: "20px",boxShadow: "0 0 2px white",}} className="button increased-width">Submit</Button>
            </Col>
          </FormGroup>
        </Form>
      </Col>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Admission;
