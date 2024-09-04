import client from '@/api/client.js'

const login = (data) => {
    return client
        .post('/login', data)
        .then((response) => response)
        .catch((error) => error.response)
}
const authAPI = {
    login,
}
export default authAPI
