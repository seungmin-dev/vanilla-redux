import { legacy_createStore as createStore } from "redux";
// store는 state를 저장하는 공간
// state는 내 application에서 바뀌는 data
// redux는 내 data를 관리해주기 위해 만들어짐
const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

// reducer(countModifier)는 내 data를 modify하는 함수
// action : redux에서 function을 부를 때 쓰는 두번째 parameter, argument
const countModifier = (count = 0, action) => {
  if (action.type === "ADD") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  } else {
    return count;
  }
};
const countStore = createStore(countModifier);

countStore.dispatch({ type: "ADD" }); // object only

// data의 store를 만들고
// data의 modifier를 만듦
// dispatch를 이용해 message를 보냄
// 보낸 message를 action에 넣고
// action을 체크해줌

console.log(countStore.getState());
