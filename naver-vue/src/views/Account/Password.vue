<template>
  <div id="Edit-wrapper">
    <v-alert v-if="userUpdateError" type="error">이전 비밀번호가 일치하지 않습니다.</v-alert>
    <v-alert v-if="isPassword" type="error">입력하신 비밀번호가 일치하지 않습니다.</v-alert>
    <v-alert v-if="userUpdateSuccess" type="success">비밀번호 변경 완료!</v-alert>
    <LabelInput>
      <template v-slot:col1>
        <strong>현재 비밀번호</strong>
      </template>
      <template v-slot:col2>
        <input type="password" class="input" v-model="oldPassword" />
      </template>
    </LabelInput>
    <LabelInput>
      <template v-slot:col1>
        <strong>변경할 비밀번호</strong>
      </template>
      <template v-slot:col2>
        <input type="password" class="input" v-model="newPassword" :readonly="nextPw" />
      </template>
    </LabelInput>
    <LabelInput>
      <template v-slot:col1>
        <strong>비밀번호 확인</strong>
      </template>
      <template v-slot:col2>
        <input type="password" class="input" v-model="re_password" :readonly="nextPw" />
      </template>
    </LabelInput>
    <div class="submit-wrapper">
      <Button
        :type="'btn'"
        :text="'변경'"
        :disabled="clickAble"
        @onClick="userPwEdit({
          newPassword :newPassword ,
          oldPassword : oldPassword
        })"
      />
    </div>
  </div>
</template>

<script>
import Button from "@/components/UI-Components/Button";
import LabelInput from "@/components/form/LabelInput";
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  name: "Password",
  components: {
    LabelInput,
    Button
  },
  computed: {
    ...mapState(["userUpdateError", "userUpdateSuccess"]),
    // 새로운 비번 재입력이 일치
    isPassword() {
      return this.newPassword != this.re_password;
    }
  },
  watch: {
    isPassword(newVal) {
      if (this.oldPassword.length != 0 && newVal == false) {
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
    userUpdateSuccess(newVal) {
      this.clearPw(newVal);
    },
    userUpdateError(newVal) {
      this.clearPw(newVal);
    }
  },
  data() {
    return {
      oldPassword: "",
      newPassword: "",
      re_password: "",
      clickAble: true,
      nextPw: true
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
    }
  },
  destroyed() {
    this.clearUserUpdate();
  }
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