
import React from "react";
import './SignIn.css'
import { useForm } from "react-hook-form";
import firebaseConfig from "../../firebaseConfig";
import { initializeApp } from "firebase/app";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, getAuth, signOut, GithubAuthProvider} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Container } from 'react-bootstrap';


// =======================Methods==================
const SignIn = ({user, setUser}) => {
  const navigate=useNavigate()
  const{handleSubmit,formState:{errors},register} = useForm();
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  //================= Google Provider====================================
  const GoogleProvider = new GoogleAuthProvider();
 
  const handleGooglePopup = () => {
    signInWithPopup(auth, GoogleProvider).then((result) => {
      const user = {};
      user.displayName = result.user.displayName;
      user.email = result.user.email;
      user.photoURL = result.user.photoURL;
      setUser(user);
    });
  };

// ========================Git-hub provider===============================

const GithubProvider = new GithubAuthProvider();
  
const handleGithubPopup = () => {
  signInWithPopup(auth, GithubProvider).then((result) => console.log(result));
};

// ========================= Email Provider ================================

const getData =(data)=>{ 
      signInWithEmailAndPassword (auth, data.email, data.password).then(
        (userCredential) => {const user=userCredential.user;setUser(user);
         navigate('/users') 
        });  
  };
// ============================Sign out=======================
  const handleSignOut = () => {
    signOut(auth).then(()=>setUser({})
    )};


  return (
    <Container className="bg-secondary">
      <h1> Sign In </h1>
      <form
        onSubmit={handleSubmit(getData)}action=""className="d-flex flex-column w-50 mx-auto mt-5">
        <label htmlFor="">Email</label>
        <input type="email" {...register("email")} name="email" />
        <label htmlFor="">Password</label>
        <input type="password" {...register("password")} name="password" />
        <button type="submit" className="mt-3">Sign In</button>
      </form>
      
      <div>
        {user.email?
         <div className="logout-btn"> <button onClick={handleSignOut}> Logout </button> </div>: 
           <div className="sign-another-provider-container">
             <h2> Sign in with </h2>
            <div  className="sign-another-providers">
            <button onClick={handleGooglePopup}> Google </button>
            <button onClick={handleGithubPopup}> Github </button>
              </div>
            
           </div>
        }
      </div>
    </Container>
  );
};

export default SignIn;
