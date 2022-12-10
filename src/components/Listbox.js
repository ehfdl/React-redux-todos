import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../redux/module/todos";
import { updateTodo } from "../redux/module/todos";
// import { useDispatch } from "react-redux";

// useSelector 를 이용하여 state 에 todos 가져오기
const Listbox = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  // 삭제기능
  const onClickDeleteButton = (id) => {
    dispatch(deleteTodo(id));
    console.log(id);
  };

  // working, done 업데이트 기능
  const onClickUpdateButton = (id) => {
    dispatch(updateTodo(id));
  };

  console.log(todos);
  return (
    <ListContainer>
      <div className="working_box">
        <p>Working</p>
        {/* <TodoBox>
          <div className="todo_title">ㄴㅇㄹㄴㅇㄹ</div>
          <div className="todo_text">ㄷㄹㄷㄹ</div>
          <button className="del_Bt">삭제하기</button>
          <button className="com_Bt">얍</button>
        </TodoBox> */}
        {todos.map((todo) => {
          if (!todo.isDone) {
            return (
              <TodoBox key={todo.id}>
                <div className="todo_title">{todo.title}</div>
                <div className="todo_text">{todo.text}</div>
                <button
                  className="del_Bt"
                  key={todo.id}
                  onClick={() => onClickDeleteButton(todo.id)}
                >
                  삭제하기
                </button>
                <button
                  className="com_Bt"
                  onClick={() => onClickUpdateButton(todo.id)}
                >
                  {todo.isDone ? "취소하기" : "완료하기"}
                </button>
              </TodoBox>
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="done_box">
        <p>Done</p>
        {/* <TodoBox>
          <div className="todo_title">ㄴㅇㄹㄴㅇㄹ</div>
          <div className="todo_text">ㄷㄹㄷㄹ</div>
          <button className="del_Bt">삭제하기</button>
          <button className="com_Bt">얍</button>
        </TodoBox> */}
        {todos.map((todo) => {
          if (todo.isDone) {
            return (
              <TodoBox key={todo.id}>
                <div className="todo_title">{todo.title}</div>
                <div className="todo_text">{todo.text}</div>
                <button
                  className="del_Bt"
                  key={todo.id}
                  onClick={() => onClickDeleteButton(todo.id)}
                >
                  삭제하기
                </button>
                <button
                  className="com_Bt"
                  onClick={() => onClickUpdateButton(todo.id)}
                >
                  {todo.isDone ? "취소하기" : "완료하기"}
                </button>
              </TodoBox>
            );
          } else {
            return null;
          }
        })}
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
const TodoBox = styled.div`
  display: inline-block;
  width: 253px;
  height: 120px;
  margin: 10px;
  padding: 30px 30px 20px 30px;
  background-color: #aaa;
`;

export default Listbox;
