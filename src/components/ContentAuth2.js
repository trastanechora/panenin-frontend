// LIST IMPORT MODULE
import React, { Component } from 'react';
import { actions, store } from '../Store';
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import '../css/style.css';


// COMPONENT BODY
class ContentAuth2 extends Component {
    changeState = () => {
        store.setState({auth_state: !this.props.auth_state});
        // console.log(this.props.auth_state)
    };
    doLogin = () => {
        this.props.postLogin().then(()=> {
            this.props.history.replace("/");
            // return <Redirect to={{ pathname: "/signin" }} />;
        });
    };
    render() {
        return (
            <div class="col-md-5 register-form-area">
                <div class="form-area col-md-10" id="register" style={{ display: this.props.auth_state ? "block" : "none" , transition: "1s all ease"}}>
                    <div class="container col-md-10 form-centering">
                        <p class="form-header"><strong>Ayo bergabung dengan Panenin.com</strong></p>
                        <form onSubmit={e => e.preventDefault()}>
                            <div class="form-group">
                                <label for="exampleInputEmail1">E-mail</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="email@domain.com" />
                                {/* <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> --> */}
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Masukkan ulang E-mail</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="email@domain.com" />
                                {/* <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> --> */}
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Username</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="usernameanda" />
                                {/* <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> --> */}
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="********" />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Masukkan ulang password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="********" />
                            </div>
                            <button id="register-button" type="submit" class="btn btn-outline-success login">Daftar</button>
                            <p id="register-to-login">Sudah memiliki akun? Silahkan login di <a href="#" onClick={() => this.changeState()}>sini</a> .</p>
                        </form>
                    </div>
                </div>
                <div class="form-area col-md-10" id="login" style={{ display: this.props.auth_state ? "none" : "block", transition: "1s all ease" }}>
                    <div class="container col-md-10 form-centering">
                        <p class="form-header"><strong>Masuk sekarang untuk menikmati fitur Panenin.com</strong></p>
                        <form onSubmit={e => e.preventDefault()}>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Username</label>
                                <input onChange={e => this.props.setField(e)} name="username" type="text" class="form-control" id="exampleInputEmail1" placeholder="usernameanda"  />
                                {/* <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> --> */}
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input onChange={e => this.props.setField(e)} name="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="********"  />
                            </div>
                            <button onClick={() => this.doLogin()} name="password" id="register-button" type="submit" class="btn btn-outline-success login">Masuk</button>
                            <p id="register-to-login">Melum memiliki akun? Daftarkan diri anda di <a href="#" onClick={() => this.changeState()}>sini</a> .</p>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

// EXPORT THE COMPONENT BODY
// export default ContentAuth2;
export default connect(
    "auth_state", actions)
(withRouter(ContentAuth2));
