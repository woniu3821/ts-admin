<template>
  <div class="about">
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component
export default class About extends Vue {
  created() {
    this.$store.dispatch("home/GET_TABLE");
  }
}
</script>

<style lang="stylus" scoped>
</style>
>
