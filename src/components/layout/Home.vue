<template>
  <div class="layout">
   <layout-menu></layout-menu>
   <layout-content></layout-content>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Mixins } from "vue-property-decorator";
import LayoutContent from "@/components/layout/Content.vue";
import LayoutMenu from "@/components/layout/Menu.vue";
import MyMixin from "./mixin.vue";
@Component({
  components: {
    LayoutMenu,
    LayoutContent
  }
})
export default class Home extends Mixins(MyMixin) {
  //mixins混入
  public mounted() {
    // console.log(this.mixinData); // Should be picked up by typescript now
    // this.showHello();
  }
}
</script>
<style lang="stylus" src="./style.styl" scoped>
</style>
