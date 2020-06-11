<template>
  <div class="edit-row">
    <div class="edit-col1">
      <slot name="col1"></slot>
    </div>
    <div class="edit-col2">
      <slot name="col2"></slot>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "LabelInput",
  computed: {
    ...mapState(["userInfo"])
  }
};
</script>

<style lang="scss" scoped>
.edit-row {
  display: flex;
  width: 100%;
  height: 70px;
  padding: 10px 0;
  /* border-bottom: 1px solid; */
  .edit-col1 {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    min-width: 100px;
  }
  .edit-col2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    padding: 0 40px;
  }
}
</style>