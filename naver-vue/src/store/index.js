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
    modalView: false,
    reserveInfo: [
      {
        title: "전체",
        shopInfo: [
          {
            id: 1,
            name: "처음 간 가게",
            date: "2020-02-20",
            thumnail:
              "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1510&q=80",
            score: 5,
          },
          {
            id: 2,
            name: "두번째로 간 가게",
            date: "2020-02-24",
            thumnail:
              "https://images.unsplash.com/photo-1564419965579-5da68ffdf3af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
            score: 4,
          },
          {
            id: 3,
            name: "방문예정 가게",
            date: "2020-06-06",
            thumnail:
              "https://images.unsplash.com/photo-1513451732213-5775a1c40335?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1334&q=80",
            score: null,
          },
        ],
      },
      {
        title: "이용 예정",
        shopInfo: [
          {
            id: 3,
            name: "방문예정 가게",
            date: "2020-06-06",
            thumnail:
              "https://images.unsplash.com/photo-1513451732213-5775a1c40335?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1334&q=80",
            score: null,
          },
        ],
      },
      {
        title: "이용 완료",
        shopInfo: [
          {
            id: 1,
            name: "처음 간 가게",
            date: "2020-02-20",
            thumnail:
              "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1510&q=80",
            score: 5,
          },
          {
            id: 2,
            name: "두번째로 간 가게",
            date: "2020-02-24",
            thumnail:
              "https://images.unsplash.com/photo-1564419965579-5da68ffdf3af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
            score: 4,
          },
        ],
      },
      {
        title: "취소 환불",
        shopInfo: [],
      },
    ],
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
    modalShow(state) {
      state.modalView = !state.modalView;
    },
    userInfoEdit(state, payload) {
      let newUser = {
        ...state.userInfo,
        [payload.property]: payload.value,
      };
      state.userInfo = newUser;
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
          let token = res.data.accessToken;
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
            let picture = "";
            if (response.data.picture == null) {
              picture = undefined;
            } else {
              picture = response.data.picture;
            }
            let obj = {
              email: response.data.email,
              name: response.data.name,
              picture: picture,
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
    userEdit({ commit }, newUserInfo) {
      console.log(newUserInfo);
      commit("userInfoEdit", newUserInfo);
    },
    userPwEdit({ commit }, newUserPw) {
      console.log(newUserPw);
    },
  },
  modules: {},
});
