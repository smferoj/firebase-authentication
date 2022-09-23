import React from 'react';
import './home.css'
import { Button, Container } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate=useNavigate()

  const handlerToLink=()=>{
       navigate("/users")
  }
  return (
     <Container className='wrapper'>
      
      <div className="container_element bg-dark">
      <h1 className='text-white p-5'> Get User Data from Json</h1>
      <Button variant="primary" className='d-flex mx-auto m-3' onClick={handlerToLink}> Search Data </Button>
      </div>
     
     </Container>
  )
}

export default Home