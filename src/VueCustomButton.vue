<template>
  <button
    @click="onClick"
    @dblclick="onDoubleClick"
    :class="[
      'vue-custom-button',
      'vue-custom-button--' + color,
      'vue-custom-button--' + size,
      {
        'vue-custom-button--rounded': rounded
      }
    ]"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "blue",
      validator(x) {
        return ["blue", "green", "red"].indexOf(x) !== -1;
      }
    },
    rounded: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: "default",
      validator(x) {
        return ["small", "default", "large"].indexOf(x) !== -1;
      }
    }
  },
  methods: {
    onClick(event) {
      this.$emit("click", event);
    },
    onDoubleClick(event) {
      this.$emit("dblclick", event);
    }
  }
};
</script>

<style>
.vue-custom-button {
  display: inline-block;
  outline: 0;
  border: 1px solid rgba(0, 0, 0, 0.1);
  color: #ffffff;
  font-weight: 500;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  user-select: none;
  cursor: pointer;
}
/* --> COLORS <-- */
.vue-custom-button--blue {
  background-color: #0194ef;
}
.vue-custom-button--green {
  background-color: #1bb934;
}
.vue-custom-button--red {
  background-color: #e1112c;
}
/* --> SIZES <-- */
.vue-custom-button--small {
  padding: 8px 10px;
  border-radius: 4px;
  font-size: 12px;
  line-height: 12px;
}
.vue-custom-button--default {
  padding: 12px 14px;
  border-radius: 6px;
  font-size: 14px;
  line-height: 16px;
}
.vue-custom-button--large {
  padding: 16px 18px;
  border-radius: 8px;
  font-size: 16px;
  line-height: 20px;
}
/* --> BOOLEANS <-- */
.vue-custom-button--rounded {
  border-radius: 60px;
}
</style>