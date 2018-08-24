export const isUserLoggedIn = state => state.auth.loggedIn;
export const isUserLoading = state => state.auth.loading;
export const isFirstWish = state => state.auth.firstWish;

export const getUserName = state => {
  if (state.auth.user) {
    return state.auth.user.name;
  }
  return null;
};

export const getUserId = state => {
  if (state.auth.user) {
    return state.auth.user.id;
  }
  return null;
};

export const getUserAvatar = state => {
  if (state.auth.user) {
    return state.auth.user.picture.data.url;
  }
  return null;
};
