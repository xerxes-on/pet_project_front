import client from '@/api/client.js'

const getBookDetails = (id) => {
    return client
        .get('/books/' + id)
        .then((response) => response)
        .catch((error) => error.response)
}

const bookApi = {
    getBookDetails,
}
export default bookApi
