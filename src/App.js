import AnecdoteForm from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';
import Notification from './components/Notification';
import Filter from './components/Filter';
import { useDispatch, useSelector } from 'react-redux';
import services from './services/anecdotes';
import { useEffect } from 'react';
import { setAnecdotes, fetchData } from './reducers/anecdoteReducer';

const App = () => {
  const show = useSelector((state) => {
    console.log(state)
    return state.notifications.show
  });
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchData())
  }, [])

  return (
    <div>
      {show ? <Notification /> : null}
      <Filter />
      <h2>Anecdotes</h2>
      <AnecdoteList />
      <h2>create new</h2>
      <AnecdoteForm />
    </div>
  );
};

export default App;
