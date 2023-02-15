import useReduxDispatch from '../hooks/useReduxDispatch';
import { useRef } from 'react';
import { addTodo } from '../redux/action';

export default function TodoForm() {
  const dispatch = useReduxDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(inputRef.current.value));
  };

  const inputRef = useRef();

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input ref={inputRef} />
        <button>저장</button>
      </form>
    </div>
  );
}
