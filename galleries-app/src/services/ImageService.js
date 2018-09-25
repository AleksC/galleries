import axios from 'axios'
export default class ImageService {
    constructor() {
        axios.defaults.baseURL = 'http://localhost:8000/api';
        axios.defaults.headers.common = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
            };
    }
    
    get(id) {
        return axios.get(`/images/${id}`);
    }

}

export const imageService = new ImageService();
