<template>
  <nav data-app>
    <ul id="Nav">
      <li>
        <router-link :to="{ name: 'Home' }">Home</router-link>
      </li>
      <li>
        <v-menu offset-y v-if="isLogin">
          <template v-slot:activator="{ on }">
            <v-btn depressed color="teal darken-1" dark v-on="on">Dropdown</v-btn>
          </template>
          <v-list>
            <v-list-item router :to="{ name: 'Mypage' }">
              <v-list-item-title>마이페이지</v-list-item-title>
            </v-list-item>
            <v-list-item router :to="{ name: 'Regist' }">
              <v-list-item-title>매장등록하기</v-list-item-title>
            </v-list-item>
            <v-list-item @click="logout">
              <v-list-item-title>로그아웃</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <div v-else>
          <router-link :to="{ name: 'Login' }">Login</router-link>
          <router-link :to="{ name: 'SignUp' }">Sign Up</router-link>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["isLogin"])
  },
  methods: {
    ...mapActions(["logout"])
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
nav {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 20px 0;
  background-color: rgb(38, 60, 86);
  #Nav {
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
  }
  a {
    color: #ffffff;
    text-decoration: none;
  }
}
</style>