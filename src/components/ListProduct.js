import React from 'react';
import { Link } from "react-router-dom";
import '../css/bootstrap.min.css';
import '../css/style.css';

// const redirect = () => {
//     // this.props.history.replace("/");
//     console.log("testing redirect")
//     return <Redirect to={{ pathname: "/detail" }} />;
//     // console.log(this)
// };

const ListProduct = props => {
    // console.log("debug props value", props)
    const path = "/detail/" + props.id
    return (  
        <tr>
            <td>
                {props.number}
            </td>
            <td>
                {props.name}
            </td>
            <td>
                {props.category}
            </td>
            <td>
                {props.type}
            </td>
            <td>
                {props.location}
            </td>
            <td>
                {props.quantity}
            </td>
            <td>
                Rp. {props.price},-
            </td>
            <td><Link className="btn btn-danger" to={path}>Lihat</Link></td>
        </tr>
    );
};


export default ListProduct;