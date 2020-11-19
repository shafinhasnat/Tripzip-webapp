import React from 'react';
import { connect } from 'react-redux';
import ToggleModal from './../common/toggleModal';
import { signinModal } from './../../actions/authAction';
import LoginFacebook from './../utils/loginFacebook';
const Index = (props) => {
  const openModal =() =>{
    props.signinModal(true)
  }
    const {auth} = props
    return ( 
    <div>
        <h1>Home page</h1>
        {auth?"hello user!":
        <div>
          <button className="btn btn-primary" onClick={openModal}>Sign In</button>
          <ToggleModal/>
        </div>
        }
    </div> );
}
const mapStateToProps=(state)=>{
    console.log(state.isOpen)
    return{
      auth:state.auth
    }
  }
  const mapDispatchToProps=(dispatch)=>{
    return{
      signinModal: (payload)=>dispatch(signinModal(payload))
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(Index);