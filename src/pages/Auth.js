// LIST IMPORT MODULE
import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from "unistore/react";
import { actions } from '../Store';
import { withRouter } from "react-router-dom";
import '../css/bootstrap.min.css';
import '../css/style.css';
import Navbar from '../components/Navbar';
// import Banner from '../components/Banner';
// import Menubar from '../components/Menubar';
// import Content from '../components/Content';
import Footer from '../components/Footer';
import ContentAuth1 from '../components/ContentAuth1';
import ContentAuth2 from '../components/ContentAuth2';


//MAIN CLASS
class Auth extends Component {
  // constructor (props) {
  //   super(props);
  //     this.state = {
  //       movieList: []
  //     };
  // };

  // componentDidMount = async () => {
  //   console.log("Hello Panenin.com")
  // };

  render() {
    return (
      <div>
        <div class="container-fluid for-banner">
          <Navbar />
          <div class="row banner register-page">
            <div class="container-fluid row">
                <div class="col-md-4 banner-opening">
                    <h3>Ikut mitra Panenin.com untuk mendapatkan pelayanan kami!</h3>
                    <p>Gabung sekarang juga dengan mudah dan cepat untuk mendapatkan keuntungan-keuntungan sebagai berikut:</p>
                </div>
            </div>
          </div>
          <div class="row content-area">
            <ContentAuth1 />
            <ContentAuth2 />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

// export default Home;
export default connect(
  "", actions)
(withRouter(Auth));