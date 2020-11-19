import React from 'react';
import firebase from "firebase"
import fire from './../../fire';
import "../../App.css"
import { firebaseFacebook } from '../../actions/authAction';
import { connect } from 'react-redux';
const LoginFacebook = (props) => {
    const handleLogin =()=> {
        const provider =  new firebase.auth.FacebookAuthProvider();
        // console.log(provider)
        fire.auth().signInWithPopup(provider).then(res=>{console.log("=========>",res.credential)})
        props.firebaseFacebook()
    }

    return ( <button className="btn btn-primary facebook-button" onClick = {handleLogin}>Login with Facebook</button> );
}
const mapDispatchToProps=(dispatch)=>{
    return{
        firebaseFacebook: ()=>dispatch(firebaseFacebook())
    }
}
export default connect(null, mapDispatchToProps)(LoginFacebook);