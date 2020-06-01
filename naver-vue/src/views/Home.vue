<template>
  <div id="home">
    <h1>Hello</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped>
#home {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
   background-color: rgb(38, 60, 86);
}
</style>