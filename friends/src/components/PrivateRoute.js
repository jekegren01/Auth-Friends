import React from 'react';
import { Route, Redirect } from 'react-router-dom';

//Private route Requirements
//1. it has the same api as <Route>
//2. It renders a <Route> and passes all the props through it
//3. It checks if the user is authenticated. If they are, it renders the component prop, otherwise it redirects the user to /login

const PrivateRoute = ({component: Component, ...rest}) => {


  return (
    <Route 
      {...rest} 
      render={(props) => {
        //if user is authenticated, render the given component
        if (localStorage.getItem("token")) {
          // user is logged in and renders
          return <Component {...props} />;
        } else {
          return <Redirect to='/login' />
        }
      }}
    />
  )
};

export default PrivateRoute;