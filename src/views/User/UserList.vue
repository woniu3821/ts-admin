<template>
    <div>
      <Row class="title-top">
        管理员设置
      </Row>
       <Table :columns="columns" :data="list"></Table>
    </div>
</template>
<script lang="ts">
interface MenuPermission {
  id: number;
  key: string;
}
interface List {
  jobId: number;
  name: string;
  major: string;
  mobile: number;
  MenuPermission: Array<MenuPermission>;
  DomainPermission: Array<MenuPermission>;
}

import { Component, Vue } from "vue-property-decorator";
import { Action, Getter } from "vuex-class";
import { AxiosPromise, AxiosResponse } from "axios";
@Component
export default class User extends Vue {
  @Action("USER_LIST_GET") private getUserList!: () => AxiosPromise;
  @Action private reduce!: () => void;
  @Getter private result: any;
  private list: Array<List> = [];

  get columns() {
    // debugger;
    return [
      {
        title: "工号",
        key: "jobId"
      },
      {
        title: "姓名",
        key: "name"
      },
      {
        title: "部门",
        key: "major"
      },
      {
        title: "手机号码",
        key: "mobile"
      },
      {
        title: "菜单权限",
        key: "MenuPermission"
      },
      {
        title: "域权限",
        key: "DomainPermission"
      },
      {
        title: "操作",
        key: "address"
      }
    ];
  }
  // getLsit(res): viod {
  //   console.log(res);
  // }
  // async parseList() {
  //   this.list.reduce((result, next, index, arr) => {});
  // }
  // async mounted() {
  //   this.getUserList().then(this.getLsit);
  // }
}
</script>

<style lang="stylus" src="./style.styl" scoped>
</style>
