// LIST IMPORT MODULE
import React, { Component } from 'react';
import '../css/style.css';

// COMPONENT BODY
class ContentAuth1 extends Component {
  render() {
    return (
        <div class="col-md-7 register-body">
            <div class="container">
                <div class="row">
                    <div class="col-6">
                        <p class="info-header"><strong>Update Harga Terkini</strong></p>
                        <p class="info-content"><i>Kami merekam data transaksi harga untuk survey para user menentukan harga jual atau beli</i></p>
                    </div>
                    <div class="col-6">
                        <p class="info-header"><strong>Pasar Luas</strong></p>
                        <p class="info-content"><i>Jual dan beli dengan jangkauan produk di seluruh Indonesia</i></p>
                    </div>
                    <div class="col-6">
                        <p class="info-header"><strong>Cepat dan Mudah</strong></p>
                        <p class="info-content"><i>Proses pembelian dan penjualan sangat mudah dan tidak membutuhkan syarat banyak</i></p>
                    </div>
                    <div class="col-6">
                        <p class="info-header"><strong>Aman dan Terpercaya</strong></p>
                        <p class="info-content"><i>Sistem pembayaran kami melindungi setiap user terhadap segala bentuk penipuan.</i></p>
                    </div>
                    <div class="col-6">
                        <p class="info-header"><strong>Untuk Indonesia Lebih Mandiri</strong></p>
                        <p class="info-content"><i>Kami berkomitmen untuk mengurangi nilai import. Mempertemukan konsumen untuk produsen dan mencarikan produsen untuk konsumen</i></p>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

// EXPORT THE COMPONENT BODY
export default ContentAuth1;
