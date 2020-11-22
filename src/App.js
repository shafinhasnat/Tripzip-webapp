import "bootstrap/dist/css/bootstrap.css";
import {Route, Switch} from "react-router-dom";
import './App.css';
import Profile from './components/pages/profile';
import Navbar from "./components/common/navbar";
import Index from './components/pages/index';
import Mingle from './components/pages/mingle';
import { firebaseFacebook, loading } from './actions/authAction';
import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import Loading from "./components/common/loading";
function App(props) {
  useEffect(()=>{
    console.log("laoa");
    props.firebaseFacebook()
  },[])
  return (
      props.isLoading?<Loading/>: <div className="container">
      <Navbar/>
      <Switch>
        <Route path="/profile" component={Profile}/>
        <Route path="/mingle" component={Mingle}/>
        <Route path="/" component={Index} />
      </Switch>
    </div>
      
   
  );
}
const mapStateToProps = (state) => {
  return { isLoading: state.isLoading };
};
const mapDispatchToProps=(dispatch)=>{
    return{
        firebaseFacebook: ()=>dispatch(firebaseFacebook()),
        loading: (payload)=>dispatch(loading(payload))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
