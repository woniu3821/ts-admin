<template>
  <div id="app">
   <Home/>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Home from "@/components/layout/Home.vue";
@Component({
  components: {
    Home
  }
})
export default class App extends Vue {}
</script>

<style lang="stylus" scoped>
#app
  .router-link-exact-active
    color #1873e0
</style>
