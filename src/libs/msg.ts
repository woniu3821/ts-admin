import { Message } from "iview";
export class Msg {
  static show(
    content: string,
    time: number = 3,
    type: string = "success"
  ): any {
    Message[type]({
      content,
      duration: time
    });
  }
}
