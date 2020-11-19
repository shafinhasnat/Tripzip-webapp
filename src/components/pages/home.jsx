import React, { Component } from "react";
import '../../App.css'
import Index from './index';
import Signin from './signin';
import Profile from './profile';
class Home extends Component {
  renderSignin = () =>{
      <Signin />
  }
  render() {
    return (
      <div>
        {/* <Index/> */}
        <Profile/>
      </div>
    );
  }
}
export default Home;
