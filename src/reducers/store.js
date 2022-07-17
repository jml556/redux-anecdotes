import { createStore, combineReducers } from 'redux';
import {
  anecdoteReducer,
  notificationReducer,
  filterReducer,
} from './anecdoteReducer';
import { configureStore } from '@reduxjs/toolkit';

const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  notifications: notificationReducer,
  inputFilter: filterReducer,
});
const store = configureStore({
  reducer,
});

export default store;
