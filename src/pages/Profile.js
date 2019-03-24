// LIST IMPORT MODULE
import React, { Component } from 'react';
import axios from 'axios';
import { connect } from "unistore/react";
import { actions } from '../Store';
import { withRouter } from "react-router-dom";
import { Redirect } from "react-router-dom";
import '../css/bootstrap.min.css';
import '../css/style2.css';
import '../css/style.css';
import Navbar from '../components/Navbar';
import PersonalInfo from '../components/PersonalInfo';
import PersonalInfoEdit from '../components/PersonalInfoEdit';
import AddProduct from '../components/AddProduct';



//MAIN CLASS
class Profile extends Component {
  constructor (props) {
    super(props);
      this.state = {
        profile_edit: false,
        id: 0,
        email: "",
        username: "",
        password: "",
        date_of_birth: "",
        address: "",
        created_at: "",
        display_fullname: "",
        gender: "",
        phone: "",
        status: "",
        updated_at: ""
      };
  };

  componentDidMount = async () => {
    const token = localStorage.getItem("token")
    const self = this
    console.log("TOKEEEEEEN", token)
    // await axios({
    //   method: 'post', //you can set what request you want to be
    //   url: 'http://localhost:8010/proxy/api/public/login',
    //   data: {id: varID},
    //   headers: {
    //     Authorization: 'Bearer ' + token
    //   }
    // }).then(function(response) {
    //   console.log("Sukses get identity", response)
    // }).catch(function(error) {
    //   console.log("Gagal get identity", error);
    // });

    await axios({
      method: 'get', //you can set what request you want to be
      url: 'http://localhost:8010/proxy/api/public/login',
      headers: {
        Authorization: 'Bearer ' + token
      }
    }).then(function(response) {
          self.setState({ 
            id: response.data.data.id,
            email: response.data.data.email,
            username: response.data.data.username,
            password: response.data.data.password,
            date_of_birth: response.data.data.date_of_birth,
            address: response.data.data.address,
            created_at: response.data.data.created_at,
            display_fullname: response.data.data.display_fullname,
            gender: response.data.data.gender,
            phone: response.data.data.phone,
            status: response.data.data.status,
            updated_at: response.data.data.updated_at
          })
          console.log("Sukses get identity", response)
        }).catch(function(error) {
          console.log("Gagal get identity", error);
        });
      console.log("cek local storage detail", self.state)
  }

  state_change = () => {
    const self = this;
    self.setState({ profile_edit: !this.state.profile_edit });
  };

  render() {
    console.log("Cek state profile", this.state.profile_edit)
    if (localStorage.getItem('token') == null) {
      return <Redirect to={{ pathname: "/auth" }} />;
    } else {
    return (
      <div className="container-fluid for-banner">
        <Navbar />
        <div class="container footer-handler row for-profile">
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="card card-stats">
              <div class="card-header card-header-danger card-header-icon">
                <div class="card-icon">
                  <i class="material-icons">content_copy</i>
                </div>
                <p class="card-category">ID Pengguna</p>
                <h3 class="card-title">{this.state.id}
                  <small></small>
                </h3>
              </div>
              <div class="card-footer">
                <div class="stats">
                  <i class="material-icons">warning</i>
                  <a href="#">Get More Space...</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="card card-stats">
              <div class="card-header card-header-danger card-header-icon">
                <div class="card-icon">
                  <i class="material-icons">store</i>
                </div>
                <p class="card-category">Tanggal Lahir</p>
                <h3 class="card-title">{(this.state.date_of_birth === null) ? "Belum diisi" : this.state.date_of_birth}</h3>
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
                <p class="card-category">Jenis Kelamin</p>
                <h3 class="card-title">{(this.state.gender === null) ? "Belum diisi" : this.state.gender}</h3>
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
              <div class="card-header card-header-danger card-header-icon">
                <div class="card-icon">
                  <i class="material-icons">alarm</i>
                </div>
                <p class="card-category">Tergabung Pada</p>
                <h3 class="card-title">{this.state.created_at.slice(0, 10)}</h3>
              </div>
              <div class="card-footer">
                <div class="stats">
                  <i class="material-icons">update</i> Just Updated
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TEST */}
        <div class="section section-tabs">
      <div class="container">
        <div id="nav-tabs">
          <h3>Navigation Tabs</h3>
          <div class="row">
            <div class="col-md-6" style={{ display: this.state.profile_edit ? "none" : "block" }}>
              <PersonalInfo state_change={this.state_change} email={this.state.email} display_name={this.state.display_fullname} address={this.state.address}/>
            </div>
            <div class="col-md-6" style={{ display: this.state.profile_edit ? "block" : "none" }}>
              <PersonalInfoEdit state_change={this.state_change}/>
            </div>
            <div class="col-md-6">
              <div class="card card-plain">
                <div class="card-header card-header-danger">
                  <h4 class="card-title mt-0"> Daftar Produk Anda yang Terdaftar</h4>
                  <p class="card-category"> Klik salah satu untuk melihat detailnya</p>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table table-hover">
                      <thead class="">
                        <th>
                          ID
                        </th>
                        <th>
                          Name
                        </th>
                        <th>
                          Country
                        </th>
                        <th>
                          City
                        </th>
                        <th>
                          Salary
                        </th>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            1
                          </td>
                          <td>
                            Dakota Rice
                          </td>
                          <td>
                            Niger
                          </td>
                          <td>
                            Oud-Turnhout
                          </td>
                          <td>
                            $36,738
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <AddProduct />
          </div>
        </div>
      </div>
    </div>
        {/* TEST */}
      </div>
    );
  }}
}

// export default Profile;
export default connect(
  "", actions)
(withRouter(Profile));