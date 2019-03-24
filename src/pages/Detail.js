// LIST IMPORT MODULE
import React, { Component } from 'react';
import axios from 'axios';
import { connect } from "unistore/react";
import { actions } from '../Store';
import { withRouter } from "react-router-dom";
import '../css/bootstrap.min.css';
import '../css/style.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContentAuth1 from '../components/ContentAuth1';
import ContentAuth2 from '../components/ContentAuth2';


//MAIN CLASS
class Detail extends Component {
    componentDidMount = async () =>{
        const product_id = this.props.location.pathname.slice(8)
        console.log("test location for product id", product_id)
        const url = "http://0.0.0.0:5555/api/public/products/" + product_id

        await axios
        .get(url)
        .then(function(response) {
            console.log("Sukses get product detail", response.data)
            // this.setState({ListProduct: response.data.data});
        })
        .catch(function(error) {
            console.log("Failed axios at detail", error);
        });
    }

    render() {
        return (
        <div>
            <div class="container-fluid for-banner">
            <Navbar />
            <div class="row banner register-page">
                <div class="container-fluid row">
                    {/* <div class="col-md-4 banner-opening">
                        <h3>Ikut mitra Panenin.com untuk mendapatkan pelayanan kami!</h3>
                        <p>Gabung sekarang juga dengan mudah dan cepat untuk mendapatkan keuntungan-keuntungan sebagai berikut:</p>
                    </div> */}
                </div>
            </div>
            <div class="row content-area">
            <div className="container content-body shadow show detail">
                    <div className="container content-body">
                        {/* =========== START of Info Cards =========== */}
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="card card-stats">
                                    <div className="card-header card-header-success card-header-icon">
                                        <div className="card-icon green">
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
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="card card-stats">
                                    <div className="card-header card-header-success card-header-icon">
                                        <div className="card-icon green">
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
                        {/* =========== END of Info Cards =========== */}
                        <div className="row content-info">
                            <div className="col-md-4 product-image"><img src={require("../media/ico/menu/fruit.png")} alt="" /></div>
                            <div className="col-md-8">
                                {/* TEST */}
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="card card-chart">
                                            <div className="card-header card-header-success" id="card-info">
                                                <div className="ct-chart" id="dailySalesChart"><h4 className="card-title">Padi Super MH360</h4></div>
                                            </div>
                                            <div className="card-body">
                                                <div class="row">
                                                    <div class="col-md-12 product-detail-description">Beras wangi asli dari Malang, fresh dipanen 2 hari yang lalu, mutu terjamin. Butiran beras gemuk dan panjang. Bisa dinego monggo yang tertarik silahkan pasang tawaran. Delivery akan dipost ke "buka pengiriman".</div>
                                                </div>


                                                <table className="table ">
                                                    <thead className="text-success">
                                                        <th className="info-detail-table-header">
                                                            <i>Kuantitas yang dijual:</i>
                                                        </th>
                                                        <th className="info-detail-table-header">
                                                            <i>Harga yang ditawarkan:</i>
                                                        </th>
                                                        <th className="info-detail-table-header">
                                                            <i>Lokasi Produk:</i>
                                                        </th>
                                                    </thead>
                                                    <tbody>                          
                                                        <tr>
                                                            <td><strong className="detail-info card-header-warning">1000 KG</strong></td>     
                                                            <td><strong className="detail-info card-header-warning">Rp. 4.800.000,-</strong></td>
                                                            <td><strong className="detail-info card-header-warning">Malang</strong></td>                  
                                                        </tr>
                                                    </tbody>
                                                </table>





                                            </div>
                                            <div className="card-footer">
                                                <div className="stats">
                                                    <i className="material-icons">access_time</i> updated 4 minutes ago
                                                </div>
                                            </div>
                                        </div>

                                        {/* TEST */}
                                        {/* =========== END of Statistic Card =========== */}
                                    </div>
                                </div>                          
                            </div>
                        </div>
                        <div className="row content-table">
                            <div className="card card-plain">
                                <div className="card-header card-header-success green">
                                    <h4 className="card-title mt-0"> Produk Ini Terbuka untuk Penawaran</h4>
                                    <p className="card-category"> Silahkan tambahkan tawaran di bawah ini dan tunggu respon penjual</p>
                                </div>
                                <div className="card-body">
                                <div class="container wrapper-content-description">
                                    <div class="row">
                                        <div class="col-md-6">Penawar:</div>
                                        <div class="col-md-6 time">15:33 | 6- Maret - 2019</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6"><strong>Diar Fathurahman</strong></div>
                                        <div class="col-md-6 time"><strong>Surabaya</strong></div>
                                    </div>
                                    <div class="col-md-12 offer declined">
                                        <div class="col-md-12"><strong>Rp. 4.000.000,-</strong></div>
                                        <div class="col-md-12">Saya tawar boleh ya pak..</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-9"></div>
                                        <div class="col-md-2">
                                            <div class="status status-declined">Ditolak</div>
                                        </div>
                                        <div class="col-md-1"></div>
                                    </div>
                                    
                                </div>
                                <div class="container wrapper-content-description">
                                    <div class="row">
                                        <div class="col-md-6">Penawar:</div>
                                        <div class="col-md-6 time">15:59 | 6- Maret - 2019</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6"><strong>Ilham Farozi</strong></div>
                                        <div class="col-md-6 time"><strong>Malang</strong></div>
                                    </div>
                                    <div class="col-md-12 offer accepted">
                                        <div class="col-md-12"><strong>Rp. 5.000.000,-</strong></div>
                                        <div class="col-md-12">Saya tawar lebih tapi berasnya diantar ke tempat saya boleh kah gan?</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-9"></div>
                                        <div class="col-md-2">
                                            <div class="status status-accepted">Diterima</div>
                                        </div>
                                        <div class="col-md-1"></div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
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
(withRouter(Detail));