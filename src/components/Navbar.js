// LIST IMPORT MODULE
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../css/bootstrap.min.css';
import '../css/style.css';
import { actions, store } from '../Store';
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";

// var width = "width: 100%"

// COMPONENT BODY
class Navbar extends Component {
    changeStateTrue = () => {
        store.setState({auth_state: true});
        // console.log(this.props.auth_state)
    };
    changeStateFalse = () => {
        store.setState({auth_state: false});
        // console.log(this.props.auth_state)
    };
    render() {
        // console.log("cek is_login", this.props.is_login)
        return (
            <div className="row navbar">
                <div className="col-md-2">
                    <Link to="/" onClick={() => this.props.setHome()}>
                        <img className="logo-panenin" src={require("../media/logo/logo2.png")} alt="" />
                    </Link>
                </div>
                <div className="col-md-3">
                    {/* <select name="" id="" className="btn btn-outline-success login" style={{ width: '100%' }}>
                        <option value="KATEGORI">KATEGORI</option>
                    </select>
                    <select onChange={e => this.props.setField(e)} name="add_type" id="" className="form-control"> */}
                    <select name="" id="" className="btn btn-outline-success login" style={{ width: '100%' }}>
                        <option value="" disabled selected="selected">-- TIPE PRODUK --</option>
                        <option value="Pokok" disabled>--- Pokok ---</option>
                        <option value="Padi">Padi</option>
                        <option value="Jagung">Jagung</option>
                        <option value="Gandum">Gandum</option>
                        <option value="Tebu">Tebu</option>
                        <option value="Sagu">Sagu</option>
                        <option value="Singkong">Singkong</option>
                        <option value="Kentang">Kentang</option>

                        <option value="Pokok" disabled>--- Buah ---</option>
                        <option value="Anggur">Anggur</option>
                        <option value="Apel">Apel</option>
                        <option value="Alpukat">Alpukat</option>
                        <option value="Belimbing">Belimbing</option>
                        <option value="Blewah">Blewah</option>
                        <option value="Coklat">Coklat</option>
                        <option value="Delima">Delima</option>
                        <option value="Duku">Duku</option>
                        <option value="Durian">Durian</option>
                        <option value="Jeruk">Jeruk</option>
                        <option value="Kedondong">Kedondong</option>
                        <option value="Kelapa">Kelapa</option>
                        <option value="Kelengkeng">Kelengkeng</option>
                        <option value="Kiwi">Kiwi</option>
                        <option value="Mangga">Mangga</option>
                        <option value="Manggis">Manggis</option>
                        <option value="Markisa">Markisa</option>
                        <option value="Matoa">Matoa</option>
                        <option value="Melon">Melon</option>
                        <option value="Nanas">Nanas</option>
                        <option value="Nangka">Nangka</option>
                        <option value="Naga">Naga</option>
                        <option value="Pepaya">Pepaya</option>
                        <option value="Pir">Pir</option>
                        <option value="Pisang">Pisang</option>
                        <option value="Rambutan">Rambutan</option>
                        <option value="Salak">Salak</option>
                        <option value="Sawo">Sawo</option>
                        <option value="Sirsak">Sirsak</option>
                        <option value="Srikaya">Srikaya</option>

                        <option value="Pokok" disabled>--- Sayuran ---</option>
                        <option value="Bawang Putih">Bawang Putih</option>
                        <option value="Bawang Merah">Bawang Merah</option>
                        <option value="Bayam">Bayam</option>
                        <option value="Buncis">Buncis</option>
                        <option value="Brokoli">Brokoli</option>
                        <option value="Daun Bawang">Daun Bawang</option>
                        <option value="Daun Seledri">Daun Seledri</option>
                        <option value="Jagung">Jagung</option>
                        <option value="Jamur">Jamur</option>
                        <option value="Jengkol">Jengkol</option>
                        <option value="Kacang Hijau">Kacang Hijau</option>
                        <option value="Kacang Panjang">Kacang Panjang</option>
                        <option value="Kacang Tanah">Kacang Tanah</option>
                        <option value="Kangkung">Kangkung</option>
                        <option value="Kecambah">Kecambah</option>
                        <option value="Kentang">Kentang</option>
                        <option value="Ketumbar">Ketumbar</option>
                        <option value="Kubis">Kubis</option>
                        <option value="Labu">Labu</option>
                        <option value="Lada">Lada</option>
                        <option value="Paprika">Paprika</option>
                        <option value="Sawi">Sawi</option>
                        <option value="Selada">Selada</option>
                        <option value="Terung">Terung</option>
                        <option value="Timun">Timun</option>
                        <option value="Tomat">Tomat</option>
                        <option value="Wortel">Wortel</option>
                        
                        <option value="Ikan Laut" disabled>--- Ikan Laut ---</option>
                        <option value="Salmon">Salmon</option>

                        <option value="Ikan Tawar" disabled>--- Ikan Tawar ---</option>                                             
                        <option value="Lele">Lele</option>

                        <option value="Ayam" disabled>--- Ayam ---</option>
                        <option value="Ayam">Ayam</option>
                        <option value="Bebek">Bebek</option>
                        <option value="Telur">Telur</option>

                        <option value="Sapi" disabled>--- Sapi ---</option>
                        <option value="Sapi">Sapi</option>
                        <option value="Daging Sapi">Daging Sapi</option>
                        <option value="Susu">Susu</option>

                        <option value="Kambing" disabled>--- Kambing ---</option>
                        <option value="Kambing">Kambing</option>
                        <option value="Daging Kambing">Daging Kambing</option>
                        
                        <option value="Lain" disabled>--- Lain-Lain ---</option>
                        <option value="Bibit">Bibit</option>
                        <option value="Pupuk">Pupuk</option>
                    </select>
                    {/* <button type="button" className="btn btn-outline-success login" style={{ width: '100%' }} data-toggle="modal" data-target="#myModal">KATEGORI</button> */}
                </div>
                {/* <!-- <div className="col-md-3"><input type="text" className="col-12"></div> --> */}
                <div className="col-md-3"><input className="form-control mr-sm-2 search" type="search" placeholder="Cari" aria-label="Search" /></div>
                <div className="col-md-4" id="register-btn" style={{ display: (this.props.is_login) ? "none" : "inline-block" }}>
                    <Link to="/auth" className="btn btn-outline-success login" onClick={() => this.changeStateFalse()}>MASUK</Link>
                    <Link to="/auth" className="btn btn-outline-success" onClick={() => this.changeStateTrue()}>DAFTAR</Link>
                </div>
                <div className="col-md-4" id="register-btn" style={{ display: (this.props.is_login) ? "inline-block" : "none" }}>
                    <Link to="/" className="btn btn-outline-success login" onClick={() => this.props.postLogout()}>KELUAR</Link>
                    <Link to="/profile" className="btn btn-outline-success">PROFILE SAYA</Link>
                    {/* <Link to="/profile" className="btn btn-outline-success">PROFILE SAYA {this.props.current_username}</Link> */}
                </div>
                {/* <!-- <div className="col-md-2" id="login-btn">LOGIN</div> --> */}
            </div>
        );
    }
}

// EXPORT THE COMPONENT BODY
// export default Navbar;
export default connect(
    "auth_state, is_login, current_username", actions)
(withRouter(Navbar));
