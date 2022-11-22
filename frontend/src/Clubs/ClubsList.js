import React, { useState } from "react";
import {
  Card,
  Button,
  Row,
  Col,
  Dropdown,
  DropdownButton,
  InputGroup,
  FormControl,
  Container,
} from "react-bootstrap";
import { useHistory } from "react-router-dom";

// import symbol from "../images/club_symbol.png";

const ClubsList = (props) => {
  const history = useHistory()
  const [clubs, setClub] = useState([]);

  const fetchSearchResult = (key) => {

    fetch('http://localhost:5000/api/search', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ keyword: key }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.clubs)
        setClub(data.clubs)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  // Example POST method implementation:
  async function postData() {
    const createThisClub = {
      clubname: "PhoneClub",
      description: "check out fancy shoes here!",
      symbol:
        "https://images.musement.com/cover/0003/90/am-pm-experience-cover_header-289357.png?lossless=false&auto=format&fit=crop&h=245&w=355",
      club_cat: "Recreational/Sports",
    };

    const response = await fetch("http://localhost:5000/api/clubs/", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(createThisClub),
    });
    return response.json();
  }

  return (
   <div>
<div className="d-flex justify-content-lg-center">
        <form className=" d-flex col-6">
          <input
            onChange={(e) => {
              fetchSearchResult(e.target.value)
            }}
            className="form-control mr-5"
            type="search"
            placeholder="Search"
            aria-label="Search"
            style={{ marginRight: "10px" }}
          />
          {/* <button class="btn btn-outline-danger mt-3" type="submit" style={{height:"40px"}}>Search</button> */}
        </form>
      </div>

      <div className="d-flex justify-content-lg-center">
        <Col md={9}>
          {clubs.length == 0 ? <div></div> : <h3>Search Result</h3>}
          {clubs.map((item, index) => {
            return <Card key={item._id} style={{ margin: "1%", height: "10rem" }}>
              <Card.Header
                style={{
                  fontWeight: "500",
                  fontSize: 20,
                  fontFamily: "Copperplate",
                }}
              >
                {item.clubname.replace("_", " ")}
              </Card.Header>
              <Card.Body style={{ margin: "0%" }}>
                <Row>
                  <Col md={2}>
                    <Card.Img
                      src={item.image}
                      style={{
                        height: "5.5rem",
                        width: "5.5rem",
                        borderRadius: "50%",
                        margin: "auto",
                      }}
                    />
                  </Col>
                  <Col md={8}>
                    <p style={{ textAlign: "left", paddingTop: "4.5%", maxLines: 2, textOverflow: "ellipsis" }}>
                      {item.description}
                    </p>
                  </Col>
                  <Col md={2}>
                    <Button
                      variant="primary"
                      className="mt-4"
                      onClick={() => {
                        let path = "/clubs/" + item._id;
                        history.push(path, item);
                      }}
                    >
                      More Detail
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          
        })

          }
        </Col>
      </div>

      <Row>
      <Col md={9}>
        {props.CLUBS.map((cb) => (
          <Card key={cb.id} style={{ margin: "1%", height: "10rem" }}>
            <Card.Header
              style={{
                fontWeight: "500",
                fontSize: 20,
                fontFamily: "Copperplate",
              }}
            >
              {cb.clubname.replace("_", " ")}
            </Card.Header>
            <Card.Body style={{ margin: "0%" }}>
              <Row>
                <Col md={2}>
                  <Card.Img
                    src={cb.image}
                    style={{
                      height: "5.5rem",
                      width: "5.5rem",
                      borderRadius: "50%",
                      margin: "auto",
                    }}
                  />
                </Col>
                <Col md={8}>
                  <p style={{ textAlign: "left", paddingTop: "4.5%" }}>
                    {cb.description}
                  </p>
                </Col>
                <Col md={2}>
                  <Button variant="primary" onClick={() => {
                    let path = "/clubs/" + cb._id;
                    history.push(path, cb);
                  }} className="mt-4">
                    More Detail
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        ))}
      </Col>
     
    </Row>
   </div>
  );
};

export default ClubsList;
