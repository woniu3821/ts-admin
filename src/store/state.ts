export interface Tablelist {
  name?: string;
}

export interface State {
  list: Array<Tablelist>;
  num: number;
}
const state: State = {
  list: [],
  num: 0
};

export default state;
