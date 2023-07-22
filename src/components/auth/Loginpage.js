import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function Loginpage() {
  return (
    <Container>
      <Row className="px-4 my-5">
        <Col>
          <h1>Login</h1>
        </Col>
      </Row>
      <Row className="px-4 my-5">
        <Col sm={6}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

           
            <Button variant="primary" type="submit">Login &gt;&gt;</Button>
            
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Loginpage;
