import { legacy_createStore as createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addToDo = (text) => {
  return { type: ADD_TODO, text, id: Date.now() };
};

const delToDo = (id) => {
  return { type: DELETE_TODO, id };
};
const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      // state mutation
      // 상태를 직접적으로 수정하지 말고 새로운 상태를 return 해야 함
      // return state.push(action.text); <- 절대 해서는 안되는 행동!
      return [{ text: action.text, id: action.id }, ...state];
    // 공식문서에서 reducer 안에서는 Date.now()를 쓰지 않기를 권장
    // => action에서 id를 생성하고 받아옴
    case DELETE_TODO:
      return [];
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

const dispatchAddToDo = (text) => {
  store.dispatch(addToDo(text));
};

const dispatchDelToDo = (e) => {
  const id = e.target.parentNode.id;
  store.dispatch(delToDo(id));
};

const paintToDos = () => {
  const toDos = store.getState();
  toDos.forEach((toDo) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "DEL";
    btn.addEventListener("click", dispatchDelToDo);
    li.id = toDo.id;
    li.innerText = toDo.text;
    ul.appendChild(li);
    li.appendChild(btn);
  });
};

store.subscribe(paintToDos);

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddToDo(toDo);
};

form.addEventListener("submit", onSubmit);
