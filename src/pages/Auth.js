// LIST IMPORT MODULE
import React, { Component } from 'react';
// import axios from 'axios';
// import { connect } from "unistore/react";
// import { actions } from '../Store';
import { withRouter } from "react-router-dom";
import '../css/bootstrap.min.css';
import '../css/style.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContentAuth1 from '../components/ContentAuth1';
import ContentAuth2 from '../components/ContentAuth2';
import { actions, store } from '../Store';
import { connect } from "unistore/react";
import axios from "axios"


//MAIN CLASS
class Auth extends Component {
  // constructor (props) {
  //   super(props);
  //     this.state = {
  //       movieList: []
  //     };
  // };

  componentDidMount = async () => {
    // console.log("Begin proses ceking")
    const self = this
    const token = localStorage.getItem('token');
    // console.log("token dong", token)
    if (token !== null) {
      await axios({
        method: 'get', //you can set what request you want to be
        url: 'http://localhost:8010/proxy/api/public/login',
        headers: {
          Authorization: 'Bearer ' + token
        }
      }).then(function(response) {
            store.setState({ 
              current_id: response.data.data.id,
              current_email: response.data.data.email,
              current_username: response.data.data.username,
              current_password: response.data.data.password,
              current_date_of_birth: response.data.data.date_of_birth,
              current_address: response.data.data.address,
              current_created_at: response.data.data.created_at,
              current_display_fullname: response.data.data.display_fullname,
              current_gender: response.data.data.gender,
              current_phone: response.data.data.phone,
              current_status: response.data.data.status,
              current_updated_at: response.data.data.updated_at,
              is_login: true
            });
            // console.log("Sukses get identity", response)
            self.props.history.replace("/profile");
          }).catch(function(error) {
            // console.log("Gagal get identity, token akan dihapus", error);
            localStorage.removeItem('token')
          });
        // console.log("cek local storage detail", self.state)
        // console.log("Finished proses ceking from inside if")
    }
    // console.log("Finished proses ceking from outside if")
  };

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