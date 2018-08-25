const API_URL = 'https://buddy-care.herokuapp.com/api/v1';

const get = url => fetch(url).then(res => res.json());

const post = (url, data) =>
  fetch(url, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: data
  }).then(res => res.json());

const put = (url, data) =>
  fetch(url, {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json"
    },
    body: data
  }).then(res => res.json());

const del = url =>
  fetch(url, {
    method: 'DELETE',
  }).then(res => res.json());

export const getUsers = () => {
  const url = `${API_URL}/cards`;
  return get(url);
};

export const getUserProfile = userId => {
  const url = `${API_URL}/users/${userId}`;
  return get(url);
};

export const createUser = token => {
  const url = `${API_URL}/sessions`;
  return post(url, JSON.stringify({ access_token: token }));
};

export const create = (text, type) => {
  const url = `${API_URL}/${type}`;
  return post(url, JSON.stringify({ text }));
};

export const edit = (text, type, id) => {
  const url = `${API_URL}/${type}/:${id}`;
  return put(url, JSON.stringify({ text }));
};

export const apply = (id, type) => {
  const url = `${API_URL}/${type}/:${id}/apply`;
  return post(url);
};

export const remove = (id, type) => {
  const url = `${API_URL}/${type}/:${id}`;
  return del(url);
};
