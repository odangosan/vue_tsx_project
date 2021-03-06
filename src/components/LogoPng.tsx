import * as TSX from "vue-tsx-support";
import VuetifyMixin from "@/mixin/vuetify";

export default TSX.componentFactory.mixin(VuetifyMixin).create({
  name: "logoPng",
  components: {},
  render() {
    return <v-img src={this.logoSrc} class="my-3" contain height="200" />;
  },
  computed: {
    logoSrc() {
      return this.$store.direct.getters.Covid19ApiStore.logoSrcPng;
    }
  }
});
