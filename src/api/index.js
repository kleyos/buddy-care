const rootUrl = 'https://buddy-care.herokuapp.com/api/v1';

export const getUsers = () => {
  return fetch(`${rootUrl}/cards`).then(res => res.json());
};

export const getUserProfile = userId => {
  return fetch(`${rootUrl}/users/${userId}`).then(res => res.json());
};

