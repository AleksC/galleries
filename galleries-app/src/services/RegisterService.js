import axios from 'axios'

export default class RegisterService {
    constructor() {
        axios.defaults.baseURL = 'http://localhost:8000/api';
    }

    add(user) {
        return axios.post('register', user);
    }

}

export const registerService = new RegisterService();