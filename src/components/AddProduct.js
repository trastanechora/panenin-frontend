// LIST IMPORT MODULE
import React, { Component } from 'react';
import { connect } from "unistore/react";
import { actions } from '../Store';
import { withRouter } from "react-router-dom";

// COMPONENT BODY
// class PersonalInfoEdit extends Component {
const AddProduct = props => {
        return (
            <div class="card">
                <div class="card-header card-header-danger">
                    <h4 class="card-title">Tambahkan Produk</h4>
                    <p class="card-category">Silahkan mengisi form di bawah ini untuk menambahkan Produk yang ingin Anda jual</p>
                </div>
                <div class="card-body">
                    <form onSubmit={e => e.preventDefault()}>
                    <div class="row">
                        <div class="col-md-5">
                        <div class="form-group">
                            <label class="bmd-label-floating">Company (disabled)</label>
                            <input type="text" class="form-control" disabled />
                        </div>
                        </div>
                        <div class="col-md-3">
                        <div class="form-group">
                            <label class="bmd-label-floating">Username</label>
                            <input type="text" class="form-control" />
                        </div>
                        </div>
                        <div class="col-md-4">
                        <div class="form-group">
                            <label class="bmd-label-floating">Email address</label>
                            <input type="email" class="form-control" />
                        </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                        <div class="form-group">
                            <label class="bmd-label-floating">Fist Name</label>
                            <input type="text" class="form-control" />
                        </div>
                        </div>
                        <div class="col-md-6">
                        <div class="form-group">
                            <label class="bmd-label-floating">Last Name</label>
                            <input type="text" class="form-control" />
                        </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                        <div class="form-group">
                            <label class="bmd-label-floating">Adress</label>
                            <input type="text" class="form-control" />
                        </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                        <div class="form-group">
                            <label class="bmd-label-floating">City</label>
                            <input type="text" class="form-control" />
                        </div>
                        </div>
                        <div class="col-md-4">
                        <div class="form-group">
                            <label class="bmd-label-floating">Country</label>
                            <input type="text" class="form-control" />
                        </div>
                        </div>
                        <div class="col-md-4">
                        <div class="form-group">
                            <label class="bmd-label-floating">Postal Code</label>
                            <input type="text" class="form-control" />
                        </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                        <div class="form-group">
                            <label>About Me</label>
                            <div class="form-group">
                            <label class="bmd-label-floating"> Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.</label>
                            <textarea class="form-control" rows="5"></textarea>
                            </div>
                        </div>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-danger" onClick={() => props.state_change()}>Tambahkan Produk</button>
                    <div class="clearfix"></div>
                    </form>
                </div>
            </div>
        )
    
}

// EXPORT THE COMPONENT BODY
export default AddProduct; 

// export default connect(
//     "product_state", actions)
//     (withRouter(AddProduct));
