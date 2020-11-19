import React from 'react';
import {connect} from "react-redux";
import UserInfo from './../common/userInfo';
import { logout } from './../../actions/authAction';
import { Redirect } from 'react-router-dom';
const Profile = (props) => {
    const onLogout=()=> {
        console.log("logout pressed")
        props.logout()
        return(
            <Redirect to="/"/>
        )
    }
    const {
      uid,
      name,
      image,
      gender,
      birthday,
      email,
      location,
      interest,
      profession,
      motto,
    } = props.data;
    return ( 
    <div>
        <h1>Profile page</h1>
        <UserInfo
            image={image}
            uid={uid}
            name={name}
            gender={gender}
            birthday={birthday}
            email={email}
            location={location}
            interest={interest}
            profession={profession}
            motto={motto}
          />
          <button className="btn btn-primary" onClick={onLogout}>logout</button>
    </div> );
}
const mapStateToProps=(state)=>{
    return{
        data: state.userInfo
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        logout: ()=>dispatch(logout())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile);