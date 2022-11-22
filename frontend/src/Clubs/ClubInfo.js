import React, { useEffect, useState } from "react";
import LoadingSpinner from "../shared/components/UIElements/LoadingSpinner";
import { useHttpClient } from "../shared/hooks/http-hook";
import { useHistory, useParams } from "react-router-dom";
import { Row, Col, Card, Button, Container } from "react-bootstrap";

const ClubInfo = () => {
  /*use state is a hook that allows you to have state variables in functional components.
  Allows us to register state which then is managed inside of a component, when state is changed, 
  the component re-renders*/

  const history = useHistory()

  return (
        <React.Fragment>
          <h3 className="basic-title-styles">About Club</h3>

          <Card>
            <Card.Body>
              <Col>
                <Card.Img
                  src={history.location.state.image}
                  style={{
                    height: "5.5rem",
                    width: "5.5rem",
                    borderRadius: "50%",
                    margin: "2rem",
                  }}
                />
                <Card.Title>{history.location.state.clubname}</Card.Title>
              </Col>
              <Button variant="primary">Contact</Button>
              <Card.Body>
                <p>
                  
              {history.location.state.description}
                </p>
              </Card.Body>
            </Card.Body>
          </Card>
        </React.Fragment>
      
  );
};

export default ClubInfo;