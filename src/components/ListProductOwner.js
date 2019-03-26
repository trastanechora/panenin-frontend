import React from 'react';
import { Link } from "react-router-dom";
import '../css/bootstrap.min.css';
import '../css/style.css';
import axios from "axios";


// const redirect = () => {
//     // this.props.history.replace("/");
//     console.log("testing redirect")
//     return <Redirect to={{ pathname: "/detail" }} />;
//     // console.log(this)
// };
const doDelete = (id) => {
    console.log("test delete finish")
    const url = "http://localhost:8010/proxy/api/users/products/" + id
    const token = localStorage.getItem('token');
    console.log("url", url)
    axios({
        method: 'put',
        url: url,
        headers: {
          Authorization: 'Bearer ' + token
        }
      }).then(function(response) {
            console.log("Produk telah berhasil dihapus", response)
          }).catch(function(error) {
                console.log("Produk gagal dihapus", error)
          });
    console.log("test delete finish")
    // props.doList()
}

const ListProductOwner = props => {
    // console.log("debug props value", props)
    const path = "/detail/" + props.id
    return (  
        <tr>
            <td><button className="btn btn-warning" onClick={() => doDelete(props.id)}>Hapus</button></td>
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


export default ListProductOwner;