<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue'

const showAlert = () => {
  alert("Feature Coming Soon!");
};

</script>

<template>
  <div class="container">
    <header>
      <h1>Android on Desktop</h1>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </nav>
    </header>

    <main>
      <h2>Seamless Connection Between Android & PC</h2>
      <p>Control your PC, get notifications, and more!</p>
      <button @click="showAlert">Get Started</button>
    </main>

    <router-view></router-view>
  </div>
</template>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
}

.container {
  text-align: center;
  padding: 20px;
}

header {
  background: #333;
  color: white;
  padding: 10px;
}

nav a {
  color: white;
  margin: 0 10px;
  text-decoration: none;
}

main {
  margin-top: 20px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  background: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background: #0056b3;
}
</style>
