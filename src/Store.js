// IMPORT MODULE
import createStore from 'unistore';
import axios from "axios"

// SET THE GLOBAL STATE VARIABLES
const initialState = {
    test: "",
    auth_state: true,
    username: "",
    password: "",
    is_login: false,
    product_state: "home"
};
export const store = createStore(initialState)

// STORE ACTIONS MODULE
export const actions = store => ({
    setField: (state, event) => {
        return { [event.target.name]: event.target.value };
    },
    postLogin: async state => {
        const data = {
            username: state.username,
            password: state.password
        };

        console.log("print data", data)
        // console.log(store.movieList.find("action"))

        await axios
            .post("https://cors-anywhere.herokuapp.com/http://3.1.252.242/api/public/login", data)
            .then(function(response) {
                console.log("Sukses", response)
                // if (response.data.hasOwnProperty("token")) {
                //     console.log("Login Berhasil!", response)
                //     store.setState({
                //         is_login: true,
                //         token: response.data.token,
                //     });
                //     console.log("cek store", store.getState())
                // } else {
                //     // store.setState({
                //     //     is_login: true,
                //     //     api_key: "response.data.api_key",
                //     //     full_name: "response.data.full_name",
                //     //     email: "response.data.email",
                //     //     article: "TEST"
                //     // });
                //     console.log("Login Gagal");
                // }
            })
            .catch(function(error) {
                console.log("Gagal", error);
            });
        // axios 
        //     .get('http://3.1.252.242/api/public/products')
        //     .then(function(response) {
        //         console.log("Sukses", response)
        //     })
        //     .catch(function(error) {
        //         console.log("Gagal", error);
        //     });
    },
})