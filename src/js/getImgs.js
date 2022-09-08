import axios from 'axios';

export const getImgs = async (query, page = 1) => {
  const queryParams = {
    key: '29755999-577f874d14536dd89451ef7b0',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page,
    per_page: 40,
  };

  const images = await axios.get(`https://pixabay.com/api/?${new URLSearchParams(queryParams)}`);

  return images;
};
