// id = uuidv4(),  input = form, preventdefault 사용.

import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { createTodo } from "../redux/module/todos";
import { v4 as uuidv4 } from "uuid";

const InputSec = () => {
  const dispatch = useDispatch();

  // id 를 등록한 date 로 주어 고유 id
  const id = uuidv4();

  // useState 를 사용하여 todo 생성
  const [todo, setTodo] = useState({
    id: 0,
    title: "",
    text: "",
    isDone: false,
  });

  // 각 name 에 value 삽입하기 title - title , text-text
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  // 버튼 클릭시 createTodo 를 통한 Todo 추가.
  const onClickCreateTodo = (event) => {
    // prevent 새로고침 막기 form 사용시!
    event.preventDefault();
    // 제목과 내용 입력이 안됬을시 alert 띄우고 return
    // 내용없이 띄어쓰기만 해도 입력 안되기 처리함.
    if (todo.title.replace(/ /g, "") === "") {
      alert("제목을 입력해주세요!");
      return;
    } else if (todo.text.replace(/ /g, "") === "") {
      alert("내용을 입력해주세요!");
      return;
    }
    dispatch(createTodo({ ...todo, id }));

    // Todo title,text reset 해주기
    setTodo({
      title: "",
      text: "",
    });
  };

  return (
    <InputContainer onSubmit={onClickCreateTodo}>
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
      <Button>추가하기</Button>
    </InputContainer>
  );
};

export default InputSec;

// styled-component

const InputContainer = styled.form`
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
