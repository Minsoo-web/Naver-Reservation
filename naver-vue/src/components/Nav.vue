<template>
  <nav data-app>
    <router-link :to="{ name: 'Home' }">Home</router-link>
    <router-link :to="{ name: 'SignUp' }">Sign Up</router-link>

    <v-menu offset-y v-if="isLogin">
      <template v-slot:activator="{ on }">
        <v-btn depressed color="teal darken-1" dark v-on="on">
          Dropdown
        </v-btn>
      </template>
      <v-list>
        <v-list-item router :to="{ name: 'Mypage' }">
          <v-list-item-title>마이페이지</v-list-item-title>
        </v-list-item>
        <v-list-item @click="logout">
          <v-list-item-title>로그아웃</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <router-link v-else :to="{ name: 'Login' }">Login</router-link>
  </nav>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["isLogin"]),
  },
  methods: {
    ...mapActions(["logout"]),
  },
  data() {
    return {};
  },
};
</script>

<style scope>
nav {
  position: fixed;
  width: 100%;
  top: 0;
  background-color: rgb(38, 60, 86);
  display: flex;
  padding: 20px;
}
nav a {
  color: #ffffff;
  text-decoration: none;
}
</style>
