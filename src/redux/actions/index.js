import axios from "axios";

const API_URL = "http://localhost:5000"

export const addNewTodo = (text,completed) => async(dispatch) => {
    try{
        const res = await axios.post(`${API_URL}/todos`, {text, completed})
        dispatch({type: 'ADD_TODO', payload:res.data})
    }catch{
        console.log("error")
    } 
}

export const gettAllTodo = () => async(dispatch) => {
    try{
        const res = await axios.get(`${API_URL}/todos`)
        dispatch({type: 'GET_ALL_TODO', payload:res.data})
    }catch{
        console.log("error")
    } 
}