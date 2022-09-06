import axios from 'axios';

export const getImgs = (query) => {
  const queryParams = {
    key: '29755999-577f874d14536dd89451ef7b0',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  return axios.get(`https://pixabay.com/api/?${new URLSearchParams(queryParams)}`);
}