import axios from 'axios'

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3333"

const Post = {
    get : (id) => {
        console.log("PROCESS ENV", process.env.REACT_APP_BASE_URL)
        console.log(id)
        return axios.get(`${BASE_URL}/posts?id=${id}`)
    },
    create : (data) => {
        console.log(data, "datum")
        // return axios.post
    }
}

export default Post