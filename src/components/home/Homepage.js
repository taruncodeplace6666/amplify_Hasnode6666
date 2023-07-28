import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Homepage() {
  const s3ImageUrl =  // Replace this with your actual S3 image URL

  return (
    <Container>
      <Row className="px-4 my-5">
        <Col xs={4} sm={6}>
          <Image src={s3ImageUrl} fluid />
        </Col>
        <Col sm={6}>
          <h1 className="font-weight-light">Contactplus</h1>
          <p className="mt-4">
            Connecting People. Empowering Lives.
            <br />
            <br />
            Welcome to contactplus, a platform dedicated to bringing people together and making a positive impact on their lives.
          </p>
          <Link
             to ={{ pathname:'/contacts'}}>
            <Button variant="outline-primary"> Get started</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Homepage;

