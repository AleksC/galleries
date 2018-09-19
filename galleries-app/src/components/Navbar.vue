<template>
    <nav class="navbar navbar-expand-sm bg-primary navbar-dark">
        <ul class="navbar-nav">
            <li class="nav-item active">
                <router-link class="nav-link" to='/all-galleries'>All Galleries</router-link>
            </li>
            <li class="nav-item active">
                <router-link class="nav-link" to='/login' v-if="!isAuthenticated">Login</router-link>
            </li>
            <li class="nav-item active">
                <router-link class="nav-link" to='/register'>Register</router-link>
            </li>
            <li class="nav-item active">
                <a href="#" class="nav-item nav-link" @click="logout" v-if="isAuthenticated">Logout</a>
            </li>
        </ul>
    </nav>
</template>
<script>
import { authService } from "../services/AuthService";

export default {
  props: {
    isAuthenticated: Boolean
  },

  methods: {
    logout() {
      authService.logout();
      this.$emit("userAuthenticated", false);
      //   this.$router.push("login");
    }
  }
};
</script>
