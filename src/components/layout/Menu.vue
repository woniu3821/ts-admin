
<template>
        <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
            <Menu :active-name="active" theme="dark" width="auto">
                <menu-item v-for="(item,index) in routes" :name="item.name" v-if="item.meta" :to="item.path" :key="index">{{item.meta.name}}</menu-item>
            </Menu>
        </Sider>
</template>
<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { routes } from "@/router/router";
import { RouteConfig } from "vue-router";
@Component({})
export default class LayoutMenu extends Vue {
  @Watch("$route", { immediate: true, deep: true })
  route(to: RouteConfig, form: RouteConfig) {
    if (to.name) {
      this.active = to.name;
    }
  }
  active: string = "";
  routes: object[] = routes;
}
</script>
<style lang="stylus" scoped>
</style>
