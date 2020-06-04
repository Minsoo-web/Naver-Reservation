<template>
  <div id="TabNav">
    <ul>
      <li v-for="shop in reserveInfo" :key="shop.title">{{shop.title}}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "TabNav",
  computed: {
    ...mapState(["reserveInfo"])
  }
};
</script>

<style lang="scss" scoped>
#TabNav {
  display: flex;
  justify-content: center;
  padding: 20px 0;
  border-top: 1px solid;
  ul {
    display: flex;
    li {
      /* border: 1px solid; */
      padding: 10px 40px;
    }
  }
}
</style>