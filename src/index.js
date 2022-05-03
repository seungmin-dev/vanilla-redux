import { legacy_createStore as createStore } from "redux";
// store는 state를 저장하는 공간
// state는 내 application에서 바뀌는 data
// redux는 내 data를 관리해주기 위해 만들어짐
const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

// reducer(countModifier)는 내 data를 modify하는 함수
const countModifier = (count = 0) => {
  return count;
};
const countStore = createStore(countModifier);

console.log(countStore.getState());
