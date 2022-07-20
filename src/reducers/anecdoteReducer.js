import { createSlice } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import services from '../services/anecdotes';

const getId = () => (100000 * Math.random()).toFixed(0);

export const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  };
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeText(state, action) {
      return action.payload;
    },
  },
});

const notificationSlice = createSlice({
  name: 'notifications',
  initialState: { notifications: [{ message: 'Hello wrold' }], show: false },
  reducers: {
    addNotification(state, action) {
      return {
        ...state,
        notifications: [{ message: action.payload }],
      };
    },
    showNotification(state, action) {
      return {
        ...state,
        show: true,
      };
    },
    removeNotification(state, action) {
      return {
        notifications: [{ message: '' }],
        show: false
      };
    },
  },
});

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    addVoteCreator(state, action) {
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
    createVoteCreator(state, action) {
      state.push({
        id: getId(),
        content: action.payload,
        votes: 0,
      });
    },
    setAnecdotes(state, action) {
      return action.payload;
    },
  },
});

export const { changeText } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

export const { addNotification, showNotification, removeNotification } =
  notificationSlice.actions;
export const notificationReducer = notificationSlice.reducer;

export const { addVoteCreator, createVoteCreator, setAnecdotes } =
  anecdoteSlice.actions;
export const anecdoteReducer = anecdoteSlice.reducer;

export const fetchData = () => {
  return async (dispatch) => {
    const data = await services.getAll();
    dispatch(setAnecdotes(data));
  };
};

export const createData = (text, num1, num2) => {
  return async (dispatch) => {
    const data = await services.createAnecdote(text, num1, num2);
  };
};

export const fetchAddVote = (id, count) => {
  return async (dispatch) => {
    const data = await services.incrementVote(id, count);
    console.log(data);
  };
};

export const createNotification = (text, time) => {
  return async (dispatch) => {
    dispatch(addNotification(text));
    dispatch(showNotification());
    setTimeout(() => {
      dispatch(removeNotification())
    }, time)
  };
};
