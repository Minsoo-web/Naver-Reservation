<template>
  <section>
    <div class="shopInfo-card" v-for="shop in reserveInfo[0].shopInfo" :key="shop.id">
      <div class="thumnail-wrapper">
        <img :src="shop.thumnail" alt />
      </div>
      <span>{{ shop.name }}</span>
      <span>{{ shop.date }}</span>
      <span>{{ shop.score }}</span>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Content",
  computed: {
    ...mapState(["reserveInfo"])
  }
};
</script>

<style lang="scss" scoped>
section {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .shopInfo-card {
    display: flex;
    flex-direction: column;
    flex-basis: 33%;
    .thumnail-wrapper {
      width: 100%;
      height: 50%;
    }
  }
}
</style>