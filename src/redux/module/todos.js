// action value 추가
const CREATE_TODO = "CREATE_TODO";
const DELETE_TODO = "DELETE_TODO";

// action creator 생성

export const createTodo = (payload) => {
  return {
    type: CREATE_TODO,
    payload,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

// 초기 상태값
const initialState = {
  todos: [],
  todo: {
    id: "0",
    title: "",
    text: "",
    isDone: false,
  },
};

// 리듀서
// case에서도 문자열이 아닌, 위에서 선언한 상수를 넣어줍니다.
const todos = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TODO: {
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    }
    case DELETE_TODO: {
      return {
        ...state,
        todos: [...state.todos].filter((todo) => todo.id !== action.payload),
      };
    }
    default:
      return state;
  }
};

export default todos;
