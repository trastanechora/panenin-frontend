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
    setHome: state => {
        store.setState({product_state: "home"})
    },
    postLogin: async state => {
        const data = {
            username: state.username,
            password: state.password
        };

        console.log("----------------------TEST POST LOGIN --------------------------------")
        console.log("print data", data)

        await axios
        .post("http://0.0.0.0:5555/api/public/login", data)
        // .post("https://cors-anywhere.herokuapp.com/https://panenin.com/api/public/login", data)
        // .post("https://panenin.com/api/public/login", data)
        .then(function(response) {
            console.log("Sukses", response)
            if (response.data.hasOwnProperty("token")) {
                // console.log("cek token!", response.data.token)
                store.setState({
                    is_login: true,
                    token: response.data.token,
                });
                localStorage.setItem('token', response.data.token)
            } else {
                console.log("Login Gagal");
            }
        })
        .catch(function(error) {
            console.log("Gagal", error);
        });
        console.log("----------------------TEST POST LOGIN --------------------------------")

        // console.log("----------------------TEST POST LOGIN --------------------------------")

        // await axios
        // // .post("http://0.0.0.0:5555/api/public/login", data)
        // .get("http://0.0.0.0:5555/api/public/products")
        // // .get("https://cors-anywhere.herokuapp.com/https://panenin.com/api/public/products")
        // // .get("https://panenin.com/api/public/products", { crossdomain: true })
        // .then(function(response) {
        //     console.log("Sukses", response)
        //     if (response.data.hasOwnProperty("token")) {
        //         // console.log("cek token!", response.data.token)
        //         store.setState({
        //             is_login: true,
        //             token: response.data.token,
        //         });
        //         localStorage.setItem('token', response.data.token)
        //     } else {
        //         console.log("Login Gagal");
        //     }
        // })
        // .catch(function(error) {
        //     console.log("Gagal", error);
        // });
        // console.log("----------------------TEST POST LOGIN --------------------------------")

    },

    // redirectDetail: () => {
    //     this.props.history.replace("/detail");
    // }
})