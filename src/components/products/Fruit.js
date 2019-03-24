// LIST IMPORT MODULE
import React, { Component } from 'react';
import { connect } from "unistore/react";
import { actions } from '../../Store';
import { withRouter } from "react-router-dom";
import axios from 'axios';
import '../../css/bootstrap.min.css';
import '../../css/style.css';
import ListProduct from '../ListProduct'

// COMPONENT BODY
class Fruit extends Component {
    constructor (props) {
        super(props);
          this.state = {
            ListProduct: []
        };
    };

    componentDidMount = async () => {
        const self = this;
        // console.log("test get product")
        await axios
        .get("http://0.0.0.0:5555/api/public/products")
        .then(function(response) {
            // console.log("Sukses", response.data)
            self.setState({ListProduct: response.data.data});
        })
        .catch(function(error) {
            console.log("Gagal axios fruit", error);
        });
        console.log("Local state from fruit", this.state.ListProduct)
    }

    // redirectDetail = () => {
    //     this.props.history.replace("/detail");
    // };

    render() {
        return (
            <div className="container content-body">
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
                        <div className="col-md-4 product-image"><img src={require("../../media/ico/menu/fruit.png")} alt="" /></div>
                        <div className="col-md-8">
                            {/* TEST */}
                            <div className="row">
                                <div className="col-md-12">
                                {/* =========== START of Statistic Card =========== */}
                                    <div className="card card-chart">
                                        <div className="card-header card-header-success" id="card-info">
                                            <div className="ct-chart" id="dailySalesChart"><h4 className="card-title">Statistika Dagang Bulanan</h4></div>
                                        </div>
                                        <div className="card-body">
                                            <table className="table">
                                                <thead className="text-success">
                                                    <th> 
                                                        Tipe Produk
                                                    </th>
                                                    <th>
                                                        Rata-rata Harga / KG
                                                    </th>
                                                    <th>
                                                    </th>
                                                    <th>
                                                        Kuantitas Terjual (KG)
                                                    </th>
                                                    <th>
                                                    </th>
                                                </thead>
                                                <tbody className="">
                                                    <th>
                                                    </th>
                                                    <th>Bulan lalu</th>
                                                    <th>Bulan ini</th>
                                                    <th>Bulan lalu</th>                                     
                                                    <th>Bulan ini</th>                          
                                                <tr>
                                                    <td>Padi</td>     
                                                    <td>Rp. 4.874,-</td>
                                                    <td>Rp. 5.255,-</td>                  
                                                    <td>464.323 KG</td>
                                                    <td>123.658 KG</td>
                                                </tr>
                                                <tr>
                                                    <td>Jagung</td>     
                                                    <td>Rp. 6.523,-</td>
                                                    <td>Rp. 5.241,-</td>                  
                                                    <td>164.323 KG</td>
                                                    <td>22.658 KG</td>
                                                </tr>
                                                <tr>
                                                    <td>Kentang</td>     
                                                    <td>Rp. 14.587,-</td>
                                                    <td>Rp. 15.345,-</td>                  
                                                    <td>264.234 KG</td>
                                                    <td>14.658 KG</td>
                                                </tr>
                                                <tr>
                                                    <td>Tebu</td>     
                                                    <td>Rp. 7.490,-</td>
                                                    <td>Rp. 8.223,--</td>                  
                                                    <td>314.323 KG</td>
                                                    <td>94.658 KG</td>
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
                                <h4 className="card-title mt-0"> Daftar Produk Panen Buah yang Tersedia</h4>
                                <p className="card-category"> Klik tombol "Lihat" pada list di bawah untuk info lebih detail</p>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-hover">
                                    <thead className="text-success">
                                        <th>No</th>
                                        <th>Nama</th>
                                        <th>Kategori</th>
                                        <th>Tipe</th>
                                        <th>Lokasi</th>
                                        <th>Kuantitas</th>
                                        <th>Harga</th>
                                        <th>Link</th>
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
