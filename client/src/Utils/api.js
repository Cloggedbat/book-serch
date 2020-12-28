import axios from "axios"

export default {
    get: function (query) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    },

    // delete by id
    delete: function (id) {
        return axios.delete('/api/books/' + id).then(result => result.data);
    },

    save: function (bookData) {
        return axios.post('/api/books', bookData).then(result => result.data)
    },
    saveBook: function () {
        return axios.get('/api/books').then(result => result.data);
    }
}