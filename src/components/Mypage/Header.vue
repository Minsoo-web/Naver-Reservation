<template>
  <header class="mypage">
    <div class="profile-wrapper">
      <Profile :picture="userInfo.picture" :size="'72px'" />
      <div class="userInfo-box">
        <span>{{ userInfo.name }}님</span>
        <span>{{ userInfo.email }}</span>
        <span>{{ userInfo.authority }}</span>
        <router-link :to="{name : 'Edit'}">
          <Button :text="'프로필 수정'" />
        </router-link>
      </div>
    </div>
    <div id="reserve-num">
      <div class="reserve-num-wrapper" v-for="shop in reserveInfo" :key="shop.title">
        <span>{{shop.title}}</span>
        <p>{{shop.shopInfo.length}}</p>
      </div>
    </div>
  </header>
</template>

<script>
import Profile from "@/components/UI-Components/Profile";
import Button from "@/components/UI-Components/Button";
import { mapState, mapMutations } from "vuex";
export default {
  name: "Header",
  components: {
    Profile,
    Button
  },
  computed: {
    ...mapState(["userInfo", "reserveInfo"])
  },
  methods: {
    ...mapMutations(["modalShow"])
  }
};
</script>

<style scoped>
header.mypage {
  display: flex;
  justify-content: space-between;
  margin-top: 76px;
  padding: 40px 0;
}
.profile-wrapper {
  display: flex;
  justify-content: space-between;
  width: 27%;
}
.userInfo-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
/* 예약 표 */
#reserve-num {
  display: flex;
  justify-content: center;
  width: 60%;
}
.reserve-num-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  width: 100px;
}
.reserve-num-wrapper + .reserve-num-wrapper {
  border-left: 1px solid;
}
</style>