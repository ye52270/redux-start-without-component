import { ADD_TODO, COMPLETE_TODO } from '../action';

const todosInitialState = [];
// todo 에 index 를 생성해주기 위한 클로저
function makeIndex() {
  let index = 0;
  return function () {
    return ++index;
  };
}

const incrementIndex = makeIndex();

export default function todos(prevState = todosInitialState, action) {
  if (action.type === ADD_TODO) {
    return [
      ...prevState,
      { index: incrementIndex(), text: action.text, done: false },
    ];
  }

  if (action.type === COMPLETE_TODO) {
    return prevState.map((todo) => {
      if (todo.index == action.index) {
        return { ...todo, done: true };
      }
      return todo;
    });
  }
  return prevState;
}
