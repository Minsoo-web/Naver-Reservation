<template>
  <div id="login">
    <div class="container">
      <h1>Login</h1>
      <SignIn :signUpEmail="signUpUser" />
    </div>
  </div>
</template>

<script>
import SignIn from "@/components/form/SignIn";
import { mapState } from "vuex";
export default {
  components: {
    SignIn,
  },
  computed: {
    ...mapState(["signUpUser"]),
  },
};
</script>

<style scoped>
#login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: rgb(38, 60, 86);
}
.container {
  width: 50%;
  height: 70%;
  padding: 20px;
}
h1 {
  width: 100%;
  text-align: start;
  color: #ffffff;
}
</style>
