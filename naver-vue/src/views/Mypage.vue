<template>
  <div id="mypage">
    <h1>mypage</h1>
    <p>{{ userInfo }}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Mypage",
  computed: {
    ...mapState(["userInfo"]),
  },
};
</script>

<style scoped>
#mypage {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}
</style>
