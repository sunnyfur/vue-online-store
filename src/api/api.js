import axios from 'axios';

export default axios.create({
  baseURL: 'https://nlstar.com/ru/api/catalog3/v1',
  headers: {
    'Content-type': 'application/json',
  },
});
