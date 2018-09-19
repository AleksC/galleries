<template>
    <div>
      <form class="form-signin" @submit.prevent="login">
      <h2 class="form-signin-heading">Login</h2>
      <input v-model="email" type="text" class="form-control" name="email" placeholder="Email Address" required autofocus />
      <input v-model="password" type="password" class="form-control" name="password" placeholder="Password" required />
      <button class="btn btn-lg btn-primary btn-block" type="submit">Login</button>
    </form>
    </div>
</template>

<script>
import { authService } from "./../services/AuthService";

export default {
  components: { authService },
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      authService.login(this.email, this.password).then(() => {
        this.$emit("userAuthenticated", true);
        this.$router.push({ name: "all-galleries" });
      });
    }
  }
};
</script>
