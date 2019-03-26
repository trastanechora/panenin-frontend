import React, { Component }  from 'react';
import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from '../Store';
import { withRouter } from "react-router-dom";
import '../css/bootstrap.min.css';
import '../css/style.css';
import axios from "axios";

// const redirect = () => {
//     // this.props.history.replace("/");
//     console.log("testing redirect")
//     return <Redirect to={{ pathname: "/detail" }} />;
//     // console.log(this)
// };

class ListOffer extends Component {
    constructor (props) {
        super(props);
          this.state = {
            respond_offer: ""
          };
      };

    respondOffer = async (id, command) => {
        console.log("test respond offer start")
        const url = "http://localhost:8010/proxy/api/offers/" + id
        // console.log("test url for put offer", url)
        // console.log("test command for put offer", command)
        const token = localStorage.getItem('token');
        // console.log("url", url)
        axios({
            method: 'put',
            data: {
                flag: command
            },
            url: url,
            headers: {
            Authorization: 'Bearer ' + token
            }
        }).then(function(response) {
                console.log("Offer telah berhasil direspond", response)
            }).catch(function(error) {
                    console.log("Offer telah gagal direspond", error)
            });
        console.log("test respond offer finish")
    }

    render() {
        // console.log("test props", this.props.flag)
        if (this.props.flag == "rejected") {
            return (
                <div>
                    {/* Controller for Fail Buyer */}
                    <div class="row">
                        <div class="col-md-6">Penawar:</div>
                        <div class="col-md-6 time">{this.props.date}</div>
                    </div>
                    <div class="row">
                        <div class="col-md-6"><strong>{this.props.buyer}</strong></div>
                        <div class="col-md-6 time"><strong>{this.props.destination}</strong></div>
                    </div>
                    <div class="col-md-12 offer declined">
                        <div class="col-md-12"><strong>Rp. {this.props.price},-</strong></div>
                        <div class="col-md-12">{this.props.description}</div>
                    </div>
                    <div class="row">
                        <div class="col-md-9"></div>
                        <div class="col-md-2">
                            <div class="status status-declined">Ditolak</div>
                        </div>
                        <div class="col-md-1"></div>
                    </div>
                    {/* Controller for Fail Buyer */}
                </div>
            )
        } else if (this.props.flag == "accepted") {
            return (
                <div>
                    {/* Controller for Success Buyer */}
                    <div class="row">
                        <div class="col-md-6">Penawar:</div>
                        <div class="col-md-6 time">{this.props.date}</div>
                    </div>
                    <div class="row">
                        <div class="col-md-6"><strong>{this.props.buyer}</strong></div>
                        <div class="col-md-6 time"><strong>{this.props.destination}</strong></div>
                    </div>
                    <div class="col-md-12 offer accepted">
                        <div class="col-md-12"><strong>Rp. {this.props.price},-</strong></div>
                        <div class="col-md-12">{this.props.description}</div>
                    </div>
                    <div class="row">
                        <div class="col-md-9">
                                <div class="col-md-12">Selamat, tawaran anda mendapat tanggapan positif dari penjual!</div>
                                <div class="col-md-12 row">
                                    <div class="col-md-12">Silahkan lengkapi pembayaran di sini:</div>
                                    <div class="col-md-12">
                                        <input type="submit" name="" id="response-offer" value="ke Transaksi" />
                                    </div>
                                </div>
                        </div>
                        <div class="col-md-2">
                            <div class="status status-accepted">Diterima</div>
                        </div>
                        <div class="col-md-1"></div>
                    </div>
                    {/* Controller for Success Buyer */}
                </div>
            )
        } else {
            return (
                <div>
                <div class="row">
                    <div class="col-md-6">Penawar:</div>
                    <div class="col-md-6 time">{this.props.date}</div>
                </div>
                <div class="row">
                    <div class="col-md-6"><strong>{this.props.buyer}</strong></div>
                    <div class="col-md-6 time"><strong>{this.props.destination}</strong></div>
                </div>
                <div class="col-md-12 offer">
                    <div class="col-md-12"><strong>Rp. {this.props.price},-</strong></div>
                    <div class="col-md-12">{this.props.description}</div>
                </div>
                <div class="row">
                    {/* Separator content and its attribute */}
                    <div class="col-md-9 row">
                        <div class="col-md-12">Terima tawaran ini?</div>
                            <div class="col-md-12">
                                <div class="col-md-8 row">
                                    {/* <input type="submit" name="" id="response-offer" className="btn btn-success" value="Kirim" /> */}
                                    <span className="col-md-3"><button onClick={() => this.respondOffer(this.props.id, "accepted")} className="btn btn-danger">Tolak</button></span>
                                    <span className="col-md-3"><button onClick={() => this.respondOffer(this.props.id, "rejected")} className="btn btn-success">Terima</button></span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2"></div>
                        <div class="col-md-1"></div>
                    </div>
                </div>
            );
        }

        return (
            <div class="container wrapper-content-description">
                <div class="row">
                    <div class="col-md-6">Penawar:</div>
                    <div class="col-md-6 time">{this.props.date}</div>
                </div>
                <div class="row">
                    <div class="col-md-6"><strong>{this.props.buyer}</strong></div>
                    <div class="col-md-6 time"><strong>{this.props.destination}</strong></div>
                </div>
                <div class="col-md-12 offer">
                    <div class="col-md-12"><strong>Rp. {this.props.price},-</strong></div>
                    <div class="col-md-12">{this.props.description}</div>
                </div>
                <div class="row">
                    {/* Separator content and its attribute */}
                    <div class="col-md-9 row">
                        <div class="col-md-12">Terima tawaran ini?</div>
                            <div class="col-md-12">
                                <div class="col-md-8 row">
                                    {/* <input type="submit" name="" id="response-offer" className="btn btn-success" value="Kirim" /> */}
                                    <span className="col-md-3"><button onClick={() => this.respondOffer(this.props.id, "rejected")} className="btn btn-danger">Tolak</button></span>
                                    <span className="col-md-3"><button onClick={() => this.respondOffer(this.props.id, "accepted")} className="btn btn-success">Terima</button></span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2">
                        </div>
                        <div class="col-md-1"></div>
                    </div>
                    {/* Controller for Seller */}

                    {/* Controller for Success Buyer */}
                    <div class="row">
                        <div class="col-md-6">Penawar:</div>
                        <div class="col-md-6 time">{this.props.date}</div>
                    </div>
                    <div class="row">
                        <div class="col-md-6"><strong>{this.props.buyer}</strong></div>
                        <div class="col-md-6 time"><strong>{this.props.destination}</strong></div>
                    </div>
                    <div class="col-md-12 offer accepted">
                        <div class="col-md-12"><strong>Rp. {this.props.price},-</strong></div>
                        <div class="col-md-12">{this.props.description}</div>
                    </div>
                    <div class="row">
                        <div class="col-md-9">
                                <div class="col-md-12">Selamat, tawaran anda mendapat tanggapan positif dari penjual!</div>
                                <div class="col-md-12 row">
                                    <div class="col-md-12">Silahkan lengkapi pembayaran di sini:</div>
                                    <div class="col-md-12">
                                        <input type="submit" name="" id="response-offer" value="ke Transaksi" />
                                    </div>
                                </div>
                        </div>
                        <div class="col-md-2">
                            <div class="status status-accepted">Diterima</div>
                        </div>
                        <div class="col-md-1"></div>
                    </div>
                    {/* Controller for Success Buyer */}

                    {/* Controller for Fail Buyer */}
                    <div class="row">
                        <div class="col-md-6">Penawar:</div>
                        <div class="col-md-6 time">{this.props.date}</div>
                    </div>
                    <div class="row">
                        <div class="col-md-6"><strong>{this.props.buyer}</strong></div>
                        <div class="col-md-6 time"><strong>{this.props.destination}</strong></div>
                    </div>
                    <div class="col-md-12 offer declined">
                        <div class="col-md-12"><strong>Rp. {this.props.price},-</strong></div>
                        <div class="col-md-12">{this.props.description}</div>
                    </div>
                    <div class="row">
                        <div class="col-md-9"></div>
                        <div class="col-md-2">
                            <div class="status status-declined">Ditolak</div>
                        </div>
                        <div class="col-md-1"></div>
                    </div>
                    {/* Controller for Fail Buyer */}
            </div>
        );
    }
};


// export default ListOffer;
export default connect(
    "", actions)
    (withRouter(ListOffer));