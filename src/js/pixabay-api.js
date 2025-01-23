import axios from 'axios';

export function fetchImages(query, page, apiKey) {
  const BASE_URL = 'https://pixabay.com/api/';
  const params = {
    key: apiKey,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
    page,
  };

  const queryString = new URLSearchParams(params).toString();
  const url = `${BASE_URL}?${queryString}`;

  return axios.get(url);
}
