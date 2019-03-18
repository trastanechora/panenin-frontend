// LIST IMPORT MODULE
import React, { Component } from 'react';
import '../css/style.css';


// COMPONENT BODY
class Menubar extends Component {
  render() {
    return (
        <div class="container row menu-display">
            <div class="menu-item active">
                <div class="menu-image"><img src={require("../media/ico/menu/wheat.png")} alt="" /></div>
                <div class="menu-text">Pokok</div>
            </div>
            <div class="menu-item">
                <div class="menu-image"><img src={require("../media/ico/menu/fruit.png")} alt="" /></div>
                <div class="menu-text">Buah</div>
            </div>
            <div class="menu-item">
                <div class="menu-image"><img src={require("../media/ico/menu/vegetable.png")} alt="" /></div>
                <div class="menu-text">Sayuran</div>
            </div>
            <div class="menu-item">
                <div class="menu-image"><img src={require("../media/ico/menu/fish.png")} alt="" /></div>
                <div class="menu-text">Ikan Laut</div>
            </div>
            <div class="menu-item">
                <div class="menu-image"><img src={require("../media/ico/menu/salmon.png")} alt="" /></div>
                <div class="menu-text">Ikan Tawar</div>
            </div>
            <div class="menu-item">
                <div class="menu-image"><img src={require("../media/ico/menu/chicken.png")} alt="" /></div>
                <div class="menu-text">Ayam</div>
            </div>
            <div class="menu-item">
                <div class="menu-image"><img src={require("../media/ico/menu/eggs.png")} alt="" /></div>
                <div class="menu-text">Telur</div>
            </div>
            <div class="menu-item">
                <div class="menu-image"><img src={require("../media/ico/menu/cow.png")} alt="" /></div>
                <div class="menu-text">Sapi</div>
            </div>
            <div class="menu-item">
                <div class="menu-image"><img src={require("../media/ico/menu/sheep.png")} alt="" /></div>
                <div class="menu-text">Kambing</div>
            </div>
            <div class="menu-item">
                <div class="menu-image"><img src={require("../media/ico/menu/growth.png")} alt="" /></div>
                <div class="menu-text">Bibit</div>
            </div>
            <div class="menu-item">
                <div class="menu-image"><img src={require("../media/ico/menu/fertilizer.png")} alt="" /></div>
                <div class="menu-text">Pupuk</div>
            </div>
            <div class="menu-item">
                <div class="menu-image"><img src={require("../media/ico/menu/truck.png")} alt="" /></div>
                <div class="menu-text">Driver</div>
            </div>
        </div>
    );
  }
}

// EXPORT THE COMPONENT BODY
export default Menubar;
