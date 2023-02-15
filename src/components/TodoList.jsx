import useReduxDispatch from '../hooks/useReduxDispatch';
import useReduxState from '../hooks/useReduxState';
import { completdTodo } from '../redux/action';

export default function TodoList() {
  const state = useReduxState();
  const dispatch = useReduxDispatch();

  const todo = state.todos.map((todo, index) => (
    <li key={index}>
      {todo.done ? (
        <span>
          <del>{todo.text}</del>{' '}
        </span>
      ) : (
        <span>{todo.text}</span>
      )}

      <button value={todo.index} onClick={handleFinishTodo}>
        완료
      </button>
    </li>
  ));

  function handleFinishTodo(e) {
    const index = e.target.value;
    dispatch(completdTodo(index));
  }

  return (
    <div>
      {JSON.stringify(state)}
      <ul>{todo}</ul>
    </div>
  );
}
