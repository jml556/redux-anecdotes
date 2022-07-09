import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createVote } from '../reducers/anecdoteReducer';

const AnecdoteForm = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const addVote = (e) => {
    e.preventDefault();
    dispatch(createVote(text));
    setText('')
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
