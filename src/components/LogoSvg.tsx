// @ is an alias to /src
import * as TSX from "vue-tsx-support";
import { VNode } from "vue/types/umd";
import vuetifyMixin from "@/mixin/vuetify";
interface Events {
  onClick: () => void;
}

export default TSX.componentFactoryOf<Events>().create({
  name: "logoSvg",
  mixins: [vuetifyMixin],
  components: {
  },
  render(): VNode {
    return (
      <v-img
        src={this.logoSrc}
        class="my-3"
        contain
        height="200"
        gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
        onClick={() => {
          this.$emit("click");
        }}
      />
    );
  },
  computed: {
    logoSrc(): String {
      return this.$store.direct.getters.Const.logoSrcSvg;
    },
  },
});
