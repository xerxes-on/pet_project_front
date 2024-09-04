import axios from "axios";
// import { useAuthStore } from "@/stores/auth";

// const authStore = useAuthStore();

const client =  axios.create({
        baseURL: 'http://bookrating.test/api/'
    })

export default  client