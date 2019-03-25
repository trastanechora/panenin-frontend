// LIST IMPORT MODULE
import React, { Component } from 'react';
import { connect } from "unistore/react";
import { actions } from '../Store';
import { withRouter } from "react-router-dom";
// import '../css/material-dashboard.css';
import '../css/bootstrap.min.css';
import '../css/style.css';
import Landing from './Landing';
import Fruit from './products/Fruit';
import Core from './products/Core';
import Fish1 from './products/Fish1';
import Fish2 from './products/Fish2';
import Chicken from './products/Chicken';
import Vegetable from './products/Vegetable';
import Egg from './products/Egg';
import Cow from './products/Cow';
import Sheep from './products/Sheep';

// COMPONENT BODY
class Content extends Component {
    // state = {
    //     display_page: "home"
    // }

    // componentDidMount() {
    //     console.log("tes refresh", this.props.product_state)
    //     switch(this.props.product_state) {
    //         case "home":
    //             this.setState({ display_page: "home" })
    //         case "fruit":
    //             this.setState({ display_page: "fruit" })
    //         default:
    //             this.setState({ display_page: "home" })
    //         }
    // }

  render() {
    console.log("Test state", this.props.product_state)
    // console.log("Test state", this.state.display_page)
    return (
        // <div>
        //     <div className="row content-area" style={ {display: (this.props.product_state == "cores") ? "block" : "none"}}>
        //         <Landing />
        //     </div>
        //     <div className="row content-area" style={ {display: (this.props.product_state == "fruits") ? "block" : "none"}}>
        //         <Fruit />
        //     </div>
        // </div>
            <div className="row content-area">
                {/* <div className={(this.props.product_state == "cores") ? "container content-body shadow show" : "container content-body shadow"}> */}
                <div className={(this.props.product_state == "home") ? "container content-body shadow show" : "container content-body shadow"}>
                    <Landing />
                </div>
                <div className={(this.props.product_state == "cores") ? "container content-body shadow show" : "container content-body shadow"}>
                    <Core />
                </div>
                <div className={(this.props.product_state == "fruits") ? "container content-body shadow show" : "container content-body shadow"}>
                    <Fruit />
                </div>
                <div className={(this.props.product_state == "vegetables") ? "container content-body shadow show" : "container content-body shadow"}>
                    <Vegetable />
                </div>
                <div className={(this.props.product_state == "fish1") ? "container content-body shadow show" : "container content-body shadow"}>
                    <Fish1 />
                </div>
                <div className={(this.props.product_state == "fish2") ? "container content-body shadow show" : "container content-body shadow"}>
                    <Fish2 />
                </div>
                <div className={(this.props.product_state == "chickens") ? "container content-body shadow show" : "container content-body shadow"}>
                    <Chicken />
                </div>
                <div className={(this.props.product_state == "eggs") ? "container content-body shadow show" : "container content-body shadow"}>
                    <Egg />
                </div>
                <div className={(this.props.product_state == "cows") ? "container content-body shadow show" : "container content-body shadow"}>
                    <Cow />
                </div>
                <div className={(this.props.product_state == "sheeps") ? "container content-body shadow show" : "container content-body shadow"}>
                    <Sheep />
                </div>
            </div>
    )
}
}

// EXPORT THE COMPONENT BODY
// export default Content;
export default connect(
    "product_state", actions)
    (withRouter(Content));
