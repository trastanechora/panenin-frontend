// LIST IMPORT MODULE
import React, { Component } from 'react';
import { connect } from "unistore/react";
import { actions } from '../Store';
import { withRouter } from "react-router-dom";

// COMPONENT BODY
// class PersonalInfoEdit extends Component {
const PersonalInfoEdit = props => {
        return (
            <div className="card">
                <div className="card-header card-header-danger">
                    <h4 className="card-title">Ubah Profil</h4>
                    <p className="card-category">Lengkapi form di bawah ini untuk memperbaharui profil Anda</p>
                </div>
                <div className="card-body">
                    <form onSubmit={e => e.preventDefault()}>
                    <div className="row">
                        <div className="col-md-5">
                        <div className="form-group">
                            <label className="bmd-label-floating">Company (disabled)</label>
                            <input type="text" className="form-control" disabled />
                        </div>
                        </div>
                        <div className="col-md-3">
                        <div className="form-group">
                            <label className="bmd-label-floating">Username</label>
                            <input type="text" className="form-control" />
                        </div>
                        </div>
                        <div className="col-md-4">
                        <div className="form-group">
                            <label className="bmd-label-floating">Email address</label>
                            <input type="email" className="form-control" />
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                        <div className="form-group">
                            <label className="bmd-label-floating">Fist Name</label>
                            <input type="text" className="form-control" />
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div className="form-group">
                            <label className="bmd-label-floating">Last Name</label>
                            <input type="text" className="form-control" />
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                        <div className="form-group">
                            <label className="bmd-label-floating">Adress</label>
                            <input type="text" className="form-control" />
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                        <div className="form-group">
                            <label className="bmd-label-floating">City</label>
                            <input type="text" className="form-control" />
                        </div>
                        </div>
                        <div className="col-md-4">
                        <div className="form-group">
                            <label className="bmd-label-floating">Country</label>
                            <input type="text" className="form-control" />
                        </div>
                        </div>
                        <div className="col-md-4">
                        <div className="form-group">
                            <label className="bmd-label-floating">Postal Code</label>
                            <input type="text" className="form-control" />
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                        <div className="form-group">
                            <label>About Me</label>
                            <div className="form-group">
                            <label className="bmd-label-floating"> Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.</label>
                            <textarea className="form-control" rows="5"></textarea>
                            </div>
                        </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-danger pull-center" onClick={() => props.state_change()}>Update Profile</button>
                    <div className="clearfix"></div>
                    </form>
                </div>
            </div>
        )
    
}

// EXPORT THE COMPONENT BODY
export default PersonalInfoEdit; 

// export default connect(
//     "product_state", actions)
//     (withRouter(PersonalInfoEdit));
