import Vue, { VNode, CreateElement } from "vue";
export declare interface Columns {
  type?: string;
  width?: number;
  align?: string;
  key?: string;
  title?: string;
  fixed?: string;
  render?: (h: CreateElement, params: any) => VNode;
}
