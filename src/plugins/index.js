import { createPinia } from 'pinia'
import router from "../router";
import {ref} from "vue";
const loading = ref(false)
export function registerPlugins(app) {
    app.provide('loading', loading);
    app.use(router).use(createPinia())
}
export default loading