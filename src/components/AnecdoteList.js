import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addVoteCreator, fetchAddVote } from '../reducers/anecdoteReducer';

const AnecdoteList = () => {
  const dispatch = useDispatch();
  const vote = (id, count) => {
    dispatch(addVoteCreator(id));
    dispatch(fetchAddVote(id, count));
  };
  const anecdotes = useSelector((state) => {
    console.log(state);
    return state.anecdotes;
  });
  const input = useSelector((state) => state.inputFilter);

  return (
    <React.Fragment>
      {anecdotes
        .slice()
        .sort((a, b) => b.votes - a.votes)
        .filter((item) => {
          if (input === '') return true;
          if (item.content.toLowerCase().includes(input)) return true;
          return false;
        })
        .map((anecdote, idx, arr) => (
          <div key={anecdote.id}>
            <div>{anecdote.content}</div>
            <div>
              has {anecdote.votes}
              <button
                onClick={() => {
                  vote(anecdote.id, anecdote);
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
