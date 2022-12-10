// action value 추가
const CREATE_TODO = "CREATE_TODO";
const DELETE_TODO = "DELETE_TODO";
const UPDATE_TODO = "UPDATE_TODO";
const READ_TODO = "READ_TODO";

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

export const updateTodo = (payload) => {
  return {
    type: UPDATE_TODO,
    payload,
  };
};

export const readTodo = (payload) => {
  return {
    type: READ_TODO,
    payload,
  };
};

// 초기 상태값
const initialState = {
  todos: [
    {
      id: "0",
      title: "리액트",
      text: "못했지롱",
      isDone: false,
    },
    {
      id: "1",
      title: "리액트",
      text: "다했지롱",
      isDone: true,
    },
  ],
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
    case UPDATE_TODO: {
      return {
        ...state,
        todos: [...state.todos].map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              isDone: !todo.isDone,
            };
          } else {
            return {
              ...todo,
            };
          }
        }),
      };
    }
    case READ_TODO: {
      return {
        ...state,
        todos: [...state.todos].map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
            };
          }
        }),
      };
    }

    default:
      return state;
  }
};

export default todos;
