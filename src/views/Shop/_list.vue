<template>
  <Content>
    <div class="list-wrapper">
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
    </div>
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
          "https://shophere-backend.herokuapp.com/api/v1/shops/",
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

<style lang="scss" scoped>
.list-wrapper {
  display: flex;
  flex-wrap: wrap;
  border: 1px solid;
}
</style>