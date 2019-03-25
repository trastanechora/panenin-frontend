// LIST IMPORT MODULE
import React, { Component } from 'react';
import axios from 'axios';
import { connect } from "unistore/react";
import { actions, store } from '../Store';
import { withRouter } from "react-router-dom";
import { Redirect } from "react-router-dom";
import '../css/bootstrap.min.css';
import '../css/style2.css';
import '../css/style.css';
import Navbar from '../components/Navbar';
import PersonalInfo from '../components/PersonalInfo';
import PersonalInfoEdit from '../components/PersonalInfoEdit';
import AddProduct from '../components/AddProduct';
import ListProduct from '../components/ListProduct';



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
        updated_at: "",
        ListProduct: []
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
          });
          store.setState({
            current_username: response.data.data.username,
            current_userid: response.data.data.id
          });
          console.log("Sukses get identity", response)
        }).catch(function(error) {
          console.log("Gagal get identity", error);
        });
      // console.log("cek local storage detail", self.state)

      // await axios({
      //   method: 'get', //you can set what request you want to be
      //   url: 'http://localhost:8010/proxy/api/public/login',
      //   headers: {
      //     Authorization: 'Bearer ' + token
      //   }
      // }).then(function(response) {
      //       self.setState({ 
      //         id: response.data.data.id,
      //         email: response.data.data.email,
      //         username: response.data.data.username,
      //         password: response.data.data.password,
      //         date_of_birth: response.data.data.date_of_birth,
      //         address: response.data.data.address,
      //         created_at: response.data.data.created_at,
      //         display_fullname: response.data.data.display_fullname,
      //         gender: response.data.data.gender,
      //         phone: response.data.data.phone,
      //         status: response.data.data.status,
      //         updated_at: response.data.data.updated_at
      //       });
      //       store.setState({
      //         current_username: response.data.data.username,
      //         current_userid: response.data.data.id
      //       });
      //       console.log("Sukses get identity", response)
      //     }).catch(function(error) {
      //       console.log("Gagal get identity", error);
      //     });
      //   // console.log("cek local storage detail", self.state)
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
      store.setState({ is_login: true })
    return (
      <div className="container-fluid for-banner">
        <Navbar />
        <div className="container footer-handler row for-profile">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card card-stats">
              <div className="card-header card-header-danger card-header-icon">
                <div className="card-icon">
                  <i className="material-icons">content_copy</i>
                </div>
                <p className="card-category">ID Pengguna</p>
                <h3 className="card-title">{this.state.id}
                  <small></small>
                </h3>
              </div>
              <div className="card-footer">
                <div className="stats">
                  <i className="material-icons">warning</i>
                  <a href="#">Get More Space...</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card card-stats">
              <div className="card-header card-header-danger card-header-icon">
                <div className="card-icon">
                  <i className="material-icons">store</i>
                </div>
                <p className="card-category">Tanggal Lahir</p>
                <h3 className="card-title">{(this.state.date_of_birth === null) ? "Belum diisi" : this.state.date_of_birth}</h3>
              </div>
              <div className="card-footer">
                <div className="stats">
                  <i className="material-icons">date_range</i> Last 24 Hours
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card card-stats">
              <div className="card-header card-header-danger card-header-icon">
                <div className="card-icon">
                  <i className="material-icons">info_outline</i>
                </div>
                <p className="card-category">Jenis Kelamin</p>
                <h3 className="card-title">{(this.state.gender === null) ? "Belum diisi" : this.state.gender}</h3>
              </div>
              <div className="card-footer">
                <div className="stats">
                  <i className="material-icons">local_offer</i> Tracked from Github
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card card-stats">
              <div className="card-header card-header-danger card-header-icon">
                <div className="card-icon">
                  <i className="material-icons">alarm</i>
                </div>
                <p className="card-category">Tergabung Pada</p>
                <h3 className="card-title">{this.state.created_at.slice(0, 11)}</h3>
              </div>
              <div className="card-footer">
                <div className="stats">
                  <i className="material-icons">update</i> Just Updated
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TEST */}
        <div className="section section-tabs">
      <div className="container">
        <div id="nav-tabs">
          <h3>Navigation Tabs</h3>
          <div className="row">
            <div className="col-md-6" style={{ display: this.state.profile_edit ? "none" : "block" }}>
              <PersonalInfo state_change={this.state_change} email={this.state.email} display_name={this.state.display_fullname} address={this.state.address}/>
            </div>
            <div className="col-md-6" style={{ display: this.state.profile_edit ? "block" : "none" }}>
              <PersonalInfoEdit state_change={this.state_change}/>
            </div>
            <div className="col-md-6">
              <div className="card card-plain">
                <div className="card-header card-header-danger">
                  <h4 className="card-title mt-0"> Daftar Produk Anda yang Terdaftar</h4>
                  <p className="card-category"> Klik salah satu untuk melihat detailnya</p>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                  <table className="table table-hover">
                          <thead className="text-success">
                            <tr>
                              <th>No</th>
                              <th>Nama</th>
                              <th>Kategori</th>
                              <th>Tipe</th>
                              <th>Lokasi</th>
                              <th>Kuantitas</th>
                              <th>Harga</th>
                              <th>Link</th>
                            </tr>
                          </thead>
                          <tbody>
                              {/* {this.state.ListProduct.map((item, key) => {
                                  // console.log("testing item value", item)
                                  const name = item.name !== null ? item.name : "";
                                  const category = item.category !== null ? item.category : "";
                                  const type = item.product_type !== null ? item.product_type : "";
                                  const location = item.location !== null ? item.location : "";
                                  const quantity = item.amount !== null ? item.amount : "";
                                  const price = item.price !== null ? item.price : "";
                                  const id = item.id !== null ? item.id : "";
                                  return <ListProduct key={key} name={name} category={category} type={type} location={location} quantity={quantity} price={price} number={key + 1} id={id} />
                              })} */}
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