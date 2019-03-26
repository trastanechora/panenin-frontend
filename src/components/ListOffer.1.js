import React from 'react';
import { Link } from "react-router-dom";
import { actions, store } from '../Store';
import '../css/bootstrap.min.css';
import '../css/style.css';

// const redirect = () => {
//     // this.props.history.replace("/");
//     console.log("testing redirect")
//     return <Redirect to={{ pathname: "/detail" }} />;
//     // console.log(this)
// };

const ListOffer = props => {
    return (
        <div class="container wrapper-content-description">
            <div class="row">
                <div class="col-md-6">Penawar:</div>
                <div class="col-md-6 time">{props.date}</div>
            </div>
            <div class="row">
                <div class="col-md-6"><strong>{props.buyer}</strong></div>
                <div class="col-md-6 time"><strong>{props.destination}</strong></div>
            </div>
            <div class="col-md-12 offer">
                <div class="col-md-12"><strong>Rp. {props.price},-</strong></div>
                <div class="col-md-12">{props.description}</div>
            </div>
            <div class="row">
                {/* Separator content and its attribute */}
                <div class="col-md-9 row">
                    <div class="col-md-12">Terima tawaran ini?</div>
                        <div class="col-md-12">
                            <form action="#" class="row container">
                                <div>
                                    <div class="form-check">
                                        <label class="form-check-label">
                                        <input class="form-check-input" type="radio" onChange={e => this.props.setField(e)} name="respond_offer" id="exampleRadios1" value="accepted" /> Terima
                                        <span class="circle">
                                            <span class="check"></span>
                                        </span>
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <label class="form-check-label">
                                        <input class="form-check-input" type="radio" onChange={e => this.props.setField(e)} name="respond_offer" id="exampleRadios2" value="rejected" checked /> Tolak
                                        <span class="circle">
                                            <span class="check"></span>
                                        </span>
                                        </label>
                                    </div>
                                    <div class="col-md-8">
                                        <input type="submit" name="" id="response-offer" className="btn btn-success" value="Kirim" />
                                    </div>
                                </div>

                                {/* TEST */}
                                {/* TEST */}
                                
                            </form>
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
                    <div class="col-md-6 time">{props.date}</div>
                </div>
                <div class="row">
                    <div class="col-md-6"><strong>{props.buyer}</strong></div>
                    <div class="col-md-6 time"><strong>{props.destination}</strong></div>
                </div>
                <div class="col-md-12 offer accepted">
                    <div class="col-md-12"><strong>Rp. {props.price},-</strong></div>
                    <div class="col-md-12">{props.description}</div>
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
                    <div class="col-md-6 time">{props.date}</div>
                </div>
                <div class="row">
                    <div class="col-md-6"><strong>{props.buyer}</strong></div>
                    <div class="col-md-6 time"><strong>{props.destination}</strong></div>
                </div>
                <div class="col-md-12 offer declined">
                    <div class="col-md-12"><strong>Rp. {props.price},-</strong></div>
                    <div class="col-md-12">{props.description}</div>
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
};


export default ListOffer;