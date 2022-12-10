import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../redux/module/todos";
import { updateTodo } from "../redux/module/todos";
import { Link } from "react-router-dom";

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
        {todos.map((todo) => {
          if (!todo.isDone) {
            return (
              <TodoBox key={todo.id}>
                <Link to="/sub">
                  <div>상세보기</div>
                </Link>
                <TodoTitle>{todo.title}</TodoTitle>
                <TodoText>{todo.text}</TodoText>
                <Button delete onClick={() => onClickDeleteButton(todo.id)}>
                  삭제하기
                </Button>
                <Button onClick={() => onClickUpdateButton(todo.id)}>
                  {todo.isDone ? "취소하기" : "완료하기"}
                </Button>
              </TodoBox>
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="done_box">
        <p>Done</p>
        {todos.map((todo) => {
          if (todo.isDone) {
            return (
              <TodoBox key={todo.id}>
                <Link to="/sub">
                  <div>상세보기</div>
                </Link>
                <TodoTitle>{todo.title}</TodoTitle>
                <TodoText>{todo.text}</TodoText>
                <Button delete onClick={() => onClickDeleteButton(todo.id)}>
                  삭제하기
                </Button>
                <Button onClick={() => onClickUpdateButton(todo.id)}>
                  {todo.isDone ? "취소하기" : "완료하기"}
                </Button>
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

export default Listbox;

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

const TodoTitle = styled.div`
  position: relative;
  font-size: x-large;
  margin-bottom: 10px;
`;

const TodoText = styled.div`
  margin-left: 5px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  margin-left: 10px;
  width: 113px;
  height: 40px;

  cursor: pointer;
  &:hover {
    scale: 1.03;
    /* color: ${(props) => (props.delete ? "#b73e3e" : "yellow")}; */
    color: ${(props) =>
      props.children === "삭제하기"
        ? "#b73e3e"
        : props.children === "완료하기"
        ? "#009EFF"
        : "#E8AA42"};
    border-color: ${(props) =>
      props.children === "삭제하기"
        ? "#b73e3e"
        : props.children === "완료하기"
        ? "#009EFF"
        : "#E8AA42"};
  }
`;
