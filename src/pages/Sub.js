import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { readTodo } from "../redux/module/todos";

const Sub = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  const onClickSubPage = (id) => {
    dispatch(readTodo);
    console.log(id);
  };
  return <div>야이 멍충아!!</div>;
};

export default Sub;
