// Описаний у документації
import axios from 'axios';

const API_KEY = '50845071-46be9009d91c767b22c84ce04';
const BASE_URL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  return axios(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  }).then(res => res.data.hits);
}
