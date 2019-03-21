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
                                    {/* <div className="card card-chart">
                                        <div className="card-header card-header-success" id="card-info">
                                            <div className="ct-chart" id="dailySalesChart"><h4 className="card-title">Statistika Dagang Bulanan</h4></div>
                                        </div>
                                        <div className="card-body">
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
                                        <div className="card-footer">
                                            <div className="stats">
                                                <i className="material-icons">access_time</i> updated 4 minutes ago
                                            </div>
                                        </div>
                                    </div>    */}

                                    {/* TEST */}

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
                                <p className="card-category"> Klik salah satu pada list di bawah untuk info lebih detail</p>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-hover">
                                    <thead className="text-success">
                                        <th>
                                        No
                                        </th>
                                        <th>
                                        Nama
                                        </th>
                                        <th>
                                        Kategori
                                        </th>
                                        <th>
                                        Tipe
                                        </th>
                                        <th>
                                        Lokasi
                                        </th>
                                        <th>
                                        Kuantitas
                                        </th>
                                        <th>
                                        Harga
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
                                        <td>
                                            $36,738
                                        </td>
                                        <td>
                                            $36,738
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>
                                            2
                                        </td>
                                        <td>
                                            Minerva Hooper
                                        </td>
                                        <td>
                                            Curaçao
                                        </td>
                                        <td>
                                            Sinaai-Waas
                                        </td>
                                        <td>
                                            $23,789
                                        </td>
                                        <td>
                                            $36,738
                                        </td>
                                        <td>
                                            $36,738
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>
                                            3
                                        </td>
                                        <td>
                                            Sage Rodriguez
                                        </td>
                                        <td>
                                            Netherlands
                                        </td>
                                        <td>
                                            Baileux
                                        </td>
                                        <td>
                                            $56,142
                                        </td>
                                        <td>
                                            $36,738
                                        </td>
                                        <td>
                                            $36,738
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>
                                            4
                                        </td>
                                        <td>
                                            Philip Chaney
                                        </td>
                                        <td>
                                            Korea, South
                                        </td>
                                        <td>
                                            Overland Park
                                        </td>
                                        <td>
                                            $38,735
                                        </td>
                                        <td>
                                            $36,738
                                        </td>
                                        <td>
                                            $36,738
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>
                                            5
                                        </td>
                                        <td>
                                            Doris Greene
                                        </td>
                                        <td>
                                            Malawi
                                        </td>
                                        <td>
                                            Feldkirchen in Kärnten
                                        </td>
                                        <td>
                                            $63,542
                                        </td>
                                        <td>
                                            $36,738
                                        </td>
                                        <td>
                                            $36,738
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>
                                            6
                                        </td>
                                        <td>
                                            Doris Greene
                                        </td>
                                        <td>
                                            Malawi
                                        </td>
                                        <td>
                                            Feldkirchen in Kärnten
                                        </td>
                                        <td>
                                            $63,542
                                        </td>
                                        <td>
                                            $36,738
                                        </td>
                                        <td>
                                            $36,738
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>
                                            7
                                        </td>
                                        <td>
                                            Mason Porter
                                        </td>
                                        <td>
                                            Chile
                                        </td>
                                        <td>
                                            Gloucester
                                        </td>
                                        <td>
                                            $78,615
                                        </td>
                                        <td>
                                            $36,738
                                        </td>
                                        <td>
                                            $36,738
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>
                                            8
                                        </td>
                                        <td>
                                            Mason Porter
                                        </td>
                                        <td>
                                            Chile
                                        </td>
                                        <td>
                                            Gloucester
                                        </td>
                                        <td>
                                            $78,615
                                        </td>
                                        <td>
                                            $36,738
                                        </td>
                                        <td>
                                            $36,738
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>
                                            9
                                        </td>
                                        <td>
                                            Mason Porter
                                        </td>
                                        <td>
                                            Chile
                                        </td>
                                        <td>
                                            Gloucester
                                        </td>
                                        <td>
                                            $78,615
                                        </td>
                                        <td>
                                            $36,738
                                        </td>
                                        <td>
                                            $36,738
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>
                                            10
                                        </td>
                                        <td>
                                            Mason Porter
                                        </td>
                                        <td>
                                            Chile
                                        </td>
                                        <td>
                                            Gloucester
                                        </td>
                                        <td>
                                            $78,615
                                        </td>
                                        <td>
                                            $36,738
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
