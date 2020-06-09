<template>
  <div id="Edit-wrapper">
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
        <input type="text" :value="userInfo.name" class="input" @keyup="onChange" />
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
import { mapState, mapActions } from "vuex";
export default {
  name: "Edit",
  components: {
    Profile,
    Modal,
    LabelInput,
    Button
  },
  computed: {
    ...mapState(["userInfo"])
  },
  data() {
    return {
      change: true,
      name: ""
    };
  },
  methods: {
    ...mapActions(["userEdit"]),
    onChange(e) {
      this.change = false;
      this.name = e.target.value;
    }
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