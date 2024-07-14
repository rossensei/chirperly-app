<script setup>
import { useAuthStore } from '@/stores/auth';
import { reactive } from 'vue';

const form = reactive({
    username: '',
    password: ''
})

const authStore = useAuthStore();

const login = () => {
    authStore.authenticate(form);
}
</script>

<template>
    <div>
        <h1>Hello from home</h1>
        <form @submit.prevent="login">
            <div>
                <label for="username">Username</label>
                <input type="text" id="username" v-model="form.username" />
            </div>
            <div>
                <label for="password">Password</label>
                <input type="password" id="password" v-model="form.password" />
            </div>
            <button type="submit">Login</button>
        </form>
    </div>
</template>