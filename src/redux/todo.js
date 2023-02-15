import { ADD_TODO, COMPLETE_TODO } from './action';

//const initialState = [];
const initialState = { todos: [], filter: 'ALL' };

// todo 에 index 를 생성해주기 위한 클로저
function makeIndex() {
  let index = 0;
  return function () {
    return ++index;
  };
}
const incrementIndex = makeIndex();

//prevState = {todos:[{index:0, text:아침식사, done:false},{index:0, text:아침식사, done:false}],filter:ALL}

export default function todo(prevState = initialState, action) {
  if (action.type === ADD_TODO) {
    return {
      ...prevState,
      todos: [
        ...prevState.todos,
        { index: incrementIndex(), text: action.text, done: false },
      ],
    };
  }

  if ((action.type = COMPLETE_TODO)) {
    return {
      ...prevState,
      todos: prevState.todos.map((todo) => {
        if (todo.index == action.index) {
          return { ...todo, done: true };
        }
        return todo;
      }),
      s,
    };
  }

  return prevState;
}
