import client from '@/api/client.js'

const getBookDetails = (id) => {
    return client
        .get('/books/' + id)
        .then((response) => response)
        .catch((error) => error.response)
}
const getBookReviews = (id) => {
    return client
        .post('/books/reviews/' + id)
        .then((response) => response)
        .catch((error) => error.response)
}
const rateBook = (data) => {
    return client
        .post('/reviews/', data)
        .then((response) => response)
        .catch((error) => error.response)
}
const getReviews = (page) => {
    return client
        .get('/all-reviews?page=' + page)
        .then((response) => response)
        .catch((error) => error.response)
}

const bookApi = {
    getBookDetails,
    getBookReviews,
    rateBook,
    getReviews,
}
export default bookApi
