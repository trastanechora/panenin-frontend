// LIST IMPORT MODULE
import React, { Component } from 'react';
import { connect } from "unistore/react";
import { actions } from '../Store';
import { withRouter } from "react-router-dom";
import '../css/style.css';


// COMPONENT BODY
class Menubar extends Component {
  render() {
    return (
        <ul className="container row menu-display shadow">
            {/* <li className="menu-item active"> */}
            <li className="menu-item">
                <div className="menu-image"><img src={require("../media/ico/menu/wheat.png")} alt="" /></div>
                <div className="menu-text">Pokok</div>
            </li>
            <li className="menu-item">
                <div className="menu-image"><img src={require("../media/ico/menu/fruit.png")} alt="" /></div>
                <div className="menu-text">Buah</div>
            </li>
            <li className="menu-item">
                <div className="menu-image"><img src={require("../media/ico/menu/vegetable.png")} alt="" /></div>
                <div className="menu-text">Sayuran</div>
            </li>
            <li className="menu-item">
                <div className="menu-image"><img src={require("../media/ico/menu/fish.png")} alt="" /></div>
                <div className="menu-text">Ikan Laut</div>
            </li>
            <li className="menu-item">
                <div className="menu-image"><img src={require("../media/ico/menu/salmon.png")} alt="" /></div>
                <div className="menu-text">Ikan Tawar</div>
            </li>
            <li className="menu-item">
                <div className="menu-image"><img src={require("../media/ico/menu/chicken.png")} alt="" /></div>
                <div className="menu-text">Ayam</div>
            </li>
            <li className="menu-item">
                <div className="menu-image"><img src={require("../media/ico/menu/eggs.png")} alt="" /></div>
                <div className="menu-text">Telur</div>
            </li>
            <li className="menu-item">
                <div className="menu-image"><img src={require("../media/ico/menu/cow.png")} alt="" /></div>
                <div className="menu-text">Sapi</div>
            </li>
            <li className="menu-item">
                <div className="menu-image"><img src={require("../media/ico/menu/sheep.png")} alt="" /></div>
                <div className="menu-text">Kambing</div>
            </li>
            <li className="menu-item">
                <div className="menu-image"><img src={require("../media/ico/menu/growth.png")} alt="" /></div>
                <div className="menu-text">Bibit</div>
            </li>
            <li className="menu-item">
                <div className="menu-image"><img src={require("../media/ico/menu/fertilizer.png")} alt="" /></div>
                <div className="menu-text">Pupuk</div>
            </li>
            <li className="menu-item">
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
"", actions)
(withRouter(Menubar));
