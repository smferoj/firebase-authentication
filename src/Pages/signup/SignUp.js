import React from "react";
import './signUp.css'
import { useForm } from "react-hook-form";
import firebaseConfig from "../../firebaseConfig";
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword} from "firebase/auth";
import { getAuth} from "firebase/auth";
import { Container } from 'react-bootstrap';


const SignUp = ({ user, setUser }) => {
const app = initializeApp(firebaseConfig);
const auth = getAuth();
 const {handleSubmit, formState: { errors },register,} = useForm();
  const getData = (data) => {
    if (data.confirmPassword === data.password) {
      createUserWithEmailAndPassword(auth, data.email, data.password).then(
        (userCredential) => {const user = userCredential.user;setUser(user)}
      );
    }
  };

 





 
  return (
   <Container className="bg-secondary pb-5">

      <h1> Sign Up Form </h1>
      <form onSubmit={handleSubmit(getData)} action="" className="d-flex flex-column w-50 mx-auto mt-5">
        <label htmlFor="">Email</label>
        <input type="email" {...register("email")} name="email" />
        <label htmlFor="">Password</label>
        <input type="password" {...register("password")} name="password" />
        <label htmlFor="">Confirm Password</label>
        <input type="password" {...register("confirmPassword")}name="confirmPassword"/>
        <button type="submit" className="mt-3">Sign Up</button>
      </form>
      {/* <div>   
        <h1> Log In </h1>
        {user.email ? <><button onClick={handleSignOut}> Logout </button></>: 
          <> <button onClick={handleGooglePopup}> Google </button>
            <button onClick={handleGithubPopup}> Github </button></>
        }
      </div> */} 
    </Container>
  );
};

export default SignUp;
