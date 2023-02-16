import { SHOW_ALL, SHOW_COMPLETE } from '../action';

const filterInitialState = 'ALL';
export default function filter(prevState = filterInitialState, action) {
  if (action.type === SHOW_COMPLETE) {
    return 'COMPLETE';
  }

  if (action.type === SHOW_ALL) {
    return 'ALL';
  }

  return prevState;
}
