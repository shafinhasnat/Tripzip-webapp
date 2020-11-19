import React from 'react';
import FacebookLogin from "react-facebook-login";
import "../../App.css"
import { fetchUserInfo } from '../../actions/authAction';
import { connect } from 'react-redux';
const FbLogin = (props) => {
    const responseFacebook=(response)=>{
        props.fetchUserInfo(response)
    }
    return ( 
        <FacebookLogin
          appId="2528107074153535"
          autoLoad={false}
          fields="name,email,birthday,gender,picture.height(500)"
          scope="public_profile,user_gender, email, user_birthday"
          cssClass="facebook-button"
          callback={responseFacebook}
        /> );
}
const mapDispatchToProps=(dispatch)=>{
    return{
        fetchUserInfo:(data)=>dispatch(fetchUserInfo(data))
    }
}
export default connect(null, mapDispatchToProps)(FbLogin);