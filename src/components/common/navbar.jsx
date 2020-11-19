import React from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux"
import { signinModal } from './../../actions/authAction';
import toggleModal from './toggleModal';
const Navbar = (props) => {
    const {auth, image} = props
    const openModal =() =>{
      props.signinModal(true)
    }
    return ( 
    <div style={{paddingBottom:"0px"}}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">Tripzip</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              {auth?
                <Link to="/mingle" className="nav-item nav-link">Mingle <span className="sr-only">(current)</span></Link>
              :
              <div>
                <Link className="nav-item nav-link" onClick={openModal}>Mingle <span className="sr-only">(current)</span></Link>
                <toggleModal/>
              </div>

              }
                <Link className="nav-item nav-link">Travel wall</Link>
                <Link className="nav-item nav-link">Travel plan</Link>
            </div>
        </div>
        {auth?
            <Link to="/profile" ><img src={image} className="rounded-circle" style={{float:"right"}} height="40" width="40"/></Link>
            :
            <div>
                <img src="https://i.ibb.co/v40WF0t/no-photo.jpg" className="rounded-circle" style={{float:"right"}} height="40" width="40" onClick={openModal}/>
                <toggleModal/>
            </div>
        }
            </nav>
    </div> );
}
const mapStateToProps=(state)=>{
    return{
      auth:state.auth,
      image: state.userInfo.image
    }
  }
  const mapDispatchToProps=(dispatch)=>{
    return{
      signinModal: (payload)=>dispatch(signinModal(payload))
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);