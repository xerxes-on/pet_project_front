import client from '@/api/client.js'

const follow = (user_id) => {
    return client
        .post('/follow/' + user_id)
        .then((response) => response)
        .catch((error) => error.response)
}

const unfollow = (user_id) => {
    return client
        .post('/unfollow/' + user_id)
        .then((response) => response)
        .catch((error) => error.response)
}
const followAuthor = (author_id) => {
    return client
        .post('/authors/' + author_id + '/follow')
        .then((response) => response)
        .catch((error) => error.response)
}

const unfollowAuthor = (author_id) => {
    return client
        .post('/authors/' + author_id + '/unfollow')
        .then((response) => response)
        .catch((error) => error.response)
}
const followApi = {
    follow,
    unfollow,
    unfollowAuthor,
    followAuthor,
}
export default followApi
