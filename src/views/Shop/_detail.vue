<template>
  <Content>
    <h1>{{ $route.params.id }}</h1>
    <ul>
      <li>{{ shopInfo.id }}</li>
      <li>{{ shopInfo.title }}</li>
      <li>{{ shopInfo.overView }}</li>
      <li>{{ shopInfo.content }}</li>
      <li>{{ shopInfo.author }}</li>
      <li>{{ shopInfo.price }}</li>
      <li>{{ shopInfo.category }}</li>
    </ul>
  </Content>
</template>

<script>
import Content from "@/components/Content";
import axios from "axios";
export default {
  components: {
    Content
  },
  data() {
    return {
      shopInfo: {}
    };
  },
  mounted() {
    this.asyncData(this.$route);
  },
  methods: {
    async asyncData(route) {
      // console.log(route.params.id);
      try {
        let config = {
          headers: {
            Authorization: localStorage.getItem("access_token")
          }
        };
        const res = await axios.get(
          "https://shophere-backend.herokuapp.com/api/v1/shops/" + route.params.id,
          config
        );
        this.shopInfo = res.data;
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>

<style>
</style>