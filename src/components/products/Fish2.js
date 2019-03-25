// LIST IMPORT MODULE
import React, { Component } from 'react';
import { connect } from "unistore/react";
import { actions } from '../../Store';
import { withRouter } from "react-router-dom";
import axios from 'axios';
import '../../css/bootstrap.min.css';
import '../../css/style.css';
import ListProduct from '../ListProduct'

const base_url = "http://0.0.0.0:5555/api/public/products"
const paging = "?p="
const category = "&category=fish2"

// COMPONENT BODY
class Fish2 extends Component {
    constructor (props) {
        super(props);
          this.state = {
            ListProduct: [],
            page: 1,
            totalPage: 1,
            totalProduct: 1,
            url: base_url
        };
    };
    
    componentDidMount = async () => {
        const self = this;
        var link = self.state.url + paging + self.state.page + category
        // console.log("test link dong", link)
        await axios
        .get(link)
        .then(function(response) {
            console.log("Sukses cek isi response", response.data)
            self.setState({ListProduct: response.data.data, totalPage: response.data.total_page, totalProduct: response.data.total_results});
        })
        .catch(function(error) {
            console.log("Gagal axios fruit", error);
        });
        // console.log("Local state from fruit", this.state.ListProduct)
    };

    getNextPage = async () => {
        if (this.state.page < this.state.totalPage) {
            await this.setState({ page: this.state.page + 1 })
            await this.setState({ url: base_url + paging + this.state.page + category})
            // console.log("test link dong", this.state.url)
            const self = this;
            await axios
            .get(self.state.url)
            .then(function(response) {
                // console.log("Sukses", response.data)
                self.setState({ListProduct: response.data.data});
            })
            .catch(function(error) {
                console.log("Gagal axios fruit next page", error);
            });
        }
    };
    getPrevPage = async () => {
        if (this.state.page > 1) {
            await this.setState({ page: this.state.page - 1 })
            await this.setState({ url: base_url + paging + this.state.page + category})
            // console.log("test link dong", this.state.url)
            const self = this;
            await axios
            .get(self.state.url)
            .then(function(response) {
                // console.log("Sukses", response.data)
                self.setState({ListProduct: response.data.data});
            })
            .catch(function(error) {
                console.log("Gagal axios fruit prev page", error);
            });
        }
        // console.log("test link dong", this.state.url)
    };
    getPage = async (i) => {
        await this.setState({ page: i})
        await this.setState({ url: base_url + paging + this.state.page + category})
        // console.log("test link dong", this.state.url)
        const self = this;
        await axios
        .get(self.state.url)
        .then(function(response) {
            // console.log("Sukses", response.data)
            self.setState({ListProduct: response.data.data});
        })
        .catch(function(error) {
            console.log("Gagal axios fruit prev page", error);
        });
        // console.log("test link dong", this.state.url)
    };

    createPagination = () => {
        let pages = []

        for (let i = 1; i < this.state.totalPage + 1; i++) {
            if (i === this.state.page) {
                pages.push(
                    <li className="page-item active">
                        <a className="page-link">{i}</a>
                    </li>
                )
            } else {
                pages.push(
                    <li className="page-item" onClick={() => this.getPage(i)}>
                        <a className="page-link">{i}</a>
                    </li>
                )
            }
        }
        return pages
    };

    render() {
        return (
            <div className="container content-body">
                <div className="container content-body">
                    {/* =========== START of Info Cards =========== */}
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="card card-stats">
                                <div className="card-header card-header-info card-header-icon">
                                    <div className="card-icon">
                                        <i className="material-icons">content_copy</i>
                                    </div>
                                    <p className="card-category">Produk terdaftar</p>
                                    <h3 className="card-title">{this.state.totalProduct}
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
                    {/* =========== END of Info Cards =========== */}
                    <div className="row content-info">
                        <div className="col-md-4 product-image"><img src={require("../../media/ico/menu/fish(2).png")} alt="" /></div>
                        <div className="col-md-8">
                            {/* TEST */}
                            <div className="row">
                                <div className="col-md-12">
                                {/* =========== START of Statistic Card =========== */}
                                    <div className="card card-chart">
                                        <div className="card-header card-header-info" id="card-info">
                                            <div className="ct-chart" id="dailySalesChart"><h4 className="card-title">Statistika Dagang Bulanan</h4></div>
                                        </div>
                                        <div className="card-body">
                                        <table className="table">
                                                <thead className="text-danger">
                                                    <tr>
                                                        <th>Tipe Produk</th>
                                                        <th>Rata-rata Harga / KG</th>
                                                        <th></th>
                                                        <th>Kuantitas Terjual (KG)</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody className="">
                                                    <tr>
                                                        <th></th>
                                                        <th>Bulan lalu</th>
                                                        <th>Bulan ini</th>
                                                        <th>Bulan lalu</th>                                     
                                                        <th>Bulan ini</th>
                                                    </tr>                       
                                                <tr>
                                                    {/* =========== Data for statistics put here =========== */}
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
                            <div className="card-header card-header-info">
                                <h4 className="card-title mt-0"> Daftar Produk Panen Buah yang Tersedia</h4>
                                <p className="card-category"> Klik tombol "Lihat" pada list di bawah untuk info lebih detail</p>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-hover">
                                    <thead className="text-danger">
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
                                        {this.state.ListProduct.map((item, key) => {
                                            // console.log("testing item value", item)
                                            const name = item.name !== null ? item.name : "";
                                            const category = item.category !== null ? item.category : "";
                                            const type = item.product_type !== null ? item.product_type : "";
                                            const location = item.location !== null ? item.location : "";
                                            const quantity = item.amount !== null ? item.amount : "";
                                            const price = item.price !== null ? item.price : "";
                                            const id = item.id !== null ? item.id : "";
                                            return <ListProduct key={key} name={name} category={category} type={type} location={location} quantity={quantity} price={price} number={key + 1} id={id} />
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="container wrapper-content-list product-page">
                        {/* <!-- TEST --> */}
                        <ul className="pagination justify-content-center">
                            <li className="page-item" onClick={() => this.getPrevPage()}>
                                <a className="page-link" title="Back"><i className="material-icons keyboard_arrow_left">keyboard_arrow_left</i></a>
                            </li>
                            {this.createPagination()}
                            <li className="page-item" onClick={() => this.getNextPage()}>
                                <a className="page-link" title="Next"><i className="material-icons keyboard_arrow_right">keyboard_arrow_right</i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}



// EXPORT THE COMPONENT BODY
// export default Fish;
export default connect(
    "auth_state", actions)
(withRouter(Fish2));
