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
    // console.log("debug props value", props)
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
                <div class="col-md-9"></div>
                <div class="col-md-2">
                    <div class="status status-declined">{props.status}</div>
                </div>
                <div class="col-md-1"></div>
            </div>
        </div>
    );
};


export default ListOffer;