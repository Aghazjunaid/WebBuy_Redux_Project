import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Header from "./Header";

function Login() {

  return (
    <div>
      <Header />
      <Container style={{ marginTop: "10px" }}>
        <h1 className="text-center">Login</h1>
        <Row style={{ marginTop: "50px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Email Address"
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                />
              </Form.Group>
              <div className="text-center">
              <Button variant="primary" type="submit">
                Login
              </Button>
              </div>
            </Form>
          </Col>
        </Row>
        <Row style={{ marginTop: "20px", alignItems: "center" }}>
            <Col md={{ span: 3, offset: 4 }} style={{fontWeight: "bold", fontSize: "20px" }}>
            Don't have an account
            </Col>
            <Col md={{span: 3}} style={{marginLeft: "-50px" }}>
            <Button variant="success" href="/register">Register Here</Button>{' '}
            </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
