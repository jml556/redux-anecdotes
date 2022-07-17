import { createSlice } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

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
      return state;
    },
    showNotification(state, action) {
      return {
        ...state,
        show: true,
      };
    },
    removeNotification(state, action) {
      return {
        ...state,
        show: false,
      };
    },
  },
});

const initialNotificationsState = {}

const notificationSlice = createSlice({
  name: "notifications",
  initialState: initialNotificationsState,
  reducers: {
    notificationReducer(state, action) {
      console.log(state)
      return [
        ...state,
        action.payload
      ]
    }
  }
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
