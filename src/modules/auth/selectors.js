export const isUserLoggedIn = state => state.auth.loggedIn;
export const isLoading = state => state.auth.loading;
export const isFirstWish = state => state.auth.firstWish;

export const getUserToken = state => {
  if (state.auth.user) {
    return state.auth.user.token;
  }
  return null;
};

export const getUserName = state => {
  if (state.auth.user) {
    return `${state.auth.user.profile.first_name} ${state.auth.user.profile.last_name}`;
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
    return state.auth.user.profile.avatar_url;
  }
  return null;
};

