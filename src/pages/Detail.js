// LIST IMPORT MODULE
import React, { Component } from 'react';
import axios from 'axios';
import { connect } from "unistore/react";
// import { actions } from '../Store';
import { actions, store } from '../Store';
import { withRouter } from "react-router-dom";
import '../css/bootstrap.min.css';
import '../css/style.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ListOffer from '../components/ListOffer'


//MAIN CLASS
class Detail extends Component {
    constructor (props) {
        super(props);
          this.state = {
            amount: 0,
            constanta: "",
            category: "",
            delivery_provided: "",
            description: "",
            id: "",
            location: "",
            name: "",
            offer: "",
            posted_at: "",
            posted_by: 0,
            price: 0,
            product_type: "",
            status: "",
            offers: [],
            // offer_amount: 0,
            // offer_price: 0,
            // offer_description: "",
            // offer_destination: ""
            current_id: 1,
            current_email: "",
            current_username: "",
            current_password: "",
            current_date_of_birth: "",
            current_address: "",
            current_created_at: "",
            current_display_fullname: "",
            current_gender: "",
            current_phone: "",
            current_status: "",
            current_updated_at: "",
          };
      };

    componentDidMount = async () =>{
        const self = this;
        const product_id = this.props.location.pathname.slice(8)
        console.log("test location for product id", product_id)
        const url_product = "http://0.0.0.0:5555/api/public/products/" + product_id
        const url_offer = "http://0.0.0.0:5555/api/offers?product_id=" + product_id

        // =============== Load the product detail ===============
        await axios
        .get(url_product)
        .then(function(response) {
            console.log("Sukses get product detail", response.data)
            // this.setState({ListProduct: response.data.data});
            self.setState({
                amount: response.data.data[0].amount,
                category: response.data.data[0].category,
                delivery_provided: response.data.data[0].delivery_provided,
                description: response.data.data[0].description,
                id: response.data.data[0].id,
                location: response.data.data[0].location,
                name: response.data.data[0].name,
                posted_at: response.data.data[0].posted_at,
                posted_by: response.data.data[0].posted_by,
                price: response.data.data[0].price,
                product_type: response.data.data[0].product_type,
                status: response.data.data[0].status
            })
        })
        .catch(function(error) {
            console.log("Failed axios at detail", error);
        });
        console.log("Cek local state on Detail page", self.state)

        // =============== Load the product offers ===============        
        await axios
        .get(url_offer)
        .then(function(response) {
            self.setState({
                offers: response.data[0]
            })
            console.log("Success get response from offer", response.data[0])
        })
        .catch(function(error) {
            console.log("Failed axios at detail", error);
        });
        // console.log("Cek local state on Detail page", self.state)

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
            self.setState({ 
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
            // self.props.history.replace("/profile");
          }).catch(function(error) {
            // console.log("Gagal get identity, token akan dihapus", error);
            localStorage.removeItem('token')
          });

        console.log("---------------------------------------------------")
        console.log("Cek current user please:", self.props.current_id)
        console.log("Cek the product poster", self.state.posted_by)
        console.log("---------------------------------------------------")
        }
    }

    doOffer = async () =>{
        const self = this
        const token = localStorage.getItem("token")
        const product_id = this.props.location.pathname.slice(8)
        const url_offer = "http://0.0.0.0:5555/api/offers?product_id=" + product_id
        console.log("Cek value offer before send request", product_id, this.props.offer_amount, this.props.offer_price, this.props.offer_description, this.props.offer_destination)
        await axios({
            method: 'post',
            url: 'http://localhost:8010/proxy/api/offers',
            data: {
                product_id: product_id,
                amount: this.props.offer_amount,
                price: this.props.offer_price,
                description: this.props.offer_description,
                destination: this.props.offer_destination
            },
            headers: {
              Authorization: 'Bearer ' + token
            }
        }).then(function(response) {
            axios
            .get(url_offer)
            .then(function(response) {
                self.setState({
                    offers: response.data[0]
                })
                console.log("Success get response from offer", response.data[0])
            })
            .catch(function(error) {
                console.log("Failed axios at detail", error);
            });
            console.log("Sukses post offer", response)
            }).catch(function(error) {
            console.log("Gagal post offer", error);
            });
        // console.log("cek local storage detail", self.state)
    };

    render() {
        // console.log("current_userid", this.props.current_userid)
        // console.log("postedby", this.state.posted_by)
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
                                        <p className="card-category">Jasa antar kurir</p>
                                        <h3 className="card-title">{this.state.delivery_provided ? "Disediakan Penjual" : "Tidak Tersedia"}
                                            {/* <small> tersedia</small> */}
                                        </h3>
                                    </div>
                                    <div className="card-footer">
                                        <div className="stats">
                                            {/* <i className="material-icons text-danger">warning</i> */}
                                            {/* <a href="#pablo">Get More Space...</a> */}
                                            <i className="material-icons">date_range</i> Syarat dan ketentuan berlaku
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
                                        <p className="card-category">Lelang dibuka pada</p>
                                        <h3 className="card-title">{this.state.posted_at.slice(0, 19)}</h3>
                                    </div>
                                    <div className="card-footer">
                                        <div className="stats">
                                            <i className="material-icons">update</i> Perhatikan jenis barang untuk kondisi kesegaran produk
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
                                            <div className="card-header card-header-success" id="card-infox">
                                                <div className="ct-chart" id="dailySalesChart"><h4 className="card-title">{this.state.name}</h4></div>
                                            </div>
                                            <div className="card-body">
                                                <div class="row">
                                                    <div class="col-md-12 product-detail-description">{this.state.description}</div>
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
                                                            <td><strong className="detail-info card-header-warning">{this.state.amount} KG</strong></td>     
                                                            <td><strong className="detail-info card-header-warning">Rp. {this.state.price},-</strong></td>
                                                            <td><strong className="detail-info card-header-warning">{this.state.location}</strong></td>                  
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="card-footer">
                                                <div className="stats">
                                                    <i className="material-icons">access_time</i> Harga di atas masih bisa ditawar dengan hati nurani
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
                                {/* <div class="container wrapper-content-description">
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
                                </div> */}
                                    {this.state.offers.map((item, key) => {
                                            // console.log("testing item value", item)
                                            const amount = item.amount !== null ? item.amount : "";
                                            const id = item.id !== null ? item.id : "";
                                            const buyer_id = item.buyer_id !== null ? item.buyer_id : "";
                                            const buyer_username = item.buyer_username !== null ? item.buyer_username : "";
                                            const created_at = item.created_at !== null ? item.created_at : "";
                                            const description = item.description !== null ? item.description : "";
                                            const destination = item.destination !== null ? item.destination : "";
                                            const price = item.price !== null ? item.price : "";
                                            const status = item.status !== null ? item.status : "";
                                            const flag = item.flag !== null ? item.flag : "";
                                            return <ListOffer key={key} id={id} date={created_at.slice(0, 19)} buyer={buyer_username} destination={destination} price={price} description={description} status={status} flag={flag} current_id={this.state.current_id}/>
                                        })}
                                        {/* OFFER FORM */}
                                        <div className="container row justify-content-center" style={{ display: (this.state.current_id === this.state.posted_by) ? "none" : "block" }}>
                                            <form onSubmit={e => e.preventDefault()}>
                                            <div class="row">
                                                <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="bmd-label-floating">Kuantitas:</label>
                                                    <input onChange={e => this.props.setField(e)} name="offer_amount" type="text" class="form-control" />
                                                </div>
                                                </div>
                                                <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="bmd-label-floating">Harga tawar:</label>
                                                    <input onChange={e => this.props.setField(e)} name="offer_price" type="text" class="form-control" />
                                                </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12">
                                                <div class="form-group">
                                                    <label class="bmd-label-floating">Kota tujuan:</label>
                                                    <input onChange={e => this.props.setField(e)} name="offer_destination" type="text" class="form-control" />
                                                </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12">
                                                <div class="form-group">
                                                    <div class="form-group">
                                                    <label class="bmd-label-floating"> Komentar anda:</label>
                                                    <textarea onChange={e => this.props.setField(e)} name="offer_description" class="form-control" rows="5"></textarea>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            <button type="submit" class="btn btn-danger" onClick={() => this.doOffer()}>Tawar!</button>
                                            <div class="clearfix"></div>
                                        </form>
                                    </div>
                                    {/* OFFER FORM */}
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
  "offer_price, offer_amount, offer_destination, offer_description, current_id", actions)
(withRouter(Detail));