

<script lang="ts">
import { Component, Vue, Mixins } from "vue-property-decorator";
import mixin1 from "./mixin1";
@Component
export default class MyMixin extends Mixins(mixin1) {
  public mixinData = "hahhah";
  mounted() {
    // console.log(this.mixinData1);
  }
}
</script>

<style lang="" scoped>
</style>
