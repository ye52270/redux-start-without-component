import ReduxContext from '../contexts/ReduxContext';
import storage from '../redux/storage';

export default function ReduxContextProvider({ children }) {
  return (
    <ReduxContext.Provider value={storage}> {children}</ReduxContext.Provider>
  );
}
