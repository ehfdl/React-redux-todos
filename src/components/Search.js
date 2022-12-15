import React, { useState } from "react";
import styled from "styled-components";
import { searchTodo, viewAll } from "../redux/module/todos";
import { useDispatch } from "react-redux";

const Search = () => {
  const dispatch = useDispatch();

  const [searchtext, setSearchText] = useState("");

  const onClickViewAll = (event) => {
    dispatch(viewAll(event));
  };

  const onClickSearchBt = (event) => {
    event.preventDefault();
    dispatch(searchTodo(searchtext));
    setSearchText("");
  };

  return (
    <SearchBox>
      <ViewAllTodoBt onClick={onClickViewAll}>전체보기</ViewAllTodoBt>
      <SearchForm onSubmit={onClickSearchBt}>
        <SearchInput
          type="text"
          value={searchtext}
          placeholder="제목을 검색하세요."
          onChange={(e) => setSearchText(e.target.value)}
        />
        <SearchBt>검색</SearchBt>
      </SearchForm>
    </SearchBox>
  );
};

export default Search;

// styled-components

const SearchBox = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  /* background-color: blue; */
`;

const ViewAllTodoBt = styled.button`
  width: 100px;
  height: 30px;
  left: 10%;
  margin-top: 30px;
  cursor: pointer;
  z-index: 99;
  position: relative;
`;

const SearchForm = styled.form`
  display: flex;
  gap: 5px;
  max-width: 1000px;
  width: 100%;
  padding: 10px;
  position: relative;

  margin-top: 20px;
`;

const SearchInput = styled.input`
  width: 200px;
  height: 25px;
  left: 73%;
  position: relative;
`;

const SearchBt = styled.button`
  width: 50px;
  height: 30px;
  left: 73%;
  position: relative;
`;
