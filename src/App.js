import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Shared/Layout";
import Users from "./Pages/users/Users";
import SingleUser from "./Pages/singleUser/SingleUser";
import UserPost from "./Pages/userPost/UserPost";
import Home from "./Pages/home/Home";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import SignUp from "./Pages/signup/SignUp";
import SignIn from './Pages/signin/SignIn';

const App = () => {
  
  const [user, setUser] = useState({})
  // Props drilling=========================================
  
  return (
    <div>

       <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />  
          {/*  ==================Private Route======== */}
          <Route element={<PrivateRoute user ={user} />}>
          <Route path="users/:id" element={<SingleUser />} />
          <Route path="users/:id/posts" element={<UserPost />} />
          </Route>
          {/* =======================Private Route=========== */}
          <Route path="sign-up" element={<SignUp setUser={setUser} user={user}/>} />
          <Route path="sign-in" element={<SignIn setUser={setUser} user={user}/>} />
      
        </Route>
      </Routes>
    </div>
  );
};

export default App;
