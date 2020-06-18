<template>
  <div id="content">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Content"
};
</script>

<style lang="scss" scoped>
#content {
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 82vh;
  margin-top: 76px;
}
</style>