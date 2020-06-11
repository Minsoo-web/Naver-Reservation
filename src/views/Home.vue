<template>
  <div id="home">
    <h1>Hello</h1>
    <router-link :to="{ name: 'Mypage' }" exact>내 예약 확인하기</router-link>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
#home {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}
</style>
