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
                                <div className="row">
                                    <div className="col-lg-3 col-md-6 col-sm-6">
                                        <div className="card card-stats">
                                            <div className="card-header card-header-warning card-header-icon">
                                                <div className="card-icon">
                                                    <i className="material-icons">content_copy</i>
                                                </div>
                                                <p className="card-category">Produk terdaftar</p>
                                                <h3 className="card-title">23
                                                    {/* <small> tersedia</small> */}
                                                </h3>
                                            </div>
                                            <div className="card-footer">
                                                <div className="stats">
                                                    {/* <i className="material-icons text-danger">warning</i> */}
                                                    {/* <a href="#pablo">Get More Space...</a> */}
                                                    <i className="material-icons">date_range</i> Last 24 Hours
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-6">
                                        <div className="card card-stats">
                                            <div className="card-header card-header-success card-header-icon">
                                            <div className="card-icon">
                                                <i className="material-icons">store</i>
                                            </div>
                                            <p className="card-category">Penjual aktif</p>
                                            <h3 className="card-title">123
                                            {/* <small> User</small> */}
                                            </h3>
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
                                            <p className="card-category">Jumlah pengguna</p>
                                            <h3 className="card-title">325</h3>
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
                                            <div className="card-header card-header-info card-header-icon">
                                            <div className="card-icon">
                                                <i className="material-icons">alarm</i>
                                            </div>
                                            <p className="card-category">Transaksi berhasil</p>
                                            <h3 className="card-title">17+</h3>
                                            </div>
                                            <div className="card-footer">
                                            <div className="stats">
                                                <i className="material-icons">update</i> Just Updated
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
