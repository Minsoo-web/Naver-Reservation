<template>
  <header class="mypage">
    <h1>header</h1>
    <Profile :picture="userInfo.picture" :size="'72px'" />
  </header>
</template>

<script>
import Profile from "@/components/UI-Components/Profile";
import { mapState } from "vuex";
export default {
  name: "Header",
  components: {
    Profile
  },
  computed: {
    ...mapState(["userInfo"])
  }
};
</script>

<style scoped>
header.mypage {
  margin-top: 76px;
  border: 1px solid;
}
</style>