// LIST IMPORT MODULE
import React, { Component } from 'react';
import { connect } from "unistore/react";
import { actions } from '../../Store';
import { withRouter } from "react-router-dom";
// import '../css/material-dashboard.css';
import '../../css/bootstrap.min.css';
import '../../css/style.css';

// COMPONENT BODY
class Fruit extends Component {
  render() {
    return (
        <div className="row content-area">
                <div className="container content-body shadow">
                        <div className="container content-body">
                                {/* TEST */}
                                <div class="row">
                                    <div class="col-lg-3 col-md-6 col-sm-6">
                                        <div class="card card-stats">
                                            <div class="card-header card-header-success card-header-icon">
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
                                            <div class="card-header card-header-success card-header-icon">
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
                                            <div class="card-header card-header-success card-header-icon">
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
                                {/* TEST */}
                                <div className="product-title">
                                    <strong>Hasil Panen Pokok</strong> <br />
                                    {/* <!-- <small>Padi</small> --> */}
                                </div>
                                <div className="row content-info">
                                    <div className="col-md-4 product-image"><img src={require("../../media/ico/menu/wheat.png")} alt="" /></div>
                                    <div className="col-md-8">
                                        {/* TEST */}
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="card card-chart">
                                                    <div class="card-header card-header-warning" id="card-info">
                                                        <div class="ct-chart" id="dailySalesChart"><h4 class="card-title">Statistika Dagang Bulanan</h4></div>
                                                    </div>
                                                    <div class="card-body">
                                                        
                                                        {/* <p class="card-category">
                                                            <span class="text-success"><i class="fa fa-long-arrow-up"></i> 55% </span> increase in today sales.
                                                        </p> */}
                                                        <div className="header-conent container row">
                                                            <div className="col-md-2 th-content"><strong><i>Tipe Produk</i></strong></div>
                                                            <div className="col-md-5">
                                                                <div className="col-md-12 th-content"><strong><i>Rata-rata Harga / KG</i></strong></div>
                                                                <div className="col-md-12 row">
                                                                    <div className="col-md-6"><strong><i>Bulan lalu</i></strong></div>
                                                                    <div className="col-md-6"><strong><i>Bulan ini</i></strong></div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-5">
                                                                <div className="col-md-12 th-content"><strong><i>Kuantitas Terjual (KG)</i></strong></div>
                                                                <div className="col-md-12 row">
                                                                    <div className="col-md-6"><strong><i>Bulan lalu</i></strong></div>
                                                                    <div className="col-md-6"><strong><i>Bulan ini</i></strong></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="container row">
                                                            <div className="col-md-2">Padi</div>
                                                            <div className="col-md-2">Rp. 4.874,-</div>
                                                            <div className="col-md-2">Rp. 5.255,</div>
                                                            <div className="col-md-1"></div>
                                                            <div className="col-md-2">464.323 KG</div>
                                                            <div className="col-md-2">123.658 KG</div>
                                                        </div>
                                                        <div className="container row">
                                                            <div className="col-md-2">Jagung</div>
                                                            <div className="col-md-2">Rp. 6.523,-</div>
                                                            <div className="col-md-2">Rp. 5.241,</div>
                                                            <div className="col-md-1"></div>
                                                            <div className="col-md-2">164.323 KG</div>
                                                            <div className="col-md-2">22.658 KG</div>
                                                        </div>
                                                        <div className="container row">
                                                            <div className="col-md-2">Kentang</div>
                                                            <div className="col-md-2">Rp. 14.587,-</div>
                                                            <div className="col-md-2">Rp. 15.345,</div>
                                                            <div className="col-md-1"></div>
                                                            <div className="col-md-2">264.234 KG</div>
                                                            <div className="col-md-2">14.658 KG</div>
                                                        </div>
                                                        <div className="container row">
                                                            <div className="col-md-2">Tebu</div>
                                                            <div className="col-md-2">Rp. 7.490,-</div>
                                                            <div className="col-md-2">Rp. 8.223,</div>
                                                            <div className="col-md-1"></div>
                                                            <div className="col-md-2">314.323 KG</div>
                                                            <div className="col-md-2">94.658 KG</div>
                                                        </div>
                                                    </div>
                                                    <div class="card-footer">
                                                        <div class="stats">
                                                            <i class="material-icons">access_time</i> updated 4 minutes ago
                                                        </div>
                                                    </div>
                                                </div>   
                                            </div>
                                        </div>
                                        {/* TEST */}
                                        
                                    </div>
                                </div>
                                <div className="row content-table">
                                    <div className="container wrapper-content-list">
                                        <div className="header-content container-fluid">
                                            <div className="col-md-1"><strong><i>No.</i></strong></div>
                                            <div className="col-md-3"><strong><i>Nama</i></strong></div>
                                            <div className="col-md-1"><strong><i>Kategori</i></strong></div>
                                            <div className="col-md-1"><strong><i>Tipe</i></strong></div>
                                            <div className="col-md-2"><strong><i>Lokasi</i></strong></div>
                                            <div className="col-md-2"><strong><i>Kuantitas</i></strong></div>
                                            <div className="col-md-2"><strong><i>Harga</i></strong></div>
                                        </div>
                                        <div className="container-fluid test">
                                            <div className="col-md-1">1</div>
                                            <div className="col-md-3">Padi Wangi</div>
                                            <div className="col-md-1">Pokok</div>
                                            <div className="col-md-1">Padi</div>
                                            <div className="col-md-2">Malang</div>
                                            <div className="col-md-2">2000 KG</div>
                                            <div className="col-md-2">Rp. 10.000.000,-</div>
                                        </div>
                                        <div className="container-fluid test">
                                            <div className="col-md-1">2</div>
                                            <div className="col-md-3">Padi Rejeki Subur</div>
                                            <div className="col-md-1">Pokok</div>
                                            <div className="col-md-1">Padi</div>
                                            <div className="col-md-2">Surabaya</div>
                                            <div className="col-md-2">1530 KG</div>
                                            <div className="col-md-2">Rp. 8.000.000,-</div>
                                        </div>
                                        <div className="container-fluid test">
                                            <div className="col-md-1">3</div>
                                            <div className="col-md-3">Kentang Emas</div>
                                            <div className="col-md-1">Pokok</div>
                                            <div className="col-md-1">Kentang</div>
                                            <div className="col-md-2">Yogyakarta</div>
                                            <div className="col-md-2">400 KG</div>
                                            <div className="col-md-2">Rp. 6.200.000,-</div>
                                        </div>
                                        <div className="container-fluid test">
                                            <div className="col-md-1">4</div>
                                            <div className="col-md-3">Tebu super Malang</div>
                                            <div className="col-md-1">Pokok</div>
                                            <div className="col-md-1">Tebu</div>
                                            <div className="col-md-2">Malang</div>
                                            <div className="col-md-2">1200 KG</div>
                                            <div className="col-md-2">Rp. 9.300.000,-</div>
                                        </div>
                                        <div className="container-fluid test">
                                            <div className="col-md-1">5</div>
                                            <div className="col-md-3">Padi Murah Rejeki</div>
                                            <div className="col-md-1">Pokok</div>
                                            <div className="col-md-1">Padi</div>
                                            <div className="col-md-2">Malang</div>
                                            <div className="col-md-2">400 KG</div>
                                            <div className="col-md-2">Rp. 2.160.000,-</div>
                                        </div>
                                        <div className="container-fluid test">
                                            <div className="col-md-1">6</div>
                                            <div className="col-md-3">Jagung Jumbo</div>
                                            <div className="col-md-1">Pokok</div>
                                            <div className="col-md-1">Jagung</div>
                                            <div className="col-md-2">Bondowoso</div>
                                            <div className="col-md-2">900 KG</div>
                                            <div className="col-md-2">Rp. 4.680.000,-</div>
                                        </div>
                                        <div className="container-fluid test">
                                            <div className="col-md-1">7</div>
                                            <div className="col-md-3">Tebu Supreme</div>
                                            <div className="col-md-1">Pokok</div>
                                            <div className="col-md-1">Tebu</div>
                                            <div className="col-md-2">Solo</div>
                                            <div className="col-md-2">1000 KG</div>
                                            <div className="col-md-2">Rp. 8.200.000,-</div>
                                        </div>
                                        <div className="container-fluid test">
                                            <div className="col-md-1">8</div>
                                            <div className="col-md-3">Jagung Susu</div>
                                            <div className="col-md-1">Pokok</div>
                                            <div className="col-md-1">Jagung</div>
                                            <div className="col-md-2">Sragen</div>
                                            <div className="col-md-2">700 KG</div>
                                            <div className="col-md-2">Rp. 3.500.000,-</div>
                                        </div>
                                        <div className="container-fluid test">
                                            <div className="col-md-1">9</div>
                                            <div className="col-md-3">Harum Padi</div>
                                            <div className="col-md-1">Pokok</div>
                                            <div className="col-md-1">Padi</div>
                                            <div className="col-md-2">Tegal</div>
                                            <div className="col-md-2">1200 KG</div>
                                            <div className="col-md-2">Rp. 7.200.000,-</div>
                                        </div>
                                        <div className="container-fluid test">
                                            <div className="col-md-1">10</div>
                                            <div className="col-md-3">Padi Kalimantan</div>
                                            <div className="col-md-1">Pokok</div>
                                            <div className="col-md-1">Padi</div>
                                            <div className="col-md-2">Banjarmasin</div>
                                            <div className="col-md-2">1000 KG</div>
                                            <div className="col-md-2">Rp. 6.000.000,-</div>
                                        </div>
                                    </div>
                                    <div className="container wrapper-content-list product-page">
                                        {/* <!-- TEST --> */}
                                        <ul className="pagination justify-content-center">
                                            <li className="page-item">
                                                <a className="page-link" href="#" title="Back"><i className="material-icons keyboard_arrow_left">keyboard_arrow_left</i></a>
                                            </li>
                                            <li className="page-item active">
                                                <a className="page-link" href="#">1</a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">3</a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#" title="Next"><i className="material-icons keyboard_arrow_right">keyboard_arrow_right</i></a>
                                            </li>
                                            </ul>
                                        {/* <!-- TEST --> */}
                                    </div>
                                </div>
                            </div>
                </div>
            </div>
    );
  }
}

// EXPORT THE COMPONENT BODY
// export default Fruit;
export default connect(
    "auth_state", actions)
(withRouter(Fruit));
