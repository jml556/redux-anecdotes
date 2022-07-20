import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  createVoteCreator,
  showNotification,
  removeNotification,
  createData,
  createNotification,
} from '../reducers/anecdoteReducer';

const AnecdoteForm = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const addVote = async (e) => {
    e.preventDefault();
    dispatch(createVoteCreator(text));
    dispatch(createData(text, 12, 5));
    setText('');
    dispatch(createNotification(text, 3000))
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
