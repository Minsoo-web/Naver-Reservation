<template>
  <div id="Edit-wrapper">
    <LabelInput>
      <template v-slot:col1>
        <strong>현재 비밀번호</strong>
      </template>
      <template v-slot:col2>
        <input type="password" class="input" />
      </template>
    </LabelInput>
    <LabelInput>
      <template v-slot:col1>
        <strong>변경할 비밀번호</strong>
      </template>
      <template v-slot:col2>
        <input type="password" class="input" v-model="password" />
      </template>
    </LabelInput>
    <LabelInput>
      <template v-slot:col1>
        <strong>비밀번호 확인</strong>
      </template>
      <template v-slot:col2>
        <input type="password" class="input" v-model="re_password" />
      </template>
    </LabelInput>
    <div class="submit-wrapper">
      <Button
        :type="'btn'"
        :text="'변경'"
        :disabled="!isPassword"
        @onClick="userPwEdit({
          password : password
        })"
      />
    </div>
  </div>
</template>

<script>
import Button from "@/components/UI-Components/Button";
import LabelInput from "@/components/form/LabelInput";
import { mapActions } from "vuex";
export default {
  name: "Password",
  components: {
    LabelInput,
    Button
  },
  computed: {
    isPassword() {
      return this.password == this.re_password;
    }
  },
  data() {
    return {
      password: "",
      re_password: ""
    };
  },
  methods: {
    ...mapActions(["userPwEdit"])
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