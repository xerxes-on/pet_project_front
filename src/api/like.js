import client from '@/api/client.js'

const like_review = (review_id) => {
    return client
        .post('/reviews/' + review_id + '/like')
        .then((response) => response)
        .catch((error) => error.response)
}

const unlike_review = (review_id) => {
    return client
        .post('/reviews/' + review_id + '/unlike')
        .then((response) => response)
        .catch((error) => error.response)
}

const likeApi = {
    like_review,
    unlike_review,
}
export default likeApi
