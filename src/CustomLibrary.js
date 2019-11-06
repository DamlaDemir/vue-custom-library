
import VueCustomButton from "./VueCustomButton.vue";
import VueCustomClock from "./VueCustomClock.vue";

export default {
    install(Vue, options) {
      Vue.component("vue-custom-button", VueCustomButton);
      Vue.component("vue-custom-clock", VueCustomClock);
    }
  };