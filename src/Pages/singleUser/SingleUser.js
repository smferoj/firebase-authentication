import React from 'react';
import './singleUser.css'
import { NavLink, useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import { Container } from 'react-bootstrap';

const SingleUser = () => {
 const {id} = useParams();
 
 const [user, setUser] = useState([]);
 
   useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  },[]);

  console.log(user);

 return (
     <Container className='bg-secondary m-5 mx-auto p-5 user_wrapper'>
     <h3> Name: {user.name}</h3>
     <h3> Username: {user.username}</h3>
     <h3> Email: {user.email}</h3>
     <h3> Call: {user.phone}</h3>
      <NavLink to={'posts'}> <button className='btn btn-primary mt-4'> Discover Posts</button> </NavLink>
     </Container>
     
   
  )
}

export default SingleUser