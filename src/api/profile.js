import client from '@/api/client.js'

const getProfileDetails = () => {
    return client
        .post('/profile')
        .then((response) => response)
        .catch((error) => error.response)
}

const profileApi = {
    getProfileDetails,
}
export default profileApi
