<template>
  <div id="regist">
    <div>
      <span>author</span>
      <input class="input" type="text" v-model="userInfo.name" readonly />
    </div>
    <div>
      <span>title</span>
      <input type="text" class="input" v-model="form.title" />
    </div>
    <div>
      <span>category</span>
      <input type="text" class="input" v-model="form.category" />
    </div>
    <div>
      <span>overView</span>
      <input type="text" class="input" v-model="form.overView" />
    </div>
    <div>
      <span>content</span>
      <textarea type="text" class="input" v-model="form.content"></textarea>
    </div>
    <div>
      <span>price</span>
      <input type="text" class="input" v-model="form.price" />
    </div>
    <Button :text="'submit'" @onClick="regist()"></Button>
  </div>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";
import Button from "@/components/UI-Components/Button";
import router from "@/router/index.js";
export default {
  components: {
    Button
  },
  computed: {
    ...mapState(["userInfo"])
  },
  data() {
    return {
      form: {
        category: "",
        content: "",
        overView: "",
        price: 0,
        title: ""
      }
    };
  },
  methods: {
    regist() {
      let config = {
        headers: {
          Authorization: localStorage.getItem("access_token")
        }
      };
      axios
        .post("http://13.209.160.6:8080/api/v1/shops", this.form, config)
        .then(res => {
          let id = res.data;
          router.push({ path: `/shop/detail/${id}` });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
#regist {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}
</style>