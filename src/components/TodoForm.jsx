import useReduxDispatch from '../hooks/useReduxDispatch';
import { useRef } from 'react';
import { addTodo, showAll, showComplete } from '../redux/action';

export default function TodoForm() {
  const dispatch = useReduxDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(inputRef.current.value));
  };

  const handleCheckChange = (e) => {
    const filterAll = e.target.checked;
    !filterAll ? dispatch(showAll()) : dispatch(showComplete());
  };
  const inputRef = useRef();

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input ref={inputRef} />
        <button>저장</button>
        <span>
          <input type="checkbox" onChange={handleCheckChange} />
        </span>
      </form>
    </div>
  );
}
