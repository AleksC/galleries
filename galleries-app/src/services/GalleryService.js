import axios from 'axios'
export default class GalleryService {
    constructor() {
        axios.defaults.baseURL = 'http://localhost:8000/api';
        axios.defaults.headers.common = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
            };
    }

    getAll() {
        return axios.get('galleries')
    }

    get(id) {
        return axios.get(`/galleries/${id}`);
    }

}

export const galleryService = new GalleryService();
