import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Header from '../components/Header';
// import EditInput from "../components/EditInput";

const Sub = () => {
  // 선택된 todo  useSelector 로 저장
  const todo = useSelector((state) => state.todos.todo);
  // console.log(todo);

  // id, title, text 값 가져오기
  const todoid = String(todo.map((todo) => todo.id));
  const todotitle = todo.map((todo) => todo.title);
  const todotext = todo.map((todo) => todo.text);

  // console.log(todoid);

  return (
    <Subbase>
      <Header/>
      {/* <EditInput /> */}

      <SubBox>
        <TodoId>ID: {todoid}</TodoId>
        <TodoTitle>{todotitle}</TodoTitle>
        <TodoText>{todotext}</TodoText>
        <Link to="/">
          <Button>이전으로</Button>
        </Link>
      </SubBox>
    </Subbase>
  );
};

export default Sub;

// styled-components

const Subbase = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
`;
const SubBox = styled.div`
  position: absolute;
  max-width: 400px;
  max-height: 240px;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid gray;
  border-radius: 20px;
  padding: 5px 30px 5px 30px;
  background-color: #aaa;
`;
const TodoId = styled.p`
  margin-top: 20px;
`;
const TodoTitle = styled.div`
  position: relative;
  font-size: x-large;
  margin-top: 40px;
  margin-bottom: 20px;
`;

const TodoText = styled.div`
  margin-left: 5px;
  margin-bottom: 40px;
`;
const Button = styled.button`
  width: 113px;
  height: 40px;
  position: absolute;
  right: 30px;

  cursor: pointer;
  &:hover {
    scale: 1.03;
    /* color: #b73e3e;
    border-color: #b73e3e; */
  }
`;
