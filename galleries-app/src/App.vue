<template>
  <div id="app">
    <Navbar/>
    <router-view @userAuthenticated="toggleAuthenticated"></router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import { authService } from "./services/AuthService";

export default {
  name: "app",
  components: {
    Navbar
  },
  data() {
    return {
      isAuthenticated: authService.isAuthenticated()
    };
  },
  methods: {
    toggleAuthenticated(value) {
      this.isAuthenticated = value;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
