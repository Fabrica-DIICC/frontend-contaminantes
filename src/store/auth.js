import { defineStore } from "pinia";
import { ref } from "vue";


export const useAuthStore = defineStore('authStore', () => {
    const authorize = ref(false)

    return {
        authorize,
    }
})