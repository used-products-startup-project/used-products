import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
class Logout extends Component {
  componentDidMount() {
    localStorage.removeItem('token');
    //localStorage.clear();
  }
  render() {
    return (
      <Redirect
        to={{
          pathname: '/Home',
        }}
      />
    );
  }
}
export default Logout;