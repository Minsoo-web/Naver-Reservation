<template>
  <div class="profile-wrapper" :style="sizeStyle">
    <img v-if="picture == null" src="http://www.macreel.com/img/testimonial-1.jpg" alt="profile" />
    <img v-else :src="picture" alt="프로필" />
  </div>
</template>

<script>
export default {
  name: "Profile",
  props: {
    picture: {
      type: String
    },
    size: {
      type: String,
      default: "72px"
    }
  },
  data() {
    return {
      sizeStyle: {
        width: this.size,
        height: this.size
      }
    };
  }
};
</script>

<style>
</style>