<template>
  <Content>
    <ul v-for="shopInfo in shopList" :key="shopInfo.id">
      <li>
        <router-link :to="{ path : `/shop/detail/${shopInfo.id}` }">
          <div>
            <ul v-for="(content,index) in shopInfo" :key="index">
              <li>{{content}}</li>
            </ul>
          </div>
        </router-link>
      </li>
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
      shopList: []
    };
  },
  mounted() {
    this.asyncData(this.$route);
  },
  methods: {
    async asyncData(route) {
      try {
        let config = {
          headers: {
            Authorization: localStorage.getItem("access_token")
          }
        };
        const res = await axios.get(
          "http://13.209.160.6:8080/api/v1/shops/",
          config
        );
        this.shopList = res.data.content;
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>

<style>
</style>