import { createStore } from 'redux';
import todo from './reducers/reducer';

const storage = createStore(todo);

export default storage;
