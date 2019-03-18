// LIST IMPORT MODULE
import React, { Component } from 'react';
import '../css/bootstrap.min.css';
import '../css/style.css';

// var width = "width: 100%"

// COMPONENT BODY
class Navbar extends Component {
  render() {
    return (
        <div class="row navbar">
            <div class="col-md-2"><img class="logo" src={require("../media/logo/logo2.png")} alt="" /></div>
            <div class="col-md-3">
                <select name="" id="" class="btn btn-outline-success login" style={{ width: '100%' }}>
                    <option value="KATEGORI">KATEGORI</option>
                </select>
                {/* <button type="button" class="btn btn-outline-success login" style={{ width: '100%' }} data-toggle="modal" data-target="#myModal">KATEGORI</button> */}
            </div>
            {/* <!-- <div class="col-md-3"><input type="text" class="col-12"></div> --> */}
            <div class="col-md-3"><input class="form-control mr-sm-2 search" type="search" placeholder="Cari" aria-label="Search" /></div>
            <div class="col-md-4" id="register-btn"><button type="button" class="btn btn-outline-success login">LOGIN</button><button type="button" class="btn btn-outline-success">REGISTER</button></div>
            {/* <!-- <div class="col-md-2" id="login-btn">LOGIN</div> --> */}
        </div>
    );
  }
}

// EXPORT THE COMPONENT BODY
export default Navbar;
