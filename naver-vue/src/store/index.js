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
    signUpUser: null,
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
    signUp(state, payload) {
      state.signUpUser = payload;
    },
  },
  actions: {
    login({ commit, dispatch }, loginObj) {
      axios
        .post("http://13.209.160.6:8080/api/v1/users/signin/", {
          email: loginObj.email,
          password: loginObj.password,
        })
        .then((res) => {
          console.log(res);
          // 로그인 성공시 로컬스토리지에 토큰 저장
          let token = res.data.token;
          localStorage.setItem("access_token", token);
          localStorage.setItem("userEmail", loginObj.email);
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
      localStorage.removeItem("userEmail");
      router.push({ name: "Home" });
    },
    getMemberInfo({ commit }) {
      let config = {
        headers: {
          Authorization: localStorage.getItem("access_token"),
        },
      };
      if (localStorage.getItem("access_token")) {
        axios
          .get(
            `http://13.209.160.6:8080/api/v1/users/?Email=${localStorage.getItem(
              "userEmail"
            )}`,
            config
          )
          .then((response) => {
            let obj = {
              email: response.data.email,
              name: response.data.name,
              picture: response.data.picture,
            };
            commit("loginSuccess", obj);
          })
          .catch((error) => {
            // 통신 문제 에러
            console.log(error);
            commit("loginError");
          });
      }
    },
    signUp({ commit }, signUpObj) {
      console.log(signUpObj);
      axios
        .post("http://13.209.160.6:8080/api/v1/users/", {
          email: signUpObj.email,
          name: signUpObj.name,
          password: signUpObj.password,
        })
        .then((res) => {
          console.log(res);
          // 회원가입을 완료하면 로그인 페이지로 넘어가고
          // 이메일만 미리 작성해준다.
          commit("signUp", signUpObj.email);
          router.push({ name: "Login" });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  modules: {},
});
