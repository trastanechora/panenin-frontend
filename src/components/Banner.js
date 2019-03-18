// LIST IMPORT MODULE
import React, { Component } from 'react';
import '../css/style.css';

// COMPONENT BODY
class Banner extends Component {
  render() {
    return (
        <section class="cd-slider">
            <ul>
            <li data-color="#FF9C00">
            {/* <!-- <li data-color="#FF384B"> --> */}
                {/* <!-- <div class="content" style="background-image:url(https://i.imgur.com/i7VlkGV.png?2)"> --> */}
                <div class="content">
                    <blockquote>
                        <p>Solusi Hasil Panen Indonesia</p>
                        <span>panenin.com</span>
                        {/* <!-- <p>I got my red dress on tonight dancing in the dark in the pale moonlight.</p>
                        <span>Summertime Sadness - Lana Del Rey</span> --> */}
                        {/* <!-- <img class="logo" id="banner-logo" src="assets/logo/logo2.png" alt=""> --> */}
                    </blockquote>
                </div>
            </li>
            <li data-color="#ffca00">
                <div class="content">
                    <blockquote>
                        <p>Pasar Luas</p>
                        <span>Jual dan beli dengan jangkauan produk di seluruh Indonesia</span>
                    </blockquote>
                </div>
            </li>
            <li data-color="#f46e42">
            {/* <!-- <li data-color="#002AFF"> --> */}
                <div class="content">
                    <blockquote>
                        <p>Update Harga Terkini</p>
                        <span>Kami merekam data transaksi harga untuk survey para user menentukan harga jual atau beli</span>
                    </blockquote>
                </div>
            </li>
            <li data-color="#ffca00">
                <div class="content">
                    <blockquote>
                        <p>Cepat dan Mudah</p>
                        <span>Proses pembelian dan penjualan sangat mudah dan tidak membutuhkan syarat banyak</span>
                    </blockquote>
                </div>
            </li>
            <li data-color="#f46e42">
            {/* <!-- <li data-color="#002AFF"> --> */}
                <div class="content">
                    <blockquote>
                        <p>Aman dan Terpercaya</p>
                        <span>Sistem pembayaran kami melindungi setiap user terhadap segala bentuk penipuan</span>
                    </blockquote>
                </div>
            </li>
            <li data-color="#ffca00">
                <div class="content">
                    <blockquote>
                        <p>Untuk Indonesia Lebih Mandiri</p>
                        <span>Kami berkomitmen untuk mengurangi nilai import. Mempertemukan konsumen untuk produsen dan mencarikan produsen untuk konsumen</span>
                    </blockquote>
                </div>
            </li>
            </ul>
            <nav>
                <div><a class="prev" href="#"></a></div>
                <div><a class="next" href="#"></a></div>
            </nav>
        </section>
    );
  }
}

// EXPORT THE COMPONENT BODY
export default Banner;
