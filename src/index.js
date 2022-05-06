import { legacy_createStore as createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      // state mutation
      // 상태를 직접적으로 수정하지 말고 새로운 상태를 return 해야 함
      // return state.push(action.text); <- 절대 해서는 안되는 행동!
      return [...state, { text: action.text, id: action.id }];
    case DELETE_TODO:
      return [];
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  store.dispatch({ type: ADD_TODO, text: toDo, id: Date.now() });
};

form.addEventListener("submit", onSubmit);
