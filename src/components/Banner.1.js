// LIST IMPORT MODULE
import React, { Component } from 'react';
import '../css/style.css';

// COMPONENT BODY
class Banner extends Component {
  render() {
    return (
        <section className="cd-slider">
            <ul>
            <li data-color="#FF9C00">
                <div className="content">
                    <blockquote>
                        <p>Solusi Hasil Panen Indonesia</p>
                        <span>panenin.com</span>
                    </blockquote>
                </div>
            </li>
            <li data-color="#ffca00">
                <div className="content">
                    <blockquote>
                        <p>Pasar Luas</p>
                        <span>Jual dan beli dengan jangkauan produk di seluruh Indonesia</span>
                    </blockquote>
                </div>
            </li>
            <li data-color="#f46e42">
                <div className="content">
                    <blockquote>
                        <p>Update Harga Terkini</p>
                        <span>Kami merekam data transaksi harga untuk survey para user menentukan harga jual atau beli</span>
                    </blockquote>
                </div>
            </li>
            <li data-color="#ffca00">
                <div className="content">
                    <blockquote>
                        <p>Cepat dan Mudah</p>
                        <span>Proses pembelian dan penjualan sangat mudah dan tidak membutuhkan syarat banyak</span>
                    </blockquote>
                </div>
            </li>
            <li data-color="#f46e42">
                <div className="content">
                    <blockquote>
                        <p>Aman dan Terpercaya</p>
                        <span>Sistem pembayaran kami melindungi setiap user terhadap segala bentuk penipuan</span>
                    </blockquote>
                </div>
            </li>
            <li data-color="#ffca00">
                <div className="content">
                    <blockquote>
                        <p>Untuk Indonesia Lebih Mandiri</p>
                        <span>Kami berkomitmen untuk mengurangi nilai import. Mempertemukan konsumen untuk produsen dan mencarikan produsen untuk konsumen</span>
                    </blockquote>
                </div>
            </li>
            </ul>
            <nav>
                <div><a className="prev" href="#"></a></div>
                <div><a className="next" href="#"></a></div>
            </nav>
        </section>
    );
  }
}

// EXPORT THE COMPONENT BODY
export default Banner;
