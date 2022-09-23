import React from "react";
import "./user.css";
import { useState, useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
 

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  console.log(users);

  return (
    <div className="container mt-3 bg-secondary">
      <Row className="g-3">
        {users.map((user) => (
          <Col md={3}>
            <NavLink to={`${user.id}`}>
            <Card>
              <h3> {user.name} </h3>
             </Card>
            </NavLink>         
          </Col>
          // single column is repeated 
        ))}
      </Row>
    </div>
  );
};

export default Users;
