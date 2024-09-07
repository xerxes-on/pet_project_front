import client from '@/api/client.js'

const profile = () => {
    return client
        .post('/profile')
        .then((response) => response)
        .catch((error) => error.response)
}

const profileApi = {
    profile,
}
export default profileApi
