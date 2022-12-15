// import styled from "styled-components";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { editTodo } from "../redux/module/todos";

// const EditInput = () => {
//   const dispatch = useDispatch();
//   const todo = useSelector((state) => state.todos.todo);

//   // useState 수정내용 저ㅇ

//   const todoid = String(todo.map((todo) => todo.id));
//   const todoisDone = todo.map((todo) => todo.isDone);

//   const [newedittodo, setNewEditTodo] = useState({
//     id: todoid,
//     title: "",
//     text: "",
//     isDone: todoisDone[0],
//   });

//   const onChangeHandler = (event) => {
//     const { name, value } = event.target;
//     setNewEditTodo({ ...newedittodo, [name]: value });
//   };

//   console.log(newedittodo)

//   // 버튼 클릭시 createTodo 를 통한 Todo 추가.
//   const onClickEditTodo = (event) => {
//     // prevent 새로고침 막기 form 사용시!
//     event.preventDefault();
//     // 제목과 내용 입력이 안됬을시 alert 띄우고 return
//     // 내용없이 띄어쓰기만 해도 입력 안되기 처리함.

//     if (newedittodo.title.replace(/ /g, "") === "") {
//       alert("제목을 입력해주세요!");
//       return;
//     } else if (newedittodo.text.replace(/ /g, "") === "") {
//       alert("내용을 입력해주세요!");
//       return;
//     }

//     dispatch(editTodo({ ...newedittodo }));

//     setNewEditTodo({
//         title: "",
//         text: "",
//       });
//   };

//   return (
//     <InputContainer onSubmit={onClickEditTodo}>
//       <InputBox
//         type="text"
//         name="title"
//         placeholder="제목을 입력하세요."
//         onChange={onChangeHandler}
//         value={newedittodo.title}
//       />
//       <InputBox
//         type="text"
//         name="text"
//         placeholder="내용을 입력하세요."
//         onChange={onChangeHandler}
//         value={newedittodo.text}
//       />
//       <Button>추가하기</Button>
//     </InputContainer>
//   );
// };

// export default EditInput;

// const InputContainer = styled.form`
//   position: relative;
//   max-width: 750px;
//   width: 100%;
//   height: 50px;
//   padding: 20px;
//   background-color: gray;
//   left: 50%;
//   top: 20%;
//   transform: translateX(-50%);
//   margin-top: 20px;
//   border: 1px solid gray;
//   border-radius: 20px;
// `;
// const InputBox = styled.input`
//   position: relative;
//   max-width: 300px;
//   width: 100%;
//   height: 45px;
//   background-color: #eee;
//   border: none;
//   border-radius: 10px;
//   margin: 0 10px 0 0;
//   padding-left: 10px;
//   font-size: 16px;
//   transition-duration: 0.3s;
//   &:hover {
//     box-shadow: 3px 3px 5px #aaa;
//   }
//   &::placeholder {
//     padding-left: 2px;
//   }
//   &:focus {
//     box-shadow: 3px 3px 5px #aaa;
//     scale: 1.01;
//   }
//   &:focus::placeholder {
//     color: #111;
//   }
// `;
// const Button = styled.button`
//   right: 20px;
//   position: absolute;
//   width: 65px;
//   height: 45px;
//   border-radius: 10px;
//   border-color: black;
//   cursor: pointer;
//   &:hover {
//     scale: 1.03;
//   }
// `;
