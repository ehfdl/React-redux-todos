import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../redux/module/todos";
// import { useDispatch } from "react-redux";

const Listbox = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  const onClickDeleteButton = (id) => {
    dispatch(deleteTodo(id));
    console.log(id);
  };

  console.log(todos);
  return (
    <ListContainer>
      <div className="working_box">
        <p>Working</p>
        <div className="todo_box">
          <div className="todo_title">ㄴㅇㄹㄴㅇㄹ</div>
          <div className="todo_text">ㄷㄹㄷㄹ</div>
          <button className="del_Bt">삭제하기</button>
          <button className="com_Bt">얍</button>
        </div>
        {todos.map((todo) => {
          return (
            <div className="todo_box">
              <div className="todo_title">{todo.title}</div>
              <div className="todo_text">{todo.text}</div>
              <button
                className="del_Bt"
                key={todo.id}
                onClick={() => onClickDeleteButton(todo.id)}
              >
                삭제하기
              </button>
              <button className="com_Bt">얍</button>
            </div>
          );
        })}
      </div>
      <div className="done_box">
        <p>Done</p>
        <div className="todo_box">
          <div className="todo_title">ㄴㅇㄹㄴㅇㄹ</div>
          <div className="todo_text">ㄷㄹㄷㄹ</div>
          <button className="del_Bt">삭제하기</button>
          <button className="com_Bt">얍</button>
        </div>
      </div>
    </ListContainer>
  );
};

//styled-components

const ListContainer = styled.div`
  position: relative;
  max-width: 1000px;
  width: 100%;
  padding: 20px;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 20px;
  border: 1px solid gray;
  border-radius: 20px;
`;

export default Listbox;
