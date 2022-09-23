import React from 'react';
import { Outlet, Navigate} from 'react-router-dom';

const PrivateRoute = ({user}) => {
  return (

    <div>

  {user.email ? <Outlet/>: <Navigate to='sign-in'/>}   
 

    </div>
  )
}

export default PrivateRoute; 