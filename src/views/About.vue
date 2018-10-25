<template>
  <div class="home">
   <Table :columns="columns" :data="list"></Table>
    <Button type="error" @click="getCityWeather(city)">获取数据</Button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State, Getter, Mutation, Action } from "vuex-class";

@Component
export default class Home extends Vue {
  city: string = "上海";
  list: object[] = [];
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

  // @Getter("count")
  // count: number;
  // @Mutation("INCREMENT")
  // INCREMENT: Function;
  // @Mutation("DECREMENT")
  // DECREMENT: Function;
  @Action("getTodayWeather") getTodayWeather: Function;

  getCityWeather(city: string) {
    this.getTodayWeather({ pageSize: 10, pageNumber: 1 }).then(
      (res: Ajax.AjaxResponse) => {
        this.list = res.data.datas.rows;
        // const { low, high, type } = res.data.forecast[0];
        // this.$Message.success(`${city}今日：${type} ${low} - ${high}`);
      }
    );
  }
}
</script>
