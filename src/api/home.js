import client from '@/api/client.js'

const trending = () => {
    return client
        .get('/trending_books')
        .then((response) => response)
        .catch((error) => error.response)
}

const suggested = () => {
    return client
        .get('/suggestions')
        .then((response) => response)
        .catch((error) => error.response)
}
const homeApi = {
    trending,
    suggested,
}
export default homeApi
