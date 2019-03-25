import React from 'react';
import { Link } from "react-router-dom";
import '../css/bootstrap.min.css';
import '../css/style.css';

// const redirect = () => {
//     // this.props.history.replace("/");
//     console.log("testing redirect")
//     return <Redirect to={{ pathname: "/detail" }} />;
//     // console.log(this)
// };

const ListOffer = props => {
    if (props.status === "WAITING") {
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
            <div class="col-md-12 offer declined">
                <div class="col-md-12"><strong>Rp. {props.price},-</strong></div>
                <div class="col-md-12">{props.description}</div>
            </div>
            <div class="row">
                {/* Controller for Seller */}
                <div class="col-md-9 row">
                    <div class="col-md-12">Terima tawaran ini?</div>
                        <div class="col-md-12">
                            <form action="#" class="row container">
                                <div class="col-md-2">
                                    <input type="radio" class="form-check-input" id="materialUnchecked" name="materialExampleRadios" />
                                    <label class="form-check-label" for="materialUnchecked">Terima</label>
                                </div>
                                
                                <div class="col-md-2">
                                    <input type="radio" class="form-check-input" id="materialChecked" name="materialExampleRadios" checked />
                                    <label class="form-check-label" for="materialChecked">Tolak</label>
                                </div>
                                <div class="col-md-8">
                                    <input type="submit" name="" id="response-offer" value="Kirim" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-md-2">
                    </div>
                    <div class="col-md-1"></div>
                </div>
                {/* Controller for Seller */}
        </div>
        )
    } else {
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
                <div class="col-md-12 offer declined">
                    <div class="col-md-12"><strong>Rp. {props.price},-</strong></div>
                    <div class="col-md-12">{props.description}</div>
                </div>
                    {/* Controller for Success Buyer */}
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
    // return (
    //     <div class="container wrapper-content-description">
    //         <div class="row">
    //             <div class="col-md-6">Penawar:</div>
    //             <div class="col-md-6 time">{props.date}</div>
    //         </div>
    //         <div class="row">
    //             <div class="col-md-6"><strong>{props.buyer}</strong></div>
    //             <div class="col-md-6 time"><strong>{props.destination}</strong></div>
    //         </div>
    //         <div class="col-md-12 offer declined">
    //             <div class="col-md-12"><strong>Rp. {props.price},-</strong></div>
    //             <div class="col-md-12">{props.description}</div>
    //         </div>
    //         <div class="row">
    //             {/* Controller for Seller */}
    //             <div class="col-md-9 row">
    //                 <div class="col-md-12">Terima tawaran ini?</div>
    //                     <div class="col-md-12">
    //                         <form action="#" class="row container">
    //                             <div class="col-md-2">
    //                                 <input type="radio" class="form-check-input" id="materialUnchecked" name="materialExampleRadios" />
    //                                 <label class="form-check-label" for="materialUnchecked">Terima</label>
    //                             </div>
                                
    //                             <div class="col-md-2">
    //                                 <input type="radio" class="form-check-input" id="materialChecked" name="materialExampleRadios" checked />
    //                                 <label class="form-check-label" for="materialChecked">Tolak</label>
    //                             </div>
    //                             <div class="col-md-8">
    //                                 <input type="submit" name="" id="response-offer" value="Kirim" />
    //                             </div>
    //                         </form>
    //                     </div>
    //                 </div>
    //                 <div class="col-md-2">
    //                 </div>
    //                 <div class="col-md-1"></div>
    //             </div>
    //             {/* Controller for Seller */}

    //             {/* Controller for Success Buyer */}
    //             <div class="row">
    //                 <div class="col-md-9">
    //                         <div class="col-md-12">Selamat, tawaran anda mendapat tanggapan positif dari penjual!</div>
    //                         <div class="col-md-12 row">
    //                             <div class="col-md-12">Silahkan lengkapi pembayaran di sini:</div>
    //                             <div class="col-md-12">
    //                                 <input type="submit" name="" id="response-offer" value="ke Transaksi" />
    //                             </div>
    //                         </div>
    //                 </div>
    //                 <div class="col-md-2">
    //                     <div class="status status-accepted">Diterima</div>
    //                 </div>
    //                 <div class="col-md-1"></div>
    //             </div>
    //             {/* Controller for Success Buyer */}

    //             {/* Controller for Fail Buyer */}
    //             <div class="row">
    //                 <div class="col-md-9"></div>
    //                 <div class="col-md-2">
    //                     <div class="status status-declined">Ditolak</div>
    //                 </div>
    //                 <div class="col-md-1"></div>
    //             </div>
    //             {/* Controller for Fail Buyer */}
    //     </div>
    // );
};


export default ListOffer;