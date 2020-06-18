<template>
  <Content>
    <div id="home">
      <h1>Hello</h1>
      <ul>
        <li>
          <router-link :to="{ name: 'Mypage' }" exact>내 예약 확인하기</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Shop_List' }" exact>가맹점 둘러보기</router-link>
        </li>
      </ul>
    </div>
  </Content>
</template>

<script>
import Content from "@/components/Content";
export default {
  name: "Home",
  components: {
    Content
  }
};
</script>

<style lang="scss" scoped>
#home {
  position: relative;
  top: 50%;
}
</style>
