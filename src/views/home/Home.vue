<template>
  <div class="layout">
   <layout-menu></layout-menu>
   <layout-content></layout-content>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import LayoutContent from "@/components/layout/Content.vue";
import LayoutMenu from "@/components/layout/Menu.vue";
@Component({
  components: {
    LayoutMenu,
    LayoutContent
  }
})
export default class Home extends Vue {
  mounted() {}
}
</script>
<style lang="stylus" src="./style.styl" scoped>
</style>
