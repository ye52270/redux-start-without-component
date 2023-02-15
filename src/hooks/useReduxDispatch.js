import { useContext } from 'react';
import ReduxContext from '../contexts/ReduxContext';

export default function useReduxDispatch() {
  const storage = useContext(ReduxContext);

  return storage.dispatch;
}
