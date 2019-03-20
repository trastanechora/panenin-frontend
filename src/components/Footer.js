// LIST IMPORT MODULE
import React, { Component } from 'react';
import '../css/style.css';

// COMPONENT BODY
class Footer extends Component {
  render() {
    return (
        <footer className="container-fluid footer">
            <div className="container footer-handler row">
                <div className="footer-logo col-md-3"><img className="logo-footer" src={require("../media/logo/logo2.png")} alt="" /></div>
                <div className="footer-logo col-md-3">
                    <p><strong>Tentang Kami</strong></p>
                    <p className="menu-footer">Blog <br />
                    QnA <br />
                    Hubungi Kami</p> 
                </div>
                <div className="footer-logo col-md-3">
                    <p><strong>Beli</strong></p>
                    <p className="menu-footer">Cara Membeli<br />
                        Pembayaran
                    </p>
                </div>
                <div className="footer-logo col-md-3">
                    <p><strong>Jual</strong></p>
                    <p className="menu-footer">Cara Menjual<br />
                        Penarikan Dana
                    </p>
                </div>
            </div>
            <div className="justify-content-center">
                <hr />
                <p className="copyright-footer">copyright panenin.com</p>
            </div>
        </footer>
    );
  }
}

// EXPORT THE COMPONENT BODY
export default Footer;
