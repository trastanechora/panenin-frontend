// IMPORT MODULE
import createStore from 'unistore';
import axios from "axios"

const base_url = "http://0.0.0.0:5555/api/public/products"

// ORIGIN
// const url_login = "https://panenin.com/api/public/login"
// const url_register = "https://panenin.com/api/public/register"
// const url_addproduct = "http://anenin.com/proxy/api/public/products"


// LOCAL ENVIRONMENT
const url_login = "http://localhost:8010/proxy/api/public/login"
const url_register = "http://localhost:8010/proxy/api/public/register"
const url_addproduct = "http://localhost:8010/proxy/api/public/products"

// DEPLOY ENVIRONMENT
// const url_login = "https://cors-anywhere.herokuapp.com/https://panenin.com/api/public/login"
// const url_register = "https://cors-anywhere.herokuapp.com/https://panenin.com/api/public/register"
// const url_addproduct = "https://cors-anywhere.herokuapp.com/https://panenin.com/api/public/products"

const token = localStorage.getItem('token');

// SET THE GLOBAL STATE VARIABLES
const initialState = {
    current_id: 0,
    current_email: "",
    current_username: "",
    current_password: "",
    current_date_of_birth: "",
    current_address: "",
    current_created_at: "",
    current_display_fullname: "",
    current_gender: "",
    current_phone: "",
    current_status: "",
    current_updated_at: "",

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
    url: base_url,
    current_username: "",
    current_userid: "",

    offer_amount: 0,
    offer_price: 0,
    offer_description: "",
    offer_destination: "",

    add_name: "",
    add_category: "",
    add_type: "",
    add_amount: "",
    add_constanta: "",
    add_price: "",
    add_location: "",
    add_description: "",
    add_delivery: "",

    respond_offer: ""
};

export const store = createStore(initialState)

// STORE ACTIONS MODULE
export const actions = store => ({
    setField: (state, event) => {
        // console.log("cek respond_offer", store.respond_offer)
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

        // console.log("print data", data)

        await axios
        .post(url_login, data)
        .then(function(response) {
            // console.log("Sukses", response)
            if (response.data.hasOwnProperty("token")) {
                // console.log("cek token!", response.data.token)
                store.setState({
                    is_login: true,
                    token: response.data.token,
                });
                localStorage.removeItem('token')
                localStorage.setItem('token', response.data.token)
            } else {
                console.log("Login Gagal");
            }
        })
        .catch(function(error) {
            console.log("Gagal", error);
        });
    },
    postRegister: async state => {
        const data = {
            username: state.username,
            password: state.password,
            email: state.email
        };

        // console.log("print data", data)

        await axios
        .post(url_register, data)
        .then(function(response) {
            // console.log("Sukses", response)
            if (response.status === 200) {
                // console.log("cek token!", response.data.token)
                store.setState({
                    is_login: false
                });
                localStorage.setItem('token', response.data.token)
            } else {
                console.log("Login Gagal");
                alert("Maaf coba silahkan coba lagi");
            }
        })
        .catch(function(error) {
            console.log("Gagal", error);
        });
    },
    postLogout: state => {
        localStorage.removeItem('token')
        return { is_login: false };
    },
    postAdd: async state => {
        const data = {
            name: state.add_name,
            category: state.add_category,
            product_type: state.add_type,
            amount: parseInt(state.add_amount, 10),
            constanta: state.add_constanta,
            price: parseInt(state.add_price, 10),
            location: state.add_location,
            description: state.add_description,
            delivery_provided: state.add_delivery
        };

        // console.log("print data dari penambahan produk", data)
        await axios({
            method: 'post',
            url: url_addproduct,
            data: data,
            headers: {
              Authorization: 'Bearer ' + token
            }
          }).then(function(response) {
                console.log("Produk telah berhasil ditambahkan", response)
              }).catch(function(error) {
                    console.log("Produk gagal ditambahkan", error)
              });
    },
    postConfirm: (state, id) => {
        console.log("Test post confirm", state)
    }
})