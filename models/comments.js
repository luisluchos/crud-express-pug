const axios = require('axios')
const dbAddress = 'http://localhost:3040';

module.exports = {      
  find: async (params) => {
    let response = await axios.get(`${dbAddress}/comments/?_page=${params.page}&_limit=${params.limit}`);
    if (response.status === 200) {
      return response.data;
    } else {
      return [];
    }
  },

  findOne: async (id) => {
    let response = await axios.get(`${dbAddress}/comments/${id}`);
    if (response.status === 200) {
      return response.data;
    } else {
      return [];
    }
  },

  create: async (comment) => {
    let response = await axios.post(`${dbAddress}/comments/`, comment);
    if (response.status >= 200 && response.status < 300) {
      return comment;
    }
    return false;
  },

  update: async (id,comment) => {
      let response = await axios.patch(`${dbAddress}/comments/${id}`, comment);
      if (response.status >= 200 && response.status < 300) {
        return comment;
      }
      return false;
    },

  delete: async (id) => {
    let response = await axios.delete(`${dbAddress}/comments/${id}`);
    if (response.status >= 200 && response.status < 300) {
      return id;
    }
    return false;
  }
}
