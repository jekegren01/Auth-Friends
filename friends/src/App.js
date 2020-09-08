import React, { useReducer } from 'react';
// import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Friends from './components/Friends';
import PrivateRoute from './components/PrivateRoute';
import reducer from './reducers/index';


function App() {
  const initialState = {
    friends: []
  }
  
  const [state, dispatch] = useReducer(reducer, initialState);

  const setFriends = (friendsData) => {
    dispatch({type: "SET_FRIENDS", payload: friendsData});
  }

  return (
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/friends">Friends</Link>
          </li>
          {/* <li>
            <Link to="/add-friend">Login</Link>
          </li> */}
        </ul>
        <Switch>
          <Route path="/login" component={Login} />
          {/* <PrivateRoute exact path="/" component={} /> */}
          {/* <PrivateRoute exact path="/add-friend" component={} /> */}
          <PrivateRoute exact path="/friends" friends={state.friends} setFriends={setFriends} component={Friends} />
        </Switch>
      </div>
  );
}

export default App;
