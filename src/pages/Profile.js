// LIST IMPORT MODULE
import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from "unistore/react";
import { actions } from '../Store';
import { withRouter } from "react-router-dom";
import { Redirect } from "react-router-dom";
// import '../css/material-dashboard.css';
import '../css/bootstrap.min.css';
import '../css/style2.css';
import '../css/style.css';
// import Navbar from '../components/Navbar';
// import Banner from '../components/Banner';
// import Menubar from '../components/Menubar';
// import Content from '../components/Content';
// import Footer from '../components/Footer';
// import ContentAuth1 from '../components/ContentAuth1';
// import ContentAuth2 from '../components/ContentAuth2';


//MAIN CLASS
class Profile extends Component {
  // constructor (props) {
  //   super(props);
  //     this.state = {
  //       movieList: []
  //     };
  // };

  componentDidMount = async () => {
    console.log("Hello Panenin.com")
  };


  render() {
    if (!this.props.is_login) {
      return <Redirect to={{ pathname: "/signin" }} />;
  } else {
    return (
      // <div>
      //   <div class="container-fluid for-banner">
      //     <Navbar />
      //     <div class="row banner register-page">
      //       <div class="container-fluid row">
      //           <div class="col-md-4 banner-opening">
      //               <h3>Selamat datang Sahabat Panen!</h3>
      //               <p>Temukan hasil alam Indonesia melimpah dari Sabang sampai Merauke</p>
      //           </div>
      //       </div>
      //     </div>
      //     <div class="row content-area">
      //       <h1>Profile page here</h1>
      //     </div>
      //   </div>
      //   <Footer />
      // </div>
      <div class="row">
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="card card-stats">
            <div class="card-header card-header-warning card-header-icon">
              <div class="card-icon">
                <i class="material-icons">content_copy</i>
              </div>
              <p class="card-category">Used Space</p>
              <h3 class="card-title">49/50
                <small>GB</small>
              </h3>
            </div>
            <div class="card-footer">
              <div class="stats">
                <i class="material-icons text-danger">warning</i>
                <a href="#pablo">Get More Space...</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="card card-stats">
            <div class="card-header card-header-success card-header-icon">
              <div class="card-icon">
                <i class="material-icons">store</i>
              </div>
              <p class="card-category">Revenue</p>
              <h3 class="card-title">$34,245</h3>
            </div>
            <div class="card-footer">
              <div class="stats">
                <i class="material-icons">date_range</i> Last 24 Hours
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="card card-stats">
            <div class="card-header card-header-danger card-header-icon">
              <div class="card-icon">
                <i class="material-icons">info_outline</i>
              </div>
              <p class="card-category">Fixed Issues</p>
              <h3 class="card-title">75</h3>
            </div>
            <div class="card-footer">
              <div class="stats">
                <i class="material-icons">local_offer</i> Tracked from Github
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="card card-stats">
            <div class="card-header card-header-info card-header-icon">
              <div class="card-icon">
                <i class="material-icons">alarm</i>
              </div>
              <p class="card-category">Followers</p>
              <h3 class="card-title">+245</h3>
            </div>
            <div class="card-footer">
              <div class="stats">
                <i class="material-icons">update</i> Just Updated
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }}
}

// export default Profile;
export default connect(
  "", actions)
(withRouter(Profile));