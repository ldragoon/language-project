import Axios from 'axios'

const api = {
  create: async (payload, headers) => {
    return Axios.post('/api/words', payload, headers)
  },
  read: async (options) => {
    return Axios.get('/api/words', options)
      .then(({ data }) => {
        return data
      })
      .catch(console.error)
  },
  update: async (_id, obj, headers) => {
    return Axios.patch(`/api/words/${_id}`, obj, headers)
  },
  delete: async (_id, headers) => {
    return Axios.delete(`/api/words/${_id}`, headers)
  },
}

export default { ...api }
