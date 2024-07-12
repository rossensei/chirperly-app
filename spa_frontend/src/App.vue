<script setup>
import axios from 'axios';
import { reactive, ref } from 'vue';

axios.defaults.withCredentials = true;

const form = reactive({
  username: '',
  password: '',
});

const user = ref();

const login = async () => {
  await axios.get('http://localhost:8000/sanctum/csrf-cookie');
  await axios.post('http://localhost:8000/api/auth/login', {
    username: form.username,
    password: form.password
  }).then((response) => {
    user.value = response.data.data.user;
  });
}
</script>

<template>
  <div id="container">
    <div>
      {{ user }}
      <form @submit.prevent="login">
        <div>
          <label for="username">Username
            <input id="username" type="text" v-model="form.username">
          </label>
        </div>
        <div>
          <label for="password">Password
            <input id="password" type="password" v-model="form.password">
          </label>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  </div>
</template>

<style scoped>

</style>