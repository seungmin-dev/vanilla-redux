import React from "react";
import { useState } from "react";
import { connect } from "react-redux";

function Home({ toDos }) {
  const [text, setText] = useState("");
  function onSubmit(e) {
    e.preventDefault();
    setText("");
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
export default connect(mapStateToProps)(Home);
