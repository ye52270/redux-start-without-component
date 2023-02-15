import { createStore } from 'redux';
import todo from './todo';

const storage = createStore(todo);

export default storage;
