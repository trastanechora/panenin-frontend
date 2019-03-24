// IMPORT MODULE
import createStore from 'unistore';
import axios from "axios"

const base_url = "http://0.0.0.0:5555/api/public/products"

// ORIGIN
// const url_login = "https://panenin.com/api/public/login"
// const url_register = "https://panenin.com/api/public/login"

// LOCAL ENVIRONMENT
const url_login = "http://localhost:8010/proxy/api/public/login"
const url_register = "http://0.0.0.0:5555/proxy/api/public/register"

// DEPLOY ENVIRONMENT
// const url_login = "https://cors-anywhere.herokuapp.com/https://panenin.com/api/public/login"
// const url_register = "https://cors-anywhere.herokuapp.com/https://panenin.com/api/public/register"


// SET THE GLOBAL STATE VARIABLES
const initialState = {
    token: "",
    test: "",
    auth_state: true,
    username: "",
    password: "",
    is_login: false,
    product_state: "home",

    email: "",
    email_confirmation: "",
    password_confirmation: "",

    page: 1,
    url: base_url
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
        console.log("----------------------TEST POST LOGIN --------------------------------")
        console.log("----------------------TEST POST LOGIN --------------------------------")
        // console.log("print data", data)

        await axios
        .post(url_login, data)
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
        console.log("----------------------TEST POST LOGIN --------------------------------")
        console.log("----------------------TEST POST LOGIN --------------------------------")
    },
    postRegister: async state => {
        const data = {
            username: state.username,
            password: state.password,
            email: state.email
        };

        console.log("----------------------TEST POST REGISTER --------------------------------")
        console.log("----------------------TEST POST REGISTER --------------------------------")
        console.log("----------------------TEST POST REGISTER --------------------------------")
        // console.log("print data", data)

        await axios
        .post(url_register, data)
        .then(function(response) {
            console.log("Sukses", response)
            if (response.status === 200) {
                // console.log("cek token!", response.data.token)
                store.setState({
                    is_login: true
                });
                localStorage.setItem('token', response.data.token)
            } else {
                console.log("Login Gagal");
            }
        })
        .catch(function(error) {
            console.log("Gagal", error);
        });
        console.log("----------------------TEST POST REGISTER --------------------------------")
        console.log("----------------------TEST POST REGISTER --------------------------------")
        console.log("----------------------TEST POST REGISTER --------------------------------")
    },
    postLogout: state => {
        return { is_login: false };
    },
})