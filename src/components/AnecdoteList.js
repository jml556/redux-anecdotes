import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addVoteReducer } from '../reducers/anecdoteReducer';

const AnecdoteList = () => {
  const dispatch = useDispatch();
  const vote = (id) => {
    dispatch(addVoteReducer(id));
  };
  const anecdotes = useSelector((state) => {
    console.log(state.anecdotes);
    return state.anecdotes;
  });

  return (
    <React.Fragment>
      {anecdotes
        .slice()
        .sort((a, b) => b.votes - a.votes)
        .map((anecdote, idx, arr) => (
          <div key={anecdote.id}>
            <div>{anecdote.content}</div>
            <div>
              has {anecdote.votes}
              <button
                onClick={() => {
                  console.log(arr);
                  vote(anecdote.id);
                }}
              >
                vote
              </button>
            </div>
          </div>
        ))}
    </React.Fragment>
  );
};

export default AnecdoteList;
