import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { createTodo } from "../redux/module/todos";

const Input = () => {
  const dispatch = useDispatch();
  const id = new Date();

  const [todo, setTodo] = useState({
    id: 0,
    title: "",
    text: "",
    isDone: false,
  });
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  const onClickCreateTodo = () => {
    dispatch(createTodo({ ...todo, id }));

    // setTodo reset 해주기
    setTodo({
      id: 0,
      title: "",
      text: "",
      isDone: false,
    });
  };

  return (
    <InputContainer>
      <InputBox
        type="text"
        name="title"
        placeholder="제목을 입력하세요."
        onChange={onChangeHandler}
        value={todo.title}
      />
      <InputBox
        type="text"
        name="text"
        placeholder="내용을 입력하세요."
        onChange={onChangeHandler}
        value={todo.text}
      />
      <Button onClick={onClickCreateTodo}>추가하기</Button>
    </InputContainer>
  );
};

// styled-component

const InputContainer = styled.div`
  position: relative;
  max-width: 750px;
  width: 100%;
  height: 50px;
  padding: 20px;
  background-color: gray;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 20px;
  border: 1px solid gray;
  border-radius: 20px;
`;
const InputBox = styled.input`
  position: relative;
  max-width: 300px;
  width: 100%;
  height: 45px;
  background-color: #eee;
  border: none;
  border-radius: 10px;
  margin: 0 10px 0 0;
  padding-left: 10px;
  font-size: 16px;
  transition-duration: 0.3s;
  &:hover {
    box-shadow: 3px 3px 5px #aaa;
  }
  &::placeholder {
    padding-left: 2px;
  }
  &:focus {
    box-shadow: 3px 3px 5px #aaa;
    scale: 1.01;
  }
  &:focus::placeholder {
    color: #111;
  }
`;
const Button = styled.button`
  right: 20px;
  position: absolute;
  width: 65px;
  height: 45px;
  border-radius: 10px;
  border-color: black;
  cursor: pointer;
  &:hover {
    scale: 1.03;
  }
`;

export default Input;
