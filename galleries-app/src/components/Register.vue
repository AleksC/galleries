<template>
    <div>
      <form class="form-signin" @submit.prevent="register">
      <h2 class="form-signin-heading">Register</h2>
      <input type="text" v-model="user.first_name" class="form-control" name="first_name" placeholder="First name" required autofocus/>
      <input type="text" v-model="user.last_name" class="form-control" name="last_name" placeholder="Last name" required/>
      <input v-model="user.email" type="text" class="form-control" name="email" placeholder="Email Address" required  />
      <input v-model="user.password" type="password" class="form-control" name="password" placeholder="Password" required />
      <input v-model="user.password_confirmation" type="password" class="form-control" name="password" placeholder="Confirm password" required />
       I accept terms and conditions <br>
      <input type="checkbox" name="terms" v-model="user.terms_and_conditions">
      <button class="btn btn-lg btn-primary btn-block" type="submit">Register</button>
    </form>
    </div>
</template>

<script>
import { registerService } from "./../services/RegisterService.js";

export default {
  data() {
    return {
      user: {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: "",
        terms_and_conditions: false
      }
    };
  },

  methods: {
    register() {
      if (
        this.user.password === this.user.password_confirmation &&
        this.user.terms_and_conditions
      ) {
        registerService.add(this.user);
      } else {
        alert("Error");
      }
    }
  }
};
</script>
