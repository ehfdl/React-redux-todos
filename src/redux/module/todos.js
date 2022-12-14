// action value 추가
const CREATE_TODO = "CREATE_TODO";
const DELETE_TODO = "DELETE_TODO";
const UPDATE_TODO = "UPDATE_TODO";
const READ_TODO = "READ_TODO";
const SEARCH_TODO = "SEARCH_TODO";

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

export const searchTodo = (payload) => {
  return {
    type: SEARCH_TODO,
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

  pagenumber: 0,
};

// 리듀서

const todos = (state = initialState, action) => {
  switch (action.type) {
    // 추가기능 - state를 전개하고 todos 에 새로운 todo 를 추가
    case CREATE_TODO: {
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    }

    // 삭제기능 - state를 전개하고 todos 에 target인 todo.id 가 아닌것만 todos 에 저장.
    case DELETE_TODO: {
      return {
        ...state,
        todos: [...state.todos].filter((todo) => todo.id !== action.payload),
      };
    }

    // 완료,취소기능 - state 전개 후 target 의 todo.id 가 일치하는 todo 의 isDone 을 false 면 true 로 true 면 false 로 변경
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

    // 상세페이지 - state 에서 선택된 todo 만 뽑아오기.
    case READ_TODO: {
      return {
        ...state,
        todo: [...state.todos].filter((todo) => todo.id === action.payload),
      };
    }

    // title 검색 기능!  페이지 넘버 1로 변환 / 검색리스트 깔아보자
    case SEARCH_TODO: {
      return {
        ...state,
        searchtodos: [...state.todos].filter((todo) =>
          todo.title.includes(action.payload)
        ),
        pagenumber: (state.pagenumber = 1),
      };
    }

    default:
      return state;
  }
};

export default todos;
