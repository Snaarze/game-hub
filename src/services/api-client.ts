import axios from "axios"

export default axios.create({
    baseURL : 'https://api.rawg.io/api/',
    params  : {
        key : 'fc8b4562e11541eeb98d234c726a5e5b'
    }
})