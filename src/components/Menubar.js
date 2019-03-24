/* eslint-disable react/prop-types */
// LIST IMPORT MODULE
import React, { Component } from 'react';
import { connect } from "unistore/react";
import { actions, store } from '../Store';
import { withRouter } from "react-router-dom";
import '../css/style.css';


// COMPONENT BODY
class Menubar extends Component {
    printState = () => {
    //     this.props.postLogin().then(()=> {
    //         // this.props.history.replace("/profile");
    //         // return <Redirect to={{ pathname: "/signin" }} />;
    //     }
    // )
    console.log("cek state", this.props.product_state)
};

    render() {
    return (
        <ul className="container row menu-display shadow">
            {/* <li className="menu-item active"> */}
            <li className={ (this.props.product_state === "cores") ? "menu-item active" : "menu-item"} onClick={() => store.setState({ product_state: "cores" })}>
                <div className="menu-image"><img src={require("../media/ico/menu/wheat.png")} alt="" /></div>
                <div className="menu-text">Pokok</div>
            </li>
            <li className={ (this.props.product_state === "fruits") ? "menu-item active" : "menu-item"} onClick={() => store.setState({ product_state: "fruits" })}>
                <div className="menu-image"><img src={require("../media/ico/menu/fruit.png")} alt="" /></div>
                <div className="menu-text">Buah</div>
            </li>
            <li className={ (this.props.product_state === "vegetables") ? "menu-item active" : "menu-item"} onClick={() => store.setState({ product_state: "vegetables" })}>
                <div className="menu-image"><img src={require("../media/ico/menu/vegetable.png")} alt="" /></div>
                <div className="menu-text">Sayuran</div>
            </li>
            <li className={ (this.props.product_state === "fish1") ? "menu-item active" : "menu-item"} onClick={() => store.setState({ product_state: "fish1" })}>
                <div className="menu-image"><img src={require("../media/ico/menu/fish.png")} alt="" /></div>
                <div className="menu-text">Ikan Laut</div>
            </li>
            <li className={ (this.props.product_state === "fish2") ? "menu-item active" : "menu-item"} onClick={() => store.setState({ product_state: "fish2" })}>
                <div className="menu-image"><img src={require("../media/ico/menu/salmon.png")} alt="" /></div>
                <div className="menu-text">Ikan Tawar</div>
            </li>
            <li className={ (this.props.product_state === "chickens") ? "menu-item active" : "menu-item"} onClick={() => store.setState({ product_state: "chickens" })}>
                <div className="menu-image"><img src={require("../media/ico/menu/chicken.png")} alt="" /></div>
                <div className="menu-text">Ayam</div>
            </li>
            <li className={ (this.props.product_state === "eggs") ? "menu-item active" : "menu-item"} onClick={() => store.setState({ product_state: "eggs" })}>
                <div className="menu-image"><img src={require("../media/ico/menu/eggs.png")} alt="" /></div>
                <div className="menu-text">Telur</div>
            </li>
            <li className={ (this.props.product_state === "cows") ? "menu-item active" : "menu-item"} onClick={() => store.setState({ product_state: "cows" })}>
                <div className="menu-image"><img src={require("../media/ico/menu/cow.png")} alt="" /></div>
                <div className="menu-text">Sapi</div>
            </li>
            <li className={ (this.props.product_state === "sheeps") ? "menu-item active" : "menu-item"} onClick={() => store.setState({ product_state: "sheeps" })}>
                <div className="menu-image"><img src={require("../media/ico/menu/sheep.png")} alt="" /></div>
                <div className="menu-text">Kambing</div>
            </li>
            <li className={ (this.props.product_state === "corps") ? "menu-item active" : "menu-item"} onClick={() => store.setState({ product_state: "corps" })}>
                <div className="menu-image"><img src={require("../media/ico/menu/growth.png")} alt="" /></div>
                <div className="menu-text">Bibit</div>
            </li>
            <li className={ (this.props.product_state === "fertilizer") ? "menu-item active" : "menu-item"} onClick={() => store.setState({ product_state: "fertilizer" })}>
                <div className="menu-image"><img src={require("../media/ico/menu/fertilizer.png")} alt="" /></div>
                <div className="menu-text">Pupuk</div>
            </li>
            <li className={ (this.props.product_state === "drivers") ? "menu-item active" : "menu-item"} onClick={() => store.setState({ product_state: "drivers" })}>
                <div className="menu-image"><img src={require("../media/ico/menu/truck.png")} alt="" /></div>
                <div className="menu-text">Driver</div>
            </li>
        </ul>
    );
  }
}

// EXPORT THE COMPONENT BODY
// export default Menubar;
export default connect(
"product_state", actions)(withRouter(Menubar));