import { defineStore } from "pinia";
import { ref } from 'vue'

export const useErrorPop = defineStore(
    "ErrorPop",
    () => {
        const error_occurred = ref(false);


        return {
            error_occurred,
        };
    },
    { persist: true }
);
