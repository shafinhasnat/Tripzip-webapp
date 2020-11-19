import React from 'react';
import Signin from './../pages/signin';
import { connect } from 'react-redux';
import { signinModal } from './../../actions/authAction';
const ToggleModal = (props) => {
    const openModal =() =>{
      props.signinModal(true)
    }
    const closeModal =() =>{
      props.signinModal(false)
    }
    return ( 
        <div>
            <Signin closeModal={closeModal}/>
        </div>
     );
}
  const mapDispatchToProps=(dispatch)=>{
    return{
      signinModal: (payload)=>dispatch(signinModal(payload))
    }
  }
export default connect(null, mapDispatchToProps)(ToggleModal);