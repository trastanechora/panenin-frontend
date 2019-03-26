// LIST IMPORT MODULE
import React, { Component } from 'react';
import { connect } from "unistore/react";
import { actions, store } from '../Store';
import { withRouter } from "react-router-dom";

// COMPONENT BODY
// class PersonalInfoEdit extends Component {
// const AddProduct = props => {
class AddProduct extends Component {
    doAdd = () => {
        this.props.postAdd().then(()=> {
            // console.log("Produk sudah berhasil ditambahkan")
            this.props.history.replace("/profile");
            this.props.updateList();
            // return <Redirect to={{ pathname: "/signin" }} />;
        });
    };
    render() {
        return (
            <div className="card">
                <div className="card-header card-header-danger">
                    <h4 className="card-title">Tambahkan Produk</h4>
                    <p className="card-category">Silahkan mengisi form di bawah ini untuk menambahkan Produk yang ingin Anda jual</p>
                </div>
                <div className="card-body">
                    <form onSubmit={e => e.preventDefault()}>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label className="bmd-label-floating">Nama:</label>
                                    <input onChange={e => this.props.setField(e)} name="add_name" type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="bmd-label-floating">Kategori produk:</label>
                                    <select onChange={e => this.props.setField(e)} name="add_category" id="" className="form-control">
                                        <option value="" disabled selected="selected">-- KATEGORI --</option>
                                        <option value="Pokok">Pokok</option>
                                        <option value="Buah">Buah</option>
                                        <option value="Sayuran">Sayuran</option>
                                        <option value="Ikan1">Ikan Laut</option>
                                        <option value="Ikan2">Ikan Tawar</option>
                                        <option value="Ayam">Ayam</option>
                                        <option value="Telur">Telur</option>
                                        <option value="Sapi">Sapi</option>
                                        <option value="Kambing">Kambing</option>
                                        <option value="Bibit">Bibit</option>
                                        <option value="Pupuk">Pupuk</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="bmd-label-floating">Tipe Produk:</label>
                                    {/* <input onChange={e => this.props.setField(e)} name="add_product_type" type="text" className="form-control" /> */}
                                    <select onChange={e => this.props.setField(e)} name="add_type" id="" className="form-control">
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
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group row">
                                    <div className="col-md-9">
                                    <label className="bmd-label-floating">Kuantitas:</label>
                                        <input onChange={e => this.props.setField(e)} name="add_amount" type="text" className="form-control" />
                                    </div>
                                    <div className="col-md-3">
                                        <label className="bmd-label-floating">Satuan:</label>
                                        <select onChange={e => this.props.setField(e)} name="add_constanta" id="" className="form-control">
                                            <option value="" disabled selected="selected">-- SATUAN --</option>
                                            <option value="KG">KG</option>
                                            <option value="Ekor">Ekor</option>
                                            <option value="Biji">Biji</option>
                                            <option value="Liter">Liter</option>
                                            <option value="Butir">Butir</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="bmd-label-floating">Harga:</label>
                                    <input onChange={e => this.props.setField(e)} name="add_price" type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="bmd-label-floating">Lokasi produk:</label>
                                    <input onChange={e => this.props.setField(e)} name="add_location" type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="bmd-label-floating">Sediakan jasa antar barang?</label>
                                    <select onChange={e => this.props.setField(e)} name="add_delivery" id="" className="form-control">
                                        <option value="" disabled selected="selected">-- ANTAR --</option>
                                        <option value="true">YA</option>
                                        <option value="false">TIDAK</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    {/* // <div className="row">
                    //     <div className="col-md-12">
                    //         <select onChange={e => this.props.setField(e)} name="add_category" id="" classNameName="form-control">
                    //             <option value="KATEGORI" disabled selected="selected">KATEGORI</option>
                    //             <option value="Pokok">Pokok</option>
                    //             <option value="Buah">Buah</option>
                    //             <option value="Sayuran">Sayuran</option>
                    //             <option value="Ikan1">Ikan Laut</option>
                    //             <option value="Ikan2">Ikan Tawar</option>
                    //             <option value="Ayam">Ayam</option>
                    //             <option value="Telur">Telur</option>
                    //             <option value="Sapi">Sapi</option>
                    //             <option value="Kambing">Kambing</option>
                    //             <option value="Bibit">Bibit</option>
                    //             <option value="Pupuk">Pupuk</option>
                    //         </select>
                    //     </div>
                    // </div> */}
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <div className="form-group">
                                    <label className="bmd-label-floating"> Deskripsi produk:</label>
                                    <textarea onChange={e => this.props.setField(e)} name="add_description" className="form-control" rows="5"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-danger" onClick={() => this.doAdd()}>Lelang!</button>
                    <div className="clearfix"></div>
                </form>
            </div>
        </div>
        )
    }
}

// EXPORT THE COMPONENT BODY
// export default AddProduct; 
export default connect(
    "", actions)
    (withRouter(AddProduct));
