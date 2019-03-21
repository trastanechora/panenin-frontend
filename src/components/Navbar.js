// LIST IMPORT MODULE
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../css/bootstrap.min.css';
import '../css/style.css';
import { actions, store } from '../Store';
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";

// var width = "width: 100%"

// COMPONENT BODY
class Navbar extends Component {
    changeStateTrue = () => {
        store.setState({auth_state: true});
        // console.log(this.props.auth_state)
    };
    changeStateFalse = () => {
        store.setState({auth_state: false});
        // console.log(this.props.auth_state)
    };
    render() {
        return (
            <div className="row navbar">
                <div className="col-md-2">
                    <Link to="/" onClick={() => this.props.setHome()}>
                        <img className="logo" src={require("../media/logo/logo2.png")} alt="" />
                    </Link>
                </div>
                <div className="col-md-3">
                    <select name="" id="" className="btn btn-outline-success login" style={{ width: '100%' }}>
                        <option value="KATEGORI">KATEGORI</option>
                    </select>
                    {/* <button type="button" className="btn btn-outline-success login" style={{ width: '100%' }} data-toggle="modal" data-target="#myModal">KATEGORI</button> */}
                </div>
                {/* <!-- <div className="col-md-3"><input type="text" className="col-12"></div> --> */}
                <div className="col-md-3"><input className="form-control mr-sm-2 search" type="search" placeholder="Cari" aria-label="Search" /></div>
                <div className="col-md-4" id="register-btn">
                    {/* <button type="button" className="btn btn-outline-success login">LOGIN</button> */}
                    {/* <button type="button" className="btn btn-outline-success">REGISTER</button> */}
                    <Link to="/auth" className="btn btn-outline-success login" onClick={() => this.changeStateFalse()}>MASUK</Link>
                    <Link to="/auth" className="btn btn-outline-success" onClick={() => this.changeStateTrue()}>DAFTAR</Link>
                </div>
                {/* <!-- <div className="col-md-2" id="login-btn">LOGIN</div> --> */}
            </div>
        );
    }
}

// EXPORT THE COMPONENT BODY
// export default Navbar;
export default connect(
    "auth_state", actions)
(withRouter(Navbar));
