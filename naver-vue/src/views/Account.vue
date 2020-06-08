<template>
  <div id="Account">
    <div>
      <aside>
        <ul>
          <li>
            <router-link :to="{name : 'Edit'}">프로필 편집</router-link>
          </li>
          <li>
            <router-link :to="{name : 'PassWord'}">비밀번호 변경</router-link>
          </li>
        </ul>
      </aside>
      <div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Account"
};
</script>

<style lang="scss" scoped>
#Account {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  padding: 20px 0;
  background-color: #fafafa;
  & > div {
    display: flex;
    margin-top: 76px;
    margin-bottom: 40px;
    width: 80%;
    background-color: #ffffff;
    & > * {
      padding: 20px;
    }
    & > aside {
      border-right: 1px solid;
      width: 23%;
      height: 100%;
    }
    & > aside + div {
      /* background-color: seagreen; */
    }
  }
}
</style>