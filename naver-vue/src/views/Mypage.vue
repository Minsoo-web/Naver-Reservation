<template>
  <div id="mypage">
    <Header></Header>
    <Content></Content>
    <Review></Review>
  </div>
</template>

<script>
import Header from "@/components/Mypage/Header";
import Content from "@/components/Mypage/Content";
import Review from "@/components/Mypage/Review";
import { mapState } from "vuex";
export default {
  name: "Mypage",
  components: {
    Header,
    Content,
    Review
  }
};
</script>

<style scoped>
#mypage {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
}
section {
  min-height: 50vh;
}
</style>
