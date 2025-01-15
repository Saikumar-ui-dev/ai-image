import axios from 'axios'

const API_BASE_URL = "http://localhost:1111/api"

const apiClient = axios.create({
    baseURL : API_BASE_URL,
    headers : {
        'Content-Type' : 'application/json'
    }
})

export const apiEndpoints = {
    register : '/user/register',
    login : '/user/login'
}

export default apiClient