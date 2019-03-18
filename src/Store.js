// IMPORT MODULE
import createStore from 'unistore';
// import axios from "axios"

// SET THE GLOBAL STATE VARIABLES
const initialState = {
    test: ""
};
export const store = createStore(initialState)

// STORE ACTIONS MODULE
export const actions = store => ({
    setField: (state, event) => {
        return { [event.target.name]: event.target.value };
    }
})