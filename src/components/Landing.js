// LIST IMPORT MODULE
import React, { Component } from 'react';
// import '../css/material-dashboard.css';
import '../css/bootstrap.min.css';
import '../css/style.css';

// COMPONENT BODY
class Landing extends Component {
  render() {
    return (
                // <div className="container content-body shadow">
                        <div className="container content-body">
                                {/* TEST */}
                                <div class="row">
                                    <div class="col-lg-3 col-md-6 col-sm-6">
                                        <div class="card card-stats">
                                            <div class="card-header card-header-warning card-header-icon">
                                            <div class="card-icon">
                                                <i class="material-icons">content_copy</i>
                                            </div>
                                            <p class="card-category">Produk terdaftar</p>
                                            <h3 class="card-title">23
                                                {/* <small> tersedia</small> */}
                                            </h3>
                                            </div>
                                            <div class="card-footer">
                                            <div class="stats">
                                                {/* <i class="material-icons text-danger">warning</i> */}
                                                {/* <a href="#pablo">Get More Space...</a> */}
                                                <i class="material-icons">date_range</i> Last 24 Hours
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
                                            <p class="card-category">Penjual aktif</p>
                                            <h3 class="card-title">123
                                            {/* <small> User</small> */}
                                            </h3>
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
                                            <p class="card-category">Jumlah pengguna</p>
                                            <h3 class="card-title">325</h3>
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
                                            <p class="card-category">Transaksi berhasil</p>
                                            <h3 class="card-title">17+</h3>
                                            </div>
                                            <div class="card-footer">
                                            <div class="stats">
                                                <i class="material-icons">update</i> Just Updated
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                // </div>
    );
  }
}

// EXPORT THE COMPONENT BODY
export default Landing;
