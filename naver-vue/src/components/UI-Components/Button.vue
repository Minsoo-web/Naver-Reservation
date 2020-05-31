<template>
  <button :style="styleObj" :type="type" @mouseover="onHover" @mouseleave="onLeave">{{ text }}</button>
</template>

<script>
export default {
  name: "Button",
  data() {
    return {
      styleObj: {
        backgroundColor: this.bgColor,
        color: this.txtColor
      }
    };
  },
  methods: {
    // 호버시 색상 변경
    onHover(e) {
      let colorArr = this.bgColor.split(",");
      let hoverColor = parseInt(colorArr[1]) + 10;
      colorArr[1] = hoverColor + "";
      e.target.style.backgroundColor = colorArr.join(",");
    },
    onLeave(e) {
      e.target.style.backgroundColor = this.bgColor;
    }
  },
  props: {
    text: {
      type: String,
      required: true
    },
    bgColor: {
      type: String,
      default: "rgb(123,207,163)"
    },
    txtColor: {
      type: String,
      default: "#ffffff"
    },
    type: {
      type: String,
      default: null
    }
  }
};
</script>

<style scoped>
button {
  padding: 10px;
}
</style>