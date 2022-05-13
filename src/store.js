import { legacy_createStore as createStore } from "redux";
import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case addToDo.type:
//       return [{ text: action.payload, id: Date.now() }, ...state];
//     case deleteToDo.type:
//       return state.filter((toDo) => toDo.id !== action.payload);
//     default:
//       return state;
//   }
// };

const reducer = createReducer([], {
  // createReducer를 사용하면 state를 mutate 하기 쉬워짐
  // switch, case를 사용할 필요가 없게 만들어줌
  [addToDo]: (state, action) => {
    state.push({ text: action.payload, id: Date.now() });
  },
  [deleteToDo]: (state, action) =>
    state.filter((toDo) => toDo.id !== action.payload),
});
// createReducer를 사용할 땐 두 가지 옵션이 있음
// 하나는 state를 return 하는 것
// 다른 하나는 state를 mutate 하는 것

// state를 mutate하면 return하지 않는 것이고 return 하면 mutate를 하지 않는 것

// redux에서 state를 mutate하는 이유 :
// redux toolkit이 immer 아래에서 작동하기 때문
// return [{ text: action.payload, id: Date.now() }, ...state]; <= 이 부분을 알아서 해줌

const store = configureStore({ reducer });

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
