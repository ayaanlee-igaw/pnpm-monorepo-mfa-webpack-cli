<template>
  <nav>
    <router-link to="/"> Home </router-link>
    <router-link to="/design-system-components">
      design-system-components
    </router-link>
  </nav>
  <router-view />
</template>

<script setup lang="ts">
  import axios from "axios";
  import { onMounted } from "vue";

  onMounted(async () => {
    await axios.get(`http://web-api/main-test`).then((res) => console.log(res));
  });
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  nav {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 30px;
  }

  nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  nav a.router-link-exact-active {
    color: #42b983;
  }
</style>
