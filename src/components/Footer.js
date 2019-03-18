// LIST IMPORT MODULE
import React, { Component } from 'react';
import '../css/style.css';

// COMPONENT BODY
class Footer extends Component {
  render() {
    return (
        <footer class="container-fluid footer">
            <div class="container footer-handler row">
                <div class="footer-logo col-md-3"><img class="logo-footer" src={require("../media/logo/logo2.png")} alt="" /></div>
                <div class="footer-logo col-md-3">
                    <p><strong>Tentang Kami</strong></p>
                    <p class="menu-footer">Blog <br />
                    QnA <br />
                    Hubungi Kami</p> 
                </div>
                <div class="footer-logo col-md-3">
                    <p><strong>Beli</strong></p>
                    <p class="menu-footer">Cara Membeli<br />
                        Pembayaran
                    </p>
                </div>
                <div class="footer-logo col-md-3">
                    <p><strong>Jual</strong></p>
                    <p class="menu-footer">Cara Menjual<br />
                        Penarikan Dana
                    </p>
                </div>
            </div>
            <div class="justify-content-center">
                <hr />
                <p class="copyright-footer">copyright panenin.com</p>
            </div>
        </footer>
    );
  }
}

// EXPORT THE COMPONENT BODY
export default Footer;
