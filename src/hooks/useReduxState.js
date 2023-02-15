import { useContext, useState, useEffect } from 'react';
import ReduxContext from '../contexts/ReduxContext';

export default function useReduxState() {
  const storage = useContext(ReduxContext);
  const [state, setState] = useState(storage.getState());

  useEffect(() => {
    const unsubscribe = storage.subscribe(() => {
      setState(storage.getState());
    });
    return () => {
      unsubscribe();
    };
  }, [storage]);

  return state;
}
