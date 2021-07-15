import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://60ef4efff587af00179d39bd.mockapi.io/ecommerce',
});
