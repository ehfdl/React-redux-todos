import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, updateTodo, readTodo } from "../redux/module/todos";
import { Link } from "react-router-dom";

// useSelector 를 이용하여 state 에 todos 가져오기
const Listbox = () => {
  const dispatch = useDispatch();

  // state 에서 todos 가져오기
  const todos = useSelector((state) => state.todos.todos);
  const searchtodos = useSelector((state) => state.todos.searchtodos);
  const pagenumber = useSelector((state) => state.todos.pagenumber);

  console.log(pagenumber);

  // 삭제기능
  const onClickDeleteButton = (id) => {
    dispatch(deleteTodo(id));
  };

  // working, done 업데이트 기능
  const onClickUpdateButton = (id) => {
    dispatch(updateTodo(id));
  };

  // 선택된 Todo 뽑아오기
  const onClickReadButton = (id) => {
    dispatch(readTodo(id));
  };

  // console.log(todos);

  // 각 todo 의 isDone true,false 에 따라 나눔.
  // true,false 에 따라 다른 텍스트 버튼에 줌
  // 버튼 호버시 다른 색 줘봄.
  return (
    <ListContainer>
      <P>Working</P>
      {todos.map((todo) => {
        if (!todo.isDone) {
          return (
            <TodoBox key={todo.id}>
              <StyledLink to="/sub" onClick={() => onClickReadButton(todo.id)}>
                <Detail>상세보기</Detail>
              </StyledLink>
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

      <P>Done</P>
      {todos.map((todo) => {
        if (todo.isDone) {
          return (
            <TodoBox key={todo.id}>
              <StyledLink to="/sub" onClick={() => onClickReadButton(todo.id)}>
                <Detail>상세보기</Detail>
              </StyledLink>
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
  margin-top: 10px;
  border: 1px solid gray;
  border-radius: 20px;
`;
const P = styled.p`
  font-size: x-large;
  font-weight: bold;
`;
const TodoBox = styled.div`
  display: inline-block;
  width: 253px;
  min-height: 120px;
  margin: 10px;
  padding: 25px 30px 20px 30px;
  background-color: #aaa;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Detail = styled.div`
  position: relative;
  width: 100px;
  left: 200px;
  color: #eee;
`;

const TodoTitle = styled.div`
  position: relative;
  font-size: x-large;
  margin-bottom: 10px;
  word-break: break-all;
`;

const TodoText = styled.div`
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 20px;
  word-break: break-all;
`;

// 버튼 children 의 텍스트 별로 다른 색 적용 그냥 연습해봄
const Button = styled.button`
  margin-left: 10px;
  width: 113px;
  height: 40px;
  /* background-color: #eee; */

  cursor: pointer;
  &:hover {
    scale: 1.03;
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
