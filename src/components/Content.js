// LIST IMPORT MODULE
import React, { Component } from 'react';
import '../css/style.css';

// COMPONENT BODY
class Menubar extends Component {
  render() {
    return (
        <div class="row content-area">
                <div class="container content-body">
                        <div class="container content-body">
                                <div class="product-title">
                                    <strong>Hasil Panen Pokok</strong> <br />
                                    {/* <!-- <small>Padi</small> --> */}
                                </div>
                                <div class="row content-info">
                                    <div class="col-md-4 product-image"><img src={require("../media/ico/menu/wheat.png")} alt="" /></div>
                                    <div class="col-md-8">
                                        <div class="header-conent container row">
                                            <div class="col-md-2 th-content"><strong><i>Tipe Produk</i></strong></div>
                                            <div class="col-md-5">
                                                <div class="col-md-12 th-content"><strong><i>Rata-rata Harga / KG</i></strong></div>
                                                <div class="col-md-12 row">
                                                    <div class="col-md-6"><strong><i>Bulan lalu</i></strong></div>
                                                    <div class="col-md-6"><strong><i>Bulan ini</i></strong></div>
                                                </div>
                                            </div>
                                            <div class="col-md-5">
                                                <div class="col-md-12 th-content"><strong><i>Kuantitas Terjual (KG)</i></strong></div>
                                                <div class="col-md-12 row">
                                                    <div class="col-md-6"><strong><i>Bulan lalu</i></strong></div>
                                                    <div class="col-md-6"><strong><i>Bulan ini</i></strong></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="container row">
                                            <div class="col-md-2">Padi</div>
                                            <div class="col-md-2">Rp. 4.874,-</div>
                                            <div class="col-md-2">Rp. 5.255,</div>
                                            <div class="col-md-1"></div>
                                            <div class="col-md-2">464.323 KG</div>
                                            <div class="col-md-2">123.658 KG</div>
                                        </div>
                                        <div class="container row">
                                            <div class="col-md-2">Jagung</div>
                                            <div class="col-md-2">Rp. 6.523,-</div>
                                            <div class="col-md-2">Rp. 5.241,</div>
                                            <div class="col-md-1"></div>
                                            <div class="col-md-2">164.323 KG</div>
                                            <div class="col-md-2">22.658 KG</div>
                                        </div>
                                        <div class="container row">
                                            <div class="col-md-2">Kentang</div>
                                            <div class="col-md-2">Rp. 14.587,-</div>
                                            <div class="col-md-2">Rp. 15.345,</div>
                                            <div class="col-md-1"></div>
                                            <div class="col-md-2">264.234 KG</div>
                                            <div class="col-md-2">14.658 KG</div>
                                        </div>
                                        <div class="container row">
                                            <div class="col-md-2">Tebu</div>
                                            <div class="col-md-2">Rp. 7.490,-</div>
                                            <div class="col-md-2">Rp. 8.223,</div>
                                            <div class="col-md-1"></div>
                                            <div class="col-md-2">314.323 KG</div>
                                            <div class="col-md-2">94.658 KG</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row content-table">
                                    <div class="container wrapper-content-list">
                                        <div class="header-content container-fluid">
                                            <div class="col-md-1"><strong><i>No.</i></strong></div>
                                            <div class="col-md-3"><strong><i>Nama</i></strong></div>
                                            <div class="col-md-1"><strong><i>Kategori</i></strong></div>
                                            <div class="col-md-1"><strong><i>Tipe</i></strong></div>
                                            <div class="col-md-2"><strong><i>Lokasi</i></strong></div>
                                            <div class="col-md-2"><strong><i>Kuantitas</i></strong></div>
                                            <div class="col-md-2"><strong><i>Harga</i></strong></div>
                                        </div>
                                        <div class="container-fluid test">
                                            <div class="col-md-1">1</div>
                                            <div class="col-md-3">Padi Wangi</div>
                                            <div class="col-md-1">Pokok</div>
                                            <div class="col-md-1">Padi</div>
                                            <div class="col-md-2">Malang</div>
                                            <div class="col-md-2">2000 KG</div>
                                            <div class="col-md-2">Rp. 10.000.000,-</div>
                                        </div>
                                        <div class="container-fluid test">
                                            <div class="col-md-1">2</div>
                                            <div class="col-md-3">Padi Rejeki Subur</div>
                                            <div class="col-md-1">Pokok</div>
                                            <div class="col-md-1">Padi</div>
                                            <div class="col-md-2">Surabaya</div>
                                            <div class="col-md-2">1530 KG</div>
                                            <div class="col-md-2">Rp. 8.000.000,-</div>
                                        </div>
                                        <div class="container-fluid test">
                                            <div class="col-md-1">3</div>
                                            <div class="col-md-3">Kentang Emas</div>
                                            <div class="col-md-1">Pokok</div>
                                            <div class="col-md-1">Kentang</div>
                                            <div class="col-md-2">Yogyakarta</div>
                                            <div class="col-md-2">400 KG</div>
                                            <div class="col-md-2">Rp. 6.200.000,-</div>
                                        </div>
                                        <div class="container-fluid test">
                                            <div class="col-md-1">4</div>
                                            <div class="col-md-3">Tebu super Malang</div>
                                            <div class="col-md-1">Pokok</div>
                                            <div class="col-md-1">Tebu</div>
                                            <div class="col-md-2">Malang</div>
                                            <div class="col-md-2">1200 KG</div>
                                            <div class="col-md-2">Rp. 9.300.000,-</div>
                                        </div>
                                        <div class="container-fluid test">
                                            <div class="col-md-1">5</div>
                                            <div class="col-md-3">Padi Murah Rejeki</div>
                                            <div class="col-md-1">Pokok</div>
                                            <div class="col-md-1">Padi</div>
                                            <div class="col-md-2">Malang</div>
                                            <div class="col-md-2">400 KG</div>
                                            <div class="col-md-2">Rp. 2.160.000,-</div>
                                        </div>
                                        <div class="container-fluid test">
                                            <div class="col-md-1">6</div>
                                            <div class="col-md-3">Jagung Jumbo</div>
                                            <div class="col-md-1">Pokok</div>
                                            <div class="col-md-1">Jagung</div>
                                            <div class="col-md-2">Bondowoso</div>
                                            <div class="col-md-2">900 KG</div>
                                            <div class="col-md-2">Rp. 4.680.000,-</div>
                                        </div>
                                        <div class="container-fluid test">
                                            <div class="col-md-1">7</div>
                                            <div class="col-md-3">Tebu Supreme</div>
                                            <div class="col-md-1">Pokok</div>
                                            <div class="col-md-1">Tebu</div>
                                            <div class="col-md-2">Solo</div>
                                            <div class="col-md-2">1000 KG</div>
                                            <div class="col-md-2">Rp. 8.200.000,-</div>
                                        </div>
                                        <div class="container-fluid test">
                                            <div class="col-md-1">8</div>
                                            <div class="col-md-3">Jagung Susu</div>
                                            <div class="col-md-1">Pokok</div>
                                            <div class="col-md-1">Jagung</div>
                                            <div class="col-md-2">Sragen</div>
                                            <div class="col-md-2">700 KG</div>
                                            <div class="col-md-2">Rp. 3.500.000,-</div>
                                        </div>
                                        <div class="container-fluid test">
                                            <div class="col-md-1">9</div>
                                            <div class="col-md-3">Harum Padi</div>
                                            <div class="col-md-1">Pokok</div>
                                            <div class="col-md-1">Padi</div>
                                            <div class="col-md-2">Tegal</div>
                                            <div class="col-md-2">1200 KG</div>
                                            <div class="col-md-2">Rp. 7.200.000,-</div>
                                        </div>
                                        <div class="container-fluid test">
                                            <div class="col-md-1">10</div>
                                            <div class="col-md-3">Padi Kalimantan</div>
                                            <div class="col-md-1">Pokok</div>
                                            <div class="col-md-1">Padi</div>
                                            <div class="col-md-2">Banjarmasin</div>
                                            <div class="col-md-2">1000 KG</div>
                                            <div class="col-md-2">Rp. 6.000.000,-</div>
                                        </div>
                                    </div>
                                    <div class="container wrapper-content-list product-page">
                                        {/* <!-- TEST --> */}
                                        <ul class="pagination justify-content-center">
                                            <li class="page-item">
                                                <a class="page-link" href="#" title="Back"><i class="material-icons keyboard_arrow_left">keyboard_arrow_left</i></a>
                                            </li>
                                            <li class="page-item active">
                                                <a class="page-link" href="#">1</a>
                                            </li>
                                            <li class="page-item">
                                                <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
                                            </li>
                                            <li class="page-item">
                                                <a class="page-link" href="#">3</a>
                                            </li>
                                            <li class="page-item">
                                                <a class="page-link" href="#" title="Next"><i class="material-icons keyboard_arrow_right">keyboard_arrow_right</i></a>
                                            </li>
                                            </ul>
                                        {/* <!-- TEST --> */}
                                    </div>
                                </div>
                            </div>
                </div>
            </div>
    );
  }
}

// EXPORT THE COMPONENT BODY
export default Menubar;
