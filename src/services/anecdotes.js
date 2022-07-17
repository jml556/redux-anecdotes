import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)

  return response.data
}

const createAnecdote = async (content, id, votes) => {
  const payload = {
    content,
    id,
    votes
  }
  const response = await axios.post(baseUrl, payload)
  return response
}

export default { getAll, createAnecdote }