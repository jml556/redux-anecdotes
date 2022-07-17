import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createVoteCreator, showNotification, removeNotification } from '../reducers/anecdoteReducer';
import services from '../services/anecdotes'


const AnecdoteForm = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const addVote = async (e) => {
    e.preventDefault();    
    dispatch(createVoteCreator(text));
    const data = await services.createAnecdote(text, 12, 5)
    console.log(data)
    setText('')
    dispatch(showNotification())
    setTimeout(() => {
      dispatch(removeNotification())
    }, 2000)
  };

  return (
    <form>
      <div>
        <input
          name="create"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <button onClick={addVote}>create</button>
    </form>
  );
};

export default AnecdoteForm;
