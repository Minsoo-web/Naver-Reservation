<template>
  <v-app id="app">
    <Nav />
    <router-view></router-view>
    <Footer />
  </v-app>
</template>

<script>
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
export default {
  components: {
    Nav,
    Footer,
  },
  created() {
    console.log(process.env);
  },
};
</script>

<style>
img {
  width: 100%;
  height: 100%;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
  color: inherit;
}
.input {
  padding: 15px;
  border: 1px solid #8d8d8d;
}
</style>
