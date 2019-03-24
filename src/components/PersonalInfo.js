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
                    <h6 className="card-category text-gray">{props.email}</h6>
                    {/* <h6 className="card-category text-gray">PENJUAL | PEMBELI | DRIVER</h6> */}
                    <h4 className="card-title">{(props.display_name === null) ? "Nama lengkap anda belum diisi" : props.display_name}</h4>
                    <p className="card-description">
                        {(props.address === null) ? "Alamat anda belum terisi.." : props.address}
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
