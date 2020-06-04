<template>
  <div id="mypage">
    <Header></Header>
    <TabNav></TabNav>
    <Content></Content>
  </div>
</template>

<script>
import Header from "@/components/Mypage/Header";
import Content from "@/components/Mypage/Content";
import TabNav from "@/components/Mypage/TabNav";
import { mapState } from "vuex";
export default {
  name: "Mypage",
  components: {
    Header,
    Content,
    TabNav
  }
};
</script>

<style scoped>
#mypage {
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100vh;
  margin: 0 auto;
}

</style>
