import axios from 'axios';

const baseUrl = 'http://localhost:3001/anecdotes';

const getAll = async () => {
  const response = await axios.get(baseUrl);

  return response.data;
};

const createAnecdote = async (content, id, votes) => {
  const payload = {
    content,
    id,
    votes,
  };
  const response = await axios.post(baseUrl, payload);
  return response;
};

const incrementVote = async (id, count) => {
  const res = await axios.put(`${baseUrl}/${id}`, {
    ...count,
    votes: Number(count.votes) + 1,
  });
  return res
};

export default { getAll, createAnecdote, incrementVote };
