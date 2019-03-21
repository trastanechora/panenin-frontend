// LIST IMPORT MODULE
import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from "unistore/react";
import { actions } from '../Store';
import { withRouter } from "react-router-dom";
import '../css/bootstrap.min.css';
import '../css/style.css';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Menubar from '../components/Menubar';
import Content from '../components/Content';
import Footer from '../components/Footer';
// import ContentRoute from '../routes/ContentRoute'


//MAIN CLASS
class Home extends Component {
  constructor (props) {
    super(props);
      this.state = {
        movieList: []
      };
  };

  componentDidMount = async () => {
    console.log("Hello Panenin.com")
  };


  render() {
    return (
      <div>
        <div className="container-fluid for-banner">
          <Navbar />
          {/* <Banner /> */}
          <Banner />
          <Menubar />
          <Content />
          {/* <ContentRoute /> */}
        </div>
        <Footer />
      </div>
    );
  }
}

// export default Home;
export default connect(
  "", actions)
(withRouter(Home));