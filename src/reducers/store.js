import { configureStore } from "@reduxjs/toolkit";
import { createVoteReducer, addVoteReducer } from "./anecdoteReducer";

const store = configureStore({
  reducer: {
    createVote: createVoteReducer,
    addVoteReducer: addVoteReducer
  }
})

export default store