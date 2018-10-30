
<template>
        <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
            <Menu :active-name="routes[0].name" theme="dark" width="auto">
                <menu-item v-for="(item,index) in routes" :name="item.name" :to="item.path" :key="index">{{item.meta.name}}</menu-item>
            </Menu>
        </Sider>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { routes } from "@/router/router";
@Component({})
export default class LayoutMenu extends Vue {
  routes: object[] = routes;
}
</script>
<style lang="stylus" scoped>
</style>
