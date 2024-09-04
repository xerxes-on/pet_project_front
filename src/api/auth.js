import client from "@/api/client.js";

const login = () => {
    return client
        .get('/books')
        .then((response) => response)
        .catch((error) => error.response);
}
const authAPI = {
    login,
};
export default authAPI;