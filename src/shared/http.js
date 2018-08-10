import axios from 'axios';

export const ENDPOINT = '';
if (process.env.NODE_ENV === 'development') {
  url = 'http://localhost:1338';
}

if (process.env.NODE_ENV === 'production') {
  url = 'https://hacker-news-api.herokuapp.com';
}

export function fetchLinks() {
  return axios.get(`${ENDPOINT}/links`);
}
export function getLinkById(id) {
  return axios.get(`${ENDPOINT}/links/${id}`);
}
export function updateLink(id, link) {
  return axios.put(`${ENDPOINT}/links/${id}`, link);
}
export function deleteLink(id) {
  return axios.delete(`${ENDPOINT}/links/${id}`);
}

export function createLink(link) {
  return axios.post(`${ENDPOINT}/links`, link);
}
