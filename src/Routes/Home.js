import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { addToDo } from "../store";

function Home({ toDos, dispatch }) {
  const [text, setText] = useState("");
  function onSubmit(e) {
    e.preventDefault();
    setText("");
    dispatch(addToDo(text));
  }
  function onChange(e) {
    setText(e.target.value);
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>{JSON.stringify(toDos)}</ul>
    </>
  );
}

function mapStateToProps(state, props) {
  //   return { puppy: true };
  // connect()는 뒤에 명시되는 component로 보내는 Props에 추가될 수 있도록 허용해줌
  return { toDos: state };
}
// store로부터 state를 가져다주는 함수

function mapDispatchToProps(dispatch, ownProps) {
  return dispatch; // props를 바꿀 수 있게 됨
}
// mapState는 필요하지 않고 dispatch는 필요한 경우에 쓰는 함수

export default connect(null, mapDispatchToProps)(Home);
