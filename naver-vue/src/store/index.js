import Vue from "vue";
import Vuex from "vuex";
import router from "@/router/index.js";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: null,
    isLogin: false,
    isLoginError: false,
  },
  mutations: {
    loginSuccess(state, payload) {
      state.isLogin = true;
      state.isLoginError = false;
      state.userInfo = payload;
    },
    loginError(state) {
      state.isLogin = false;
      state.isLoginError = true;
      state.userInfo = null;
    },
    logout(state) {
      state.isLogin = false;
      state.isLoginError = false;
      state.userInfo = null;
    },
  },
  actions: {
    login({ commit, dispatch }, loginObj) {
      axios
        .post("https://reqres.in/api/login", {
          email: loginObj.email,
          password: loginObj.password,
        })
        .then((res) => {
          console.log(res);
          // 로그인 성공시 로컬스토리지에 토큰 저장
          let token = res.data.token;
          localStorage.setItem("access_token", token);
          dispatch("getMemberInfo");
        })
        .catch((err) => {
          console.log(err);
          commit("loginError");
        });
    },
    logout({ commit }) {
      commit("logout");
      localStorage.removeItem("access_token");
      router.push({ name: "Home" });
    },
    getMemberInfo({ commit }) {
      let config = {
        headers: {
          "access-token": localStorage.getItem("access_token"),
        },
      };
      if (localStorage.getItem("access_token")) {
        axios
          .get("https://reqres.in/api/users/2", config)
          .then((response) => {
            let obj = {
              email: response.data.data.email,
              name:
                response.data.data.last_name + response.data.data.first_name,
              picture: response.data.data.avatar,
            };
            commit("loginSuccess", obj);
          })
          .catch((error) => {
            // 통신 문제 에러
            console.log(err);
            commit("loginError");
          });
      } else {
        // 토큰 만료로 인한 로그인 실패
        commit("loginError");
      }
    },
  },
  modules: {},
});
