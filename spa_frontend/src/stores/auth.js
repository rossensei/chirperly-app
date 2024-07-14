import { defineStore } from "pinia";
import axios from '@/lib/axios';
import Cookies from 'js-cookie';

export const useAuthStore = defineStore("auth", {
    state: () => ({
        user: null,
    }),
    getters: {
        user: (state) => state.user
    },
    actions: {
        async authenticate(credentials) {
            await axios.get('/sanctum/csrf-cookie')
                .then(() => {
                    const response = axios.post('/api/auth/login', credentials);
                    // console.log(response.data)
                    Cookies.set();
                })
        }
    }
});