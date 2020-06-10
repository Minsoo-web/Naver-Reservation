<template>
  <div id="signUp">
    <div id="container-signUp">
      <h1>Sign Up</h1>
      <div id="form-signUp">
        <v-alert v-if="isSignUpError" type="error">이미 존재하는 이메일입니다.</v-alert>
        <v-text-field label="Email address" v-model="email" :rules="rules" hide-details="auto"></v-text-field>
        <v-text-field label="Name" v-model="name" :rules="rules" hide-details="auto"></v-text-field>
        <v-text-field
          label="Password"
          v-model="password"
          :rules="rules"
          hide-details="auto"
          type="password"
        ></v-text-field>
        <Button
          :text="'Sign Up'"
          :type="'button'"
          @onClick="
            signUp({
              email: email,
              name: name,
              password: password,
            })
          "
        />
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/UI-Components/Button";
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  components: {
    Button
  },
  computed: {
    ...mapState(["isSignUpError"])
  },
  watch: {
    // 이메일 입력시 에러 해제
    email(newVal) {
      if (newVal) {
        this.clearSignUpError();
      }
    }
  },
  data() {
    return {
      email: "",
      name: "",
      password: "",
      rules: [
        value => !!value || "Required"
        //(value) => (value && value.length >= 3) || "Min 3 characters",
      ]
    };
  },
  methods: {
    ...mapActions(["signUp"]),
    ...mapMutations(["clearSignUpError"])
  }
};
</script>

<style scope>
#signUp {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: rgb(38, 60, 86);
}
#container-signUp {
  width: 50%;
  height: 70%;
}
#form-signUp {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80%;
  padding: 20px;
  background-color: #fff;
}
.v-input {
  flex: inherit;
}
</style>
