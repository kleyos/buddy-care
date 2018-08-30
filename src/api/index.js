const API_URL = 'https://buddy-care.herokuapp.com/api/v1';

const get = url => fetch(url).then(res => res.json());

const createRequest = (url, data) =>
  fetch(url, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  }).then(res => res.json());

const post = (url, data, token) =>
  fetch(url, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Access-Token": token
    },
    body: JSON.stringify({ text: data })
  }).then(res => res.json());

const createDeviceToken = (url, data, token) =>
  fetch(url, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Access-Token": token
    },
    body: JSON.stringify(data)
  });

const put = (url, data, token) =>
  fetch(url, {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json",
      "Access-Token": token
    },
    body: JSON.stringify({ text: data })
  }).then(res => res.json());

const del = (url, token) =>
  fetch(url, {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json",
      "Access-Token": token
    },
  });

export const getUsers = () => {
  const url = `${API_URL}/cards`;
  return get(url);
};

export const getUserProfile = userId => {
  const url = `${API_URL}/users/${userId}`;
  return get(url);
};
export const assignDevice = (token, deviceToken) => {
  const url = `${API_URL}/assign_device`;
  return createDeviceToken(url, { firebase_token: deviceToken }, token);
};
export const createUser = token => {
  const url = `${API_URL}/sessions`;
  return createRequest(url, { access_token: token });
};

export const create = (text, type, token) => {
  const url = `${API_URL}/${type}`;
  return post(url, text, token);
};

export const edit = (text, type, id, token) => {
  const url = `${API_URL}/${type}/${id}`;
  return put(url, text, token);
};

export const apply = (type, id, token) => {
  const url = `${API_URL}/${type}/${id}/apply`;
  return post(url, token);
};

export const remove = (type, id, token) => {
  const url = `${API_URL}/${type}/${id}`;
  return del(url, token);
};
