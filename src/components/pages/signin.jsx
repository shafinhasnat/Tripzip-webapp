import React from 'react';
import ModalMarkup from './../common/modalMarkup';
import { connect } from 'react-redux';
const Signin = (props) => {
    return ( 
    <div>
        <ModalMarkup isOpen={props.isOpen} closeModal={props.closeModal}/>
    </div>
    );
}
const mapStateToProps=(state)=>{
    return{
        isOpen: state.isOpen
    }
}
export default connect(mapStateToProps)(Signin);