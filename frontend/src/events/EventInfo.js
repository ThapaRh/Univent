import React from "react";
import { useHistory } from "react-router-dom";
import {
  Col,
  Card,
  Button,
} from "react-bootstrap";


const EventInfo = () => {
 /*use state is a hook that allows you to have state variables in functional components.
  Allows us to register state which then is managed inside of a component, when state is changed, 
  the component re-renders*/
  const history = useHistory()

  return (
        <React.Fragment>
            {console.log(history.location.state)}
          <h3 className="basic-title-styles">About Event</h3>

          <Card>
            <Card.Body>
              <Col>
                <Card.Img
                  src={history.location.state.images[0]}
                  style={{
                    height: "5.5rem",
                    width: "5.5rem",
                    borderRadius: "50%",
                    margin: "2rem",
                  }}
                />
                <Card.Title>Event: {history.location.state.eventname}</Card.Title>
                <Card.Title>Club: {history.location.state.club.split("_").join(" ")}</Card.Title>
              </Col>
              <Button variant="primary">Contact</Button>
              <Card.Body>
              <p> Location: {history.location.state.location}  </p>
              <p> Time: {history.location.state.time}  </p>
              </Card.Body>
            </Card.Body>
          </Card>
        </React.Fragment>
      
  );
};

export default EventInfo;