import client from '@/api/client.js'

const edit = (data) => {
    return client
        .put('/profile_edit', data)
        .then((response) => response)
        .catch((error) => error.response)
}

const editProfileApi = {
    edit,
}
export default editProfileApi
