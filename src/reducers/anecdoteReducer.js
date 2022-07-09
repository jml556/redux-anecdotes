import { createSlice } from '@reduxjs/toolkit';

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
];

const getId = () => (100000 * Math.random()).toFixed(0);

export const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  };
};

export const incrementVote = (id) => {
  return {
    type: 'INCREMENT',
    payload: id,
  };
};

export const createVote = (text) => {
  return {
    type: 'CREATE_VOTE',
    payload: text,
  };
};

const initialState = anecdotesAtStart.map(asObject);

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState,
  reducers: {
    addVoteReducer(state, action) {
      return state.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            votes: item.votes + 1,
          };
        }
        return {
          ...item,
        };
      });
    },
    createVoteReducer(state, action) {
      return [
        ...state,
        {
          id: getId(),
          content: action.payload,
          votes: 0,
        },
      ];
    },
  },
});

export const {addVoteReducer, createVoteReducer} = anecdoteSlice.actions
export default anecdoteSlice.reducer
