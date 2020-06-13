import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const rejectAuthUser = (to, from, next) => {
  if (localStorage.getItem("access_token")) {
    // 이미 로그인된 유저
    alert("이미 로그인을 하였습니다.");
    next("/");
  } else {
    next();
  }
};

// 로그인한 회원만 접속
const onlyAuthUser = (to, from, next) => {
  if (!localStorage.getItem("access_token")) {
    alert("로그인이 필요한 기능입니다.");
    next("/login");
  } else {
    next();
  }
};

const routes = [
  {
    path: "*",
    component: () => import("../components/NotFound"),
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    beforeEnter: rejectAuthUser,
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/signup",
    name: "SignUp",
    component: () => import("../views/SignUp.vue"),
  },
  {
    path: "/mypage",
    name: "Mypage",
    beforeEnter: onlyAuthUser,
    component: () => import("../views/Mypage.vue"),
  },
  {
    path: "/account/edit",
    name: "Account",
    beforeEnter: onlyAuthUser,
    component: () => import("../views/Account.vue"),
    children: [
      {
        path: "/account/edit",
        name: "Edit",
        beforeEnter: onlyAuthUser,
        component: () => import("../views/Account/Edit.vue"),
      },
      {
        path: "/account/password/change",
        name: "PassWord",
        beforeEnter: onlyAuthUser,
        component: () => import("../views/Account/Password.vue"),
      },
    ],
  },
  {
    path: "/owner",
    name: "Owner",
    beforeEnter: onlyAuthUser,
    component: () => import("@/views/Owner/Owner"),
    children: [
      {
        path: "/owner/shop",
        name: "Shop",
        beforeEnter: onlyAuthUser,
        component: () => import("@/views/Owner/Shop"),
      },
      {
        path: "/owner/regist",
        name: "Regist",
        beforeEnter: onlyAuthUser,
        component: () => import("@/views/Owner/Regist"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
