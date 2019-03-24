// LIST IMPORT MODULE
import React, { Component } from 'react';
import { connect } from "unistore/react";
import { actions } from '../Store';
import { withRouter } from "react-router-dom";

// COMPONENT BODY
const PersonalInfo = props => {
    // render() {
        return (
            <div className="card card-profile">
                <div className="card-avatar">
                    <a href="#">
                    <img className="img" src={require("../media/img/tony.jpg")} />
                    </a>
                </div>
                <div className="card-body">
                    <h6 className="card-category text-gray">PENJUAL | PEMBELI | DRIVER</h6>
                    <h4 className="card-title">Maestro Trastanechora</h4>
                    <p className="card-description">
                    Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...
                    </p>
                    <a href="#" className="btn btn-danger btn-round" onClick={() => props.state_change()}>Ubah</a>
                </div>
            </div>
        )
    }
// }

// EXPORT THE COMPONENT BODY
export default PersonalInfo; 
// export default connect(
//     "product_state", actions)
//     (withRouter(PersonalInfo));
