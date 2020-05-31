<template>
  <form action id="form-login">
    <v-text-field label="Email address" v-model="email" :rules="rules" hide-details="auto"></v-text-field>
    <v-text-field label="Password" v-model="password" :rules="rules" hide-details="auto"></v-text-field>
    <Button :text="'login'" :type="'submit'" />
  </form>
</template>

<script>
import Button from "@/components/UI-Components/Button";
export default {
  name: "Form",
  components: {
    Button
  },
  data() {
    return {
      email: "",
      password: "",
      // 검증
      rules: [
        value => !!value || "Required",
        value => (value && value.length >= 3) || "Min 3 characters"
      ]
    };
  },
  methods: {}
};
</script>

<style scoped>
#form-login {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80%;
  padding: 10px;
  background-color: #ffffff;
}
input {
  border-bottom: 1px solid;
  padding: 10px;
}
/* 에러 msg */
.v-messages__message {
  color: rgb(123, 207, 163);
}
</style>