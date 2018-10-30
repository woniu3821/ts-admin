<template>
    <div>
      <Row class="title-top">
        用户信息
      </Row>
    <!-- <Table :columns="column" :data="data"></Table> -->
    <Button type="primary" @click="adds">增加</Button>
    <Button type="primary" @click="reduce">减少</Button>
    </div>
</template>=
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Action, Getter } from "vuex-class";
@Component
export default class User extends Vue {
  @Action("add") private adds!: () => void;
  @Action private reduce!: () => void;
  @Getter private result: any;
}
</script>

<style lang="stylus" src="./style.styl" scoped>
</style>
