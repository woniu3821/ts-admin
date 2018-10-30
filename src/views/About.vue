<template>
  <div class="home">
   <Table :columns="columns" :data="list"></Table>
   <Page :total="100" @on-change="pageChange" show-total />  

  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State, Getter, Mutation, Action, namespace } from "vuex-class";
const homeModule = namespace("home");
interface Page {
  pageNumber: number;
  pageSize: number;
}
@Component
export default class About extends Vue {
  columns: object[] = [
    {
      type: "selection",
      width: 55,
      align: "center"
    },
    {
      title: "用户名",
      key: "userId"
    },
    {
      title: "姓名",
      key: "name"
    },
    {
      title: "性别",
      key: "sexId_DISPLAY"
    },
    {
      title: "人员类型",
      key: "userTypeId_DISPLAY"
    },
    {
      title: "所属部门/院系",
      key: "deptId_DISPLAY"
    },
    {
      title: "手机号",
      key: "mobilePhone"
    },
    {
      title: "账号状态",
      key: "userStatus_DISPLAY"
      // render: (h, params) => {
      //   let status = params.row.userStatus_DISPLAY;
      //   let tag = "正常";
      //   if (status == 1) {
      //     tag = "冻结";
      //   }
      //   if (status == 2) {
      //     tag = "停用";
      //   }
      //   return h("div", tag);
      // }
    }
  ];
  pageObj: Page = {
    pageNumber: 1,
    pageSize: 10
  };
  @homeModule.Getter("list") list!: any;
  // count: number;
  // @Mutation("INCREMENT")
  // INCREMENT: Function;
  // @Mutation("DECREMENT")
  // DECREMENT: Function;
  @homeModule.Action("TABLE_POST") public TABLE_POST!: any;

  getTableList() {
    this.TABLE_POST(this.pageObj);
  }
  pageChange(num: number) {
    this.pageObj.pageNumber = num;
    this.getTableList();
  }
  mounted() {}
}
</script>
<style lang="stylus" scoped>
</style>
>
