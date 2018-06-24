export const isUserLoggedIn = state => state.auth.loggedIn;

export const isUserLoading = state => state.auth.loading;

export const getUserName = state => state.auth.user.name || '';
export const getUserId = state => state.auth.user.id || '';
export const getUserAvatar = state => state.auth.user.picture.data.url || '';