<template>
  <div id="form-login">
    <v-alert v-if="isLoginError" type="error"
      >이메일 또는 비밀번호를 확인해 주세요</v-alert
    >
    <v-text-field
      label="Email address"
      v-model="email"
      :rules="rules"
      hide-details="auto"
    ></v-text-field>
    <v-text-field
      label="Password"
      v-model="password"
      :rules="rules"
      hide-details="auto"
      type="password"
    ></v-text-field>
    <Button
      :text="'login'"
      :type="'button'"
      @onClick="
        login({
          email: email,
          password: password,
        })
      "
    />
  </div>
</template>

<script>
import Button from "@/components/UI-Components/Button";
import { mapState, mapActions } from "vuex";
export default {
  name: "SignIn",
  components: {
    Button,
  },
  computed: {
    ...mapState(["isLogin", "isLoginError"]),
  },
  watch: {
    isLogin(newVal) {
      if (newVal == true) {
        this.$router.push({ name: "Mypage" });
      }
    },
  },
  data() {
    return {
      email: this.signUpEmail,
      password: "",
      // 검증
      rules: [
        (value) => !!value || "Required",
        //(value) => (value && value.length >= 3) || "Min 3 characters",
      ],
    };
  },
  props: {
    signUpEmail: {
      type: String,
      default: "",
    },
  },
  methods: {
    ...mapActions(["login"]),
  },
};
</script>

<style scoped>
#form-login {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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
.v-alert {
  background-color: rgb(123, 207, 163);
  border-color: rgb(123, 207, 163);
}

.v-messages__message {
  color: rgb(123, 207, 163);
}
.v-input {
  flex: inherit;
}
</style>
