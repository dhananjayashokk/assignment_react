import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import {Button,Card,Container,Row,Col} from 'react-bootstrap';
import { create_order } from "../actions/payment";

const Profile = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  
  const dispatch = useDispatch();
  console.log("current user",currentUser)
  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  const paymentHandler = (e) => {
    e.preventDefault();

    setLoading(true);
    dispatch(create_order(e.target.value,currentUser.id))
      .then(() => {
        setLoading(false);
        alert("Payment Successfull")
      })
      .catch(() => {
        setLoading(false);
      });
    } 
      
  

  

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{currentUser.username}</strong> Profile
        </h3>
      </header>
      <p>
        <strong>Id:</strong> {currentUser.username}
      </p>
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>
      <Container>
        <Row>
          <Col sm={5}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top"  />
              <Card.Body>
                <Card.Title>Regular Pack</Card.Title>
                <Card.Text>
                  Rs.50
                </Card.Text>
                <Button onClick={paymentHandler} value="50" variant="primary">Buy</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={5}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top"  />
              <Card.Body>
                <Card.Title>Premium Pack</Card.Title>
                <Card.Text>
                  Rs.100
                </Card.Text>
                <Button onClick={paymentHandler} value="100" variant="primary">Buy</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Profile;