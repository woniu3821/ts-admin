import { Component, Vue } from "vue-property-decorator";
@Component
export default class MyMixin1 extends Vue {
  public showHello(msg: string = "Hello Word!") {
    alert(msg);
  }
  public mixinData1 = "hahha2";
}
