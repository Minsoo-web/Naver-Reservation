<template>
  <div>
    <Profile :picture="userInfo.picture" :size="'72px'" />
  </div>
</template>

<script>
import Profile from "@/components/UI-Components/Profile";
import { mapState } from 'vuex';
export default {
  name: "Edit",
  components: {
    Profile
  },
  computed:{
    ...mapState(['userInfo'])
  }
};
</script>

<style lang="scss" scoped>
</style>