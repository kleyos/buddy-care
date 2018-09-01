const API_URL = 'https://buddy-care.herokuapp.com/api/v1';

const get = url => fetch(url).then(res => res.json());

export const createUser = token =>
  fetch(`${API_URL}/sessions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ access_token: token })
  }).then(res => res.json());

export const assignDevice = (token, deviceToken) =>
  fetch(url = `${API_URL}/assign_device`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Token': token
    },
    body: JSON.stringify({ firebase_token: deviceToken })
  });

export const create = (text, type, token) =>
  fetch(`${API_URL}/${type}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Token': token
    },
    body: JSON.stringify({ text })
  }).then(res => res.json());

export const apply = (type, id, token) =>
  fetch(`${API_URL}/${type}/${id}/apply`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Token': token
    }
  }).then(res => res.json());

export const edit = (text, type, id, token) =>
  fetch(`${API_URL}/${type}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Access-Token': token
    },
    body: JSON.stringify({ text })
  }).then(res => res.json());

export const remove = (type, id, token) => {
  fetch(`${API_URL}/${type}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Access-Token': token
    }
  });
};

export const getUsers = () => {
  const url = `${API_URL}/cards`;
  return get(url);
};

export const getUserProfile = userId => {
  const url = `${API_URL}/users/${userId}`;
  return get(url);
};
