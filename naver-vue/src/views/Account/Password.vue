<template>
  <div id="Edit-wrapper">
    <v-alert v-if="userUpdateError" type="error"
      >이전 비밀번호가 일치하지 않습니다.</v-alert
    >
    <v-alert v-if="isPassword" type="error"
      >입력하신 비밀번호가 일치하지 않습니다.</v-alert
    >
    <v-alert v-if="userUpdateSuccess" type="success"
      >비밀번호 변경 완료!</v-alert
    >
    <LabelInput>
      <template v-slot:col1>
        <strong>현재 비밀번호</strong>
      </template>
      <template v-slot:col2>
        <input
          type="password"
          name="oldPassword"
          class="input"
          v-model="oldPassword"
          v-on:input="Ko2En"
        />
        {{ oldPassword }}
      </template>
    </LabelInput>
    <LabelInput>
      <template v-slot:col1>
        <strong>변경할 비밀번호</strong>
      </template>
      <template v-slot:col2>
        <input
          name="newPassword"
          type="password"
          class="input"
          :readonly="nextPw"
          v-model="newPassword"
          v-on:input="Ko2En"
        />
      </template>
    </LabelInput>
    <LabelInput>
      <template v-slot:col1>
        <strong>비밀번호 확인</strong>
      </template>
      <template v-slot:col2>
        <input
          name="re_password"
          type="password"
          class="input"
          :readonly="nextPw"
          v-model="re_password"
          v-on:input="Ko2En"
        />
      </template>
    </LabelInput>
    <div class="submit-wrapper">
      <Button
        :type="'btn'"
        :text="'변경'"
        :disabled="clickAble"
        @onClick="
          userPwEdit({
            newPassword: newPassword,
            oldPassword: oldPassword,
          })
        "
      />
    </div>
  </div>
</template>

<script>
import Button from "@/components/UI-Components/Button";
import LabelInput from "@/components/form/LabelInput";
import { mapActions, mapState, mapMutations } from "vuex";
import Inko from "inko";
let inko = new Inko();
export default {
  name: "Password",
  components: {
    LabelInput,
    Button,
  },
  computed: {
    ...mapState(["userUpdateError", "userUpdateSuccess"]),
    // 새로운 비번 재입력이 일치
    isPassword() {
      return this.newPassword != this.re_password;
    },
  },
  watch: {
    isPassword(newVal) {
      if (this.oldPassword.length != 0 && newVal == false) {
        console.log(newVal);
        this.emptyPw();
      }
    },
    oldPassword(newVal) {
      if (newVal !== "") {
        this.nextPw = false;
        this.clearUserUpdate();
      } else {
        this.nextPw = true;
      }
    },
    newPassword(newVal) {
      if (newVal == "") {
        this.clickAble = true;
      }
    },
    userUpdateSuccess(newVal) {
      this.clearPw(newVal);
    },
    userUpdateError(newVal) {
      this.clearPw(newVal);
    },
  },
  data() {
    return {
      oldPassword: "",
      newPassword: "",
      re_password: "",
      clickAble: true,
      nextPw: true,
    };
  },
  methods: {
    ...mapActions(["userPwEdit"]),
    ...mapMutations(["clearUserUpdate"]),
    emptyPw() {
      this.clickAble = false;
    },
    clearPw(newVal) {
      if (newVal == true) {
        this.oldPassword = "";
        this.newPassword = "";
        this.re_password = "";
      }
    },
    Ko2En($event) {
      let key = $event.target.name;
      switch (key) {
        case "oldPassword":
          this.oldPassword = inko.ko2en($event.target.value);
          break;

        case "newPassword":
          this.newPassword = inko.ko2en($event.target.value);
          break;

        case "re_password":
          this.re_password = inko.ko2en($event.target.value);
          break;
        default:
          console.log("some Err");
          break;
      }
    },
  },
  destroyed() {
    this.clearUserUpdate();
  },
};
</script>

<style lang="scss" scoped>
#Edit-wrapper {
  width: 100%;
  .submit-wrapper {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    padding: 0 40px;
  }
}
</style>
