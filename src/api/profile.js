import client from '@/api/client.js'

const getProfileDetails = () => {
    return client
        .post('/profile')
        .then((response) => response)
        .catch((error) => error.response)
}

const getQuote = (id) => {
    return client
        .get('/quotes/' + id)
        .then((response) => response)
        .catch((error) => error.response)
}
const profileApi = {
    getProfileDetails,
    getQuote
}
export default profileApi
