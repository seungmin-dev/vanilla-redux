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

const onChange = () => {
  number.innerHTML = countStore.getState();
};

countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({ type: "ADD" });
};

const handleMinus = () => {
  countStore.dispatch({ type: "MINUS" });
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
