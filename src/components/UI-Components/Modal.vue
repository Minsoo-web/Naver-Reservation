<template>
  <div id="modal">
    <Button v-if="type == 'btn'" :text="text" @onClick="modalShow" />
    <span v-else @click="modalShow">{{text}}</span>
    <div id="modal-wrapper" v-show="modalView" @click.self="modalShow">
      <section>
        <div>
          <div id="row1">
            <slot name="row1"></slot>
          </div>
          <div id="row2">
            <slot name="row2"></slot>
          </div>
          <div id="row3">
            <slot name="row3"></slot>
          </div>
          <div id="row4">
            <slot name="row4"></slot>
          </div>
        </div>
        <div id="btn-wrapper">
          <slot name="btn"></slot>
          <Button :text="'닫기'" @onClick="modalShow" />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Button from "@/components/UI-Components/Button";
import { mapState, mapMutations } from "vuex";
export default {
  name: "Modal",
  computed: {
    ...mapState(["modalView"])
  },
  components: {
    Button
  },
  methods: {
    ...mapMutations(["modalShow"])
  },
  props: {
    text: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: "btn"
    }
  }
};
</script>

<style lang="scss" scoped>
#modal {
  & > span {
    cursor: pointer;
    color: rgb(123, 207, 163);
  }
  & > span:hover {
    color: rgb(123, 217, 163);
  }
}
#modal-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;
  background-color: rgba($color: #000000, $alpha: 0.5);
  section {
    display: flex;
    flex-direction: column;
    min-width: 50%;
    min-height: 50%;
    padding: 20px;
    background-color: #fff;
    & > div {
      padding: 10px;
    }
    #btn-wrapper {
      display: flex;
      justify-content: flex-end;
    }
  }
}
</style>