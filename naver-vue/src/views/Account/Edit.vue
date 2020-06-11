<template>
  <div id="Edit-wrapper">
    <v-alert v-if="userUpdateError" type="error">에러 발생...</v-alert>
    <v-alert v-if="userUpdateSuccess" type="success">회원정보 수정 완료!</v-alert>
    <!-- row1 -->
    <LabelInput>
      <template v-slot:col1>
        <Profile :picture="userInfo.picture" :size="'38px'" />
      </template>
      <template v-slot:col2>
        <strong>{{userInfo.email}}</strong>
        <Modal :text="'프로필 사진 바꾸기'" :type="'text'"></Modal>
      </template>
    </LabelInput>
    <!-- row2 -->
    <LabelInput>
      <template v-slot:col1>
        <strong>이름</strong>
      </template>
      <template v-slot:col2>
        <input type="text" v-model="name" class="input" @keyup="onChange" />
      </template>
    </LabelInput>
    <div class="submit-wrapper">
      <Button
        :type="'btn'"
        :text="'변경'"
        :disabled="change"
        @onClick="userEdit({
        property : 'name',
        value : name
      })"
      />
    </div>
  </div>
</template>

<script>
import Profile from "@/components/UI-Components/Profile";
import Modal from "@/components/UI-Components/Modal";
import LabelInput from "@/components/form/LabelInput";
import Button from "@/components/UI-Components/Button";
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  name: "Edit",
  components: {
    Profile,
    Modal,
    LabelInput,
    Button
  },
  computed: {
    ...mapState(["userInfo", "userUpdateError", "userUpdateSuccess"])
  },
  data() {
    return {
      change: true,
      name: ""
    };
  },
  mounted() {
    this.name = this.userInfo.name;
  },
  watch: {
    name(newVal) {
      //  페이지 이동 없이 이름을 또 변경할 시 알람창 없애기
      if (newVal) {
        this.clearUserUpdate();
      }
    }
  },
  methods: {
    ...mapMutations(["clearUserUpdate"]),
    ...mapActions(["userEdit"]),
    onChange(e) {
      this.change = false;
      if (e.target.value == "") {
        this.change = true;
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