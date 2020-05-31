<template>
  <nav>
    <router-link :to="{ name : 'Home'}">Home</router-link>
    <router-link :to="{ name : 'Login'}">Login</router-link>
  </nav>
</template>

<script>
export default {};
</script>

<style>
nav {
  position: fixed;
  width: 100%;
  top: 0;
  background-color: rgb(38, 60, 86);
  display: flex;
  padding: 20px;
}
a {
  color: #ffffff;
  text-decoration: none;
}
</style>